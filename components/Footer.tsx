import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
    Linkedin,
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Shield,
    Globe,
    Lock
} from 'lucide-react';
import { MEGA_MENU_CATEGORIES } from '../constants';

const Footer: React.FC = memo(() => {
    return (
        <footer className="bg-black border-t border-red-900/30 pt-20 pb-10 relative z-20 pointer-events-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link to="/" className="block">
                            <img src="/Logo.webp" alt="Black Byt3" className="h-12 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm font-mono leading-relaxed">
                            The #1 platform to build attack-ready teams and secure digital assets.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/blackbyt3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/black.byt3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/black.byt3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Dynamic Mega Menu Columns */}
                    {MEGA_MENU_CATEGORIES.map((category) => (
                        <div key={category.id}>
                            <h3 className="text-white font-['Unica_One'] text-lg mb-6 tracking-wide uppercase">{category.label}</h3>
                            <div className="space-y-6">
                                {category.subcategories.map((subcategory, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-xs font-mono text-red-600 uppercase tracking-wider mb-2">{subcategory.title}</h4>
                                        <ul className="space-y-2 font-mono text-sm text-gray-400">
                                            {subcategory.items.map((item) => (
                                                <li key={item.id}>
                                                    <Link to={`/${item.id}`} className="hover:text-red-500 transition-colors block">
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Info Row */}
                <div className="border-t border-gray-800 pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div className="space-y-1">
                            <h4 className="text-white font-mono text-sm font-bold">Email Us</h4>
                            <a href="mailto:info@blackbyt3.net" className="block text-gray-400 text-xs font-mono hover:text-red-500 transition-colors">info@blackbyt3.net</a>
                            <a href="mailto:contact@blackbyt3.net" className="block text-gray-400 text-xs font-mono hover:text-red-500 transition-colors">contact@blackbyt3.net</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div className="space-y-1">
                            <h4 className="text-white font-mono text-sm font-bold">Call Us</h4>
                            <a href="tel:+923149607607" className="block text-gray-400 text-xs font-mono hover:text-red-500 transition-colors">+92 314 960 7607</a>
                            <a href="tel:+12393564959" className="block text-gray-400 text-xs font-mono hover:text-red-500 transition-colors">+1 239 356 4959</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 lg:col-span-2">
                        <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div className="space-y-1">
                            <h4 className="text-white font-mono text-sm font-bold">Visit Us</h4>
                            <p className="text-gray-400 text-xs font-mono leading-relaxed">
                                7901 4th St N, STE 300, St. Petersburg, FL 33702, USA
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-mono">
                        © {new Date().getFullYear()} Black Byt3. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs font-mono text-gray-500">
                        <Link to="/legal" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
                        <Link to="/legal" className="hover:text-red-500 transition-colors">Terms of Service</Link>
                        <Link to="/legal" className="hover:text-red-500 transition-colors">Cookie Policy</Link>
                    </div>
                    <div className="flex gap-4">
                        <Shield className="w-4 h-4 text-gray-600" />
                        <Globe className="w-4 h-4 text-gray-600" />
                        <Lock className="w-4 h-4 text-gray-600" />
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
