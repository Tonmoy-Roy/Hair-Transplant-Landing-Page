"use client";
import React from 'react';
import Image from 'next/image';
import man from '../../../public/images/man.png'
import leftman from '../../../public/images/Rectangle 54.png'
import rightman from '../../../public/images/Rectangle 56.png'
const FirstSection = () => {
    return (
        <div className="">
            <div className="md:flex items-center ">
                <div className="relative lg:h-[600px]  overflow-hidden md:mr-10">
                    <Image
                        src={man}
                        alt="Professional hair restoration specialist"
                        className="object-cover"
                    />
                </div>
                <div className='header-bg'>
                    <div className="flex gap-4 mb-8 mt-10">
                        <div className="relative  rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={leftman}
                                alt="Before hair restoration"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative  rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={rightman}
                                alt="After hair restoration"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Real Transformations.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Real Confidence.
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                            We autck... you're in the hands of dedicated professionals committed to excellence in hair restoration
                        </p>
                    </div>

                    <div className="pt-4">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <span className="relative z-10">Book Consultation</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FirstSection;