// import React from 'react';
// import myImage from './assets/pic_3.jpg'; // Adjust the path as needed

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           {/* About Image on Left Side */}
//           <div className="md:w-1/3 mb-6 md:mb-0 transition-all duration-1000 ease-in-out transform hover:scale-105">
//             <img 
//               src={myImage} 
//               alt="Your Image" 
//               className="rounded-[15px] w-full h-full mx-auto shadow-lg transition-transform duration-500 ease-in-out"
//             />
//           </div>

//           {/* About Intro with Dynamic Text */}
//           <div className="md:w-2/3 ml-[6vw]">
//             <p className="text-lg text-gray-700 mb-4 ">
//               I am a passionate <span className="font-bold text-blue-600">Full Stack Developer</span> and <span className="font-bold text-blue-600"></span>, specializing in the <span className="font-bold text-blue-600">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). Currently, I am pursuing my B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence at <span className="text-indigo-600">Parul University, Institute of Engineering and Technology</span> in Vadodara, Gujarat.
//             </p>
//             <p className="text-lg text-gray-700 mb-4 ">
//                    I am enthusiastic about coding and have a keen interest in <span className="font-bold text-green-500">Data Structures and Algorithms (DSA)</span> using Python. I am also diving into the world of <span className="font-bold text-green-500">Machine Learning</span> and exploring new technologies to broaden my skill set.
//             </p>
//             <p className="text-lg text-gray-700 mb-4" >
//               My goal is to continually grow as a developer, building projects that challenge me and learning cutting-edge technologies to contribute to real-world solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


// import React from 'react';
// import myImage from './assets/pic_3.jpg'; // Adjust the path as needed
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           {/* About Image on Left Side */}
//           <motion.div
//             className="md:w-1/3 mb-6 md:mb-0"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <img 
//               src={myImage} 
//               alt="Your Image" 
//               className="rounded-[15px] w-full h-full mx-auto shadow-lg"
//             />
//           </motion.div>

//           {/* About Intro with Dynamic Text */}
//           <motion.div
//             className="md:w-2/3 ml-[6vw]"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <p className="text-lg text-gray-700 mb-4 ">
//               I am a passionate <span className="font-bold text-blue-600">Full Stack Developer</span> and <span className="font-bold text-blue-600"></span>, specializing in the <span className="font-bold text-blue-600">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). Currently, I am pursuing my B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence at <span className="text-indigo-600">Parul University, Institute of Engineering and Technology</span> in Vadodara, Gujarat.
//             </p>
//             <p className="text-lg text-gray-700 mb-4 ">
//               I am enthusiastic about coding and have a keen interest in <span className="font-bold text-green-500">Data Structures and Algorithms (DSA)</span> using Python. I am also diving into the world of <span className="font-bold text-green-500">Machine Learning</span> and exploring new technologies to broaden my skill set.
//             </p>
//             <p className="text-lg text-gray-700 mb-4" >
//               My goal is to continually grow as a developer, building projects that challenge me and learning cutting-edge technologies to contribute to real-world solutions.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



import React from 'react';
import myImage from './assets/pic_3.jpg'; // Adjust the path as needed
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* About Image on Left Side */}
          <motion.div
            className="md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Ensures animation runs each time it comes into view
          >
            <img 
              src={myImage} 
              alt="Your Image" 
              className="rounded-[15px] w-full h-full mx-auto shadow-lg"
            />
          </motion.div>

          {/* About Intro with Dynamic Text */}
          <motion.div
            className="md:w-2/3 ml-[6vw]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Ensures animation runs each time it comes into view
          >
            <p className="text-lg text-gray-700 mb-4 ">
              I am a passionate <span className="font-bold text-blue-600">Full Stack Developer</span> and <span className="font-bold text-blue-600"></span>, specializing in the <span className="font-bold text-blue-600">MERN stack</span> (MongoDB, Express.js, React.js, Node.js). Currently, I am pursuing my B.Tech in Computer Science and Engineering with a focus on Artificial Intelligence at <span className="text-indigo-600">Parul University, Institute of Engineering and Technology</span> in Vadodara, Gujarat.
            </p>
            <p className="text-lg text-gray-700 mb-4 ">
              I am enthusiastic about coding and have a keen interest in <span className="font-bold text-green-500">Data Structures and Algorithms (DSA)</span> using Python. I am also diving into the world of <span className="font-bold text-green-500">Machine Learning</span> and exploring new technologies to broaden my skill set.
            </p>
            <p className="text-lg text-gray-700 mb-4" >
              My goal is to continually grow as a developer, building projects that challenge me and learning cutting-edge technologies to contribute to real-world solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
