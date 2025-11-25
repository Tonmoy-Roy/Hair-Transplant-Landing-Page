"use client";
import React from "react";
import features from '../Constants/FEATURES'
import { motion } from "framer-motion";

const SecondSection = () => {

    return (
        <>
            <div className="mx-auto p-5 md:h-[60vh] flex justify-center items-center bg-white">
                <motion.div
                    className="flex lg:gap-20"
                    animate={{ x: [0, -100 + "%"] }}
                    transition={{
                        x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" }
                    }}
                >
                    <div className="flex lg:gap-12 ">
                        {features.map((feature, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="flex">
                                    <div className="flex justify-center md:justify-start mr-3">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="text-center md:text-left md:w-[13vw]">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div >
        </>
    );
};

export default SecondSection;
