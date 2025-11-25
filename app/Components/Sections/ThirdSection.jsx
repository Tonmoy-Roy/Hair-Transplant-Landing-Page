'use client'
import React from 'react';
import Image from 'next/image';
import dr from '../../../public/images/Rectangle 53.png'
const ThirdSection = () => {
    return (
        <div className="flex justify-center items-center md:h-[90vh] header-bg  p-10">
            <div className="md:flex">
                <div className="space-y-6 md:w-[19vw] mr-20 text-center w-full mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        About The Clinic
                    </h2>

                    <div className="space-y-4">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            'At our clinic-you're in the hands of dedicated professionals committed to excellence in excellence.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            "Dedicated to krend-vielty of gafety, precision, & professional care.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            "Deep commitment to your patients wel- being"
                        </p>
                    </div>

                    <div className="pt-4">
                        <p className="text-gray-900 font-semibold text-lg">
                            Dr. Ariff Aziz, <span className="text-gray-600 font-normal">ABHRS</span>
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={dr} 
                            alt="Dr. Ariff Aziz at ARC Clinic"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;