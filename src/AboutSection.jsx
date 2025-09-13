




// // import React from 'react';
// // import myImage from './assets/pic_3.jpg'; // Adjust the path as needed
// // import { motion } from "framer-motion";

// // const AboutSection = () => {
// //   return (
// //     <section id="about" className="py-20 bg-black">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-12">
// //         <h2 className="text-5xl font-extrabold text-center text-white mb-8 font-[Playfair Display]">
// //           About <span className="text-blue-500">Me</span>
// //         </h2>

// //         <div className="flex flex-col md:flex-row items-center justify-between">
// //           {/* About Image on Left Side */}
// //           <motion.div
// //             className="md:w-1/3 mb-6 md:mb-0"
// //             initial={{ opacity: 0, y: 100 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //             viewport={{ once: false }}
// //           >
// //             <img 
// //               src={myImage} 
// //               alt="Your Image" 
// //               className="rounded-[15px] w-full h-full mx-auto shadow-lg"
// //             />
// //           </motion.div>

// //           {/* About Intro with Classic Fonts */}
// //           <motion.div
// //             className="md:w-2/3 ml-[6vw]"
// //             initial={{ opacity: 0, y: 100 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //             viewport={{ once: false }}
// //           >
// //             <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
// //               I am a <span className="font-bold text-blue-600 font-[Merriweather]"> Passionate</span> 
// //               <span className="text-yellow-400 font-[EB Garamond]"> Full Stack Developer</span> and
// //               <span className="italic text-pink-500 font-[Cormorant Garamond]"> Problem Solver</span>, 
// //               specializing in the <span className="font-bold text-blue-600 font-[Playfair Display]">MERN stack </span> 
// //                <span className="text-green-400 font-[Source Code Pro]"> (MongoDB</span>, 
// //               <span className="text-red-400 font-[Source Code Pro]"> Express.js</span>, 
// //               <span className="text-cyan-400 font-[Source Code Pro]"> React.js</span>, 
// //               <span className="text-purple-400 font-[Source Code Pro]"> Node.js</span>).
// //             </p>

// //             <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
// //                Currently, I am pursuing my 
// //               <span className="font-bold text-green-500 font-[Merriweather]"> B.Tech </span> in 
// //               <span className="text-indigo-400 font-[Playfair Display]"> Computer Science and Engineering </span> 
// //               with a focus on 
// //               <span className="text-yellow-500 font-[Cormorant Garamond]"> Artificial Intelligence </span> 
// //               at <span className="text-indigo-600 font-[EB Garamond]"> Parul University </span> in 
// //               <span className="text-pink-400 font-[Merriweather]"> Vadodara, Gujarat </span>.
// //             </p>

// //             <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
// //               I am enthusiastic about 
// //               <span className="font-bold text-green-500 font-[Merriweather]"> Data Structures and Algorithms (DSA) </span> 
// //               using <span className="text-orange-400 font-[Source Code Pro]"> Python </span>. 
// //               I am also diving into the world of 
// //               <span className="text-blue-400 font-[EB Garamond]"> Machine Learning </span> 
// //                and exploring new technologies to broaden my skill set.
// //             </p>

// //             <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
// //                My goal is to continually 
// //               <span className="font-bold text-red-500 font-[Playfair Display]"> Grow</span> as a  
// //               <span className="text-green-300 font-[Merriweather]">Developer</span>, 
// //                building projects that challenge me and learning 
// //               <span className="text-yellow-400 font-[Cormorant Garamond]"> cutting-edge technologies </span> 
// //                to contribute to 
// //               <span className="text-purple-500 font-[EB Garamond]"> real-world solutions </span>.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutSection;

