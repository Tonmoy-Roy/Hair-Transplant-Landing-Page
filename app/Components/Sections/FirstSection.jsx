"use client";
import React from 'react';
import Image from 'next/image';
import man from '../../../public/images/man.png'
import leftman from '../../../public/images/Rectangle 54.png'
import rightman from '../../../public/images/Rectangle 56.png'
const FirstSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={man} 
                                alt="Professional hair restoration specialist"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 blur-3xl"></div>
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-4 mb-8">
                            <div className="relative  rounded-xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={leftman} 
                                    alt="Before hair restoration"
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative  rounded-xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={rightman} 
                                    alt="After hair restoration"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
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
        </div>
    );
};

export default FirstSection;