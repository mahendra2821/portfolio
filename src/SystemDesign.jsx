import { motion } from "framer-motion";
import {
  Network,
  Database,
  Server,
  GitBranch,
  Layers3,
} from "lucide-react";

const systemDesignItems = [
  {
    number: "01",
    icon: Network,
    title: "Scalability",
    description:
      "Load balancing, horizontal scaling, replication, sharding, and distributed systems.",
    topics: "Load Balancing · Replication · Sharding",
  },
  {
    number: "02",
    icon: Database,
    title: "Database Design",
    description:
      "Designing efficient data models with indexing, normalization, partitioning, and query optimization.",
    topics: "SQL · NoSQL · Indexing",
  },
  {
    number: "03",
    icon: Server,
    title: "Backend Architecture",
    description:
      "Building modular backend systems with APIs, services, authentication, and clean architecture.",
    topics: "REST APIs · Services · Authentication",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "Caching & Performance",
    description:
      "Improving application performance using caching strategies, Redis, CDNs, and efficient queries.",
    topics: "Redis · CDN · Performance",
  },
  {
    number: "05",
    icon: Layers3,
    title: "API Design",
    description:
      "Designing reliable and maintainable APIs with clear contracts, validation, security, and scalability.",
    topics: "REST · GraphQL · Security",
  },
];

const SystemDesign = () => {
  return (
    <section
      id="system-design"
      className="w-full bg-[#050505] text-white py-24 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-yellow-400" />

            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Architecture
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              System Design
              <br />
              <span className="text-gray-500">
                & architecture.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-600 md:text-right">
              Understanding how applications scale, communicate, store data,
              and remain reliable as they grow.
            </p>
          </div>
        </motion.div>

        {/* System Design List */}
        <div className="border-t border-white/[0.08]">
          {systemDesignItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group grid grid-cols-[45px_45px_1fr] md:grid-cols-[60px_55px_1fr_260px] gap-4 md:gap-6 items-center py-7 md:py-8 border-b border-white/[0.08] hover:bg-white/[0.015] transition-colors duration-300"
              >
                {/* Number */}
                <span className="text-xs font-mono text-gray-700 group-hover:text-yellow-400/70 transition">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-gray-500 group-hover:text-yellow-400 group-hover:border-yellow-400/20 transition-all duration-300">
                  <Icon size={17} strokeWidth={1.5} />
                </div>

                {/* Main Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-200 group-hover:text-white transition">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Topics */}
                <div className="hidden md:block text-right">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700 mb-2">
                    Key Topics
                  </p>

                  <p className="text-[10px] leading-5 text-gray-500">
                    {item.topics}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-700">
            Designing for reliability · scalability · simplicity
          </p>

          <span className="text-xs text-gray-600">
            Learning & building
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default SystemDesign;