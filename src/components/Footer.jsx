import React from 'react';
import { Mail, Phone, Github, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
    const quickLinks = ['Home', 'Features', 'How It Works', 'About Us', 'Contact'];
    const features = ['Predict', 'Compare', 'Ranking', 'Map View', 'Encyclopedia'];

    return (
        <footer id="contact" className="bg-dark-gray text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Brand */}
                    <div>
                        <div className="flex flex-col leading-none mb-4">
                            <span className="text-2xl font-bold text-white">Zer3aX</span>
                            <span className="text-[10px] font-bold text-primary-green tracking-wider uppercase mt-1">
                                AI Plant Breeding
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Empowering Algerian agriculture with cutting-edge AI technology for smarter plant breeding decisions.
                        </p>
                        <p className="text-gray-500 text-xs">
                            © 2025 Zer3aX - Algerian Market
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Features */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Features</h4>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <a
                                        href="#features"
                                        className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                                    >
                                        {feature}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail size={16} className="text-primary-green" />
                                <a href="mailto:capsuherb@gmail.com" className="hover:text-primary-green transition-colors">
                                    capsuherb@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <Phone size={16} className="text-primary-green" />
                                <a href="tel:+213563180335" className="hover:text-primary-green transition-colors">
                                    0563180335
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-400 text-sm">
                                <MapPin size={16} className="text-primary-green" />
                                <span>BATNA, Algeria</span>
                            </li>
                            <li className="flex gap-3 mt-4">
                                <a href="https://github.com/Ilyeshdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-green transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://instagram.com/CAPSUHERB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-green transition-colors">
                                    <Instagram size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Built with love for Algerian Agriculture
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
