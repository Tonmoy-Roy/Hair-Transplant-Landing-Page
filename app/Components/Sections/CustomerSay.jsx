"use client"
import React from 'react';
import Image from 'next/image';
import customers from '../Constants/CUSTOMERS';
import Carousel from '../Reusable/carousal';
const CustomerSay = () => {
    const renderTestimonial = (testimonial, index) => (
        <div className="bg-gray-50 rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 mx-auto  w-[260px] sm:w-[300px] md:w-[350px] text-center  md:h-[40vh] mb-5 mt-3"> 
            <div className="border-b flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mb-2">
                    {testimonial.avatar ? (
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                        </div>
                    )}
                </div>

                <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                </h4>
            </div>

            <p className="text-gray-700 leading-relaxed text-base text-left">
                {testimonial.text}
            </p>
        </div>
    );
    return (
        <div>
            <div className="p-10 header-bg">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16 fade-in">
                    What Our Customers Say
                </h2>
                <Carousel
                    items={customers}
                    autoPlay={true}
                    interval={3000}
                    className="md:w-[76vw] mx-auto md:h-[50vh]"
                    itemClassName="px-4"
                    renderItem={renderTestimonial}
                />
            </div>
        </div>
    );
};

export default CustomerSay;