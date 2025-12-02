import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-t from-slate-900 to-black text-white py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1)_0%,_transparent_70%)] opacity-30"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo */}
                    <div className="lg:col-span-1 space-y-4">
                        <img
                            src="/img/logo.png"
                            alt="Risen Generation Church"
                            className="h-12 w-auto filter brightness-0 invert hover:opacity-80 transition duration-300"
                        />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            The Risen Generation Church is a community dedicated to faith,
                            worship, and service.
                        </p>
                        <p className="text-gray-400 text-xs">
                            © 2023 The Risen Generation Church. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-orange-400 transition duration-300">Home</a></li>
                            <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition duration-300">About</a></li>
                            <li><a href="/leadership" className="text-gray-300 hover:text-orange-400 transition duration-300">Leadership</a></li>
                            <li><a href="/ministry" className="text-gray-300 hover:text-orange-400 transition duration-300">Ministry</a></li>
                            <li><a href="/give" className="text-gray-300 hover:text-orange-400 transition duration-300">Give</a></li>
                            <li><a href="/events" className="text-gray-300 hover:text-orange-400 transition duration-300">Events</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <div className="space-y-2 text-gray-300 text-sm">
                            <p>📍 TRGC Worship Center, Philippines</p>
                            <p>📧 info@risengenerationchurch.com</p>
                            <p>📞 +63 123 456 7890</p>
                            <p>⏰ Sundays: 9:30 AM</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
                                href="https://facebook.com/risengenerationchurch" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="w-5 h-5 text-white" />
                            </a>

                            <a className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110 shadow-lg"
                                href="https://instagram.com/risengenerationchurch" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-5 h-5 text-white" />
                            </a>

                            <a className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 shadow-lg"
                                href="https://youtube.com/risengenerationchurch" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="w-5 h-5 text-white" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-xs mt-4">
                            Stay connected and join our community online.
                        </p>
                    </div>

                </div>

                {/* <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Designed with ❤️ for The Risen Generation Church |
            <a href="#" className="hover:text-orange-400 transition duration-300"> Privacy Policy </a> |
            <a href="#" className="hover:text-orange-400 transition duration-300"> Terms of Service</a>
          </p>
        </div> */}
            </div>
        </footer>
    );
}
