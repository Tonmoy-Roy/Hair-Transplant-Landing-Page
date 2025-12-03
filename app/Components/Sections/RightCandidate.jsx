'use client'
import React from 'react';
import Image from 'next/image';
import candidate from '../Constants/CANDIDATE';
import { motion } from "framer-motion";
import doctor from '../../../public/images/Rectangle 69.png'
const RightCandidate = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 1,    
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
        <div className=''>
            <div className='p-10 flex justify-center items-center mb-10'>
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl  text-gray-600 md:w-[30vw]">
                            Are you the right candidate for hair transplant
                        </h2>
                        <motion.div
                            className="space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="space-y-6">
                                {candidate.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg">
                                            {feature.icon}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 md:w-[17vw]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="pt-4">
                            <button className="group px-8 py-3 btn-bg text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <span>See our results</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ x: 400, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8 text-white"
                        >
                            <div className="relative h-[400px] lg:h-[400px] md:w-[35vw] rounded-3xl overflow-hidden shadow-2xl mb-5">
                                <Image
                                    src={doctor}
                                    alt="Doctor consultation for hair transplant"
                                    fill
                                    className="object-cover "
                                />
                            </div>
                        </motion.div>

                        <div className="bottom-6 transform -translate-x-1/2 left-6 translate-x-0 ">
                            <button className="px-6 py-3 btn-bg text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                Get a free consultation
                            </button>
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>
            <div className='bg-white h-[10vh]'>

            </div>
        </div>
    );
};

export default RightCandidate;