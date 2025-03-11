import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white lg:p-20 p-6 -mt-5">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Top Projects</h2>

      {/* Project List */}
      <div className="space-y-16">
        {/* Project 1 */}
        <motion.div
          className="bg-slate-700 shadow-lg rounded-lg p-6 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={cardVariant}
        >
          <h3 className="text-2xl font-bold mb-4">1. Asset Management Web Application</h3>
          <p className="mb-4 text-gray-300">
            <strong>Description:</strong> This application serves as a centralized platform to manage the assets of employees across various companies. It offers features like assigning assets to employees, tracking their usage, and monitoring asset lifecycle. The user-friendly dashboard enables managers to generate reports and gain valuable insights into asset allocation, usage trends, and inventory updates.
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Technology Used:</strong> HTML, CSS, Tailwind CSS, Daisy UI, React.js, Node.js, Express.js, MongoDB, Firebase, Vercel.
          </p>
          <p className="mb-6 text-gray-300">
            <strong>Core Features:</strong> Comprehensive asset management dashboard, seamless employee hiring integration, and an efficient payment system for asset-related expenses.
          </p>
          <div className="flex gap-5 flex-wrap">
            <a
              href="https://service-provider-ba91f.web.app/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
            <a
              href="https://github.com/Monjurul-190629/Asset-management-website"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Code
            </a>
            <a
              href="https://github.com/Monjurul-190629/Asset-management-website-server"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-slate-700 shadow-lg rounded-lg p-6 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={cardVariant}
        >
          <h3 className="text-2xl font-bold mb-4">2. Online Job Seeking Web Application</h3>
          <p className="mb-4 text-gray-300">
            <strong>Description:</strong> This platform bridges the gap between job seekers and employers by providing an interactive space to explore job listings and submit applications. Employers can post vacancies, view applicant profiles, and streamline hiring. Job seekers are allowed to submit applications for jobs, making the process efficient and user-friendly.
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Technology Used:</strong> HTML, CSS, Tailwind CSS, Daisy UI, React.js, Node.js, Express.js, MongoDB, Firebase, Vercel.
          </p>
          <p className="mb-6 text-gray-300">
            <strong>Core Features:</strong> Job application system, applicant tracking dashboard for employers, dynamic filtering, and fully responsive design for all devices.
          </p>
          <div className="flex gap-5 flex-wrap">
            <a
              href="https://job-seeking-website-8ebe5.web.app/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
            <a
              href="https://github.com/Monjurul-190629/Job_seeking_website_client"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Code
            </a>
            <a
              href="https://github.com/Monjurul-190629/job-seeking-website-server"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="bg-slate-700 shadow-lg rounded-lg p-6 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={cardVariant}
        >
          <h3 className="text-2xl font-bold mb-4">3. Online Transport Web Application</h3>
          <p className="mb-4 text-gray-300">
            <strong>Description:</strong> This platform simplifies the process of booking transport by allowing users to hire buses, motorbikes, and minibikes for tours, events, or personal needs. Users can check real-time availability, compare vehicle options, and make bookings seamlessly. The application is tailored for individuals and groups, ensuring reliable transportation with minimal effort.
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Technology Used:</strong> HTML, CSS, Tailwind CSS, Daisy UI, Next.js, React.js, Mongoose, Vercel.
          </p>
          <p className="mb-6 text-gray-300">
            <strong>Core Features:</strong> Real-time vehicle booking system, availability tracking, responsive interface, and optimized for fast performance.
          </p>
          <div className="flex gap-5 flex-wrap">
            <a
              href="https://transport-hluc2m23l-monjuruls-projects.vercel.app/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
            <a
              href="https://github.com/Monjurul-190629/Bus_Transport_Web/tree/main/transport-app"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
