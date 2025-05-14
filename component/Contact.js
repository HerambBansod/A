"use client";
import React from 'react';

export default function Contact() {
    return (
        <main>
            <section
                id="contact"
                className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-center bg-cover bg-center text-black font-sans"
                style={{ backgroundImage: "url('/Contact_Bg.webp')" }}
            >
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-8 md:p-12 lg:p-16 rounded-xl shadow-md w-full max-w-6xl">
                    <div className="text-center mb-8 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl font-semibold border-b-2 border-blue-400 inline-block pb-2">
                            Contact <span className="font-bold">Me</span>
                        </h1>
                        <p className="text-gray-700 mt-2 text-base sm:text-lg md:text-xl">
                            Feel free to reach out for collaborations or just a friendly hello
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <form className="w-full max-w-2xl space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Your message..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
