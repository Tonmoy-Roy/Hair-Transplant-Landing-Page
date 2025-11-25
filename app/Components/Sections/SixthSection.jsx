"use client"
import React from 'react';
import Image from 'next/image';
import patients from '../Constants/PATIENTS';
import Carousel from '../Reusable/carousal';
import before from '../../../public/images/Rectangle 58.png'
import after from '../../../public/images/Rectangle 59.png'
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
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

    const TiltImage = ({ src, alt }) => {
        const ref = useRef(null);
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const xSpring = useSpring(x, { stiffness: 400, damping: 40 });
        const ySpring = useSpring(y, { stiffness: 400, damping: 40 });

        const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

        const handleMouseMove = (e) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const rY = ((mouseX / width) - 0.5) * 28;     // rotate Y
            const rX = ((mouseY / height) - 0.5) * -28;   // rotate X (inverted)

            x.set(rX);
            y.set(rY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <div className="perspective-1000">
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-700 pointer-events-none -z-10" />

                    {/* Image container (lifted in 3D space) */}
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={800}
                            height={1000}
                            className="object-cover w-full h-full block"
                            style={{ transform: "translateZ(30px)" }}
                        />

                        {/* Shine overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)",
                                transform: "translateZ(80px)",
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        );
    };

    return (
        <div className='p-10'>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12 lg:mb-16">
                Real Results From Our Patients
            </h2>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12 lg:mb-16 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* BEFORE */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center tracking-wider slide-in-left">
                            BEFORE
                        </h3>
                        <TiltImage src={before} alt="Before hair restoration" />
                    </div>

                    {/* AFTER */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center tracking-wider slide-in-right">
                            AFTER
                        </h3>
                        <TiltImage src={after} alt="After hair restoration" />
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