

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiArrowUpRight,
//   FiX,
//   FiAward,
// } from "react-icons/fi";

// import pic15 from "./assets/pic_15.png";
// import pic16 from "./assets/pic_16.png";
// import pic17 from "./assets/pic_17.png";
// import pic18 from "./assets/pic_18.png";
// import pic19 from "./assets/pic_19.png";
// import pic23 from "./assets/pic_23.png";
// import pic24 from "./assets/pic_24.png";
// import pic25 from "./assets/pic_25.png";
// import pic26 from "./assets/pic_26.png";
// import pic27 from "./assets/pic_27.png";
// import pic28 from "./assets/pic_28.png";

// const certifications = [
//   {
//     number: "01",
//     title: "Generative AI Mega Workshop",
//     authority: "NXTWAVE ACADEMY",
//     date: "Sep 2024",
//     image: pic28,
//   },
//   {
//     number: "02",
//     title: "Generative AI Mega Workshop 2.0",
//     authority: "NXTWAVE ACADEMY",
//     date: "Sep 2024",
//     image: pic27,
//   },
//   {
//     number: "03",
//     title: "React Js",
//     authority: "NXTWAVE ACADEMY",
//     date: "Jul 2024",
//     image: pic15,
//   },
//   {
//     number: "04",
//     title: "Node Js",
//     authority: "NXTWAVE ACADEMY",
//     date: "Mar 2024",
//     image: pic16,
//   },
//   {
//     number: "05",
//     title: "Responsive Web Design",
//     authority: "NXTWAVE ACADEMY",
//     date: "Jan 2024",
//     image: pic17,
//   },
//   {
//     number: "06",
//     title: "Databases",
//     authority: "NXTWAVE ACADEMY",
//     date: "Dec 2023",
//     image: pic18,
//   },
//   {
//     number: "07",
//     title: "JavaScript Essentials",
//     authority: "NXTWAVE ACADEMY",
//     date: "Dec 2023",
//     image: pic25,
//   },
//   {
//     number: "08",
//     title: "Dynamic Web Application",
//     authority: "NXTWAVE ACADEMY",
//     date: "Oct 2023",
//     image: pic24,
//   },
//   {
//     number: "09",
//     title: "Python Foundations",
//     authority: "NXTWAVE ACADEMY",
//     date: "Sep 2023",
//     image: pic23,
//   },
//   {
//     number: "10",
//     title: "Computer Networks",
//     authority: "IIT Kharagpur",
//     date: "May 2024",
//     image: pic19,
//   },
//   {
//     number: "11",
//     title: "ChatGPT & AI Tools",
//     authority: "Be10x",
//     date: "Sep 2024",
//     image: pic26,
//   },
// ];

// const Certifications = () => {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <section
//       id="certificates"
//       className="relative w-full bg-[#050505] text-white py-24 sm:py-28 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

//         {/* HEADER */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <div className="flex items-center gap-3 mb-5">
//             <span className="w-7 h-px bg-yellow-400" />

//             <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
//               Credentials
//             </span>
//           </div>

//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

//             <div>
//               <p className="text-xs font-mono text-gray-700 mb-4">
//                 04
//               </p>

//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
//                 Certifications
//                 <span className="text-gray-600">.</span>
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-7 text-gray-600 md:text-right">
//               A record of continuous learning across software development,
//               programming, databases, and artificial intelligence.
//             </p>

//           </div>
//         </motion.div>

//         {/* TOP LINE */}

//         <div className="border-t border-white/[0.08]">

//           {/* DESKTOP HEADER */}

//           <div className="hidden md:grid grid-cols-[70px_1fr_180px_50px] gap-6 py-4 border-b border-white/[0.08]">

//             <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
//               No.
//             </span>

//             <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
//               Certification
//             </span>

//             <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
//               Issued
//             </span>

//             <span />
//           </div>

//           {/* CERTIFICATE ROWS */}

