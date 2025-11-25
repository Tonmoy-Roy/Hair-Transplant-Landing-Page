"use client"
import React from 'react';


const FifthSection = () => {

    return (
        <>
            <div className='mx-auto p-5 md:h-[30vh] flex justify-center items-center header-bg fade-in'>
                <div className='text-center'>
                    <p className='text-3xl lg:text-4xl font-bold text-gray-800 mb-2'>Take the first step</p>
                    <p className='text-3xl lg:text-4xl font-bold text-gray-800 mb-3'>Towards confidence</p>
                    <button className="group relative px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <span className="relative z-10">Book Your Free Consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FifthSection;