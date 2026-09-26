// // // import React, { useState } from "react";
// // // import { NavLink } from "react-router-dom";

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   const menuItems = [
// // //     { name: "Resume", path: "/" },
// // //     { name: "About Me", path: "/about me" },
// // //     { name: "Skills", path: "/skills" },
// // //     { name: "Projects",  href="#projects" },
// // //     { name: "Certificates", path: "/certificates" },
// // //     { name: "Interview Experience", path: "/interviewExperince" },
// // //     { name: "Connect Us", path: "/connectUs" },

// // //   ];

// // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// // //   return (
// // //     <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 transition-all duration-500">
// // //       <div className="max-w-7xl mx-auto px-6 lg:px-12">

// // //         <div className="flex justify-between items-center py-4">
// // //           {/* Logo */}
// // //           <h1 className="text-4xl font-extrabold">
// // //             <span className="font-serif text-blue-500">Port</span>
// // //             <span className="font-sans text-white">folio</span>
// // //           </h1>

// // //           {/* Navigation */}
// // //           <nav className={`hidden md:flex space-x-8`}>
// // //             {menuItems.map((item) => (
// // //               <NavLink
// // //                 key={item.name}
// // //                 to={item.path}
// // //                 className="text-blue-500 text-lg font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-blue-500"
// // //                 activeClassName="border-blue-500"
// // //               >
// // //                 {item.name}
// // //               </NavLink>
// // //             ))}
// // //           </nav>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             className="md:hidden text-blue-500 focus:outline-none"
// // //             onClick={toggleMenu}
// // //           >
// // //             <svg
// // //               className="w-6 h-6"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M4 6h16M4 12h16m-7 6h7"
// // //               />
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Navigation Menu */}
// // //       <div
// // //         className={`md:hidden ${
// // //           isMenuOpen ? "block" : "hidden"
// // //         } bg-blue-100 border-t-2 border-blue-500 p-4 space-y-4`}
// // //       >
// // //         {menuItems.map((item) => (
// // //           <NavLink
// // //             key={item.name}
// // //             to={item.path}
// // //             className="text-blue-500 text-lg font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
// // //             activeClassName="border-blue-500"
// // //             onClick={() => setIsMenuOpen(false)} // Close menu after clicking
// // //           >
// // //             {item.name}
// // //           </NavLink>
// // //         ))}
// // //       </div>

// // //       {/* Animated Middle Line */}
// // //       <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-blue-500 rounded animate-pulse"></div>
// // //     </header>
// // //   );
// // // };


// // // export default Header;




// // // import React, { useState } from "react";

// // // const Header = () => {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   const menuItems = [
// // //     { name: "Resume", href: "#resume" },
// // //     { name: "About Me", href: "#about" },
// // //     { name: "Skills", href: "#skills" },
// // //     { name: "Projects", href: "#projects" },
// // //     { name: "Certificates", href: "#certificates" },
// // //     { name: "Interview Experience", href: "#InterviewExperince" },
// // //     { name: "Connect Us", href: "#contact-us" },
// // //   ];

// // //   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// // //   return (
// // //     <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 transition-all duration-500">
// // //       <div className="max-w-7xl mx-auto px-6 lg:px-12">
// // //         <div className="flex justify-between items-center py-4">
// // //           {/* Logo */}
// // //           <h1 className="text-4xl font-extrabold">
// // //             <span className="font-serif text-blue-500">Port</span>
// // //             <span className="font-sans text-white">folio</span>
// // //           </h1>

