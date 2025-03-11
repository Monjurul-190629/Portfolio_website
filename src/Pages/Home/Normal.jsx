import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Normal = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="bg-slate-900 text-white py-12 px-4 sm:px-6 md:px-12">
            <div className="text-center text-2xl sm:text-3xl font-bold text-gray-300 relative mb-10">
                About Me
                <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mt-1"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12">
                {/* Animated Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        className="w-40 sm:w-56 md:w-72 lg:w-80 rounded-lg shadow-lg shadow-blue-500 hover:scale-105 transition-transform duration-500"
                        src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg"
                        alt="Web developer illustration"
                    />
                </motion.div>

                {/* Animated Text */}
                <motion.div
                    className="max-w-xl text-center md:text-left text-sm sm:text-base text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.2 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">
                        Passionate MERN Stack Developer | Problem Solver | Lifelong Learner
                    </h2>
                    <p className="text-justify">
                        I'm Monjurul Alam, a passionate MERN stack developer with a strong foundation in
                        React.js, Node.js, Express.js, and MongoDB. I have hands-on experience building
                        dynamic and user-friendly web applications. I enjoy solving complex problems and
                        continuously improving my skills. I recently completed my degree in Information
                        and Communication Engineering from Pabna University of Science and Technology
                        (PUST) and am eager to contribute to impactful projects.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Normal;
