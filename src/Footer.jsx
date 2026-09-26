


// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="relative w-[158vw] sm:w-full bg-black text-white py-16  overflow-hidden">

//       {/* Glowing Gradient Border */}
//       <div className="absolute inset-0">
//         {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div> */}

//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Brand & Links */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
//           {/* Brand / Logo */}
//           <motion.h1
//             className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Jammula Mahendra Babu
//           </motion.h1>

//           {/* Quick Links */}
//           <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
//             {["About", "Projects", "Skills"].map((link, index) => (
//               <motion.a
//                 key={index}
//                 href={`#${link.toLowerCase()}`}
//                 className="relative text-gray-400 hover:text-white transition"
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {link}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 transition-all group-hover:w-full"></span>
//               </motion.a>
//             ))}
//           </div>
//         </div>

//         {/* Divider */}
//         {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div> */}

//         {/* Social + Copyright */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           {/* Social Icons */}
//           <div className="flex gap-8 text-3xl">
//             {[
//               {
//                 icon: <FaGithub />,
//                 link: "https://github.com/mahendra2821",
//                 color: "hover:text-gray-400",
//               },
//               {
//                 icon: <FaLinkedin />,
//                 link: "https://www.linkedin.com/in/jammula-mahendra",
//                 color: "hover:text-blue-500",
//               },
//               {
//                 icon: <FaTwitter />,
//                 link: "https://x.com/JammulaMahendr3",
//                 color: "hover:text-cyan-400",
//               },
//               {
//                 icon: <FaInstagram />,
//                 link: "https://instagram.com/jammulamahendra_10",
//                 color: "hover:text-pink-500",
//               },
//             ].map((item, i) => (
//               <motion.a
//                 key={i}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`transition ${item.color}`}
//                 whileHover={{ scale: 1.3, rotate: 8 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {item.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Copyright */}
//           <motion.p
//             className="text-gray-500 text-sm text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             © {new Date().getFullYear()}{" "}
//             <span className="text-green-400">Jammula Mahendra Babu</span>. All
//             Rights Reserved.
//           </motion.p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/mahendra2821",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jammula-mahendra",
    },
    {
      name: "X",
      icon: <FaTwitter />,
      link: "https://x.com/JammulaMahendr3",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/jammulamahendra_10",
    },
  ];

  return (
    <footer className="bg-[#050505] text-white">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Top Divider */}
        

        {/* Footer Main */}
        <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Name */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              font-serif
              text-2xl
              text-gray-200
              hover:text-white
              transition-colors
              duration-300
            "
          >
           
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="#about"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#certifications"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Certifications
            </a>

            <a
              href="#contact"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-5">

           
          

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between gap-3">

          <p className="text-[10px] tracking-wide text-gray-600">
            © {new Date().getFullYear()} Jammula Mahendra Babu
          </p>

          <p className="text-[10px] tracking-wide text-gray-700">
            Designed & Built with React
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;