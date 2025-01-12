import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Normal = () => {
    const ref = useRef(null); // Reference for the container
    const isInView = useInView(ref, { once: true }); // Check if it's in view

    return (
        <div ref={ref}>
            <div className='bg-slate-800 text-white flex gap-10 lg:flex-row flex-col justify-center lg:py-20 py-5 px-6 lg:px-20 items-center'>
                {/* Animated text */}
                <motion.div
                    className='text-[17px] text-justify'
                    initial={{ opacity: 0.2, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.2 }}
                >
                    As a passionate web developer, I am always eager to share my knowledge and help others grow in
                    their coding journey. Whether you are just starting out or looking to refine and enhance your skills, I am
                    here to guide you every step of the way. From building sleek and interactive front-end designs to
                    developing efficient and scalable back-end systems, I enjoy breaking down complex concepts into simpler,
                    more approachable ideas. My goal is to make learning web development an engaging and rewarding experience,
                    helping you overcome challenges and deepen your understanding of the craft.
                </motion.div>

                {/* Animated image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        className='rounded-md'
                        src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg"
                        alt="Web developer illustration"
                    />
                </motion.div>
            </div>
            <div className="divider divider-neutral text-white text-3xl  ">Skills</div>
        </div>
    );
};

export default Normal;
