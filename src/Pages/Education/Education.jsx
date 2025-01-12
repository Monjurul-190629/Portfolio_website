import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const sectionVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='bg-slate-800 text-white text-center'>
            {/* SSC Section */}
            <motion.div
                className='lg:py-20 lg:px-20 px-5 py-5'
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className='underline text-2xl bold'>SSC (Secondary School Certificate)</p>
                <p className='text-xl'>School : Moon Light Kindergarten and High School</p>
                <p className='text-xl'>Group : Science</p>
                <p className='text-xl'>GPA : 5.00</p>
            </motion.div>

            <motion.div
                className="divider divider-info text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            ></motion.div>

            {/* HSC Section */}
            <motion.div
                className='lg:py-20 lg:px-20 px-5 py-5'
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className='underline text-2xl bold'>HSC (Higher Secondary School Certificate)</p>
                <p className='text-xl'>College : Sirajgonj Govt. College</p>
                <p className='text-xl'>Group : Science</p>
                <p className='text-xl'>GPA : 4.33</p>
            </motion.div>

            <motion.div
                className="divider divider-info text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>

            {/* B.Sc Section */}
            <motion.div
                className='lg:py-20 lg:px-20 px-5 py-5'
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <p className='underline text-2xl bold'>B.Sc in (Engineering)</p>
                <p className='text-xl'>University : Pabna University of Science and Technology</p>
                <p className='text-xl'>Subject : Information and Communication Engineering (ICE)</p>
                <p className='text-xl'>CGPA : Yet not Published</p>
            </motion.div>

            <motion.div
                className="divider divider-info text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
            ></motion.div>
        </div>
    );
};

export default Education;