//           {certifications.map((cert, index) => (
//             <motion.button
//               key={cert.number}
//               type="button"
//               onClick={() => setSelectedCert(cert)}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.04,
//               }}
//               viewport={{ once: true }}
//               className="group w-full text-left grid grid-cols-[45px_1fr_auto] md:grid-cols-[70px_1fr_180px_50px] gap-4 md:gap-6 items-center py-6 border-b border-white/[0.08] hover:bg-white/[0.015] transition-colors duration-300"
//             >

//               {/* NUMBER */}

//               <span className="font-mono text-xs text-gray-700 group-hover:text-yellow-400/70 transition">
//                 {cert.number}
//               </span>

//               {/* TITLE */}

//               <div className="min-w-0">

//                 <div className="flex items-center gap-3">

//                   <FiAward
//                     size={15}
//                     className="hidden sm:block text-gray-700 group-hover:text-yellow-400 transition"
//                   />

//                   <h3 className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition truncate">
//                     {cert.title}
//                   </h3>

//                 </div>

//                 <p className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-gray-700">
//                   {cert.authority}
//                 </p>

//               </div>

//               {/* DATE */}

//               <span className="text-xs text-gray-600">
//                 {cert.date}
//               </span>

//               {/* ARROW */}

//               <div className="hidden md:flex w-8 h-8 border border-white/[0.08] items-center justify-center text-gray-600 group-hover:text-yellow-400 group-hover:border-yellow-400/20 transition">

//                 <FiArrowUpRight size={14} />

//               </div>

//             </motion.button>
//           ))}

//         </div>

//         {/* FOOTER */}

//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-8">

//           <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
//             Continuous learning
//           </span>

//           <span className="text-xs text-gray-700">
//             {certifications.length} certifications
//           </span>

//         </div>

//       </div>

//       {/* ================= MODAL ================= */}

//       <AnimatePresence>

//         {selectedCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedCert(null)}
//             className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-5"
//           >

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//                 scale: 0.97,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: 25,
//                 scale: 0.97,
//               }}
//               transition={{ duration: 0.25 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#090909] border border-white/[0.1]"
//             >

//               {/* CLOSE */}

//               <button
//                 type="button"
//                 onClick={() => setSelectedCert(null)}
//                 className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/80 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-yellow-400/30 transition"
//               >
//                 <FiX size={17} />
//               </button>

//               {/* IMAGE */}

//               <div className="bg-[#111111] p-5 sm:p-8">

//                 <img
//                   src={selectedCert.image}
//                   alt={selectedCert.title}
//                   className="w-full max-h-[65vh] object-contain mx-auto"
//                 />

//               </div>

//               {/* INFORMATION */}

//               <div className="p-6 sm:p-8">

//                 <div className="flex items-center gap-3">

//                   <span className="font-mono text-xs text-gray-700">
//                     {selectedCert.number}
//                   </span>

//                   <span className="w-5 h-px bg-yellow-400/60" />

//                   <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
//                     Certificate
//                   </span>

//                 </div>

//                 <h3 className="text-2xl sm:text-3xl font-semibold mt-4">
//                   {selectedCert.title}
//                 </h3>

//                 <div className="flex flex-wrap items-center gap-4 mt-4">

//                   <span className="text-sm text-gray-500">
//                     {selectedCert.authority}
//                   </span>

//                   <span className="w-1 h-1 rounded-full bg-gray-700" />

//                   <span className="text-sm text-gray-700">
//                     {selectedCert.date}
//                   </span>

//                 </div>

//                 <div className="mt-6 pt-5 border-t border-white/[0.08]">

//                   <button
//                     type="button"
//                     onClick={() => setSelectedCert(null)}
//                     className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-yellow-400 transition"
//                   >
//                     Close preview
//                     <FiArrowUpRight size={13} />
//                   </button>

//                 </div>

//               </div>

//             </motion.div>

//           </motion.div>
//         )}

//       </AnimatePresence>
//     </section>
//   );
// };

// export default Certifications;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiX,
  FiAward,
  FiChevronRight,
} from "react-icons/fi";

