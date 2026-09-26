



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaWhatsapp } from 'react-icons/fa';

// const ContactUs = () => {
//   const phoneNumber = 9398944199;  // Replace with your actual phone number
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;

//   return (
//     <section id="contact-us" className="relative w-[150vw] sm:w-full bg-black text-white">
//       {/* Background animation */}
//       <motion.div
//         className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 blur-[2px]"
//         style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}
//         animate={{ scale: 1.1 }}
//         transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
//       />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
//         <motion.h2 
//           className="text-5xl font-extrabold mb-4 tracking-wide font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false }}
//         >
//           Reach Out to <span className="text-green-400 font-[Dancing Script]">Me!</span>
//         </motion.h2>

//         <motion.p 
//           className="text-lg mb-8 font-[Montserrat] text-gray-300"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Have any questions or want to start a project? Let’s talk! Click below to start a WhatsApp chat.
//         </motion.p>
        
//         <motion.a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xl font-semibold rounded-xl shadow-2xl transition-all transform hover:scale-110 hover:rotate-3 hover:shadow-green-500/50"
//           whileHover={{ scale: 1.1, rotate: -3 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <FaWhatsapp className="text-3xl mr-3 animate-pulse text-green-300" />
//           <span className="font-[Raleway]">Chat with me on WhatsApp</span>
//         </motion.a>
        
//         {/* Optional description */}
//         <motion.p
//           className="mt-6 text-lg opacity-0 font-[Crimson Pro] text-gray-400"
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           I'm always ready to assist you with your needs. Whether it's a project or just a question, feel free to reach out.
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;



// import React from "react";
// import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// const ContactUs = () => {
//   const phoneNumber = 9398944199; // Replace with your actual number
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;

//   // tsparticles init
//   const particlesInit = async (engine) => {
//     await loadFull(engine);
//   };

//   return (
//     <section
//       id="contact-us"
//       className="relative w-[158vw] sm:w-full bg-black text-white py-20 overflow-hidden"
//     >
//       {/* Particle Background */}
//       <Particles
//         id="contactParticles"
//         init={particlesInit}
//         className="absolute inset-0 z-0"
//         options={{
//           background: { color: "transparent" },
//           particles: {
//             number: { value: 50 },
//             color: { value: "#00ff99" },
//             shape: { type: ["circle", "triangle", "star"] },
//             opacity: { value: 0.4, random: true },
//             size: { value: { min: 2, max: 6 } },
//             move: { enable: true, speed: 1.2, direction: "top", outModes: "out" },
//           },
//           interactivity: {
//             events: { onHover: { enable: true, mode: "repulse" } },
//             modes: { repulse: { distance: 120, duration: 0.4 } },
//           },
//         }}
//       />

//       {/* Floating glowing orbs for depth */}
//       <motion.div
//         className="absolute top-20 left-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"
//         animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
//         animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
//         <motion.h2
//           className="text-5xl font-extrabold mb-6 tracking-wide font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-teal-500 drop-shadow-lg"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           Let’s <span className="text-green-400 font-[Dancing Script]">Connect</span> 🌊
//         </motion.h2>

//         <motion.p
//           className="text-lg mb-12 font-[Montserrat] text-gray-300"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           Have any questions or want to start a project?  
//           Just tap below and we’ll chat instantly on WhatsApp.
//         </motion.p>

//         {/* WhatsApp Card Button */}
//         <motion.a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative inline-flex items-center px-10 py-6 bg-white/10 backdrop-blur-md border border-green-400/30 rounded-2xl shadow-lg text-xl font-semibold tracking-wide text-green-300 overflow-hidden group"
//           whileHover={{ scale: 1.1, rotate: -2 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {/* Glow Ring */}
//           <motion.span
//             className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 opacity-20 group-hover:opacity-40 blur-2xl"
//             animate={{ opacity: [0.2, 0.4, 0.2] }}
//             transition={{ duration: 3, repeat: Infinity }}
//           />
//           <FaWhatsapp className="text-4xl mr-4 animate-pulse" />
//           <span className="font-[Raleway] z-10">
//             Chat with me on WhatsApp
//           </span>
//         </motion.a>

//         {/* Closing line */}
//         <motion.p
//           className="mt-10 text-lg font-[Crimson Pro] text-gray-400"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           Always open to ideas, collaborations, and exciting opportunities 🚀
//         </motion.p>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;




import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";

const ContactUs = () => {
  const phoneNumber = "9398944199";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;

  return (
    <section
      id="contact-us"
      className="relative w-full bg-[#050505] text-white py-24 sm:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-yellow-400" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Contact
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>
              <p className="text-xs font-mono text-gray-700 mb-4">
                06
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Let's build
                <br />
                <span className="text-gray-600">
                  something together.
                </span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-7 text-gray-600">
                Have a project idea, job opportunity, or just want to
                connect? I'm always open to meaningful conversations.
              </p>
            </div>

          </div>
        </motion.div>

        {/* ================= CONTACT CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border-t border-b border-white/[0.08]"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 py-10 sm:py-12"
          >

            {/* LEFT */}

            <div className="flex items-center gap-5">

              <div className="w-12 h-12 border border-white/[0.1] flex items-center justify-center text-gray-500 group-hover:text-yellow-400 group-hover:border-yellow-400/30 transition-all duration-300">
                <FaWhatsapp size={22} />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-gray-700 mb-2">
                  Direct message
                </p>

                <h3 className="text-lg sm:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                  Chat with me on WhatsApp
                </h3>

                <p className="text-xs text-gray-700 mt-1">
                  Usually responds within a reasonable time
                </p>
              </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3 text-gray-600 group-hover:text-yellow-400 transition-colors">
              <span className="text-xs uppercase tracking-[0.2em]">
                Start a conversation
              </span>

              <div className="w-9 h-9 border border-white/[0.08] flex items-center justify-center group-hover:border-yellow-400/30 transition-all duration-300">
                <FiArrowUpRight size={15} />
              </div>
            </div>

          </a>
        </motion.div>

        {/* ================= SMALL CONTACT INFO ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
        >

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FiMessageCircle
                size={14}
                className="text-yellow-400"
              />

              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
                Availability
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Open to opportunities
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-gray-700 mb-3">
              Location
            </p>

            <p className="text-sm text-gray-500">
              Hyderabad · India
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-gray-700 mb-3">
              Focus
            </p>

            <p className="text-sm text-gray-500">
              Full Stack · AI · LLM
            </p>
          </div>

        </motion.div>

        {/* ================= FOOTER LINE ================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-16 pt-6 border-t border-white/[0.05]">

          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-800">
            Mahendra · Full Stack Developer
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-800">
            06 / Contact
          </span>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;