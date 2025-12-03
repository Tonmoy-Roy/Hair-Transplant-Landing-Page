'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import patients2 from '../Constants/PATIENTS2'
import Carousel from '../Reusable/carousal';
const PatientSay = () => {
    const StarIcon = () => (
        <svg className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    );
    const renderTestimonial = (testimonial, index) => (
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 mx-auto  w-[260px] sm:w-[300px] md:w-[350px] md:h-[40vh] text-center">

            <div className="flex items-center  mb-4 gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    {testimonial.avatar ? (
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400 text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                        </div>
                    )}
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 text-left">
                        {testimonial.name}
                    </h4>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} filled={i < testimonial.rating} />
                        ))}
                    </div>

                </div>
            </div>
            <p className="text-gray-700 text-left">
                {testimonial.text}
            </p>
        </div>
    );
    return (
        <div>
            <div className="p-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16 fade-in">
                    What Our Patients Say
                </h2>

                <Carousel
                    items={patients2}
                    autoPlay={true}
                    interval={3000}
                    className="max-w-6xl mx-auto"
                    itemClassName="px-4"
                    renderItem={renderTestimonial}
                />
            </div>
        </div>
    );
};

export default PatientSay;