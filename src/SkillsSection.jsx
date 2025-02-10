import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Skill 1 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaReact className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">React.js</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>


            
          {/* Skill 2 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaNodeJs className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Node.js</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <SiMongodb className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">MongoDB</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>

          {/* Skill 4 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <SiExpress className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold">Express.js</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>

          {/* Skill 5 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} >
            <SiTailwindcss className="text-5xl text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold">Tailwind CSS</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>

          {/* Skill 6 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <SiJavascript className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">JavaScript</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>

          {/* Skill 7 */}
          <motion.div
            className="text-center p-6 bg-white hover:text-white hover:bg-slate-700 shadow-lg rounded-lg transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaPython className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold">Python</h3>
            <p className="text-sm text-gray-600 hover:text-white hover:text-white hover:bg-slate-700">Advanced</p>
          </motion.div>

          {/* Skill 8 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaDatabase className="text-5xl text-orange-500 mb-4 hover:text-white hover:bg-slate-700" />
            <h3 className="text-xl font-semibold">SQL</h3>
            <p className="text-sm text-gray-600 hover:text-white hover:bg-slate-700">Advanced</p>
          </motion.div>

          {/* Skill 9 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaGithub className="text-5xl text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-sm text-gray-600 hover:text-white hover:bg-slate-700">Intermediate</p>
          </motion.div>

          {/* Skill 10 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaHtml5 className="text-5xl text-orange-600 mb-4 " />
            <h3 className="text-xl font-semibold">HTML5</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>

          {/* Skill 11 */}
          <motion.div
            className="text-center p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105 hover:text-white hover:bg-slate-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} 
          >
            <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">CSS3</h3>
            <p className="text-sm text-gray-600">Advanced</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

