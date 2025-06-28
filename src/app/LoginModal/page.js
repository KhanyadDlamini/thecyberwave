"use client";
import { Lock, Person, Visibility, VisibilityOff, WhatsApp } from "@mui/icons-material";
import { useState } from "react";
import { CONFIG } from "../../../config";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    if (!isOpen) return null;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");

    const handleLogin = async () => {
        setLoading(true);
        setError("");
        setLoginMessage("");

        try {
            const response = await fetch(`${CONFIG}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                sessionStorage.setItem("userLoggedIn", "true");
                sessionStorage.setItem("loggedInUser", username);
                setLoginMessage("Login Successful ✅");

                setTimeout(() => {
                    setLoading(false);
                    onLogin();  // callback
                    onClose();  // close modal
                }, 2000);
            } else {
                setLoading(false);
                setError("Invalid username or password");
            }
        } catch (error) {
            setLoading(false);
            setError("Server error, please try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">

                <div className="flex items-center justify-center">
                    <img
                        src="https://i.ibb.co/RpxvQrQD/ip-removebg-preview.png"
                        alt="IPTVTECH"
                        className="w-50 sm:w-50 rounded-lg shadow"
                    />
                </div>

                <h2 className="text-xl font-semibold text-center mb-4">Enter Your Login Credentials</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}
                {loginMessage && <p className="text-green-600 text-center">{loginMessage}</p>}

                {/* Username Input */}
                <div className="relative mb-3">
                    <Person className="absolute left-3 top-3 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-10 p-2 border rounded-md"
                        disabled={loading}
                    />
                </div>

                {/* Password Input */}
                <div className="relative mb-3">
                    <Lock className="absolute left-3 top-3 text-gray-500" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-10 p-2 border rounded-md"
                        disabled={loading}
                    />
                    <span
                        className="absolute right-3 top-3 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </span>
                </div>

                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex justify-center items-center"
                    disabled={loading}
                >
                    {loading && !loginMessage ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8z"
                                ></path>
                            </svg>
                            Processing...
                        </>
                    ) : loginMessage ? (
                        "Login Successful"
                    ) : (
                        "Login"
                    )}
                </button>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="mt-3 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    disabled={loading}
                >
                    Close
                </button>

                {/* WhatsApp Help Link */}
                <a
                    href="https://wa.me/+26876087436?text=Hello%20I%20am%20new%20here,I%20want%20to%20create%20an%20account.%20I%20need%20help!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-3 py-2 border-2 border-blue-600 text-green-600 rounded-lg hover:bg-blue-700 text-lg flex items-center justify-center"
                >
                    <WhatsApp className="mr-2" />
                    Create Account
                </a>
            </div>
        </div>
    );
};

export default LoginModal;
