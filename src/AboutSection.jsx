




import React from 'react';
import myImage from './assets/pic_3.jpg'; // Adjust the path as needed
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center text-white mb-8 font-[Playfair Display]">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* About Image on Left Side */}
          <motion.div
            className="md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img 
              src={myImage} 
              alt="Your Image" 
              className="rounded-[15px] w-full h-full mx-auto shadow-lg"
            />
          </motion.div>

          {/* About Intro with Classic Fonts */}
          <motion.div
            className="md:w-2/3 ml-[6vw]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
              I am a <span className="font-bold text-blue-600 font-[Merriweather]"> Passionate</span> 
              <span className="text-yellow-400 font-[EB Garamond]"> Full Stack Developer</span> and
              <span className="italic text-pink-500 font-[Cormorant Garamond]"> Problem Solver</span>, 
              specializing in the <span className="font-bold text-blue-600 font-[Playfair Display]">MERN stack </span> 
               <span className="text-green-400 font-[Source Code Pro]"> (MongoDB</span>, 
              <span className="text-red-400 font-[Source Code Pro]"> Express.js</span>, 
              <span className="text-cyan-400 font-[Source Code Pro]"> React.js</span>, 
              <span className="text-purple-400 font-[Source Code Pro]"> Node.js</span>).
            </p>

            <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
               Currently, I am pursuing my 
              <span className="font-bold text-green-500 font-[Merriweather]"> B.Tech </span> in 
              <span className="text-indigo-400 font-[Playfair Display]"> Computer Science and Engineering </span> 
              with a focus on 
              <span className="text-yellow-500 font-[Cormorant Garamond]"> Artificial Intelligence </span> 
              at <span className="text-indigo-600 font-[EB Garamond]"> Parul University </span> in 
              <span className="text-pink-400 font-[Merriweather]"> Vadodara, Gujarat </span>.
            </p>

            <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
              I am enthusiastic about 
              <span className="font-bold text-green-500 font-[Merriweather]"> Data Structures and Algorithms (DSA) </span> 
              using <span className="text-orange-400 font-[Source Code Pro]"> Python </span>. 
              I am also diving into the world of 
              <span className="text-blue-400 font-[EB Garamond]"> Machine Learning </span> 
               and exploring new technologies to broaden my skill set.
            </p>

            <p className="text-lg text-white mb-4 font-[Lora] leading-relaxed">
               My goal is to continually 
              <span className="font-bold text-red-500 font-[Playfair Display]"> Grow</span> as a  
              <span className="text-green-300 font-[Merriweather]">Developer</span>, 
               building projects that challenge me and learning 
              <span className="text-yellow-400 font-[Cormorant Garamond]"> cutting-edge technologies </span> 
               to contribute to 
              <span className="text-purple-500 font-[EB Garamond]"> real-world solutions </span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
