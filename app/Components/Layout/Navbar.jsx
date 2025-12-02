"use client";
import Image from 'next/image';
import logo from '../../../public/images/logo.png'
import React, { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white  text-black">
            <div className="mx-auto md:px-20 px-5">
                <div className="flex items-center justify-between h-20">
                    <Image
                        src={logo}
                        alt="Description of the"
                        className='md:w-[10vw] md:h-[10vh] '
                    />

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="hover:text-[#9A4179] transition-colors">
                            Home
                        </a>
                        <a href="#modules" className=" hover:text-[#9A4179] transition-colors">
                            Meet Our Team
                        </a>
                        <a href="#pricing" className=" hover:text-[#9A4179] transition-colors">
                            About Hair Loss
                        </a>
                        <a href="#testimonial" className=" hover:text-[#9A4179] transition-colors">
                            Our Services
                        </a>
                        <a href="#contact" className=" hover:text-[#9A4179] transition-colors">
                            Our Protocol
                        </a>
                        <a href="#contact" className=" hover:text-[#9A4179] transition-colors">
                            Blog
                        </a>
                        <a href="#contact" className=" hover:text-[#9A4179] transition-colors">
                            FAQ
                        </a>

                    </nav>

                    <div className="hidden md:flex items-center">
                        <button className="group relative px-3 py-1 btn-bg text-white rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                        <span className="relative z-10">Contact Us</span>
                        </button>
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-10 text-center">
                        <nav className="flex flex-col gap-4 border-2 rounded-lg border-black items-center">
                            <a
                                href="#features"
                                className="transition-colors py-2 border border-gray-300 rounded-lg w-60 mt-10 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#modules"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2 border border-gray-300 rounded-lg w-60 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Modules
                            </a>
                            <a
                                href="#pricing"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2 border border-gray-300 rounded-lg w-60 font-medium "
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>
                            <a
                                href="#testimonial"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2 border border-gray-300 rounded-lg w-60 font-medium "
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Testimonial
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-gray-900 transition-colors py-2 border border-gray-300 rounded-lg w-60 font-medium "
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <button
                                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors border border-gray-300 rounded-lg w-60 mt-2 mb-5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}