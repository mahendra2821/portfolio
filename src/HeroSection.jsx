


import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import coderIcon from "./assets/Coder_Icon.webp";

const HeroSection = () => {
  return (
    <section
      id="resume"
      className="relative min-h-screen w-full bg-[#050505] text-[#f3f0e8] overflow-hidden"
    >
      <div className="relative z-10 min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <div
          className="
            relative
            min-h-[650px]
            lg:min-h-screen
            flex
            flex-col
            justify-between
            px-7
            sm:px-10
            lg:px-16
            xl:px-24
            py-8
            sm:py-10
            lg:py-12
          "
        >

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="max-w-xl my-auto"
          >

            {/* INTRO */}

            <p
              className="
                mb-4
                text-[15px]
                uppercase
                tracking-[0.35em]
                text-[#77736b]
              "
            >
              Hello, I'm
            </p>

            {/* NAME */}

            <h1
              className="
                font-serif
                text-[4.5rem]
                sm:text-[5.5rem]
                md:text-[6rem]
                lg:text-[6.2rem]
                xl:text-[6.5rem]
                leading-[0.82]
                tracking-[-0.055em]
                font-semibold
                text-[#d2b55b]
              "
            >
              Mahendra.
            </h1>

            {/* ROLE */}

            <h2
              className="
                mt-8
                text-xl
                sm:text-2xl
                font-light
                tracking-[-0.02em]
                text-[#e6e2d9]
              "
            >
              Full Stack Developer
            </h2>

            <p
              className="
                mt-2
                text-xs
                sm:text-sm
                tracking-[0.04em]
                text-[#77736b]
              "
            >
              Fresher · React · Node.js · Python · AI
            </p>

            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-2
                mt-7
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[#66635d]
              "
            >
              <FiMapPin
                size={11}
                className="text-[#a88f4c]"
              />

              Hyderabad, India
            </div>

            {/* ACTIONS */}

            <div className="flex items-center gap-9 mt-9">

              {/* RESUME */}

              <motion.a
                href="/Jammula_Mahendra_Babu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  text-[15px]
                  uppercase
                  tracking-[0.22em]
                  text-[#d2b55b]
                  hover:text-[#ead27b]
                  transition-colors
                  duration-300
                "
              >
                <span
                  className="
                    border-b
                    border-[#d2b55b]/40
                    pb-1.5
                    group-hover:border-[#d2b55b]
                    transition-colors
                  "
                >
                  View Resume
                </span>

                <FiArrowUpRight
                  size={15}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </motion.a>

              {/* PROJECTS */}

              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  text-[15px]
                  uppercase
                  tracking-[0.22em]
                  text-[#8f8b83]
                  hover:text-[#e6e2d9]
                  transition-colors
                  duration-300
                "
              >
                <span
                  className="
                    border-b
                    border-[#77736b]/30
                    pb-1.5
                    group-hover:border-[#aaa49a]
                    transition-colors
                  "
                >
                  View Projects
                </span>

                <FiArrowUpRight
                  size={13}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </motion.a>

            </div>

          </motion.div>

          {/* BOTTOM */}

          <div
            className="
              flex
              items-center
              justify-between
              pt-8
            "
          >

           
            <span
              className="
                hidden
                sm:block
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-[#45433f]
              "
            >
              Open to opportunities
            </span>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            relative
            min-h-[450px]
            lg:min-h-screen
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          {/* TOP LABEL */}

          <div
            className="
              absolute
              top-8
              right-7
              sm:right-10
              lg:right-14
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-[#4d4a45]
              "
            >
              CSE · AI · 2026
            </span>
          </div>

          {/* CODER IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              w-[68%]
              sm:w-[58%]
              lg:w-[65%]
              xl:w-[58%]
              flex
              items-center
              justify-center
            "
          >
            <img
              src={coderIcon}
              alt="Developer illustration"
              className="
                w-full
                h-auto
                object-contain
                grayscale
                opacity-90
              "
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;