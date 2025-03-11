import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const aboutRef = useRef();
    const isInView = useInView(aboutRef, { once: true });

    return (
        <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 text-white py-10 px-5 lg:px-20"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-blue-400 pb-4">About Me</h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        I am <span className="text-blue-400 font-semibold">Monjurul Alam</span>, a recent graduate from Pabna University of Science and Technology (PUST), 
                        with a degree in Information and Communication Engineering (ICE)..
                        <br /><br />
                        My passion for technology drives me to create interactive, user-friendly web applications. I specialize in the 
                        MERN stack, building dynamic front-end experiences with React.js and robust back-end solutions using Node.js 
                        and MongoDB.
                        <br /><br />
                        Beyond web development, I enjoy solving algorithmic challenges, having tackled over 600 problems on platforms
                        like Codeforces and Beecrowd. My commitment to continuous learning helps me stay up-to-date with modern 
                        development trends and best practices.
                        <br /><br />
                        I'm always eager to take on new challenges, collaborate on exciting projects, and contribute to meaningful 
                        technological advancements.
                    </p>
                </motion.div>

                {/* Personal Information Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-3xl font-bold text-blue-400 pb-3">Personal Info</h3>
                    <div className="border-l-4 border-blue-500 pl-4 space-y-3">
                        {[
                            { label: 'Name', value: 'Monjurul Alam' },
                            { label: 'Age', value: '24' },
                            { label: 'Residence', value: 'Pabna, Bangladesh' },
                            { label: 'University', value: 'Pabna University of Science and Technology' },
                            { label: 'Degree', value: 'B.Sc (Engineering)' },
                            { label: 'Subject', value: 'Information and Communication Engineering'},
                            { label: 'Email', value: 'monjurulalam190629@gmail.com' },
                            { label: 'Phone', value: '+8801783073662' },
                            { label: 'Freelance', value: 'Available' },
                        ].map((item, index) => (
                            <motion.p
                                key={index}
                                className="text-lg text-gray-300"
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <span className="text-blue-400 font-semibold pr-2">{item.label}:</span> {item.value}
                            </motion.p>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-blue-400 pb-3">Connect with me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Monjurul-190629"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition duration-300"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/monjurul-alam-5647272a7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition duration-300"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
