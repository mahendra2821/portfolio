import { motion } from "framer-motion";
import { Network, Database, Server, Cloud, GitBranch } from "lucide-react";

const SystemDesign = () => {
  return (
    <section
      id="system-design"
      className="w-[158vw] sm:w-full bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 font-[Playfair Display]">
          System <span className="text-blue-500">Design Skills</span>
        </h2>

        {/* Grid of Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700"
          >
            <Network className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p className="text-gray-400 text-sm">
              Load balancing, sharding, replication, distributed systems.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700"
          >
            <Database className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Design</h3>
            <p className="text-gray-400 text-sm">
              SQL & NoSQL, indexing, partitioning, query optimization.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700"
          >
            <Server className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Microservices</h3>
            <p className="text-gray-400 text-sm">
              Modular architecture, APIs, service discovery, event-driven.
            </p>
          </motion.div>

       

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700"
          >
            <GitBranch className="w-10 h-10 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Caching & CDNs</h3>
            <p className="text-gray-400 text-sm">
              Redis, Memcached, edge computing, performance tuning.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700"
          >
            <Server className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">API Design</h3>
            <p className="text-gray-400 text-sm">
              REST & GraphQL, authentication, security, scalability.
            </p>
          </motion.div>
        </div>

        </div>
    </section>
  );
};

export default SystemDesign;
