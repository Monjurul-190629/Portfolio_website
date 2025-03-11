import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white lg:p-20 p-6 pt-20 -mt-5">
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center text-blue-400"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        🚀 My Featured Projects
      </motion.h2>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Project Card Template */}
        {[
          {
            id: 1,
            title: "Asset Management Web App",
            description:
              "A centralized platform for managing employee assets, tracking their lifecycle, and generating insightful reports.",
            tech: "React.js, Node.js, MongoDB, Tailwind, Firebase, Vercel",
            img: "https://e3zine.com/wp-content/uploads/2017/09/IT_asset_management_shutterstock_420469072web.jpg",
            live: "https://service-provider-ba91f.web.app/",
            client: "https://github.com/Monjurul-190629/Asset-management-website",
            server:
              "https://github.com/Monjurul-190629/Asset-management-website-server",
          },
          {
            id: 2,
            title: "Online Job Portal Web App",
            description:
              "An interactive platform for job seekers and employers to connect efficiently and manage applications seamlessly.",
            tech: "React.js, Node.js, MongoDB, Tailwind, Firebase, Vercel",
            img: "https://cdn.slidesharecdn.com/ss_thumbnails/3-220509123704-f9466639-thumbnail.jpg?width=640&height=640&fit=bounds",
            live: "https://job-seeking-website-8ebe5.web.app/",
            client:
              "https://github.com/Monjurul-190629/Job_seeking_website_client",
            server:
              "https://github.com/Monjurul-190629/job-seeking-website-server",
          },
          {
            id: 3,
            title: "Online Transport Web App",
            description:
              "A hassle-free transport booking system where users can hire buses, motorbikes, and minibikes for tours or personal needs.",
            tech: "Next.js, React.js, Tailwind, Mongoose, Vercel",
            img: "https://v3smarttech.com/wp-content/uploads/2022/10/Improve-your-fuel-efficiency-with-a-GPS-tracking-system.png",
            live: "https://transport-hluc2m23l-monjuruls-projects.vercel.app/",
            client:
              "https://github.com/Monjurul-190629/Bus_Transport_Web/tree/main/transport-app",
          },
        ].map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-blue-500"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-gray-400 mb-5">
                <span className="font-semibold text-gray-200">Tech Stack:</span>{" "}
                {project.tech}
              </p>
              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.client}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Client
                </a>
                {project.server && (
                  <a
                    href={project.server}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Server
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
