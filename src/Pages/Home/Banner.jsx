import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoCodeDownloadOutline } from "react-icons/io5";
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'


const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);  // You can set this dynamically based on user interaction or other events
    
    
    const handleDownload = () => {
        // Extract the file ID from the URL
        const fileId = '1zpidxJ5hZhYGgKezitrlfnbyA_QOnqOB'; // File ID from the provided Google Drive link
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
        // Create an anchor element and trigger a click to start the download
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'downloaded-file.pdf'; // Name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    



    return (
        <div>
            <div className="hero bg-slate-800 text-white py-10 flex justify-center items-center -mt-3">
                <motion.div
                    className="hero-content flex-col lg:flex-row-reverse items-center"
                    initial={{ opacity: 0.5, x: -100 }}        // Starting state
                    animate={{ opacity: isVisible ? 1 : 0, x: 0 }}   // Animation state
                    transition={{ duration: 1 }}            // Animation duration (1 second)
                >
                    <motion.img
                        src="https://i.ibb.co.com/wg9Nd5y/1729456002257.jpg"
                        border="0"
                        className="max-w-sm rounded-full shadow-sm p-5"
                        alt="Banner Image"
                        initial={{ scale: 0 }}                // Start with image scaled down
                        animate={{ scale: 1 }}                // Animate it to full scale
                        transition={{ duration: 1.4 }}        // Image animation timing
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
                                'Junior Software Engineer',
                                2000,
                                'Front-End Developer',
                                2000,
                                'MERN Stack Developer',
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
                        <br></br>
                        {/* <button onClick={downloadPdf} className='btn border-r-2 bg-inherit'>Download Resume <IoCodeDownloadOutline /></button> */}
                        <button className="btn mt-4 bg-slate-600 text-white hover:bg-transparent" onClick={handleDownload}>
                            Download Resume <IoCodeDownloadOutline className='text-4xl'></IoCodeDownloadOutline>
                        </button>
                    </div>
                    
                </motion.div>
            </div>
            <div className="divider divider-neutral text-white text-3xl  ">About</div>
        </div>
    );
};

export default Banner;