import pic15 from "./assets/pic_15.png";
import pic16 from "./assets/pic_16.png";
import pic17 from "./assets/pic_17.png";
import pic18 from "./assets/pic_18.png";
import pic19 from "./assets/pic_19.png";
import pic23 from "./assets/pic_23.png";
import pic24 from "./assets/pic_24.png";
import pic25 from "./assets/pic_25.png";
import pic26 from "./assets/pic_26.png";
import pic27 from "./assets/pic_27.png";
import pic28 from "./assets/pic_28.png";

const certifications = [
  {
    number: "01",
    title: "Generative AI Mega Workshop",
    authority: "NXTWAVE ACADEMY",
    date: "Sep 2024",
    image: pic28,
  },
  {
    number: "02",
    title: "Generative AI Mega Workshop 2.0",
    authority: "NXTWAVE ACADEMY",
    date: "Sep 2024",
    image: pic27,
  },
  {
    number: "03",
    title: "React Js",
    authority: "NXTWAVE ACADEMY",
    date: "Jul 2024",
    image: pic15,
  },
  {
    number: "04",
    title: "Node Js",
    authority: "NXTWAVE ACADEMY",
    date: "Mar 2024",
    image: pic16,
  },
  {
    number: "05",
    title: "Responsive Web Design",
    authority: "NXTWAVE ACADEMY",
    date: "Jan 2024",
    image: pic17,
  },
  {
    number: "06",
    title: "Databases",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2023",
    image: pic18,
  },
  {
    number: "07",
    title: "JavaScript Essentials",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2023",
    image: pic25,
  },
  {
    number: "08",
    title: "Dynamic Web Application",
    authority: "NXTWAVE ACADEMY",
    date: "Oct 2023",
    image: pic24,
  },
  {
    number: "09",
    title: "Python Foundations",
    authority: "NXTWAVE ACADEMY",
    date: "Sep 2023",
    image: pic23,
  },
  {
    number: "10",
    title: "Computer Networks",
    authority: "IIT Kharagpur",
    date: "May 2024",
    image: pic19,
  },
  {
    number: "11",
    title: "ChatGPT & AI Tools",
    authority: "Be10x",
    date: "Sep 2024",
    image: pic26,
  },
];

