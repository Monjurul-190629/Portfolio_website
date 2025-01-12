import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuFlower } from "react-icons/lu";

const Footer = () => {
    const footerRef = useRef();
    const isInView = useInView(footerRef, { once: true });

    return (
        <motion.div ref={footerRef}>
            <motion.footer
                className="footer footer-center bg-slate-700 text-primary-content p-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.aside
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <LuFlower className="text-6xl" />
                    <p className="font-semibold text-3xl">
                        Monjurul Alam
                        <br />
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
                </motion.aside>
                <motion.nav
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="grid grid-flow-col gap-4">
                        <motion.a
                            href="https://github.com/Monjurul-190629/"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub className="text-3xl hover:text-green-400" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/monjurul-alam-5647272a7/"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin className="text-3xl hover:text-green-400" />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/Monjurul0629/"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaFacebook className="text-3xl hover:text-green-400" />
                        </motion.a>
                    </div>
                </motion.nav>
            </motion.footer>
        </motion.div>
    );
};

export default Footer;
