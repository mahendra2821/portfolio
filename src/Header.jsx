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




import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Resume", href: "#resume" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Interview Experience", href: "#InterviewExperince" },
    { name: "Connect Us", href: "#contact-us" },
    { name: "System Design", href: "#system-design" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-4xl font-extrabold">
            <span className="font-serif text-blue-500">Port</span>
            <span className="font-sans text-white">folio</span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-500 text-lg font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-blue-500"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Right-Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-lg shadow-lg transform transition-transform duration-700 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 mt-20 space-y-4">
          <button
            className="text-blue-400 text-2xl font-bold absolute top-4 right-4 hover:text-cyan-400 transition"
            onClick={toggleMenu}
          >
            &times;
          </button>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-white text-lg font-medium border-b border-gray-700 py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Animated Middle Line */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-blue-500 rounded animate-pulse"></div>
    </header>
  );
};

export default Header;
