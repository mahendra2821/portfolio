

// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// // --- Your Social Platforms ---
// const socialMedia = [
//   {
//     name: "LinkedIn",
//     icon: <FaLinkedin />,
//     link: "https://www.linkedin.com/in/jammula-mahendra",
//     color: "bg-gradient-to-r from-blue-500 to-blue-800",
//     shadow: "shadow-blue-500/70",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub />,
//     link: "https://github.com/mahendra2821",
//     color: "bg-gradient-to-r from-gray-700 to-black",
//     shadow: "shadow-gray-400/50",
//   },
//   {
//     name: "Twitter",
//     icon: <FaTwitter />,
//     link: "https://x.com/JammulaMahendr3",
//     color: "bg-gradient-to-r from-cyan-400 to-blue-600",
//     shadow: "shadow-cyan-400/50",
//   },
//   {
//     name: "Instagram",
//     icon: <FaInstagram />,
//     link: "https://instagram.com/jammulamahendra_10",
//     color: "bg-gradient-to-r from-pink-500 to-purple-600",
//     shadow: "shadow-pink-500/50",
//   },
// ];

// // --- Custom Particle (shapes) ---
// const Particle = ({ delay }) => {
//   const shapes = ["rounded-full", "rounded-md", "rounded-xl"];
//   const colors = [
//     "bg-yellow-400/40",
//     "bg-pink-400/40",
//     "bg-purple-400/40",
//     "bg-white/20",
//   ];
//   const sizes = ["w-2 h-2", "w-3 h-3", "w-4 h-4", "w-5 h-5", "w-6 h-6"];

//   return (
//     <motion.div
//       className={`absolute ${
//         sizes[Math.floor(Math.random() * sizes.length)]
//       } ${colors[Math.floor(Math.random() * colors.length)]} ${
//         shapes[Math.floor(Math.random() * shapes.length)]
//       }`}
//       initial={{
//         y: "100vh",
//         x: Math.random() * window.innerWidth,
//         opacity: 0,
//       }}
//       animate={{
//         y: ["100vh", "-10vh"],
//         opacity: [0, 1, 0],
//       }}
//       transition={{
//         duration: 8 + Math.random() * 12,
//         repeat: Infinity,
//         delay,
//       }}
//     />
//   );
// };

// const ParticlesBackground = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     {Array.from({ length: 30 }).map((_, i) => (
//       <Particle key={i} delay={Math.random() * 10} />
//     ))}
//   </div>
// );

// const SocialMedia = () => {
//   const particlesInit = async (engine) => {
//     await loadFull(engine);
//   };

//   return (
//     <section
//       id="social-media"
//       className="relative py-20 w-[158vw] sm:w-full bg-black text-white overflow-hidden"
//     >
//       {/* tsparticles base background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         className="absolute inset-0 z-0"
//         options={{
//           background: { color: "transparent" },
//           particles: {
//             number: { value: 60 },
//             color: { value: "#4fd1c5" },
//             opacity: { value: 0.4, random: true },
//             size: { value: 3, random: true },
//             move: { direction: "top", outModes: "out", speed: 1 },
//             links: { enable: true, color: "#3182ce", opacity: 0.2 },
//           },
//           interactivity: {
//             events: { onHover: { enable: true, mode: "bubble" } },
//             modes: { bubble: { distance: 120, size: 6, opacity: 0.6 } },
//           },
//         }}
//       />

//       {/* custom floating shapes */}
//       <ParticlesBackground />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
//         <motion.h2
//           className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 tracking-wide mb-12 animate-text"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           Let's Connect &{" "}
//           <span className="font-[Dancing Script] text-yellow-400 drop-shadow-lg">
//             Collaborate
//           </span>{" "}
//           🚀
//         </motion.h2>

//         {/* Social Media Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {socialMedia.map((platform, index) => (
//             <motion.div
//               key={index}
//               className={`relative group ${platform.color} rounded-2xl p-8 shadow-lg ${platform.shadow} cursor-pointer transform-gpu`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ rotate: [0, 3, -3, 0], scale: 1.1 }}
//             >
//               <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl bg-white/20 animate-pulse"></div>