// // //           {/* Desktop Navigation */}
// // //           <nav className="hidden md:flex space-x-8">
// // //             {menuItems.map((item) => (
// // //               <a
// // //                 key={item.name}
// // //                 href={item.href}
// // //                 className="text-blue-500 text-lg font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-blue-500"
// // //               >
// // //                 {item.name}
// // //               </a>
// // //             ))}
// // //           </nav>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             className="md:hidden text-blue-500 focus:outline-none"
// // //             onClick={toggleMenu}
// // //           >
// // //             <svg
// // //               className="w-6 h-6"
// // //               fill="none"
// // //               viewBox="0 0 24 24"
// // //               stroke="currentColor"
// // //             >
// // //               <path
// // //                 strokeLinecap="round"
// // //                 strokeLinejoin="round"
// // //                 strokeWidth={2}
// // //                 d="M4 6h16M4 12h16m-7 6h7"
// // //               />
// // //             </svg>
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Navigation */}
// // //       <div
// // //         className={`md:hidden ${
// // //           isMenuOpen ? "block" : "hidden"
// // //         } bg-blue-100 border-t-2 border-blue-500 p-4 space-y-4`}
// // //       >
// // //         {menuItems.map((item) => (
// // //           <a
// // //             key={item.name}
// // //             href={item.href}
// // //             className="text-blue-500 text-lg font-medium border-b-2 border-transparent hover:border-blue-500 transition-all duration-300"
// // //             onClick={() => setIsMenuOpen(false)}
// // //           >
// // //             {item.name}
// // //           </a>
// // //         ))}
// // //       </div>

// // //       {/* Animated Line */}
// // //       <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-blue-500 rounded animate-pulse"></div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;






// import React, { useState } from "react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Resume", href: "#resume" },
//     { name: "About Me", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Certificates", href: "#certificates" },
//     { name: "Interview Experience", href: "#InterviewExperince" },
//     { name: "Connect Us", href: "#contact-us" },
//     { name: "System Design", href: "#system-design" },

//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 transition-all duration-500">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <h1 className="text-4xl font-extrabold">
//             <span className="font-serif text-blue-500">Port</span>
//             <span className="font-sans text-white">folio</span>
//           </h1>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-blue-500 text-lg font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-blue-500"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-blue-500 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Right-Side Navigation */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white/80 backdrop-blur-md shadow-lg transform transition-transform duration-700 ease-in-out z-50 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
//       >
//         <div className="p-6 mt-20 space-y-4">
//           <button
//             className="text-blue-500 text-2xl font-bold absolute top-4 right-4"
//             onClick={toggleMenu}
//           >
//             &times;
//           </button>
//           {menuItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block text-gray-800 text-lg font-medium border-b border-gray-300 py-2 hover:text-blue-600 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Animated Middle Line */}
//       <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-blue-500 rounded animate-pulse"></div>
//     </header>
//   );
// };

// export default Header;




// import React, { useState } from "react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Resume", href: "#resume" },
//     { name: "About Me", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "System Design", href: "#system-design" },


//     { name: "Projects", href: "#projects" },
//     { name: "Certificates", href: "#certificates" },
//     { name: "Interview Experience", href: "#InterviewExperince" },

//     { name: "Connect Us", href: "#contact-us" },
//   ];

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 transition-all duration-500">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <h1 className="text-4xl font-extrabold">
//             <span className="font-serif text-blue-500">Port</span>

