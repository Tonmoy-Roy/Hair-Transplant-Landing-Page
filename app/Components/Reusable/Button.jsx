import React from 'react';

const Button = () => {
    return (
        <div>
            <button className="group relative px-3 py-1 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
        </div>
    );
};

export default Button;