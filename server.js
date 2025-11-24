import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.blackbyt3.net',
  port: 465,
  secure: true, // SSL
  auth: {
    user: 'admin@blackbyt3.net',
    pass: 'B74ckbyt3.4dm1n#'
  },
  tls: {
    rejectUnauthorized: false // For self-signed certificates
  }
});

// Verify SMTP connection on startup
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ SMTP Connection Failed:', error);
  } else {
    console.log('✅ SMTP Server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', upload.single('file'), async (req, res) => {
  try {
    const { name, company, email, phone, service, budget, contactTime, message } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, service, and message are required.'
      });
    }

    // Email content
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
      from: '"Black Byt3 Contact Form" <admin@blackbyt3.net>',
      to: 'admin@blackbyt3.net', // Send to admin email
      replyTo: email, // Allow reply directly to customer
      subject: `🔴 New Contact: ${name} - ${service}`,
      html: emailHtml,
      attachments: req.file ? [{
        filename: req.file.originalname,
        content: req.file.buffer
      }] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Message transmitted successfully! We will respond within 24 hours.'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Black Byt3 API Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════╗
║  🔴 Black Byt3 API Server                    ║
║  ✅ Running on http://localhost:${PORT}         ║
║  📧 SMTP: smtp.blackbyt3.net:465             ║
╚═══════════════════════════════════════════════╝
  `);
});

export default app;
