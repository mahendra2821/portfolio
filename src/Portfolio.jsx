import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiX,
  FiExternalLink,
} from "react-icons/fi";

import pic13 from "./assets/pic_13.png";
import pic29 from "./assets/pic_29.png";
import pic12 from "./assets/pic_12.png";

const projects = [
  {
    number: "01",
    title: "Future Me AI Website",
    category: "AI / Full Stack",
    description:
      "An AI-powered application that creates an interactive conversation with your future self using personalized goals, reflections, and AI-generated guidance.",
    image: pic13,
    technologies: ["React", "TypeScript", "Node.js", "Gemini AI"],
    github_Frontend:
      "https://github.com/mahendra2821/Future-Me-AI-Website/tree/main",
    live_link: "https://future-me-ai-website.vercel.app/",
  },

  {
    number: "02",
    title: "BiteSized",
    category: "MERN / Full Stack",
    description:
      "A nutrition and meal tracking application designed to help users monitor meals, nutrition information, calories, and daily progress.",
    image: pic29,
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    github_Frontend:
      "https://github.com/mahendra2821/BiteSized-Frontend",
    github_Backend:
      "https://github.com/mahendra2821/BiteSized-Backend",
    live_link: "https://bitesized-nutrion.netlify.app/",
  },

  {
    number: "03",
    title: "Student Dashboard",
    category: "MERN / Admin System",
    description:
      "A student management platform with an administrative dashboard for managing student information, results, and academic data.",
    image: pic12,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github_Frontend:
      "https://github.com/mahendra2821/StudentDashBoard-Frontend-adminPanel",
    github_Backend:
      "https://github.com/mahendra2821/StudentDashBoard",
    live_link: "https://studentresults-adminpanell.netlify.app",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#050505] text-white py-24 sm:py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-[300px] h-[300px] rounded-full bg-purple-700/[0.04] blur-[130px]" />

        <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full bg-yellow-500/[0.035] blur-[130px]" />

        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-yellow-400" />

            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Projects
              <br />
              <span className="text-gray-500">
                I've built.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-600 md:text-right">
              A collection of applications built while exploring full-stack
              development, AI, backend systems, and real-world problem solving.
            </p>
          </div>
        </motion.div>

        {/* ================= PROJECT LIST ================= */}

        <div className="border-t border-white/[0.08]">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group py-8 md:py-10 border-b border-white/[0.08]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[55px_0.95fr_1.05fr] gap-6 md:gap-8 items-center">

                {/* Number */}
                <div className="hidden md:block">
                  <span className="text-xs font-mono text-gray-700 group-hover:text-yellow-400/70 transition">
                    {project.number}
                  </span>
                </div>

                {/* Image */}
                <div
                  onClick={() => openProject(project)}
                  className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-yellow-400 transition">
                    <FiArrowUpRight size={14} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="md:hidden text-[10px] font-mono text-gray-700">
                      {project.number}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-yellow-400/70">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-gray-200 group-hover:text-white transition">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 max-w-xl">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-[10px] text-gray-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-5 mt-6">
                    {project.github_Frontend && (
                      <a
                        href={project.github_Frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-yellow-400 transition"
                      >
                        <FiGithub size={14} />
                        Frontend
                        <FiArrowUpRight size={12} />
                      </a>
                    )}

                    {project.github_Backend && (
                      <a
                        href={project.github_Backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-yellow-400 transition"
                      >
                        <FiGithub size={14} />
                        Backend
                        <FiArrowUpRight size={12} />
                      </a>
                    )}

                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-yellow-400 transition"
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                        <FiArrowUpRight size={12} />
                      </a>
                    )}

                    <button
                      onClick={() => openProject(project)}
                      className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition"
                    >
                      Details
                      <FiArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= FOOTER ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-between"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
            Selected projects · 2026
          </span>

          <span className="hidden sm:block text-[10px] text-gray-700">
            More projects coming soon
          </span>
        </motion.div>
      </div>

      {/* ================= PROJECT MODAL ================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#090909] border border-white/[0.1] rounded-2xl shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition"
              >
                <FiX size={17} />
              </button>

              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 sm:h-72 object-cover"
              />

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <span className="text-[9px] uppercase tracking-[0.25em] text-yellow-400/70">
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-semibold mt-3">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-md border border-white/[0.08] text-[10px] text-gray-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Modal Links */}
                <div className="flex flex-wrap gap-3 mt-7 pt-6 border-t border-white/[0.08]">
                  {selectedProject.github_Frontend && (
                    <a
                      href={selectedProject.github_Frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.1] text-xs text-gray-300 hover:text-yellow-400 hover:border-yellow-400/20 transition"
                    >
                      <FiGithub size={14} />
                      Frontend
                    </a>
                  )}

                  {selectedProject.github_Backend && (
                    <a
                      href={selectedProject.github_Backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.1] text-xs text-gray-300 hover:text-yellow-400 hover:border-yellow-400/20 transition"
                    >
                      <FiGithub size={14} />
                      Backend
                    </a>
                  )}

                  {selectedProject.live_link && (
                    <a
                      href={selectedProject.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-yellow-400 text-black text-xs font-medium hover:bg-yellow-300 transition"
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;


