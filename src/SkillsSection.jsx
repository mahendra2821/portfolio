


// // import React from "react";
// // import { motion } from "framer-motion";
// // import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
// // import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

// // const skills = [
// //   { name: "React.js", icon: <FaReact />, color: "from-blue-400 to-blue-600", level: "Advanced" },
// //   { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-green-700", level: "Advanced" },
// //   { name: "MongoDB", icon: <SiMongodb />, color: "from-green-400 to-green-600", level: "Advanced" },
// //   { name: "Express.js", icon: <SiExpress />, color: "from-gray-700 to-gray-900", level: "Advanced" },
// //   { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-teal-600", level: "Advanced" },
// //   { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-400 to-yellow-600", level: "Advanced" },
// //   { name: "Python", icon: <FaPython />, color: "from-blue-500 to-yellow-500", level: "Advanced" },
// //   { name: "SQL", icon: <FaDatabase />, color: "from-orange-500 to-orange-700", level: "Advanced" },
// //   { name: "GitHub", icon: <FaGithub />, color: "from-gray-600 to-black", level: "Intermediate" },
// //   { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-red-600", level: "Advanced" },
// //   { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-700", level: "Advanced" },
// // ];

// // const SkillsSection = () => {
// //   return (
// //     <section id="skills" className="py-20 w-[150vw] sm:w-full bg-black text-white ">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
// //         <motion.h2
// //           className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-wide mb-12 font-[Poppins]"
// //           initial={{ opacity: 0, y: -50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1 }}
// //         >
// //           My Technical <span className="font-[Dancing Script] text-yellow-400">Skills</span> 💻
// //         </motion.h2>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// //           {skills.map((skill, index) => (
// //             <motion.div
// //               key={index}
// //               className={`relative group bg-gradient-to-r ${skill.color} rounded-xl p-6 shadow-lg shadow-gray-900 cursor-pointer transform transition-all hover:scale-110 hover:shadow-xl`}
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //             >
// //               {/* Hover Glow Effect */}
// //               <motion.div
// //                 className="absolute inset-0 bg-white opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 rounded-xl"
// //               ></motion.div>

// //               {/* Skill Icon */}
// //               <motion.div
// //                 className="text-6xl text-white mb-4 group-hover:scale-125 transition-transform duration-300"
// //                 whileHover={{ rotate: 15 }}
// //               >
// //                 {skill.icon}
// //               </motion.div>

// //               {/* Skill Name */}
// //               <h3 className="text-white text-2xl font-bold font-[Poppins] tracking-wide">{skill.name}</h3>
// //               <p className="text-sm text-gray-300 mt-2">{skill.level}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default SkillsSection;



// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { FaCheckCircle } from "react-icons/fa";

// // // const roadmapSteps = [
// // //   {
// // //     title: "Outline Skills and Expertise",
// // //     description:
// // //       "Clearly outline your skills and services, such as administrative support, content creation, or social media management.",
// // //   },
// // //   {
// // //     title: "Create a Unique Brand Voice",
// // //     description:
// // //       "Employ a consistent tone and style that reflects your personal brand and adds a professional touch to your portfolio website.",
// // //   },
// // //   {
// // //     title: "Include Testimonials",
// // //     description:
// // //       "Include reviews and testimonials from past clients to build trust and validate your skills.",
// // //   },
// // //   {
// // //     title: "Design Your Portfolio",
// // //     description:
// // //       "Have a clear, easy-to-navigate design that improves user experience.",
// // //   },
// // //   {
// // //     title: "Update Regularly",
// // //     description:
// // //       "Your portfolio website should evolve as your skills and experiences grow. Regular content updates improve credibility.",
// // //   },
// // // ];

