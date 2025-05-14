"use client";
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold">Heramb</h2>
                        <p className="text-gray-400 text-sm mt-1">Full Stack Developer & Tech Enthusiast</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                        <a href="#about" className="hover:text-blue-400 transition">About</a>
                        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
                        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/HerambBansod" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/heramb-bansod-630273248/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/__heramb911?igsh=OTJrczdjeXQyM3l3 " target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-xl">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-6" />

                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Heramb. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
