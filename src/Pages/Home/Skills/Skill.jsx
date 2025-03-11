import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFirebase, SiTypescript, SiMongodb } from "react-icons/si";

const skillsData = [
    { skill: "HTML", value: 90, icon: <FaHtml5 className="text-orange-500" /> },
    { skill: "CSS", value: 85, icon: <FaCss3Alt className="text-blue-500" /> },
    { skill: "Tailwind CSS", value: 88, icon: <SiTailwindcss className="text-teal-400" /> },
    { skill: "JavaScript", value: 90, icon: <FaJsSquare className="text-yellow-400" /> },
    { skill: "TypeScript", value: 82, icon: <SiTypescript className="text-blue-600" /> },
    { skill: "React.js", value: 93, icon: <FaReact className="text-blue-400" /> },
    { skill: "Firebase", value: 85, icon: <SiFirebase className="text-yellow-500" /> },
    { skill: "Node.js", value: 83, icon: <FaNodeJs className="text-green-500" /> },
    { skill: "Express.js", value: 80, icon: <SiExpress className="text-gray-400" /> },
    { skill: "MongoDB", value: 84, icon: <SiMongodb className="text-green-500" /> },
    { skill: "Python", value: 82, icon: <FaPython className="text-blue-400" /> },
    { skill: "Git", value: 85, icon: <FaGitAlt className="text-orange-400" /> },
    { skill: "GitHub", value: 88, icon: <FaGithub className="text-white" /> },
];

const softSkills = [
    { skill: "Active Listener", value: 85 },
    { skill: "Fast Learning Attitude", value: 88 },
    { skill: "Problem-Solving Attitude", value: 86 },
];

const Skill = () => {
    const skillRef = useRef();
    const isInView = useInView(skillRef, { once: true });

    return (
        <motion.div
            ref={skillRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-b from-slate-900 via-gray-800 to-slate-900 text-white py-16 px-6 sm:px-12 lg:px-20"
        >
            <div className="my-16 text-center text-3xl font-bold text-gray-300 relative">

                Skills
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-2"></div>

            </div>
            {/* Background Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl opacity-30"></div>

            

            {/* Skills Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700"
                >
                    <h3 className="text-xl font-semibold mb-6 text-blue-300 border-b pb-2">
                        Technical Skills
                    </h3>
                    <div className="space-y-5">
                        {skillsData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-4"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-lg font-medium">{item.skill}</span>
                                <div className="flex-1 relative h-3 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
                                        style={{ width: `${item.value}%` }}
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${item.value}%` }}
                                        transition={{ duration: 1.2, delay: 0.2 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Interpersonal Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700"
                >
                    <h3 className="text-xl font-semibold mb-6 text-blue-300 border-b pb-2">
                        Interpersonal Skills
                    </h3>
                    <div className="space-y-5">
                        {softSkills.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                            >
                                <span className="text-lg font-medium">{item.skill}</span>
                                <div className="flex-1 relative h-3 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
                                        style={{ width: `${item.value}%` }}
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${item.value}%` }}
                                        transition={{ duration: 1.2, delay: 0.2 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skill;
