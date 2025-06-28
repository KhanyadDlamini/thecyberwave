"use client"
import { WhatsApp } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            // Hardcoded dummy data instead of fetching from server
            setTimeout(() => {
                const dummyFooterData = {
                    wa_number: "26879500015",
                    email: "info@thecyberwave.com"
                };
                setFooterData(dummyFooterData);
            }, 100);
        };

        fetchFooterData();
    }, []);

    if (!footerData) {
        return <div></div>;
    }
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="text-center md:text-left">
                            <img
                                src="https://i.ibb.co/F4fyVsWD/cyber.png"
                                alt="The Cyber Wave Logo"
                                className="w-32 mx-auto md:mx-0 mb-4 filter brightness-0 invert"
                            />
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Your trusted partner for comprehensive digital solutions. We specialize in AI & Digitization, Business Admin Support, and ICT & Cybersecurity Consulting.
                            </p>
                        </div>

                        <div className="flex justify-center md:justify-start space-x-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                                <i className="fab fa-facebook-f text-white text-sm"></i>
                            </div>
                            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                                <i className="fab fa-twitter text-white text-sm"></i>
                            </div>
                            <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 cursor-pointer">
                                <i className="fab fa-instagram text-white text-sm"></i>
                            </div>
                            <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
                                <i className="fab fa-linkedin-in text-white text-sm"></i>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white text-center md:text-left">
                            Quick Links
                        </h3>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center md:text-left">
                                Home
                            </a>
                            <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center md:text-left">
                                About Us
                            </a>
                            <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center md:text-left">
                                Services
                            </a>
                            <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center md:text-left">
                                Contact
                            </a>
                            <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center md:text-left">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white text-center md:text-left">
                            Our Services
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-center md:text-left">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">Business Linkages</span>
                            </div>
                            <div className="flex items-center space-x-2 text-center md:text-left">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">AI & Digitization</span>
                            </div>
                            <div className="flex items-center space-x-2 text-center md:text-left">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">Business Admin Support</span>
                            </div>
                            <div className="flex items-center space-x-2 text-center md:text-left">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">ICT & Cybersecurity</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white text-center md:text-left">
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-center md:text-left">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <i className="fas fa-map-marker-alt text-white text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">123 Tech Street</p>
                                    <p className="text-gray-300 text-sm">Mbabane, Eswatini</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 text-center md:text-left">
                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                    <i className="fas fa-phone text-white text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">+268 79500015</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 text-center md:text-left">
                                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                    <i className="fas fa-envelope text-white text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm">{footerData.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <a
                                href={`https://wa.me/${footerData.wa_number}?text=Hello! I'm interested in your digital services.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                            >
                                <WhatsApp className="mr-2 text-sm" />
                                WhatsApp Support
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700/50 pt-8">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 The Cyber Wave. All rights reserved. |
                            <span className="text-blue-400 ml-1">Empowering Digital Transformation</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
