
// import React from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import Profile from "./assets/pod_image_2.jpg"; // Adjust the path as needed

// const HeroSection = () => {
//   return (
//     <section id="resume">
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="h-screen flex items-center justify-center bg-black text-white"

//     >
//       <motion.div
//         className="flex flex-col md:flex-row items-center w-full max-w-7xl px-4 md:px-6"
//         initial={{ y: 50 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         {/* Left Side: Content */}
//         <motion.div
//           className="text-center md:text-left md:mr-[5vw] space-y-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           <h1 className="text-3xl md:text-5xl font-light leading-tight mb-4 animate-slide-in mt-[10vh]">
//             I am <span className="text-yellow-300">Mahendra</span>
//           </h1>
//           <h2 className="text-xl md:text-3xl font-extrabold mb-4 font-serif">
//             <span className="text-yellow-400">A Full Stack Developer & Problem Solver</span>
//           </h2>

//           <p className="text-sm md:text-lg font-medium">
//             <Typewriter
//               words={[
//                 "Welcome to my personal blog!",
//                 "Let's build something amazing together!",
//                 "Feel free to explore my work.",
//               ]}
//               loop={Infinity}
//               cursor
//               cursorStyle="_"
//               typeSpeed={80}
//               deleteSpeed={50}
//               delaySpeed={2000}
//             />
//           </p>

//           {/* Resume Button */}
//           <motion.a
//   href="/Mahendra_Babu_jammula_resume.pdf"
//   target="_blank" // Opens in a new tab instead of downloading
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.9 }}
//   className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
// >
//   View Resume
// </motion.a>



//         </motion.div>

//         {/* Right Side: Image */}
//         <motion.div
//           className="flex-shrink-0 mb-6 md:mb-0 md:ml-40"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src={Profile} // Replace with your image URL
//             alt="Profile"
//             className="w-full h-full md:w-80 md:h-80 rounded-[20px] mt-[5vh] "
//           />
//         </motion.div>
//       </motion.div>
//     </motion.section>
//     </section> 
//   );
// };

// export default HeroSection;




import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Profile from "./assets/pod_image_2.jpg"; // Ensure correct path

const HeroSection = () => {
  return (
    <section id="resume" className="w-[150vw] sm:w-full bg-black text-white ">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen flex items-center justify-center w-full"
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-12"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Left Side: Text */}
          <motion.div
            className="text-center md:text-left space-y-4 w-full md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-light leading-tight">
              I am <span className="text-yellow-300">Mahendra</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-extrabold font-serif">
              <span className="text-yellow-400">A Full Stack Developer & Problem Solver</span>
            </h2>

            <p className="text-sm md:text-lg font-medium">
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
              href="/Mahendra_Babu_jammula_resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="w-full md:w-auto flex justify-center mt-10 md:mt-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-60 h-60 md:w-80 md:h-80 rounded-[20px] object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default HeroSection;