// // // const SkillSSection = () => {
// // //   return (
// // //     <section className="bg-gray-900 py-16 px-6">
// // //       <div className="max-w-6xl mx-auto text-center">
// // //         <h2 className="text-4xl font-extrabold text-white mb-12">
// // //           Building Your <span className="text-yellow-400">Virtual Assistant Portfolio</span>
// // //         </h2>
// // //       </div>
// // //       <div className="relative max-w-4xl mx-auto">
// // //         <div className="absolute w-1 bg-yellow-400 left-1/2 transform -translate-x-1/2 h-full hidden md:block"></div>
// // //         <div className="flex flex-col space-y-12">
// // //           {roadmapSteps.map((step, index) => (
// // //             <motion.div
// // //               key={index}
// // //               className={`relative flex items-center ${
// // //                 index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
// // //               }`}
// // //               initial={{ opacity: 0, y: 50 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.6, delay: index * 0.2 }}
// // //             >
// // //               <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500 max-w-sm">
// // //                 <h3 className="text-white text-2xl font-bold mb-3 flex items-center gap-2">
// // //                   <FaCheckCircle className="text-yellow-400" /> {step.title}
// // //                 </h3>
// // //                 <p className="text-gray-300 text-sm">{step.description}</p>
// // //               </div>
// // //               <div className="w-12 h-12 flex justify-center items-center rounded-full bg-yellow-400 absolute md:relative left-1/2 transform -translate-x-1/2 -translate-y-6 md:translate-y-0 md:left-auto">
// // //                 <FaCheckCircle className="text-gray-900 text-xl" />
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default SkillSSection;




// import React from "react";
// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";

// // Particle Component
// const Particle = ({ delay, size, shape }) => (
//   <motion.div
//     className={`absolute ${shape} bg-white opacity-20`}
//     style={{
//       width: size,
//       height: size,
//       left: Math.random() * window.innerWidth,
//     }}
//     initial={{ y: "100vh", opacity: 0 }}
//     animate={{
//       y: ["100vh", "-10vh"],
//       opacity: [0, 0.6, 0],
//     }}
//     transition={{
//       duration: 10 + Math.random() * 10,
//       repeat: Infinity,
//       delay,
//     }}
//   />
// );

// const skills = [
//   { name: "React.js", icon: <FaReact />, color: "from-blue-400 to-blue-600", level: "Advanced" },
//   { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-green-700", level: "Advanced" },
//   { name: "MongoDB", icon: <SiMongodb />, color: "from-green-400 to-green-600", level: "Advanced" },
//   { name: "Express.js", icon: <SiExpress />, color: "from-gray-700 to-gray-900", level: "Advanced" },
//   { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-teal-600", level: "Advanced" },
//   { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-400 to-yellow-600", level: "Advanced" },
//   { name: "Python", icon: <FaPython />, color: "from-blue-500 to-yellow-500", level: "Advanced" },
//   { name: "SQL", icon: <FaDatabase />, color: "from-orange-500 to-orange-700", level: "Advanced" },
//   { name: "GitHub", icon: <FaGithub />, color: "from-gray-600 to-black", level: "Intermediate" },
//   { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-red-600", level: "Advanced" },
//   { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-700", level: "Advanced" },
// ];

// const SkillsSection = () => {
//   return (
//     <section id="skills" className="relative py-24 w-[158vw] sm:w-full bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
//       {/* Particles Background */}
//       {Array.from({ length: 25 }).map((_, i) => (
//         <Particle
//           key={i}
//           delay={i * 0.5}
//           size={`${Math.random() * 8 + 4}px`}
//           shape={Math.random() > 0.5 ? "rounded-full" : "rounded-md"}
//         />
//       ))}

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
//         {/* Section Title */}
//         <motion.h2
//           className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 tracking-wide mb-16 font-[Poppins]"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           My <span className="font-[Dancing Script] text-yellow-400">Skills</span> ✨
//         </motion.h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className={`relative group bg-gradient-to-r ${skill.color} rounded-2xl p-8 shadow-xl shadow-gray-900 
//               cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-1`}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: index * 0.15 }}
//               whileHover={{ rotateY: 10, rotateX: 5 }}
//             >
//               {/* Animated Glow Border */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>

//               {/* Skill Icon */}
//               <motion.div
//                 className="text-6xl text-white mb-6 group-hover:scale-125 transition-transform duration-300"
//                 whileHover={{ rotate: 15 }}
//               >
//                 {skill.icon}
//               </motion.div>

//               {/* Skill Name */}
//               <h3 className="text-white text-2xl font-bold font-[Poppins] tracking-wide">
//                 {skill.name}
//               </h3>
//               <p className="text-sm text-gray-300 mt-2">{skill.level}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;