//               <motion.div
//                 className="text-6xl text-white mb-4 relative z-10"
//                 whileHover={{ rotate: 15, scale: 1.2 }}
//               >
//                 {platform.icon}
//               </motion.div>

//               <h3 className="text-white text-xl font-semibold font-[Poppins] tracking-wide relative z-10">
//                 {platform.name}
//               </h3>

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
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const SocialMedia = () => {
  const socials = [
    {
      number: "01",
      name: "LinkedIn",
      username: "jammula-mahendra",
      link: "https://www.linkedin.com/in/jammula-mahendra",
      icon: <FaLinkedinIn />,
    },
    {
      number: "02",
      name: "GitHub",
      username: "mahendra2821",
      link: "https://github.com/mahendra2821",
      icon: <FaGithub />,
    },
    {
      number: "03",
      name: "X / Twitter",
      username: "@JammulaMahendr3",
      link: "https://x.com/JammulaMahendr3",
      icon: <FaXTwitter />,
    },
    {
      number: "04",
      name: "Instagram",
      username: "M a h e",
      link: "https://instagram.com/jammulamahendra_09",
      icon: <FaInstagram />,
    },
  ];

  return (
    <section
      id="social"
      className="relative bg-[#050505] text-white px-6 md:px-10 lg:px-16 py-28 md:py-36"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center justify-between mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500">
            05 / Connect  
          </span>

          
        </div>

        {/* Main Heading */}
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16 lg:gap-24 mb-24">

          {/* Vertical Typography */}
          <div className="hidden lg:flex items-start">
            <h2
              className="
                text-[clamp(4rem,8vw,8rem)]
                leading-[0.8]
                tracking-[-0.06em]
                font-serif
                text-gray-200
                [writing-mode:vertical-rl]
                rotate-180
              "
            >
              CONNECT
            </h2>
          </div>

          {/* Intro */}
          <div className="max-w-3xl">

            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-7">
               Let's stay in touch
            </p>

            <h3
              className="
                font-serif
                text-5xl md:text-6xl lg:text-7xl
                leading-[0.95]
                tracking-[-0.04em]
                font-normal
                text-gray-100
              "
            >
              Good work
              <br />
              starts with a
              <br />
              conversation.
            </h3>

            <p className="mt-8 max-w-xl text-sm md:text-base leading-7 text-gray-500">
              Whether it is a product idea, development opportunity,
              collaboration, or simply a conversation about technology,
              feel free to reach out.
            </p>
          </div>
        </div>

        {/* Social Index */}
        <div className="border-t border-white/10">

          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                grid
                grid-cols-[40px_1fr_auto]
                md:grid-cols-[60px_1fr_1fr_auto]
                items-center
                gap-4
                md:gap-8
                py-7
                md:py-8
                border-b
                border-white/10
              "
            >

              {/* Number */}
              <span className="text-[10px] tracking-widest text-gray-600">
                {social.number}
              </span>

              {/* Platform */}
              <div className="flex items-center gap-5">

                <span
                  className="
                    text-gray-500
                    group-hover:text-[#b8aa82]
                    transition-colors
                    duration-300
                    text-sm
                  "
                >
                  {social.icon}
                </span>

                <span
                  className="
                    font-serif
                    text-2xl
                    md:text-3xl
                    text-gray-300
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {social.name}
                </span>
              </div>

              {/* Username */}
              <span
                className="
                  hidden
                  md:block
                  text-xs
                  tracking-wide
                  text-gray-600
                  group-hover:text-gray-400
                  transition-colors
                "
              >
                {social.username}
              </span>

              {/* Arrow */}
              <span
                className="
                  text-gray-600
                  group-hover:text-[#b8aa82]
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaArrowUpRightFromSquare className="text-xs" />
              </span>

            </motion.a>
          ))}
        </div>

        {/* Bottom Contact */}
      

        {/* Footer */}
     

      </div>
    </section>
  );
};

export default SocialMedia;