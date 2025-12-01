"use client";
import React from "react";
import features from "../Constants/FEATURES";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <div className="overflow-hidden bg-white py-8">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate items twice for seamless loop */}
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-10 min-w-max"
          >
            {/* Icon */}
            <div>{feature.icon}</div>

            {/* Text */}
            <div className="w-[200px] md:w-[250px] shrink-0">
              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base line-clamp-2">
                {feature.description}
              </p>

            </div>

          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecondSection;
