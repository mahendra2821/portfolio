// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Modal from "react-modal";
// import pic11 from "./assets/pic_11.png";
// import pic10 from "./assets/pic_10.png";
// import pic12 from "./assets/pic_12.png";
// import pic13 from "./assets/pic_13.png";
// import pic14 from "./assets/pic_14.png";

// const projects = [
//   {
//     title: "BookStore",
//     img: pic11,
//     github_Frontend: "https://github.com/mahendra2821/BookStore_FrontEnd",
//     github_Backend: "https://github.com/mahendra2821/BookStore",
//     live_link: "https://bookkkss.netlify.app",
//   },

//   {
//     title: "Student Dashboard",
//     description: "",
//     img:pic12,
//         github_Frontend: "https://github.com/mahendra2821/StudentDashBoard-Frontend-adminPanel",
//     github_Backend : "https://github.com/mahendra2821/StudentDashBoard",
//     live_link : "https://studentresults-adminpanell.netlify.app",
//   },


//   {
//     title: "Protein Food",
//     description: "",
//     img: pic13,

//         github: "",
//     github_Frontend: "https://github.com/mahendra2821/proteinpro",
//     live_link : "https://protein-proo.netlify.app",
//   },


//   {
//     title: "Nostra clothing ",
//     description: "",
//     img:pic14,

//      github: "",
//     github_Frontend: "https://github.com/mahendra2821/demo",
//     live_link : "https://nostraa.netlify.app",
//   },
//   {
//     title: "Hospital Management",
//     description: "",
//     img: pic10,
//     github: "",
//     github_Frontend: "https://github.com/mahendra2821/Gydocare_01",
//     live_link : "https://hospital-mana.netlify.app",  },
// ];

// Modal.setAppElement("#root");

// const Portfolio = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (

 
//     <section id="projects" className="w-[150vw] sm:w-full bg-black text-white">
//       <h2 className="text-4xl font-bold text-center text-white mb-8">
//           Projects
//         </h2>
//       <div className="container mx-auto relative flex flex-col items-center">
//         <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-blue-500 h-full"></div>

//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             className={`relative flex items-center w-full max-w-4xl my-12 ${
//               index % 2 === 0 ? "justify-start" : "justify-end"
//             }`}
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="bg-gray-800 shadow-lg rounded-lg p-6 w-80 cursor-pointer"
//               onClick={() => openModal(project)}
//             >
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
//               <p className="text-gray-300 text-sm">{project.description}</p>
//               <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
//                 View Project
//               </button>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
//       >
//         {selectedProject && (
//           <div className="bg-gray-900 p-6 rounded-lg text-center max-w-lg">
//             <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
//             <img
//               src={selectedProject.img}
//               alt={selectedProject.title}
//               className="w-full h-60 object-cover rounded-md mb-4"
//             />
//             <p className="text-gray-300 mb-4">{selectedProject.description}</p>
//             <a
//               href={selectedProject.github_Frontend}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
//             >
//               View on GitHub FrontEnd 
//             </a>
//             <a
//               href={selectedProject.github_Backend}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4"
//             >
//               View on GitHub Backend 
//             </a>
//             <a
//               href={selectedProject.live_link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block px-4 py-2 bg-green-600 text-white rounded-lg mb-4"
//             >
//               View on Live
//             </a>
//             <button
//               onClick={closeModal}
//               className="px-4 py-2 bg-red-500 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </Modal>
//     </section>
//   );
// };

// export default Portfolio;





import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
import pic11 from "./assets/pic_11.png";
import pic10 from "./assets/pic_10.png";
import pic12 from "./assets/pic_12.png";
import pic13 from "./assets/pic_13.png";
import pic14 from "./assets/pic_14.png";

// Particle Component
const Particle = ({ delay, size, shape }) => (
  <motion.div
    className={`absolute ${shape} bg-white opacity-20`}
    style={{
      width: size,
      height: size,
      left: Math.random() * window.innerWidth,
    }}
    initial={{ y: "100vh", opacity: 0 }}
    animate={{
      y: ["100vh", "-10vh"],
      opacity: [0, 0.6, 0],
    }}
    transition={{
      duration: 10 + Math.random() * 10,
      repeat: Infinity,
      delay,
    }}
  />
);

const projects = [
  {
    title: "BookStore",
    img: pic11,
    github_Frontend: "https://github.com/mahendra2821/BookStore_FrontEnd",
    github_Backend: "https://github.com/mahendra2821/BookStore",
    live_link: "https://bookkkss.netlify.app",
  },
  {
    title: "Student Dashboard",
    img: pic12,
    github_Frontend: "https://github.com/mahendra2821/StudentDashBoard-Frontend-adminPanel",
    github_Backend: "https://github.com/mahendra2821/StudentDashBoard",
    live_link: "https://studentresults-adminpanell.netlify.app",
  },
  {
    title: "Protein Food",
    img: pic13,
    github_Frontend: "https://github.com/mahendra2821/proteinpro",
    live_link: "https://protein-proo.netlify.app",
  },
  {
    title: "Nostra Clothing",
    img: pic14,
    github_Frontend: "https://github.com/mahendra2821/demo",
    live_link: "https://nostraa.netlify.app",
  },
  {
    title: "Hospital Management",
    img: pic10,
    github_Frontend: "https://github.com/mahendra2821/Gydocare_01",
    live_link: "https://hospital-mana.netlify.app",
  },
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
    <section id="projects" className="relative w-[158vw] sm:w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Particles Background */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Particle
          key={i}
          delay={i * 0.5}
          size={`${Math.random() * 10 + 4}px`}
          shape={Math.random() > 0.5 ? "rounded-full" : "rounded-md"}
        />
      ))}

      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        🚀 My Projects
      </motion.h2>

      {/* Timeline Container */}
      <div className="container mx-auto relative flex flex-col items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-center w-full max-w-5xl my-12 ${
              index % 2 === 0 ? "justify-start pr-20" : "justify-end pl-20"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl rounded-2xl p-6 w-80 cursor-pointer hover:shadow-blue-500/40"
              onClick={() => openModal(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-xl">
                View Details
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalIsOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-2xl text-center max-w-lg w-full shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                {selectedProject.github_Frontend && (
                  <a
                    href={selectedProject.github_Frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Frontend Code
                  </a>
                )}
                {selectedProject.github_Backend && (
                  <a
                    href={selectedProject.github_Backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Backend Code
                  </a>
                )}
                {selectedProject.live_link && (
                  <a
                    href={selectedProject.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
