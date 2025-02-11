// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

// const socialMedia = [
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin />,
//     link: "https://www.linkedin.com/in/yourprofile",
//     color: "bg-blue-600 hover:bg-blue-700",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub />,
//     link: "https://github.com/yourprofile",
//     color: "bg-gray-800 hover:bg-gray-900",
//   },
//   {
//     name: "Twitter",
//     icon: <FaTwitter />,
//     link: "https://twitter.com/yourprofile",
//     color: "bg-blue-400 hover:bg-blue-500",
//   },
//   {
//     name: "Instagram",
//     icon: <FaInstagram />,
//     link: "https://instagram.com/yourprofile",
//     color: "bg-pink-500 hover:bg-pink-600",
//   },
// ];

// const SocialMedia = () => {
//   return (
//     <section id="social-media" className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">
//           Follow Me Online
//         </h2>
//         <p className="text-gray-600 mb-12 text-lg">
//           Stay connected and check out my work or updates on these platforms.
//         </p>
//         <div className="flex justify-center space-x-6">
//           {socialMedia.map((platform, index) => (
//             <motion.a
//               key={index}
//               href={platform.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center justify-center w-16 h-16 text-white text-2xl rounded-full transition-transform duration-300 ${platform.color}`}
//               whileHover={{ scale: 1.2, rotate: 10 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {platform.icon}
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialMedia;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

// const socialMedia = [
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin />,
//     link: "https://www.linkedin.com/in/jammula-mahendra",
//     color: "bg-blue-600",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub />,
//     link: "https://github.com/mahendra2821",
//     color: "bg-gray-800",
//   },
//   {
//     name: "Twitter",
//     icon: <FaTwitter />,
//     link: "https://x.com/JammulaMahendr3",
//     color: "bg-blue-400",
//   },
//   {
//     name: "Instagram",
//     icon: <FaInstagram />,
//     link: "https://instagram.com/jammulamahendra_10",
//     color: "bg-pink-500",
//   },
// ];

// const SocialMedia = () => {
//   return (
//     <section id="social-media" className="py-16 bg-black">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl font-bold text-center text-white mb-8">
//           Connect With Me
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {socialMedia.map((platform, index) => (
//             <motion.div
//               key={index}
//               className={`relative group ${platform.color} rounded-lg p-6 shadow-lg cursor-pointer`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-lg"
//                 style={{
//                   animationDuration: "1.5s",
//                   animationTimingFunction: "ease-in-out",
//                   backgroundPosition: "-100%",
//                   backgroundSize: "200% auto",
//                 }}
//               ></motion.div>
//               <div className="flex flex-col items-center">
//                 <motion.div
//                   className="text-5xl text-white mb-4 group-hover:scale-110 transition-transform duration-300"
//                   whileHover={{ rotate: 10 }}
//                 >
//                   {platform.icon}
//                 </motion.div>
//                 <h3 className="text-white text-lg font-semibold">
//                   {platform.name}
//                 </h3>
//               </div>
//               <a
//                 href={platform.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute inset-0"
//               ></a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialMedia;




import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/jammula-mahendra",
    color: "bg-gradient-to-r from-blue-500 to-blue-800",
    shadow: "shadow-blue-500/50",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/mahendra2821",
    color: "bg-gradient-to-r from-gray-700 to-black",
    shadow: "shadow-gray-400/50",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://x.com/JammulaMahendr3",
    color: "bg-gradient-to-r from-cyan-400 to-blue-600",
    shadow: "shadow-cyan-400/50",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/jammulamahendra_10",
    color: "bg-gradient-to-r from-pink-500 to-purple-600",
    shadow: "shadow-pink-500/50",
  },
];

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Enhanced Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-wide mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Let's Connect & <span className="font-[Dancing Script] text-yellow-400">Collaborate</span> 🚀
        </motion.h2>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {socialMedia.map((platform, index) => (
            <motion.div
              key={index}
              className={`relative group ${platform.color} rounded-xl p-6 shadow-lg ${platform.shadow} cursor-pointer transform transition-all hover:scale-110 hover:shadow-xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-700 rounded-xl"
              ></motion.div>

              {/* Social Icon */}
              <motion.div
                className="text-6xl text-white mb-4 group-hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: 15 }}
              >
                {platform.icon}
              </motion.div>

              {/* Platform Name */}
              <h3 className="text-white text-xl font-semibold font-[Poppins] tracking-wide">
                {platform.name}
              </h3>

              {/* Clickable Area */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              ></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