//             <span className="font-sans text-white">folio</span>
//           </h1>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-blue-500 text-lg font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-blue-500"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-blue-500 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Right-Side Navigation */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-lg shadow-lg transform transition-transform duration-700 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
//           } md:hidden`}
//       >
//         <div className="p-6 mt-20 space-y-4">
//           <button
//             className="text-blue-400 text-2xl font-bold absolute top-4 right-4 hover:text-cyan-400 transition"
//             onClick={toggleMenu}
//           >
//             &times;
//           </button>
//           {menuItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block text-white text-lg font-medium border-b border-gray-700 py-2 hover:text-blue-400 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Animated Middle Line */}
//       <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-blue-500 rounded animate-pulse"></div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { name: "Resume", href: "#resume" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    // { name: "System Design", href: "#system-design" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    // {
    //   name: "Interview Experience",
    //   href: "#InterviewExperince",
    // },
    // { name: "Connect", href: "#contact-us" },
  ];

  // --------------------------------
  // Detect Active Section
  // --------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems
        .map((item) => item.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------
  // Close Menu
  // --------------------------------
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =====================================
          HEADER
      ====================================== */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              relative
              h-[68px]
              px-5
              sm:px-7
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-black/70
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            "
          >

            {/* =================================
                LOGO
            ================================== */}
            <a
              href="#home"
              className="group flex items-center gap-2"
            >
              <div className="flex items-center">

                <span
                  className="
                    text-xl
                    sm:text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                  "
                >
                  Mahendra
                </span>

                <span
                  className="
                    ml-1
                    text-xl
                    sm:text-2xl
                    font-[Dancing Script]
                    text-yellow-400
                  "
                >
                  .
                </span>
              </div>

              {/* Small status dot */}
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_10px_rgba(250,204,21,0.8)]
                "
              />
            </a>

            {/* =================================
                DESKTOP NAVIGATION
            ================================== */}
            <nav
              className="
                hidden
                lg:flex
                items-center
                gap-1
                px-2
                py-2
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.025]
              "
            >
              {menuItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="
                      relative
                      px-3
                      py-2
                      text-[11px]
                      xl:text-xs
                      font-medium
                      tracking-wide
                      text-gray-400
                      rounded-lg
                      transition-all
                      duration-300
                      hover:text-white
                      hover:bg-white/[0.05]
                    "
                  >
                    {item.name}

                    {/* Active / Hover Line */}
                    <span
                      className={`
                        absolute
                        left-1/2
                        -translate-x-1/2
                        -bottom-1
                        h-[1px]
                        bg-yellow-400
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "w-5 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </a>
                );
              })}
            </nav>

            {/* =================================
                CONNECT BUTTON
            ================================== */}
            <a
              href="#social"
              className="
                hidden
                md:flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                border
                border-yellow-400/20
                bg-yellow-400/[0.06]
                text-yellow-400
                text-xs
                font-medium
                transition-all
                duration-300
                hover:bg-yellow-400
                hover:text-black
                hover:border-yellow-400
              "
            >
              Let's Talk
              <FiArrowUpRight className="text-sm" />
            </a>

            {/* =================================
                MOBILE MENU BUTTON
            ================================== */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="
                lg:hidden
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                text-gray-300
                hover:text-yellow-400
                hover:border-yellow-400/30
                transition-all
                duration-300
              "
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </button>
          </motion.div>
        </div>
      </header>

      {/* =====================================
          MOBILE OVERLAY
      ====================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-[60]
              lg:hidden
            "
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* =====================================
          MOBILE MENU
      ====================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              top-0
              right-0
              h-full
              w-[85%]
              max-w-sm
              bg-[#080808]
              border-l
              border-white/[0.08]
              z-[70]
              lg:hidden
              shadow-[-20px_0_60px_rgba(0,0,0,0.5)]
            "
          >

            {/* Mobile Header */}
            <div
              className="
                flex
                items-center
                justify-between
                px-6
                py-6
                border-b
                border-white/[0.06]
              "
            >
              <div>
                <span className="text-white font-semibold">
                  Navigation
                </span>

                <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-[0.2em]">
                  Explore my portfolio
                </p>
              </div>

              <button
                onClick={closeMenu}
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-white/[0.08]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-yellow-400
                  hover:border-yellow-400/30
                  transition
                "
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="px-5 py-6 space-y-1">
              {menuItems.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className={`
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3.5
                      rounded-xl
                      text-sm
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-yellow-400/[0.06] text-yellow-400 border border-yellow-400/10"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                      }
                    `}
                  >
                    <span>{item.name}</span>

                    <FiArrowUpRight
                      className={`
                        text-sm
                        transition-all
                        ${
                          isActive
                            ? "text-yellow-400"
                            : "text-gray-700"
                        }
                      `}
                    />
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile Bottom */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                border-t
                border-white/[0.06]
              "
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 mb-3">
                Available for opportunities
              </p>

              <a
                href="#contact-us"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  py-3
                  rounded-xl
                  bg-yellow-400
                  text-black
                  text-sm
                  font-semibold
                  hover:bg-yellow-300
                  transition
                "
              >
                Let's Connect
                <FiArrowUpRight />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;