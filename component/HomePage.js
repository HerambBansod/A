import React from 'react';

export default function HomePage() {
    return (
        <main>
            <section className='w-full min-h-screen py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans'>
                <div className='font-sans max-w-2xl text-center flex flex-col items-center justify-evenly gap-8'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-400 font-bold mb-4'>Heramb Bansod</h1>
                    <p className='font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8'>I am a dedicated developer driven by the passion for crafting elegant and practical web applications.</p>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <a href="#projects" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>View My Work</a>
                    <a href="#contact" className='bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300'>Resume</a>
                </div>
            </section>
        </main>
    );
}
