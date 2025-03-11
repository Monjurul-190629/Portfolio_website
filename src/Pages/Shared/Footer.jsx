import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuFlower } from "react-icons/lu";

const Footer = () => {
  const footerRef = useRef();
  const isInView = useInView(footerRef, { once: true });

  return (
    <motion.div ref={footerRef} className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6 sm:px-12 lg:px-20">
      
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl opacity-20"></div>

      {/* Footer Content */}
      <motion.footer
        className="flex flex-col items-center justify-center text-center space-y-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Logo & Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <LuFlower className="text-6xl text-blue-400" />
          <p className="font-semibold text-3xl mt-3 text-blue-300">Monjurul Alam</p>
          <p className="text-gray-400 text-sm">Crafting web solutions with passion 💙</p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/Monjurul-190629/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/monjurul-alam-5647272a7/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-blue-400 hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/Monjurul0629/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-blue-500 hover:text-white transition duration-300"
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} Monjurul Alam. All rights reserved.
        </motion.div>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;
