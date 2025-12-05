import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 animate-fade-in-down ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/90 backdrop-blur-sm py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex flex-row leading-none items-center">
                    <img src="src\assets\ChatGPT_Image_Dec_5__2025__01_03_42_AM-removebg-preview.png" alt="Zer3aX Logo" className="h-12 w-12" />
                    <span className="text-2xl font-bold text-dark-green font-sans tracking-tight">Zer3aX</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-dark-gray hover:text-primary-green font-medium transition-colors text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://zer3ax.vercel.app/" target='_blanck' className="bg-primary-green text-white px-6 py-2.5 rounded-full font-medium hover:bg-dark-green transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm cursor-pointer">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark-gray focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-4 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-dark-gray hover:text-primary-green font-medium block py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-primary-green text-white w-full py-3 rounded-lg font-medium hover:bg-dark-green transition-colors cursor-pointer">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
