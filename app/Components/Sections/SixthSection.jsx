"use client"
import React from 'react';
import Image from 'next/image';
import patients from '../Constants/PATIENTS';
import Carousel from '../Reusable/carousal';
import before from '../../../public/images/Rectangle 58.png'
import after from '../../../public/images/Rectangle 59.png'
const SixthSection = () => {
    const StarIcon = () => (
        <svg className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    );

    const renderTestimonial = (testimonial, index) => (
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 mx-auto md:w-[40vw] md:h-[40vh] text-center">
            <div className="flex gap-1 mb-4 justify-center items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                ))}
            </div>

            <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    {testimonial.description}
                </p>
            </div>

            <p className="text-sm font-medium text-gray-900">
                {testimonial.author}
            </p>
        </div>
    );

    return (
        <div className='p-10'>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16">
                Real Results From Our Patients
            </h2>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12 lg:mb-16 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 text-center">
                            BEFORE
                        </h3>
                        <div className="relative rounded-2xl overflow-hidden ">
                            <Image
                                src={before}
                                alt="Before hair restoration"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 text-center">
                            AFTER
                        </h3>
                        <div className="relative  rounded-2xl overflow-hidden">
                            <Image
                                src={after}
                                alt="After hair restoration"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Carousel
                items={patients}
                autoPlay={true}
                interval={3000}
                className="max-w-6xl mx-auto"
                itemClassName="px-4"
                renderItem={renderTestimonial}
            />
        </div>
    );
};

export default SixthSection;