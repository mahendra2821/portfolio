



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



import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ContactUs = () => {
  const phoneNumber = 9398944199; // Replace with your actual number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;

  // tsparticles init
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="contact-us"
      className="relative w-[158vw] sm:w-full bg-black text-white py-20 overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="contactParticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: "#00ff99" },
            shape: { type: ["circle", "triangle", "star"] },
            opacity: { value: 0.4, random: true },
            size: { value: { min: 2, max: 6 } },
            move: { enable: true, speed: 1.2, direction: "top", outModes: "out" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
        }}
      />

      {/* Floating glowing orbs for depth */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.h2
          className="text-5xl font-extrabold mb-6 tracking-wide font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-teal-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Let’s <span className="text-green-400 font-[Dancing Script]">Connect</span> 🌊
        </motion.h2>

        <motion.p
          className="text-lg mb-12 font-[Montserrat] text-gray-300"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Have any questions or want to start a project?  
          Just tap below and we’ll chat instantly on WhatsApp.
        </motion.p>

        {/* WhatsApp Card Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center px-10 py-6 bg-white/10 backdrop-blur-md border border-green-400/30 rounded-2xl shadow-lg text-xl font-semibold tracking-wide text-green-300 overflow-hidden group"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow Ring */}
          <motion.span
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 opacity-20 group-hover:opacity-40 blur-2xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <FaWhatsapp className="text-4xl mr-4 animate-pulse" />
          <span className="font-[Raleway] z-10">
            Chat with me on WhatsApp
          </span>
        </motion.a>

        {/* Closing line */}
        <motion.p
          className="mt-10 text-lg font-[Crimson Pro] text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Always open to ideas, collaborations, and exciting opportunities 🚀
        </motion.p>
      </div>
    </section>
  );
};

export default ContactUs;


