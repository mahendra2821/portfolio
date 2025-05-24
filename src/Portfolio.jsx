import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import pic11 from "./assets/pic_11.png";
import pic10 from "./assets/pic_10.png";
import pic12 from "./assets/pic_12.png";
import pic13 from "./assets/pic_13.png";
import pic14 from "./assets/pic_14.png";

const projects = [
  {
    title: "BookStore",
    img: pic11,
    github_Frontend: "https://github.com/mahendra2821/BookStore_FrontEnd",
    github_Backend: "https://github.com/mahendra2821/BookStore",
    live_link: "https://bookkks.netlify.app/",
  },

  {
    title: "Student Dashboard",
    description: "",
    img:pic12,
        github_Frontend: "https://github.com/mahendra2821/StudentDashBoard-Frontend-adminPanel",
    github_Backend : "https://github.com/mahendra2821/StudentDashBoard",
    live_link : "https://studentresults-adminpanel.netlify.app/",
  },


  {
    title: "Protein Food",
    description: "",
    img: pic13,

        github: "",
    github_Frontend: "https://github.com/mahendra2821/proteinpro",
    live_link : "https://calm-salamander-111c46.netlify.app/",
  },


  {
    title: "Nostra clothing ",
    description: "",
    img:pic14,
    
        github: "",
    github_Frontend: "https://github.com/mahendra2821/demo",
    live_link : "https://dulcet-semifreddo-1a4ddf.netlify.app/",
  },
  {
    title: "Hospital Management",
    description: "",
    img: pic10,
    github: "",
    github_Frontend: "https://github.com/mahendra2821/Gydocare_01",
    live_link : "https://dainty-syrniki-aed4af.netlify.app/",  },
];

Modal.setAppElement("#root");

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

 
    <section id="projects" className="w-[150vw] sm:w-full bg-black text-white">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
          Projects
        </h2>
      <div className="container mx-auto relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-blue-500 h-full"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center w-full max-w-4xl my-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                View Project
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      >
        {selectedProject && (
          <div className="bg-gray-900 p-6 rounded-lg text-center max-w-lg">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.github_Frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
            >
              View on GitHub FrontEnd 
            </a>
            <a
              href={selectedProject.github_Backend}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
            >
              View on GitHub Backend 
            </a>
            <a
              href={selectedProject.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-green-600 text-white rounded-lg mb-4"
            >
              View on Live
            </a>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;