import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
   FaBrain,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    category: "Frontend",
    icon: <FaReact />,
    level: "Advanced",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs />,
    level: "Advanced",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb />,
    level: "Advanced",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress />,
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: <SiJavascript />,
    level: "Advanced",
  },
  {
    name: "Python",
    category: "Language",
    icon: <FaPython />,
    level: "Advanced",
  },
  {
    name: "SQL",
    category: "Database",
    icon: <FaDatabase />,
    level: "Advanced",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: <FaGithub />,
    level: "Intermediate",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: <FaHtml5 />,
    level: "Advanced",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <FaCss3Alt />,
    level: "Advanced",
  },

  // AI / ML
  {
    name: "Machine Learning",
    category: "AI / ML",
    icon: <FaBrain />,
    level: "Intermediate",
  },
  {
    name: "Generative AI",
    category: "AI / ML",
    icon: <FaBrain />,
    level: "Intermediate",
  },
  {
    name: "LLMs",
    category: "AI / ML",
    icon: <FaBrain />,
    level: "Intermediate",
  },
  {
    name: "LangChain",
    category: "AI / ML",
    icon: <FaBrain />,
    level: "Intermediate",
  },
  {
    name: "RAG",
    category: "AI / ML",
    icon: <FaBrain />,
    level: "Intermediate",
  },
  // {
  //   name: "Prompt Engineering",
  //   category: "AI / ML",
  //   icon: <FaBrain />,
  //   level: "Intermediate",
  // },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#050505] text-white overflow-hidden"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 py-24 lg:py-32">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-4">
              <span className="text-[9px] tracking-[0.35em] text-[#b8aa82]">
                02
              </span>

              <span className="w-12 h-px bg-[#b8aa82]/40" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-[#66625b]">
                Expertise
              </span>
            </div>

            <span className="hidden sm:block text-[9px] uppercase tracking-[0.3em] text-[#4b4842]">
              Technical Skills
            </span>

          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <h2
              className="
                font-serif
                text-6xl
                sm:text-7xl
                lg:text-8xl
                xl:text-9xl
                leading-[0.78]
                tracking-[-0.06em]
                font-normal
                text-[#eeeae2]
              "
            >
              Skills.
            </h2>

            <p
              className="
                max-w-md
                text-sm
                lg:text-base
                leading-7
                text-[#66635d]
                lg:pb-2
              "
            >
              A focused collection of technologies I use to build
              responsive interfaces, scalable applications and modern
              digital products.
            </p>

          </div>
        </motion.div>


        {/* SKILLS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                min-h-[230px]
                border
                border-white/[0.09]
                bg-[#080808]
                p-7
                lg:p-8
                flex
                flex-col
                justify-between
                overflow-hidden
                transition-all
                duration-500
                hover:border-[#b8aa82]/50
                hover:bg-[#0a0a0a]
              "
            >

              {/* TOP */}
              <div className="flex items-start justify-between">

                <span
                  className="
                    text-[9px]
                    tracking-[0.25em]
                    text-[#494640]
                    group-hover:text-[#b8aa82]
                    transition-colors
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#494640]
                    group-hover:text-[#777269]
                    transition-colors
                  "
                >
                  {skill.category}
                </span>

              </div>


              {/* ICON */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  text-4xl
                  text-[#55524c]
                  group-hover:text-[#b8aa82]
                  transition-colors
                  duration-500
                "
              >
                {skill.icon}
              </motion.div>


              {/* BOTTOM */}
              <div>

                <h3
                  className="
                    text-xl
                    lg:text-2xl
                    font-light
                    tracking-[-0.025em]
                    text-[#c4c0b7]
                    group-hover:text-[#f0ede5]
                    transition-colors
                    duration-300
                  "
                >
                  {skill.name}
                </h3>

                <div className="flex items-center justify-between mt-5">

                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#55514b]">
                    {skill.level}
                  </span>

                  <span
                    className="
                      w-0
                      h-px
                      bg-[#b8aa82]
                      group-hover:w-10
                      transition-all
                      duration-500
                    "
                  />

                </div>

              </div>


              {/* SUBTLE CORNER DETAIL */}
              <div
                className="
                  absolute
                  -right-8
                  -bottom-8
                  w-20
                  h-20
                  border
                  border-[#b8aa82]/0
                  rounded-full
                  group-hover:border-[#b8aa82]/10
                  transition-all
                  duration-700
                "
              />

            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default SkillsSection;