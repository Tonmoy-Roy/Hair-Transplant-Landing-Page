import React from 'react';
import Image from 'next/image';
import candidate from '../Constants/CANDIDATE';
import doctor from '../../../public/images/Rectangle 69.png'
const RightCandidate = () => {
    return (
        <div className='bg-gray-50 p-10 flex justify-center items-center'>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <div className="space-y-8">
                    <h2 className="text-3xl lg:text-4xl  text-gray-600 md:w-[30vw]">
                        Are you the right candidate for hair transplant
                    </h2>

                    <div className="space-y-6">
                        {candidate.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    {feature.icon}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 md:w-[17vw]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <button className="group px-8 py-3 bg-gradient-to-r from-purple-700 to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <span>See our results</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative h-[400px] lg:h-[400px] md:w-[35vw] rounded-3xl overflow-hidden shadow-2xl mb-5">
                        <Image
                            src={doctor}
                            alt="Doctor consultation for hair transplant"
                            fill
                            className="object-cover "
                        />
                    </div>

                    <div className="bottom-6 transform -translate-x-1/2 left-6 translate-x-0 ">
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-pink-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Get a free consultation
                        </button>
                    </div>

                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl"></div>
                </div>
            </div>
        </div>
    );
};

export default RightCandidate;