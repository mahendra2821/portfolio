// import React from 'react';
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900  py-12 w-[150vw] sm:w-full text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Footer Top Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
//           {/* Logo or Brand */}
//           <motion.div
//             className="text-3xl font-bold text-blue-500"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h1></h1>
//           </motion.div>

//           {/* Quick Links */}
//           <div className="flex flex-wrap justify-center gap-6 mt-4 sm:mt-0">
//             <motion.a
//               href="#about"
//               className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition duration-300"
//               whileHover={{ scale: 1.1, color: "#fff" }}
//               transition={{ duration: 0.3 }}
//             >
//               About
//             </motion.a>
//             <motion.a
//               href="#projects"
//               className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition duration-300"
//               whileHover={{ scale: 1.1, color: "#fff" }}
//               transition={{ duration: 0.3 }}
//             >
//               Projects 
//             </motion.a>
//             <motion.a
//               href="#skills"
//               className="text-lg font-semibold text-gray-400 hover:text-blue-500 transition duration-300"
//               whileHover={{ scale: 1.1, color: "#fff" }}
//               transition={{ duration: 0.3 }}
//             >
//               Skills
//             </motion.a>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           {/* Social Media Links */}
//           <div className="flex gap-6 mb-6 sm:mb-0">
//             <motion.a
//               href="https://github.com/mahendra2821"
//               target="_blank"
//               rel="noopener noreferrer"


//               className="text-3xl hover:text-gray-500 transition duration-300"
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaGithub />
//             </motion.a>
//             <motion.a
//               href="https://www.linkedin.com/in/jammula-mahendra"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-blue-500 transition duration-300"
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaLinkedin />
//             </motion.a>
//             <motion.a
//               href="https://x.com/JammulaMahendr3"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-blue-400 transition duration-300"
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaTwitter />
//             </motion.a>
//             <motion.a
//               href="https://instagram.com/jammulamahendra_10"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-3xl hover:text-pink-500 transition duration-300"
//               whileHover={{ scale: 1.2 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaInstagram />
//             </motion.a>
//           </div>

//           {/* Copyright Text */}
//           <p className="text-center text-gray-400 text-sm">
//             &copy; {new Date().getFullYear()} Jammula Mahendra Babu. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-[158vw] sm:w-full bg-black text-white py-16  overflow-hidden">

      {/* Glowing Gradient Border */}
      <div className="absolute inset-0">
        {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div> */}

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand / Logo */}
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jammula Mahendra Babu
          </motion.h1>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
            {["About", "Projects", "Skills"].map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-400 hover:text-white transition"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div> */}

        {/* Social + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-8 text-3xl">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/mahendra2821",
                color: "hover:text-gray-400",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/jammula-mahendra",
                color: "hover:text-blue-500",
              },
              {
                icon: <FaTwitter />,
                link: "https://x.com/JammulaMahendr3",
                color: "hover:text-cyan-400",
              },
              {
                icon: <FaInstagram />,
                link: "https://instagram.com/jammulamahendra_10",
                color: "hover:text-pink-500",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition ${item.color}`}
                whileHover={{ scale: 1.3, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="text-green-400">Jammula Mahendra Babu</span>. All
            Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
