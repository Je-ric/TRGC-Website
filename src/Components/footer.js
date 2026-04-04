import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';


export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-t from-slate-900 to-black text-white py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1)_0%,_transparent_70%)] opacity-30"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
                    {/* Logo */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/Logo.png`}
                                alt="Risen Generation"
                                className="h-12 w-auto hover:opacity-80 transition duration-300"
                            />
                            <span className="text-white font-bold text-xl">
                                Risen Generation Church
                            </span>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            The Risen Generation Church is a community dedicated to faith,
                            worship, and service.
                        </p>

                        <p className="text-gray-400 text-xs">
                            © {new Date().getFullYear()} The Risen Generation Church. All rights reserved.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#/" className="text-gray-300 hover:text-orange-400 transition duration-300">Home</a></li>
                            <li><a href="#/about" className="text-gray-300 hover:text-orange-400 transition duration-300">About</a></li>
                            <li><a href="#/leadership" className="text-gray-300 hover:text-orange-400 transition duration-300">Leadership</a></li>
                            <li><a href="#/ministry" className="text-gray-300 hover:text-orange-400 transition duration-300">Ministry</a></li>
                            <li><a href="#/give" className="text-gray-300 hover:text-orange-400 transition duration-300">Give</a></li>
                        </ul>
                    </div>

                    {/* Connect Links */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="#/connect" className="text-gray-300 hover:text-orange-400 transition duration-300">Connect With Us</a></li>
                            <li><a href="#/plan-visit" className="text-gray-300 hover:text-orange-400 transition duration-300">Plan a Visit</a></li>
                            <li><a href="#/sermons" className="text-gray-300 hover:text-orange-400 transition duration-300">Watch Sermons</a></li>
                            <li><a href="#/baptism" className="text-gray-300 hover:text-orange-400 transition duration-300">Baptism</a></li>
                            <li><a href="#/prayer-request" className="text-gray-300 hover:text-orange-400 transition duration-300">Prayer Request</a></li>
                            <li><a href="#/know-god" className="text-gray-300 hover:text-orange-400 transition duration-300">Know God</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <div className="space-y-3 text-gray-300 text-sm">
                            <p className="flex items-center gap-2">
                                <FiMapPin className="w-4 h-4 flex-shrink-0 text-orange-500" /> TRGC Worship Center, Philippines
                            </p>
                            <p className="flex items-center gap-2">
                                <FiMail className="w-4 h-4 flex-shrink-0 text-orange-500" /> info@risengenerationchurch.com
                            </p>
                            <p className="flex items-center gap-2">
                                <FiPhone className="w-4 h-4 flex-shrink-0 text-orange-500" /> +63 123 456 7890
                            </p>
                            <p className="flex items-center gap-2">
                                <FiClock className="w-4 h-4 flex-shrink-0 text-orange-500" /> Sundays: 9:30 AM
                            </p>
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

            </div>
        </footer>
    );
}
