


import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "from-blue-400 to-blue-600", level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-green-700", level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-green-400 to-green-600", level: "Advanced" },
  { name: "Express.js", icon: <SiExpress />, color: "from-gray-700 to-gray-900", level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-teal-600", level: "Advanced" },
  { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-400 to-yellow-600", level: "Advanced" },
  { name: "Python", icon: <FaPython />, color: "from-blue-500 to-yellow-500", level: "Advanced" },
  { name: "SQL", icon: <FaDatabase />, color: "from-orange-500 to-orange-700", level: "Advanced" },
  { name: "GitHub", icon: <FaGithub />, color: "from-gray-600 to-black", level: "Intermediate" },
  { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-red-600", level: "Advanced" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-700", level: "Advanced" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 w-[150vw] sm:w-full bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-wide mb-12 font-[Poppins]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Technical <span className="font-[Dancing Script] text-yellow-400">Skills</span> 💻
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`relative group bg-gradient-to-r ${skill.color} rounded-xl p-6 shadow-lg shadow-gray-900 cursor-pointer transform transition-all hover:scale-110 hover:shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 rounded-xl"
              ></motion.div>

              {/* Skill Icon */}
              <motion.div
                className="text-6xl text-white mb-4 group-hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-white text-2xl font-bold font-[Poppins] tracking-wide">{skill.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;



// import React from "react";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";

// const roadmapSteps = [
//   {
//     title: "Outline Skills and Expertise",
//     description:
//       "Clearly outline your skills and services, such as administrative support, content creation, or social media management.",
//   },
//   {
//     title: "Create a Unique Brand Voice",
//     description:
//       "Employ a consistent tone and style that reflects your personal brand and adds a professional touch to your portfolio website.",
//   },
//   {
//     title: "Include Testimonials",
//     description:
//       "Include reviews and testimonials from past clients to build trust and validate your skills.",
//   },
//   {
//     title: "Design Your Portfolio",
//     description:
//       "Have a clear, easy-to-navigate design that improves user experience.",
//   },
//   {
//     title: "Update Regularly",
//     description:
//       "Your portfolio website should evolve as your skills and experiences grow. Regular content updates improve credibility.",
//   },
// ];

// const SkillSSection = () => {
//   return (
//     <section className="bg-gray-900 py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold text-white mb-12">
//           Building Your <span className="text-yellow-400">Virtual Assistant Portfolio</span>
//         </h2>
//       </div>
//       <div className="relative max-w-4xl mx-auto">
//         <div className="absolute w-1 bg-yellow-400 left-1/2 transform -translate-x-1/2 h-full hidden md:block"></div>
//         <div className="flex flex-col space-y-12">
//           {roadmapSteps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={`relative flex items-center ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500 max-w-sm">
//                 <h3 className="text-white text-2xl font-bold mb-3 flex items-center gap-2">
//                   <FaCheckCircle className="text-yellow-400" /> {step.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm">{step.description}</p>
//               </div>
//               <div className="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-400 absolute md:relative left-1/2 transform -translate-x-1/2 -translate-y-6 md:translate-y-0 md:left-auto">
//                 <FaCheckCircle className="text-gray-900 text-xl" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillSSection;
