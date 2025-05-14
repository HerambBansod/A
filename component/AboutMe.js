"use client";
import React from 'react';

export default function AboutMe() {
    return (
        <main>
            <section id='about' className='w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center bg-white text-black font-sans'>
                <div className='flex flex-col items-center justify-center w-full max-w-6xl'>
                    <div className='text-center mb-10'>
                        <h1 className='text-3xl font-semibold border-b-2 border-blue-400 inline-block pb-2'>
                            About <span className="font-bold">Me</span>
                        </h1>
                        <p className='text-gray-500 mt-2 text-xl'>
                            know more about me and my work
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                        <div className='w-60 h-60 rounded-full overflow-hidden'>
                            <img
                                src="/My_Img.webp"
                                alt="Heramb Bansod"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>

                        <div className='max-w-xl text-center md:text-left'>
                            <h2 className='text-xl font-semibold mb-2'>
                                A Quick <span className="font-bold">Bio</span>
                            </h2>
                            <p className='text-gray-600 leading-relaxed mb-6'>
                                Web Bean has everything you need to get your new website up and running in no time!
                                All of the templates and themes on Web Bean w3c valid error free code and easy to use.
                                Web Bean has everything you need to get your new website up and running in no time!
                                All of the templates and themes on Web Bean w3c valid error free code and easy to use.
                            </p>
                            <button className="bg-black text-white font-semibold py-2 px-6 hover:bg-gray-800 transition">
                                Hire Me Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
