import React from 'react';
import Image from 'next/image';
import reasons from '../Constants/REASONS';
const WhyChoose = () => {
    return (
        <div className='header-bg p-10'>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16">
                Why Choose Us
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="overflow-hidden "
                    >
                        <div className="relative h-64 lg:h-72 overflow-hidden mb-5">
                            <Image
                                src={reason.image}
                                alt={reason.title}
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="">
                            <h3 className="font-bold text-gray-900  mb-1">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 md:w-[25vw]">
                                {reason.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;