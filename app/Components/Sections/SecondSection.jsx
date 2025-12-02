"use client";
import React from "react";
import features from "../Constants/FEATURES";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <div className="overflow-hidden bg-white py-8  md:flex">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="md:flex items-center gap-4 px-10 min-w-max"
          >
            <div>{feature.icon}</div>

            <div className="">
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base md:w-[11vw] w-[50vw]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div >
  );
};

export default SecondSection;
