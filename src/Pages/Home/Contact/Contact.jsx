import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5qn4bcd", "template_p0y2f7b", formRef.current, "ZNaeCns0HE2S0LkQW")
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message successfully sent!",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send message",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );

    e.target.reset();
  };

  return (
    <motion.div ref={sectionRef} className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 sm:px-12 lg:px-20">
      
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl opacity-20"></div>

      <h2 className="text-center text-4xl font-bold text-blue-400 mb-12 relative z-10">
        Get in Touch
      </h2>

      {/* Contact Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        
        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-blue-300 border-b pb-2">
            Contact Information
          </h3>
          <div className="mt-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition">
              <span className="text-blue-300 font-medium">📞 Phone:</span>
              <span className="text-gray-300">+8801812967146</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition break-words whitespace-normal">
              <span className="text-blue-300 font-medium">✉ Email:</span>
              <span className="text-gray-300 break-words">monjurulalam190629@gmail.com</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition">
              <span className="text-blue-300 font-medium">📍 Address:</span>
              <span className="text-gray-300">Pabna, Bangladesh</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-300 border-b pb-2">
              Follow Me
            </h3>
            <div className="flex gap-6 mt-4 text-3xl">
              <a href="https://www.facebook.com/Monjurul0629/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-400 transition" />
              </a>
              <a href="https://github.com/Monjurul-190629/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-blue-400 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-blue-300 border-b pb-2">
            Send a Message
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="mt-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <input type="text" name="from_name" placeholder="Your Name" className="input w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300" required />
              <input type="email" name="from_email" placeholder="Your Email" className="input w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300" required />
              <input type="text" name="from_phone" placeholder="Your Phone (optional)" className="input w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300" />
              <input type="text" name="subject" placeholder="Subject" className="input w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300" />
            </div>
            <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-3 mt-6 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-300" required />
            <button type="submit" className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
