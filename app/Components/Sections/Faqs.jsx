'use client'
import React, { useState } from 'react';
import faqs2 from '../Constants/FAQS2';
import { motion } from "framer-motion";

const Faqs = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    };
    return (
        <div>
            <div className="p-10 bg-white">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16 fade-in">
                    Frequently Asked Question
                </h2>
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs2.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className=""
                            >
                                <div
                                    key={index}
                                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <span className="text-gray-900 font-medium text-lg pr-4">
                                            {faq.question}
                                        </span>

                                        <svg
                                            className={`w-6 h-6 text-gray-700 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {openFaq === index && (
                                        <div className="px-6 pb-5 pt-2">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Faqs;