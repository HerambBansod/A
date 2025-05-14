"use client";
import React from 'react';
import PropTypes from 'prop-types';

// icons
import IconHtml from '../icons/IconHtml';
import IconTailwindCss from '../icons/IconTailwindCss';
import IconJavaScript from '../icons/IconJavaScript';
import IconReact from '@/icons/IconReact';
import IconNext from '@/icons/IconNext';
import IconPython from '@/icons/IconPython';
import IconAWS from '@/icons/IconAWS';
import IconBootStrap from '@/icons/IconBootStrap';
import IconFirebase from '@/icons/IconFirebase';
import IconMongo from '@/icons/IconMongo';

export default function Services() {
    return (
        <main>
            <section id='skills' className='w-full min-h-screen py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center bg-black text-white font-sans'>
                <div className='font-sans max-w-[1500px] w-full h-full text-center flex flex-col items-center justify-evenly gap-8 overflow-hidden p-10'>
                    <div className='text-center mb-10'>
                        <h1 className='text-3xl font-semibold border-b-2 border-blue-400 inline-block pb-2'>
                            Technical <span className="font-bold"> Skills</span>
                        </h1>
                        <p className='text-gray-500 mt-2 text-xl'>
                            I specialize in modern web development technologies, offering robust frontend and backend solutions. My technical toolkit is built to design, develop, and deploy efficient, scalable, and high-performing digital experiences tailored to client needs.
                        </p>
                    </div>

                    <div className='flex flex-wrap md:flex-row items-center justify-center gap-8'>
                        <ServiceCard
                            icon={<IconHtml className="w-16 h-16 mb-4 " />}
                            title="HTML5"
                            desc="Clean, semantic, and SEO-friendly markup structure for modern web apps."
                        />
                        <ServiceCard
                            icon={<IconTailwindCss className="w-16 h-16 mb-4" />}
                            title="Tailwind CSS"
                            desc="Rapidly build custom UIs using a utility-first CSS framework."
                        />
                        <ServiceCard
                            icon={<IconJavaScript className="w-16 h-10 mb-4 p-2" />}
                            title="JavaScript"
                            desc="Dynamic client-side scripting to build interactive user experiences."
                        />
                        <ServiceCard
                            icon={<IconReact className="w-16 h-10 mb-4" />}
                            title="ReactJS"
                            desc="Efficient and flexible component-based UI library for building SPAs."
                        />
                        <ServiceCard
                            icon={<IconNext className="w-16 h-10 mb-4" />}
                            title="Next.js"
                            desc="Full-stack React framework with SSR, routing, and API integration."
                        />
                        <ServiceCard
                            icon={<IconPython className="w-16 h-16 mb-4" />}
                            title="Python"
                            desc="General-purpose programming for backend APIs, automation, and data analysis."
                        />
                        <ServiceCard
                            icon={<IconAWS className="w-16 h-16 mb-4" />}
                            title="AWS"
                            desc="Deploy and scale applications using Amazon's secure cloud platform."
                        />
                        <ServiceCard
                            icon={<IconBootStrap className="w-16 h-16 mb-4 " />}
                            title="Bootstrap"
                            desc="Popular UI framework to build responsive and mobile-first websites quickly."
                        />
                        <ServiceCard
                            icon={<IconFirebase className="w-16 h-4 mb-4" />}
                            title="Firebase"
                            desc="Backend-as-a-Service for auth, database, hosting, and more."
                        />
                        <ServiceCard
                            icon={<IconMongo className="w-16 h-10 mb-4" />}
                            title="MongoDB"
                            desc="Flexible NoSQL database for modern applications with JSON-like structure."
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}


const ServiceCard = ({ icon, title, desc }) => (
    <div className='w-full sm:w-60 md:w-72 lg:w-60 h-auto flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 transition hover:scale-105 duration-300'>
        {icon}
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-400 text-sm text-center'>{desc}</p>
    </div>
);

ServiceCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};
