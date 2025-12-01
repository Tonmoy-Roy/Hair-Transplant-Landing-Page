"use client";
import React from 'react';
import Image from 'next/image';
import abhrs from '../../../public/images//abhrs.png'
import hilton from '../../../public/images/hilton.png'
import msam from '../../../public/images/msam.png'
import sheraton from '../../../public/images/sheraton.png'
import erufu from '../../../public/images/erufu.png'
import msam2 from '../../../public/images/msam2.png'
import { motion } from "framer-motion";

const FourthSection = () => {
    return (
        <>
            <div className='md:h-[30vh] flex justify-center items-center bg-white p-10'>
                <div>
                    <p className='text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-5 fade-in'>Awards & reconition</p>
                    <div className='flex justify-center gap-4'>
                        <div className="w-full overflow-hidden"> 
                            <motion.div
                                className="flex whitespace-nowrap"
                                animate={{ x: ["0%", "-100%"] }}
                                transition={{
                                    duration: 40,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            >
                                {[abhrs, hilton, msam, sheraton, erufu, msam2, abhrs, hilton, msam, sheraton, erufu, msam2,abhrs, hilton, msam, sheraton, erufu, msam2, abhrs, hilton, msam, sheraton, erufu, msam2,abhrs, hilton, msam, sheraton, erufu, msam2, abhrs, hilton, msam, sheraton, erufu, msam2]
                                    .map((img, i) => (
                                        <Image
                                            key={i}
                                            src={img}
                                            alt=""
                                            className="h-12 md:h-16"  // responsive fix
                                        />
                                    ))}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FourthSection;