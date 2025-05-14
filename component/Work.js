'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projectData = [
    {
        name: 'Wealth Wise',
        img: '/WW.webp',
        size: 'Finance Tracker',
        price: 'NextJS + Tailwind',
        link: 'https://wealth-wise-pro.vercel.app/',
    },
    {
        name: 'Grind Fit',
        img: '/GrindFit.webp',
        size: 'Gym App',
        price: 'React + Vite + Tailwind',
        link: 'https://react-project-2-gym-app.vercel.app/',
    },
    {
        name: 'Funrep',
        img: '/Funrep.webp',
        size: 'Gaming Community',
        price: 'Next.js + Tailwind',
        link: 'https://funrep.org',
    },
    {
        name: 'Shri Asscociates',
        img: '/SA_Img.webp',
        size: 'Admin Panel',
        price: 'NextJs + Firebase',
        link: 'https://shri-asscoiates.vercel.app/',
    },
    {
        name: 'Construction Site ',
        img: '/Con_img.webp',
        size: 'Admin Panel',
        price: 'NextJs + Firebase',
        link: 'https://construction-ap.vercel.app/',
    },
    {
        name: 'Resume Builder',
        img: '/ResumeBuilder.webp',
        size: 'PDF Generator',
        price: 'Next.js + Tailwind',
        link: 'https://resume-builder.vercel.app',
    },
    {
        name: 'portfolio',
        img: '/Portfolio.png',
        size: 'PDF Generator',
        price: 'Next.js + Tailwind',
        link: 'https://resume-builder.vercel.app',
    },

];

export default function Projects() {
    const [start, setStart] = useState(0);

    const handleNext = () => {
        setStart((prev) => (prev + 1) % projectData.length);
    };

    const handlePrev = () => {
        setStart((prev) => (prev - 1 + projectData.length) % projectData.length);
    };

    const visibleCards = projectData.slice(start, start + 4);

    return (
        <main>
            <section id='projects' className="w-full bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden py-10 md:py-20 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-center text-center">
                <div className='max-w-[1500px] w-full min-h-full flex flex-col relative overflow-hidden font-sans gap-5 text-black'>

                    <div className='text-center mb-10'>
                        <h1 className='text-3xl font-semibold border-b-2 border-blue-400 inline-block pb-2'>
                            My <span className="font-bold">Projects</span>
                        </h1>
                        <p className='text-gray-500 mt-2 text-xl'>
                            A collection of my most impactful full-stack web projects, crafted with attention to detail, usability, and performance. Each one tells a story of real-world problem solving and hands-on development experience.
                        </p>
                    </div>

                    <div className='h-full w-full px-4 py-14 sm:px-6 md:px-10 py-10 flex flex-col items-center justify-evenly gap-10 rounded-b-xl bg-gray-600'>
                        <div className='w-full flex justify-start md:justify-evenly items-center gap-5 overflow-x-auto scrollbar-hide'>
                            {visibleCards.map((project, idx) => (
                                <div key={idx} className='min-w-[250px] max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden'>
                                    <div
                                        className='h-[200px] w-full bg-cover bg-center'
                                        style={{ backgroundImage: `url(${project.img})` }}
                                    />
                                    <div className='p-4 text-left'>
                                        <h3 className='text-lg font-semibold text-black'>{project.name}</h3>
                                        <p className='text-gray-600 text-sm'>{project.size}</p>
                                        <p className='text-gray-500 text-xs mt-1'>Stack: {project.price}</p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='inline-block mt-4 text-sm text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-full transition'
                                        >
                                            View Project →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button Section */}
                        <div className='flex flex-col sm:flex-row w-full justify-between items-center mt-6 gap-4 px-4 sm:px-10 md:px-20'>
                            <div className='flex gap-3'>
                                <button onClick={handlePrev} className='p-2 rounded-full bg-black hover:bg-white hover:text-black text-white transition'>
                                    <ChevronLeft />
                                </button>
                                <button onClick={handleNext} className='p-2 rounded-full bg-black hover:bg-white hover:text-black text-white transition'>
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
