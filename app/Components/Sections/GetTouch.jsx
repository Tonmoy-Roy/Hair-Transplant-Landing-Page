'use client'
import React, { useState } from 'react';
import faqs from '../Constants/FAQS'
import Button from '../Reusable/Button';
const GetTouch = () => {

    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <div className='bg-white p-10'>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16 fade-in">
                Get In Touch
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-2xl overflow-hidden hover:border-gray-400 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-gray-800 font-medium pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-3xl p-3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">FAQ</h3>

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full px-3 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
                        />

                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="w-full px-3 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="3"
                            className="w-full px-3 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 resize-none"
                        ></textarea>

                        <div className='text-center'>
                            <Button></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouch;