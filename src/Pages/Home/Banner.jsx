import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoCodeDownloadOutline } from "react-icons/io5";

const Banner = () => {
    const handleDownload = () => {
        const fileId = '1e103y8_zbOtkfLrS4RgB7D9l5hQvcd_d';
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'Monjurul-Alam-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-slate-900 text-white py-12 lg:pt-32 px-4 sm:px-6 md:px-12">
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10"
                initial={{ opacity: 0.5, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img
                        src="https://i.ibb.co.com/wg9Nd5y/1729456002257.jpg"
                        alt="Monjurul Alam"
                        className="w-32 sm:w-40 md:w-52 lg:w-60 rounded-full border-4 border-blue-500 shadow-lg"
                    />
                </motion.div>

                {/* Text Content */}
                <div className="text-center md:text-left max-w-lg">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400 leading-tight"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Hi, I'm <br /> Monjurul Alam
                    </motion.h1>

                    <TypeAnimation
                        sequence={[
                            'Junior Software Engineer', 2000,
                            'Front-End Developer', 2000,
                            'MERN Stack Developer', 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-sm sm:text-base font-medium text-gray-300"
                        repeat={Infinity}
                    />

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-start">
                        <Link to="/Project">
                            <motion.button
                                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                See my Projects
                            </motion.button>
                        </Link>

                        <Link to="/Contact">
                            <motion.button
                                className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                    </div>

                    {/* Resume Download Button */}
                    <motion.button
                        className="mt-6 px-4 sm:px-5 py-2.5 flex items-center justify-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition text-xs sm:text-sm"
                        onClick={handleDownload}
                        whileHover={{ scale: 1.05 }}
                    >
                        Download Resume <IoCodeDownloadOutline className="text-sm sm:text-lg" />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
