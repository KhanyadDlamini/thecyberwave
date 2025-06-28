"use client";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import LoginModal from '../LoginModal/page'; // Import the modal component

const Nav = () => {
    const [logo, setLogo] = useState('');
    const [navLinks, setNavLinks] = useState([]);
    const [buttonName, setButtonName] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [showLogout, setShowLogout] = useState(false);

    useEffect(() => {
        // Hardcoded dummy data instead of fetching from server
        const getLogo = async () => {
            setTimeout(() => {
                setLogo("https://i.ibb.co/F4fyVsWD/cyber.png");
            }, 100);
        };
        const getNavLinks = async () => {
            setTimeout(() => {
                const dummyNavLinks = ["Home", "About", "Services", "Contact"];
                setNavLinks(dummyNavLinks);
            }, 100);
        };

        const getButtonName = async () => {
            setTimeout(() => {
                setButtonName("Get Started");
            }, 100);
        };

        // Load hardcoded data
        getLogo();
        getNavLinks();
        getButtonName();

        // Check session
        if (typeof window !== 'undefined') {
            const loggedIn = sessionStorage.getItem("userLoggedIn") === "true";
            setIsUserLoggedIn(loggedIn);
        }
    }, []);

    // Handle logout
    const handleLogout = () => {
        sessionStorage.removeItem("userLoggedIn");
        sessionStorage.removeItem("loggedInUser");
        setIsUserLoggedIn(false);
        setShowLogout(false);
        window.location.reload();
    };

    return (
        <>
            {/* Top Contact Bar */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-3 px-4 sm:px-6 border-b border-blue-500/20">
                <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto text-xs sm:text-sm space-y-2 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
                        <div className="flex items-center space-x-2 bg-blue-600/20 px-3 py-1 rounded-full border border-blue-500/30">
                            <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="hidden sm:inline text-blue-200">info@thecyberwave.com</span>
                            <span className="sm:hidden text-blue-200">info@thecyberwave.com</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-green-600/20 px-3 py-1 rounded-full border border-green-500/30">
                            <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-green-200">+268 79500015</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 bg-red-600/20 px-3 py-1 rounded-full border border-red-500/30">
                        <svg className="w-4 h-4 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-200">123 Tech Street, Digital City Mbabane, DC 12345</span>
                    </div>
                    <div className="md:hidden flex items-center space-x-2 bg-red-600/20 px-3 py-1 rounded-full border border-red-500/30">
                        <svg className="w-4 h-4 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-200">Mbabane, Eswatini</span>
                    </div>
                </div>
            </div>

            <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white relative">
                {/* Logo */}
                <div className="text-xl font-bold ml-20">
                    <img src={logo} alt="Logo" className="w-32" />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link, index) => (
                        <a key={index} href={`#${link}`} className="hover:underline">
                            {link}
                        </a>
                    ))}

                    {/* Sign In / Profile Icon with Logout Dropdown */}
                    <div className="relative">
                        <p
                            className="px-3 py-1 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg flex items-center cursor-pointer"
                            onClick={() => {
                                if (isUserLoggedIn) {
                                    setShowLogout((prev) => !prev);
                                } else {
                                    setIsLoginModalOpen(true);
                                }
                            }}
                        >
                            {isUserLoggedIn ? <PersonIcon className="w-5 h-5" /> : "THE CYBER WAVE"}
                        </p>

                        {isUserLoggedIn && showLogout && (
                            <div className="absolute top-full mt-2 right-0 bg-white text-black border rounded shadow-lg z-10">
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 w-full text-left hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-gray-800 text-white px-6 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <a key={index} href={`#${link}`} className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                                    {link}
                                </a>
                            ))}

                            {/* Sign In or Logout */}
                            {isUserLoggedIn ? (
                                <button
                                    className="px-3 py-1 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg flex items-center"
                                    onClick={handleLogout}
                                >
                                    Logout <PersonIcon className="w-5 h-5 ml-2" />
                                </button>
                            ) : (
                                <button
                                    className="px-3 py-1 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg flex items-center"
                                    onClick={() => setIsLoginModalOpen(true)}
                                >
                                    SIGN IN
                                </button>
                            )}

                            {/* Cart Button */}
                            <button className="px-3 py-1 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg flex items-center">
                                {buttonName}
                                <ShoppingCartIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Login Modal */}
                {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
            </nav>
        </>
    );
};

export default Nav;
