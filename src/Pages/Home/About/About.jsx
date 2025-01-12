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
            className='bg-slate-800 text-white'
        >
            <div className='flex flex-col justify-center lg:flex-row lg:px-20 lg:py-20 px-5 py-5 gap-10'>
                {/* About Me Section */}
                <motion.div
                    className='pt-2'
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <p className='text-4xl semibold pb-4'>About me...</p>
                    <p className='text-justify'>
                        I am <span className='text-blue-400 text-xl'>Monjurul Alam</span>. I am a final-year student at Pabna University
                        of Science and Technology (PUST), pursuing a degree in Information and Communication Engineering (ICE). 
                        My journey in the world of technology has fueled a deep passion for programming, not just in web development
                        but in various domains of software engineering. Whether it's building dynamic, user-centric websites or 
                        solving algorithmic challenges, 
                        I find immense satisfaction in using code to create solutions that simplify and enhance experiences.
                        <br /><br />
                        I have a solid foundation in core programming languages such as HTML, CSS, and JavaScript,
                        and I'm continuously expanding my expertise in frameworks like React.js, Node.js, and Next.js.
                        Alongside my web development endeavors, I possess a strong understanding of C++ and Python, 
                        having tackled numerous problems on competitive programming platforms like Codeforces 
                        and Beecrowd, where I’ve solved over 200 problems. This diverse experience has sharpened my
                        problem-solving abilities, broadened my approach to tackling technical challenges, and 
                        strengthened my overall programming proficiency.
                        <br /><br />
                        For me, programming is not just about writing code—it’s about unlocking new possibilities and 
                        embracing the endless journey of learning. I believe that staying ahead of industry trends, collaborating
                        on meaningful projects, and hands-on experience are the keys to growth. With this mindset, I strive to build 
                        a versatile portfolio that not only showcases my technical proficiency but also highlights my adaptability 
                        across diverse areas of software development. My ultimate goal is to contribute to innovative solutions that
                        challenge the limits of technology, combining creativity with technical expertise to solve real-world problems
                        and make a meaningful impact.
                    </p>
                </motion.div>

                {/* Personal Information Section */}
                <motion.div
                    className='pt-2'
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className='bold text-2xl'>Personal Information</h3>
                    <motion.div
                        className="divider divider-success w-40 text-[18px]"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <div className='semibold'>
                        {[
                            { label: 'Name', value: 'Monjurul Alam' },
                            { label: 'Age', value: '24' },
                            { label: 'Residence', value: 'Pabna, Bangladesh' },
                            { label: 'Degree', value: 'B.Sc (Engineering) in ICE' },
                            { label: 'University', value: 'PUST' },
                            { label: 'Email', value: 'monjurulalam190629@gmail.com' },
                            { label: 'Phone', value: '01812967146' },
                            { label: 'Freelance', value: 'Available' },
                            { label: 'Github Profile', value: 'https://github.com/Monjurul-190629' },
                            { label: 'Linkedin Profile', value: 'https://www.linkedin.com/in/monjurul-alam-5647272a7/' },
                        ].map((item, index) => (
                            <motion.p
                                key={index}
                                className='text-[18px]'
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <span className='text-purple-300 pr-4'>{item.label}:</span> {item.value}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
