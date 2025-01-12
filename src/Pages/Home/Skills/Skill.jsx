import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skill = () => {
    const skillRef = useRef();
    const isInView = useInView(skillRef, { once: true });

    return (
        <motion.div
            ref={skillRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='bg-slate-800 text-white lg:p-20 p-5 -mt-5'
        >
            <div className='flex lg:flex-row flex-col gap-10 justify-center items-center'>
                {/* Technical Skills */}
                <motion.div
                    className='pt-10'
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className='text-3xl bold pb-5'>Technical Skills:</p>
                    {[
                        { skill: "HTML", value: 80 },
                        { skill: "CSS", value: 70 },
                        { skill: "Tailwind CSS", value: 75 },
                        { skill: "JavaScript", value: 72 },
                        { skill: "React js", value: 65 },
                        { skill: "Firebase", value: 65 },
                        { skill: "Node js", value: 60 },
                        { skill: "Express js", value: 60 },
                        { skill: "MongoDB", value: 60 },
                        { skill: "Python", value: 62 },
                        { skill: "Git", value: 80 },
                        { skill: "Github", value: 85 },
                        { skill: "Microsoft Office", value: 86 },
                    ].map((item, index) => (
                        <motion.p
                            key={index}
                            className='text-[18px] flex gap-2 justify-start items-center'
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            {index + 1}. {item.skill}{" "}
                            <progress
                                className="progress progress-primary w-56"
                                value={item.value}
                                max="100"
                            ></progress>
                        </motion.p>
                    ))}
                </motion.div>

                {/* Interpersonal Skills */}
                <motion.div
                    className='pt-10'
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className='text-3xl bold pb-5'>Interpersonal Skills:</p>
                    {[
                        { skill: "Active Listener", value: 80 },
                        { skill: "Fast Learning Attitude", value: 80 },
                        { skill: "Problem-solving Attitude", value: 80 },
                    ].map((item, index) => (
                        <motion.p
                            key={index}
                            className='text-[18px]'
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                        >
                            {index + 1}. {item.skill}{" "}
                            <progress
                                className="progress progress-primary w-56"
                                value={item.value}
                                max="100"
                            ></progress>
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skill;
