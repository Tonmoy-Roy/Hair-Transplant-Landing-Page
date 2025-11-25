"use client";
import Image from 'next/image';
import man from '../../../public/images/man.png'
import leftman from '../../../public/images/Rectangle 54.png'
import rightman from '../../../public/images/Rectangle 56.png'
import Button from '../Reusable/Button';
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const FirstSection = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".slide-in-left, .slide-in-right, .fade-in, .fade-out, .slide-up, .slide-down ");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.5 }
        );
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    return (
        <div className="">
            <div className="md:flex items-center ">
                <div className="relative lg:h-[600px]  overflow-hidden md:mr-10">
                    <Image
                        src={man}
                        alt="Professional hair restoration specialist"
                        className="object-cover slide-in-left"
                    />
                </div>
                <div className='p-10 md:p-0'>
                    <div className='header-bg'>
                        <div className="flex gap-4 mb-8 mt-10">
                            <div className="relative  rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={leftman}
                                    alt="Before hair restoration"
                                    className="object-cover slide-in-right"
                                />
                            </div>
                            <div className="relative  rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={rightman}
                                    alt="After hair restoration"
                                    className="object-cover slide-in-right"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <motion.div
                                initial={{ x: 400, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="space-y-8 text-white"
                            >
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                    Real Transformations.
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                        Real Confidence.
                                    </span>
                                </h1>

                                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed md:w-[35vw]">
                                    We autck... you're in the hands of dedicated professionals committed to excellence in hair restoration
                                </p>
                                <div className="text-center md:text-left">
                                    <Button></Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FirstSection;