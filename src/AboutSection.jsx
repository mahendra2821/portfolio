import React from "react";
import myImage from "./assets/pic_3.jpg";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] text-[#eeeeeb] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-20 sm:pt-24 lg:pt-28"
        >
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">

            <span className="text-[8px] uppercase tracking-[0.35em] text-gray-600">
              01
            </span>

            <span className="text-[8px] uppercase tracking-[0.35em] text-gray-700">
              About Me
            </span>

          </div>
        </motion.div>


        {/* =====================================================
            SMALL CLASSIC HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-14 sm:pt-16 lg:pt-20"
        >

          <p className="text-[8px] uppercase tracking-[0.35em] text-gray-600 mb-5">
            Introduction
          </p>

          <h2
            className="
              font-serif
              font-normal
              text-3xl
              sm:text-4xl
              lg:text-[3.2rem]
              leading-[1.05]
              tracking-[-0.025em]
              text-[#e5e5e1]
            "
          >
            A little about me.
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-gray-600 max-w-md leading-6">
            Developer · Builder · Curious by nature
          </p>

        </motion.div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 mt-16 lg:mt-20">


          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="max-w-sm">

              <img
                src={myImage}
                alt="Mahendra"
                className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  grayscale
                  opacity-90
                  hover:grayscale-0
                  transition-all
                  duration-700
                "
              />

              <div className="flex items-center justify-between mt-4">

                <span className="text-[8px] uppercase tracking-[0.3em] text-gray-600">
                  Jammula Mahendra
                </span>

                <span className="text-[8px] uppercase tracking-[0.3em] text-gray-700">
                  2026
                </span>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              TEXT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >

            {/* INTRODUCTION */}

            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-[1.6] font-light text-gray-300">

              I'm{" "}
              <span className="text-white">
                Mahendra
              </span>
              , a Full Stack Developer interested in building
              thoughtful, useful and reliable digital products.

            </p>


            {/* DESCRIPTION */}

            <div className="mt-7 max-w-lg space-y-5">

              <p className="text-xs sm:text-sm leading-7 text-gray-500">

                I work across frontend and backend development,
                turning ideas into practical web applications with
                clean interfaces and maintainable systems.

              </p>

              <p className="text-xs sm:text-sm leading-7 text-gray-500">

                My primary tools include{" "}
                <span className="text-gray-300">
                  React, Node.js, Python and FastAPI
                </span>
                , with a growing focus on Generative AI,
                LLM applications and modern backend architecture.

              </p>

            </div>


            {/* =================================================
                DETAILS
            ================================================== */}

            <div className="grid grid-cols-3 border-y border-white/[0.08] mt-9">

             


              <div className="py-5 px-4 border-r border-white/[0.08]">

                <p className="text-[8px] uppercase tracking-[0.28em] text-gray-600">
                  Discipline
                </p>

                <p className="mt-2 text-xs text-gray-300">
                  Full Stack
                </p>

              </div>


              <div className="py-5 pl-4">

                <p className="text-[8px] uppercase tracking-[0.28em] text-gray-600">
                  Interest
                </p>

                <p className="mt-2 text-xs text-gray-300">
                  AI / LLMs
                </p>

              </div>

            </div>


            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <div className="mt-8">

              <p className="text-[8px] uppercase tracking-[0.3em] text-gray-600 mb-4">
                Selected technologies
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2">

                {[
                  "React.js",
                  "Node.js",
                  "Python",
                  "FastAPI",
                  "MongoDB",
                  "SQL",
                  "LangChain",
                  "Generative AI",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-xs
                      text-gray-500
                      hover:text-gray-200
                      transition-colors
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>


            {/* =================================================
                LINK
            ================================================== */}

            <motion.a
              href="#projects"
              whileHover={{ x: 4 }}
              className="
                group
                inline-flex
                items-center
                gap-2.5
                mt-8
                w-fit
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-[#b8aa82]
                hover:text-[#d0c29a]
                transition-colors
                duration-300
              "
            >

              <span className="border-b border-[#b8aa82]/30 pb-1.5">
                Explore selected work
              </span>

              <FiArrowUpRight
                size={12}
                className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition
                "
              />

            </motion.a>

          </motion.div>

        </div>


        {/* =====================================================
            FOOTER STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-24 py-6 border-t border-white/[0.08]"
        >

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <p className="text-xs text-gray-600">
              Building with curiosity, clarity and purpose.
            </p>

            <span className="text-[7px] uppercase tracking-[0.35em] text-gray-700">
              Hyderabad · India
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
