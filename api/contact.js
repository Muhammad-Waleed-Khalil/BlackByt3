import nodemailer from 'nodemailer';
import { Readable } from 'stream';

// Helper to parse multipart form data
async function parseMultipartForm(req) {
  return new Promise((resolve, reject) => {
    const boundary = req.headers['content-type']?.split('boundary=')[1];
    if (!boundary) {
      return reject(new Error('No boundary found'));
    }

    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const parts = buffer.toString().split(`--${boundary}`);

      const formData = {};
      let file = null;

      parts.forEach(part => {
        if (part.includes('Content-Disposition')) {
          const nameMatch = part.match(/name="([^"]+)"/);
          const filenameMatch = part.match(/filename="([^"]+)"/);

          if (nameMatch) {
            const fieldName = nameMatch[1];
            const contentStart = part.indexOf('\r\n\r\n') + 4;
            const contentEnd = part.lastIndexOf('\r\n');

            if (contentStart > 3 && contentEnd > contentStart) {
              const content = part.substring(contentStart, contentEnd);

              if (filenameMatch) {
                // This is a file
                file = {
                  filename: filenameMatch[1],
                  content: Buffer.from(content, 'binary')
                };
              } else {
                // This is a text field
                formData[fieldName] = content;
              }
            }
          }
        }
      });

      resolve({ formData, file });
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Parse form data
    let formData, file;

    if (req.headers['content-type']?.includes('multipart/form-data')) {
      const parsed = await parseMultipartForm(req);
      formData = parsed.formData;
      file = parsed.file;
    } else if (req.body) {
      formData = req.body;
    } else {
      return res.status(400).json({ success: false, message: 'Invalid request format' });
    }

    const { name, company, email, phone, service, budget, contactTime, message } = formData;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, service, and message are required.'
      });
    }

    // Configure SMTP transporter with optimized settings for Vercel
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.blackbyt3.net',
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'admin@blackbyt3.net',
        pass: process.env.SMTP_PASS || 'B74ckbyt3.4dm1n#'
      },
      // Optimized for serverless environment
      pool: false, // Disable connection pooling for serverless
      connectionTimeout: 5000, // 5 second connection timeout
      greetingTimeout: 5000, // 5 second greeting timeout
      socketTimeout: 5000, // 5 second socket timeout
      // TLS configuration
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      },
      // Debug logging (can be disabled in production)
      debug: false,
      logger: false
    });

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: monospace; background: #000; color: #fff; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; border: 1px solid #dc2626; padding: 30px; }
          .header { color: #dc2626; font-size: 24px; margin-bottom: 20px; text-transform: uppercase; }
          .field { margin-bottom: 15px; }
          .label { color: #7f1d1d; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 5px; }
          .value { color: #fff; font-size: 14px; }
          .divider { border-top: 1px solid #374151; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">🔴 New Contact Form Submission</div>

          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${name}</span>
          </div>

          ${company ? `
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${company}</span>
          </div>
          ` : ''}

          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>

          ${phone ? `
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${phone}</span>
          </div>
          ` : ''}

          <div class="divider"></div>

          <div class="field">
            <span class="label">Service Interested:</span>
            <span class="value">${service}</span>
          </div>

          ${budget ? `
          <div class="field">
            <span class="label">Budget:</span>
            <span class="value">${budget}</span>
          </div>
          ` : ''}

          ${contactTime ? `
          <div class="field">
            <span class="label">Preferred Contact Time:</span>
            <span class="value">${contactTime}</span>
          </div>
          ` : ''}

          <div class="divider"></div>

          <div class="field">
            <span class="label">Message:</span>
            <div class="value" style="white-space: pre-wrap;">${message}</div>
          </div>

          <div class="divider"></div>

          <div style="color: #6b7280; font-size: 12px;">
            Submitted: ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Black Byt3 Contact Form" <${process.env.SMTP_FROM || 'admin@blackbyt3.net'}>`,
      to: process.env.SMTP_TO || 'admin@blackbyt3.net',
      replyTo: email,
      subject: `🔴 New Contact: ${name} - ${service}`,
      html: emailHtml,
      attachments: file ? [{
        filename: file.filename,
        content: file.content
      }] : []
    };

    // Verify SMTP connection before sending
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw new Error(`SMTP server connection failed: ${verifyError.message}`);
    }

    // Send email with timeout
    const sendTimeout = setTimeout(() => {
      throw new Error('Email send operation timed out');
    }, 8000); // 8 second timeout, leaving 2 seconds for function overhead

    try {
      await transporter.sendMail(mailOptions);
      clearTimeout(sendTimeout);
    } catch (sendError) {
      clearTimeout(sendTimeout);
      throw sendError;
    }

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Message transmitted successfully! We will respond within 24 hours.'
    });

  } catch (error) {
    console.error('Error sending email:', error);

    // Provide more specific error messages
    let userMessage = 'Failed to send message. Please try again or contact us directly.';
    if (error.code === 'EAUTH') {
      userMessage = 'Email service authentication failed. Please contact support.';
    } else if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
      userMessage = 'Email service temporarily unavailable. Please try again in a moment.';
    } else if (error.code === 'ECONNECTION') {
      userMessage = 'Could not connect to email service. Please try again later.';
    }

    return res.status(500).json({
      success: false,
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
