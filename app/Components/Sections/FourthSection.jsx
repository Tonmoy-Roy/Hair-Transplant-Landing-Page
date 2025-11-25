"use client";
import React from 'react';
import Image from 'next/image';
import abhrs from '../../../public/images//abhrs.png'
import hilton from '../../../public/images/hilton.png'
import msam from '../../../public/images/msam.png'
import sheraton from '../../../public/images/sheraton.png'
import erufu from '../../../public/images/erufu.png'
import msam2 from '../../../public/images/msam2.png'
const FourthSection = () => {
    return (
        <>
            <div className='md:h-[30vh] flex justify-center items-center bg-white p-10'>
                <div>
                    <p className='text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-5'>Awards & reconition</p>
                    <div className='flex flex-wrap justify-center gap-4 md:space-x-15'>
                        <Image
                            src={abhrs}
                            alt=''
                            className=''
                        />
                        <Image
                            src={hilton}
                            alt=''
                            className=''
                        />
                        <Image
                            src={msam}
                            alt=''
                            className=''
                        />
                        <Image
                            src={sheraton}
                            alt=''
                            className=''
                        />
                        <Image
                            src={erufu}
                            alt=''
                            className=''
                        />
                        <Image
                            src={msam2}
                            alt=''
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FourthSection;