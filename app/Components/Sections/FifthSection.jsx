"use client"
import React from 'react';


const FifthSection = () => {

    return (
        <>
            <div className='mx-auto p-5 md:h-[30vh] flex justify-center items-center header-bg fade-in'>
                <div className='text-center'>
                    <p className='text-3xl lg:text-4xl font-bold text-gray-800 mb-2'>Take the first step</p>
                    <p className='text-3xl lg:text-4xl font-bold text-gray-800 mb-3'>Towards confidence</p>
                    <button className="group relative px-3 py-1 btn-bg text-white font-semibold rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <span className="relative z-10">Book Your Free Consultation</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FifthSection;