


// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Typewriter } from "react-simple-typewriter";
// // import Profile from "./assets/pod_image_2.jpg"; // Ensure correct path

// // const HeroSection = () => {
// //   return (
// //     <section id="resume" className="w-[150vw] sm:w-full bg-black text-white ">
// //       <motion.section
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1.5 }}
// //         className="min-h-screen flex items-center justify-center w-full"
// //       >
// //         <motion.div
// //           className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-12"
// //           initial={{ y: 50 }}
// //           animate={{ y: 0 }}
// //           transition={{ duration: 1.5, ease: "easeOut" }}
// //         >
// //           {/* Left Side: Text */}
// //           <motion.div
// //             className="text-center md:text-left space-y-4 w-full md:w-1/2 mt-10 md:mt-0"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.5, duration: 1 }}
// //           >
// //             <h1 className="text-3xl md:text-5xl font-light leading-tight">
// //               I am <span className="text-yellow-300">Mahendra</span>
// //             </h1>
// //             <h2 className="text-xl md:text-3xl font-extrabold font-serif">
// //               <span className="text-yellow-400">A Full Stack Developer & Problem Solver</span>
// //             </h2>

// //             <p className="text-sm md:text-lg font-medium">
// //               <Typewriter
// //                 words={[
// //                   "Welcome to my personal blog!",
// //                   "Let's build something amazing together!",
// //                   "Feel free to explore my work.",
// //                 ]}
// //                 loop={Infinity}
// //                 cursor
// //                 cursorStyle="_"
// //                 typeSpeed={80}
// //                 deleteSpeed={50}
// //                 delaySpeed={2000}
// //               />
// //             </p>

// //             <motion.a
// //               href="/Mahendra_Babu_Jammula-Resumee.pdf"
// //               target="_blank"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
// //             >
// //               View Resume
// //             </motion.a>
// //           </motion.div>

// //           {/* Right Side: Image */}
// //           <motion.div
// //             className="w-full md:w-auto flex justify-center mt-10 md:mt-0"
// //             initial={{ scale: 0.8 }}
// //             animate={{ scale: 1 }}
// //             transition={{ duration: 1 }}
// //           >
// //             <img
// //               src={Profile}
// //               alt="Profile"
// //               className="w-60 h-60 md:w-80 md:h-80 rounded-[20px] object-cover shadow-xl"
// //             />
// //           </motion.div>
// //         </motion.div>
// //       </motion.section>
// //     </section>
// //   );
// // };

// // export default HeroSection;




// import React from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import Profile from "./assets/pod_image_2.jpg"; // Ensure correct path

// const HeroSection = () => {
//   return (
//     <section id="resume" className="w-[158vw] sm:w-full bg-black text-white ">
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="min-h-screen flex items-center justify-center w-full"
//       >
//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-12"
//           initial={{ y: 50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         >
//           {/* Left Side: Text */}
//           <motion.div
//             className="text-center md:text-left space-y-4 w-full md:w-1/2 mt-10 md:mt-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <h1 className="text-3xl md:text-5xl font-light leading-tight">
//               I am <span className="text-yellow-300">Mahendra</span>
//             </h1>
//             <h2 className="text-xl md:text-3xl font-extrabold font-serif">
//               <span className="text-yellow-400">A Full Stack Developer & Problem Solver</span>
//             </h2>

//             <p className="text-sm md:text-lg font-medium">
//               <Typewriter
//                 words={[
//                   "Welcome to my personal blog!",
//                   "Let's build something amazing together!",
//                   "Feel free to explore my work.",
//                 ]}
//                 loop={Infinity}
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={80}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </p>

//             <motion.a
//               href="/Mahendra_Babu_Jammula-Resumee.pdf"
//               target="_blank"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
//             >
//               View Resume
//             </motion.a>
//           </motion.div>

//           {/* Right Side: Image */}
//           <motion.div
//             className="w-full md:w-auto flex justify-center mt-10 md:mt-0"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src={Profile}
//               alt="Profile"
//               className="w-60 h-60 md:w-80 md:h-80 rounded-[20px] object-cover shadow-xl"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.section>
//     </section>
//   );
// };

// export default HeroSection;



import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Profile from "./assets/pod_image_2.jpg";

// Generate floating particles
const Particle = ({ delay }) => {
  // Random size (small dots + few big ones)
  const size = Math.random() < 0.8 ? Math.random() * 15 + 2 : Math.random() * 20 + 10;

  // Random shape: circle, square, triangle
  const shapes = ["circle", "square", "triangle", "polygon"];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  // Random pastel color (molecule vibe)
  const colors = ["bg-red-500", "bg-yellow-400", "bg-blue-400", "bg-green-400", "bg-purple-500"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className={`absolute ${color} opacity-60`}
      style={{
        width: size,
        height: size,
        clipPath:
          shape === "circle"
            ? "circle(50%)"
            : shape === "square"
            ? "inset(0 0 0 0 round 2px)"
            : "polygon(50% 0%, 0% 100%, 100% 100%)", // triangle
      }}
      initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
      animate={{
        y: ["100vh", "-10vh"],
        opacity: [0, 1, 0],
        rotate: shape === "triangle" ? [0, 360] : 0, // rotate triangles for cool effect
      }}
      transition={{
        duration: 8 + Math.random() * 12,
        repeat: Infinity,
        delay,
      }}
    />
  );
};

const HeroSection = () => {
  return (
    <section
      id="resume"
      className="relative w-[158vw] sm:w-full mt-10 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Floating Particles Background */}
      {[...Array(25)].map((_, i) => (
        <Particle key={i} delay={i * 0.8} />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-16"
      >
        {/* Left Side */}
        <motion.div
          className="text-center md:text-left space-y-6 w-full md:w-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-light leading-snug">
            I am <span className="text-yellow-300 font-semibold">Mahendra</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-yellow-400">
            A Full Stack Developer & Problem Solver
          </h2>

          <p className="text-base md:text-lg text-gray-300">
            <Typewriter
              words={[
                "Welcome to my personal blog!",
                "Let's build something amazing together!",
                "Feel free to explore my work.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>

          <motion.a
            href="/Jammula_Mahendra_Babu_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-yellow-500 text-black font-bold rounded-2xl shadow-xl hover:bg-yellow-400 transition duration-300"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-auto flex justify-center mt-10 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={Profile}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-yellow-500/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
