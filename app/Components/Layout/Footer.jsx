'use client'
import React from 'react';
import Image from 'next/image'
import fb from '../../../public/images/Listitem → Link.png'
import insta from '../../../public/images/Listitem → Link2.png'
import linkedin from '../../../public/images/Listitem → Link3.png'
import pinterest from '../../../public/images/Listitem → Link4.png'
import yt from '../../../public/images/Listitem → Link5.png'
import mail from '../../../public/images/Frame 243.png'
import phone from '../../../public/images/Frame 244.png'
import location from '../../../public/images/Frame 245.png'
const Footer = () => {
    return (
        <div className='min-h-screen'>
            <div className="p-10 footer-bg">
                <div className="max-w-5xl mx-auto mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-8">
                        Contact Us
                    </h2>

                    <div className="bg-white rounded-3xl p-8 lg:p-10">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2  transition-all duration-200"
                            />

                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2  transition-all duration-200"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
                                ></textarea>

                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                                    />

                                    <div className="flex gap-6 px-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                                            />
                                            <span className="text-gray-700">Male</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                className="w-4 h-4 text-rose-600 focus:ring-rose-500"
                                            />
                                            <span className="text-gray-700">Female</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer pt-2">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    className="w-5 h-5 rounded mt-0.5 flex-shrink-0"
                                />
                                <span className="text-sm text-gray-600 leading-relaxed">
                                    I agree to the processing of my personal data and I'd like to receive occasional updates, special offers, and helpful hair care tips via email.
                                </span>
                            </label>

                            <div className="pt-4 text-center">
                                <button
                                    className="w-full md:w-auto px-12 py-3 btn-bg text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="md:flex gap-6 mb-12 justify-around">
                        <div className="space-y-4 mb-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 ">
                                Hair Transplant Centre Malaysia @ ARC Clinic
                            </h3>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                                        <Image
                                            src={mail}
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-700">info.htcm@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                                        <Image
                                            src={phone}
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Telephone</p>
                                        <p className="text-gray-700">+60125174606</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 flex-shrink-0 mt-1">
                                        <Image
                                            src={location}
                                            alt=""
                                            className=""
                                        />
                                    </div>
                                    <div className='md:w-[19vw]'>
                                        <p className="text-gray-700">102 Jalan Gasing 46000 Petaling Jaya, Selangor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='md:flex mb-15 ml-10 md:ml-0'>
                                <div className="space-y-3 mr-50 mb-10 md:mb-0">
                                    <a href="#" className="font-bold block text-gray-800 hover:text-purple-700 transition-colors duration-200">
                                        Home
                                    </a>
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200 w-30">
                                        Meet Our Team
                                    </a>
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200 w-30">
                                        Our Protocol
                                    </a>
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200">
                                        Services
                                    </a>
                                </div>

                                <div className="space-y-3">
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200 font-bold">
                                        About Hair Loss
                                    </a>
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200">
                                        Blog
                                    </a>
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200">
                                        Contact
                                    </a>
                                    <a href="#" className="block text-gray-800 hover:text-purple-700 transition-colors duration-200">
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4 mb-2">
                                <Image
                                    src={fb}
                                    alt=""
                                    className="h-8 w-8"
                                />
                                <Image
                                    src={insta}
                                    alt=""
                                    className="h-8 w-8"
                                />
                                <Image
                                    src={linkedin}
                                    alt=""
                                    className="h-8 w-8"
                                />
                                <Image
                                    src={pinterest}
                                    alt=""
                                    className="h-8 w-8"
                                />
                                <Image
                                    src={yt}
                                    alt=""
                                    className="h-8 w-8"
                                />
                            </div>

                            <p className="text-gray-800 text-sm">
                                ©2025 Hair Transplant Centre Malaysia. All Rights Reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;