const Certifications = () => {
  const [active, setActive] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const current = certifications[active];

  return (
    <section
      id="certificates"
      className="relative w-full bg-[#050505] text-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-3">
              <span className="text-[#b8aa82] font-mono text-xs">
                04
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-600">
                Certifications
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
              2023 — 2024
            </span>

          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-end">

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-[-0.055em] leading-[0.9]">
              Learning
              <br />
              <span className="text-gray-600">
                in progress.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-gray-500 lg:pb-2">
              Certifications across frontend development, backend
              technologies, programming, databases and artificial intelligence.
            </p>

          </div>
        </motion.div>

        {/* ================= MAIN SHOWCASE ================= */}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">

          {/* LEFT — CERTIFICATION NAVIGATION */}

          <div className="border-t border-white/[0.1]">

            {certifications.map((cert, index) => (

              <motion.button
                key={cert.number}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  w-full
                  text-left
                  flex
                  items-center
                  gap-4
                  py-4
                  border-b
                  border-white/[0.07]
                  transition-all
                  duration-300
                  ${active === index
                    ? "pl-3"
                    : "hover:pl-2"
                  }
                `}
              >

                {/* NUMBER */}

                <span
                  className={`
                    font-mono
                    text-[10px]
                    w-7
                    transition-colors
                    duration-300
                    ${
                      active === index
                        ? "text-[#b8aa82]"
                        : "text-gray-700"
                    }
                  `}
                >
                  {cert.number}
                </span>

                {/* TITLE */}

                <div className="flex-1 min-w-0">

                  <h3
                    className={`
                      text-sm
                      sm:text-[15px]
                      font-medium
                      truncate
                      transition-colors
                      duration-300
                      ${
                        active === index
                          ? "text-white"
                          : "text-gray-500 group-hover:text-gray-300"
                      }
                    `}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className={`
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      transition-colors
                      ${
                        active === index
                          ? "text-gray-500"
                          : "text-gray-700"
                      }
                    `}
                  >
                    {cert.authority}
                  </p>

                </div>

                {/* DATE */}

                <span className="hidden sm:block text-[10px] text-gray-700">
                  {cert.date}
                </span>

                {/* ARROW */}

                <FiChevronRight
                  size={14}
                  className={`
                    transition-all
                    duration-300
                    ${
                      active === index
                        ? "text-[#b8aa82] translate-x-1"
                        : "text-gray-800"
                    }
                  `}
                />

              </motion.button>

            ))}

          </div>

          {/* ================= RIGHT PREVIEW ================= */}

          <div className="relative">

            <div className="sticky top-24">

              {/* IMAGE */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  bg-[#0b0b0b]
                  border
                  border-white/[0.08]
                  overflow-hidden
                "
              >

                <AnimatePresence mode="wait">

                  <motion.img
                    key={current.number}
                    src={current.image}
                    alt={current.title}
                    initial={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-contain
                      p-5
                      sm:p-8
                    "
                  />

                </AnimatePresence>

                {/* TOP LABEL */}

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    bg-[#050505]
                    border
                    border-white/[0.1]
                  "
                >
                  <FiAward
                    size={11}
                    className="text-[#b8aa82]"
                  />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500">
                    Certificate
                  </span>
                </div>

                {/* NUMBER */}

                <span
                  className="
                    absolute
                    top-4
                    right-4
                    font-mono
                    text-[10px]
                    text-gray-600
                  "
                >
                  {current.number}
                </span>

                {/* VIEW */}

                <button
                  type="button"
                  onClick={() => setSelectedCert(current)}
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    bg-[#050505]
                    border
                    border-white/[0.12]
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-gray-400
                    hover:text-[#b8aa82]
                    hover:border-[#b8aa82]/40
                    transition
                  "
                >
                  View
                  <FiArrowUpRight size={12} />
                </button>

              </div>

              {/* INFO */}

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mt-6">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.25em] text-gray-700 mb-2">
                    {current.authority}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                    {current.title}
                  </h3>

                </div>

                <div className="sm:text-right">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
                    Issued
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {current.date}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="mt-16 pt-6 border-t border-white/[0.08] flex items-center justify-between">

          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-700">
            Continuous learning
          </span>

          <span className="font-mono text-[10px] text-gray-700">
            {String(certifications.length).padStart(2, "0")} credentials
          </span>

        </div>

      </div>

      {/* ================= FULLSCREEN PREVIEW ================= */}

      <AnimatePresence>

        {selectedCert && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/95
              flex
              items-center
              justify-center
              p-5
              sm:p-10
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-5xl
                bg-[#080808]
                border
                border-white/[0.1]
              "
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="
                  absolute
                  top-4
                  right-4
                  z-10
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  bg-[#050505]
                  border
                  border-white/[0.12]
                  text-gray-500
                  hover:text-white
                  hover:border-[#b8aa82]/40
                  transition
                "
              >
                <FiX size={16} />
              </button>

              {/* IMAGE */}

              <div className="bg-[#0c0c0c] p-5 sm:p-10">

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="
                    w-full
                    max-h-[70vh]
                    object-contain
                    mx-auto
                  "
                />

              </div>

              {/* DETAILS */}

              <div className="p-6 sm:p-8 border-t border-white/[0.08]">

                <div className="flex items-center gap-3 mb-4">

                  <span className="font-mono text-[10px] text-[#b8aa82]">
                    {selectedCert.number}
                  </span>

                  <span className="w-5 h-px bg-white/[0.15]" />

                  <span className="text-[8px] uppercase tracking-[0.25em] text-gray-600">
                    Credential
                  </span>

                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight">
                  {selectedCert.title}
                </h3>

                <div className="flex gap-6 mt-4">

                  <span className="text-xs text-gray-500">
                    {selectedCert.authority}
                  </span>

                  <span className="text-xs text-gray-700">
                    {selectedCert.date}
                  </span>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Certifications;