import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const sectionVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2 
                    className="text-4xl font-extrabold text-center mb-10 text-blue-400"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    📚 My Education Journey
                </motion.h2>

                {/* Education Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* SSC Section */}
                    <motion.div
                        className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-2xl font-bold text-blue-400 mb-2">📖 SSC (Secondary School Certificate)</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">School:</span> Moon Light Kindergarten and High School</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">Group:</span> Science</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">GPA:</span> 5.00</p>
                    </motion.div>

                    {/* HSC Section */}
                    <motion.div
                        className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-2xl font-bold text-blue-400 mb-2">📖 HSC (Higher Secondary School Certificate)</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">College:</span> Sirajgonj Govt. College</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">Group:</span> Science</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">GPA:</span> 4.33</p>
                    </motion.div>

                    {/* B.Sc Section */}
                    <motion.div
                        className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 col-span-1 md:col-span-2"
                        variants={sectionVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-2xl font-bold text-blue-400 mb-2">🎓 B.Sc in Engineering</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">University:</span> Pabna University of Science and Technology</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">Subject:</span> Information and Communication Engineering (ICE)</p>
                        <p className="text-lg"><span className="font-semibold text-gray-300">CGPA:</span> 3.14 out of 4.00</p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Education;