// import React from 'react';
// import myImage from './assets/pic_3.jpg'; // Adjust the path as needed
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   return (
//     <section id="about" className="w-[150vw] sm:w-full bg-black text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <h2 className="text-5xl font-extrabold text-center text-white mb-12 font-[Playfair Display]">
//           About <span className="text-blue-500">Me</span>
//         </h2>

//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left Side Image */}
//           <motion.div
//             className="md:w-1/3 w-full"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <img 
//               src={myImage} 
//               alt="Profile" 
//               className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
//             />
//           </motion.div>

//           {/* Right Side Text */}
//           <motion.div
//             className="md:w-2/3 w-full"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-lg text-white mb-6 font-[Lora] leading-relaxed">
//               I am a <span className="font-bold text-blue-600 font-[Merriweather]">Passionate</span> 
//               <span className="text-yellow-400 font-[EB Garamond]"> Full Stack Developer</span> and 
//               <span className="italic text-pink-500 font-[Cormorant Garamond]"> Problem Solver</span>, 
//               specializing in the 
//               <span className="font-bold text-blue-600 font-[Playfair Display]"> MERN stack</span> — 
//               <span className="text-green-400 font-[Source Code Pro]"> MongoDB</span>, 
//               <span className="text-red-400 font-[Source Code Pro]"> Express.js</span>, 
//               <span className="text-cyan-400 font-[Source Code Pro]"> React.js</span>, 
//               <span className="text-purple-400 font-[Source Code Pro]"> Node.js</span>.
//             </p>

//             <p className="text-lg text-white mb-6 font-[Lora] leading-relaxed">
//               Currently pursuing my 
//               <span className="font-bold text-green-500 font-[Merriweather]"> B.Tech </span> in 
//               <span className="text-indigo-400 font-[Playfair Display]"> Computer Science and Engineering </span> 
//               with a specialization in 
//               <span className="text-yellow-500 font-[Cormorant Garamond]"> Artificial Intelligence </span> 
//               at <span className="text-indigo-600 font-[EB Garamond]"> Parul University </span>, 
//               <span className="text-pink-400 font-[Merriweather]"> Vadodara, Gujarat</span>.
//             </p>

//             <p className="text-lg text-white mb-6 font-[Lora] leading-relaxed">
//               I’m enthusiastic about 
//               <span className="font-bold text-green-500 font-[Merriweather]"> Data Structures and Algorithms (DSA) </span> 
//               using <span className="text-orange-400 font-[Source Code Pro]"> Python</span>. 
//               I'm also diving into 
//               <span className="text-blue-400 font-[EB Garamond]"> Machine Learning</span> 
//               and exploring modern tech stacks.
//             </p>

//             <p className="text-lg text-white font-[Lora] leading-relaxed">
//               My goal is to 
//               <span className="font-bold text-red-500 font-[Playfair Display]"> Grow</span> as a 
//               <span className="text-green-300 font-[Merriweather]"> Developer</span>, 
//               building impactful projects and mastering 
//               <span className="text-yellow-400 font-[Cormorant Garamond]"> cutting-edge technologies</span> 
//               for <span className="text-purple-500 font-[EB Garamond]"> real-world solutions</span>.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



import React from "react";
import myImage from "./assets/pic_3.jpg";
import { motion } from "framer-motion";

// Particle component
const Particle = ({ delay }) => {
  const shapes = ["rounded-full", "rounded-md", "rounded-xl"]; // circle, square, pill
  const colors = [
    "bg-yellow-400/40",
    "bg-pink-400/40",
    "bg-purple-400/40",
    "bg-white/20",
  ];
  const sizes = ["w-2 h-2", "w-3 h-3", "w-4 h-4", "w-5 h-5"];

  return (
    <motion.div
      className={`absolute ${
        sizes[Math.floor(Math.random() * sizes.length)]
      } ${colors[Math.floor(Math.random() * colors.length)]} ${
        shapes[Math.floor(Math.random() * shapes.length)]
      }`}
      initial={{
        y: "100vh",
        x: Math.random() * window.innerWidth,
        opacity: 0,
      }}
      animate={{
        y: ["100vh", "-10vh"],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 12,
        repeat: Infinity,
        delay,
      }}
    />
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-[158vw] sm:w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl absolute bottom-20 right-10 animate-pulse"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <Particle key={i} delay={i * 0.8} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-6xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Side Image */}
          <motion.div
            className="w-full md:w-1/3 relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/20 group-hover:scale-105 transform transition duration-500">
              <img
                src={myImage}
                alt="Profile"
                className="w-full h-auto max-h-[420px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-4 text-yellow-300 font-semibold">
                Hello, I’m Mahendra 👋
              </div>
            </div>
          </motion.div>

          {/* Right Side Text */}
          <motion.div
            className="w-full md:w-2/3 text-left bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-8 sm:p-10 border border-white/10 relative z-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-200">
              I’m a passionate{" "}
              <span className="text-yellow-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              specializing in the{" "}
              <span className="text-yellow-400">MERN stack</span> — MongoDB,
              Express.js, React.js, and Node.js.
            </p>

            <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-200">
              Currently pursuing{" "}
              <span className="text-yellow-400 font-semibold">
                B.Tech in CSE (AI)
              </span>{" "}
              at Parul University, Vadodara.
            </p>

            <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-200">
              Enthusiastic about{" "}
              <span className="text-yellow-400 font-semibold">
                Data Structures, Algorithms, and Machine Learning
              </span>
              . I enjoy solving problems and exploring new technologies.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
              My goal is to{" "}
              <span className="text-yellow-400 font-semibold">
                build impactful projects
              </span>{" "}
              and grow as a developer who creates real-world solutions with
              cutting-edge tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
