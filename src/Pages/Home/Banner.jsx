import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);  // You can set this dynamically based on user interaction or other events

    return (
        <div>
            <div className="hero bg-slate-800 text-white min-h-screen flex justify-center items-center -mt-3">
                <motion.div
                    className="hero-content flex-col lg:flex-row-reverse items-center"
                    initial={{ opacity: 0.5, x: -100 }}        // Starting state
                    animate={{ opacity: isVisible ? 1 : 0, x: 0 }}   // Animation state
                    transition={{ duration: 1 }}            // Animation duration (1 second)
                >
                    <motion.img
                        src="https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png"
                        className="max-w-sm rounded-full shadow-2xl"
                        alt="Banner Image"
                        initial={{ scale: 0 }}                // Start with image scaled down
                        animate={{ scale: 1 }}                // Animate it to full scale
                        transition={{ duration: 1.2 }}        // Image animation timing
                    />
                    <div className="text-center lg:text-left">
                        <motion.h1
                            className="lg:text-4xl sm:text-xl lg:font-semibold"
                            initial={{ opacity: 0, y: -50 }}    // Text fades in from above
                            animate={{ opacity: 1, y: 0 }}      // Full opacity and in position
                            transition={{ duration: 1, delay: 0.5 }}  // Delays text by 0.5 seconds
                        >
                            Hi, I am <br></br> Monjurul Alam
                        </motion.h1>
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                2000,
                                'Front-End Developer',
                                2000,
                                'Mern Stack Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '22px', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        <br></br>
                        <Link to="/Project">
                            <button className="btn bg-slate-600 text-white hover:bg-slate-700 hover:text-white mt-4 mr-2">See my Projects</button>
                        </Link>
                        <Link to="/Contact">
                            <button className="btn  bg-slate-600 text-white hover:bg-slate-700 hover:text-white">Contact me</button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
