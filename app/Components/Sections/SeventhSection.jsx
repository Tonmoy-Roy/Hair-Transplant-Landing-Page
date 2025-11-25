'use client'
import React from 'react';
import Carousel from '../Reusable/carousal';
import doctors from '../Constants/DOCTORS'
import Image from 'next/image';
const SeventhSection = () => {

    const renderTestimonial = (testimonial, index) => (
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 duration-300 mx-auto md:w-[40vw] md:h-[50vh] text-center">
            <div className="mb-6">
                <div className='flex justify-center items-center mb-4'>
                    {testimonial.image} 
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    {testimonial.title}
                </p>
            </div>
        </div>
    );

    return (
        <div className='flex justify-center items-center p-10 bg-white'>
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16">
                    Meet Our Doctors
                </h2>
                <Carousel
                    items={doctors}
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

export default SeventhSection;