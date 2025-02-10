import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const phoneNumber = 9398944199;  // Replace with your actual phone number
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;

  return (
    <section id="contact-us" className="relative py-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Reach Out to Me!
        </h2>
        <p className="text-lg mb-8">
          Have any questions or want to start a project? Let’s talk! Click below to start a WhatsApp chat.
        </p>
        
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-transform hover:scale-110 hover:rotate-3 hover:bg-gradient-to-l"
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-3xl mr-3 animate-pulse" />
          Chat with me on WhatsApp
        </motion.a>
        
        {/* Optional description */}
        <motion.p
          className="mt-6 text-lg opacity-0 animate__animated animate__fadeIn animate__delay-1s"
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I'm always ready to assist you with your needs. Whether it's a project or just a question, feel free to reach out.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactUs;
