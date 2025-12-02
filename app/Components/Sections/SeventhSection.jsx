'use client'
import React from 'react';
import Carousel from '../Reusable/carousal';
import doctors from '../Constants/DOCTORS'
const SeventhSection = () => {

    const renderTestimonial = (testimonial, index) => (
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 duration-300 
                  mx-auto text-center w-[260px] sm:w-[300px] md:w-[350px]">
                <div className=' mb-4'>
                    {testimonial.image}
                </div>

                <div className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                </div>

                <p className="text-gray-600 leading-relaxed">
                    {testimonial.title}
                </p>
        </div>
    );
    return (
        <div className='flex justify-center items-center p-10 bg-white max-w-screen overflow-hidden'>
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16 fade-in">
                    Meet Our Doctors
                </h2>
                <Carousel
                    items={doctors}
                    autoPlay={true}
                    interval={3000}
                    className="max-w-6xl mx-auto"
                    itemClassName="px-2 sm:px-4 shrink-0"
                    renderItem={renderTestimonial}
                />
            </div>
        </div>
    );
};

export default SeventhSection;