// // // import React from "react";
// // // import myImage from './assets/pic_3.jpg';

// // // const InterviewExperince = () => {
// // //   return (
// // //     <section id="interviewExperience" className="bg-gray-100 py-16 px-4 md:px-20">
// // //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-white shadow-2xl rounded-2xl p-8">

// // //         {/* Left Side – Info */}
// // //         <div>
// // //           <h2 className="text-3xl font-extrabold text-gray-900 mb-2">ServiceNow</h2>
// // //           <p className="text-xl font-semibold text-blue-600 mb-6">💰 40 LPA | Product-Based | Campus Placement</p>

// // //           {/* Rounds */}
// // //           <div className="space-y-6">
// // //             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
// // //               <p className="text-lg font-bold text-green-800">✅ Round 1: Online Assessment</p>
// // //               <p className="text-sm text-gray-700">
// // //                 Cleared with 90% – DSA, Aptitude, and JavaScript.
// // //               </p>
// // //             </div>

// // //             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
// // //               <p className="text-lg font-bold text-green-800">✅ Round 2: Technical Interview</p>
// // //               <p className="text-sm text-gray-700">
// // //                 MERN stack questions, project deep-dive, and coding tasks.
// // //               </p>
// // //             </div>

// // //             <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
// // //               <p className="text-lg font-bold text-red-800">❌ Round 3: HR + System Design</p>
// // //               <p className="text-sm text-gray-700">
// // //                 Missed out due to weak system design fundamentals.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="mt-6 text-sm text-gray-700">
// // //             <p>📌 <strong>Takeaway:</strong> Started learning system design & improving communication.</p>
// // //             <p className="text-blue-500 mt-2">🔥 Preparing better for future product-based roles!</p>
// // //           </div>
// // //         </div>

// // //         {/* Right Side – Proof Photos */}
// // //         <div className="space-y-6">
// // //           <img src={myImage} alt="Round 1 Proof" className="rounded-xl shadow-md" />
// // //           <img src={myImage} alt="Round 2 Proof" className="rounded-xl shadow-md" />
// // //           <img src={myImage} alt="Round 3 Proof" className="rounded-xl shadow-md" />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default InterviewExperince;



// // // ......................................................................................





// // import React from "react";
// // import Slider from "react-slick";
// // import { motion } from "framer-motion";
// // import pic1 from "./assets/pic_4.png";
// // import pic2 from "./assets/pic_5.png";
// // import pic3 from "./assets/pic_6.png";
// // import pic4 from "./assets/pic_7.png";
// // import pic5 from "./assets/pic_8.png";

// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const InterviewExperince = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2500,
// //   };

// //   return (
// //     <section id="InterviewExperince" className="w-[150vw] sm:w-full bg-black text-white">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-12">
// //         <motion.h2
// //           className="text-5xl font-extrabold text-center text-green-600 mb-8 font-[Playfair Display]"
// //           initial={{ opacity: 0, y: -30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           Interview <span className="text-yellow-500">Experience</span>
// //         </motion.h2>
// //       </div>

// //       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-white shadow-2xl rounded-2xl p-8">
        
// //         {/* Left Side with Motion */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <h2 className="text-3xl font-extrabold text-green-900 mb-2">
// //             ServiceNow <span className="text-gray-900">Company</span>
// //           </h2>
// //           <p className="text-xl font-semibold text-blue-600 mb-6">
// //             💰 40 LPA | Product-Based | Campus Placement
// //           </p>

// //           <div className="space-y-6">
// //             <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-sm">
// //               <p className="text-lg font-bold text-yellow-800">🎯 Pre-Assessment: College Filtration Rounds</p>
// //               <p className="text-sm text-gray-700">Cleared 4 internal shortlisting rounds before receiving the online assessment opportunity.</p>
// //             </div>

// //             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
// //               <p className="text-lg font-bold text-green-800">✅ Round 1: Online Assessment</p>
// //               <p className="text-sm text-gray-700">Cleared with 90% – DSA, Aptitude, and JavaScript.</p>
// //             </div>

// //             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
// //               <p className="text-lg font-bold text-green-800">✅ Round 2: Technical Interview</p>
// //               <p className="text-sm text-gray-700">MERN stack questions, project deep-dive, and DSA coding tasks.</p>
// //             </div>

// //             <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
// //               <p className="text-lg font-bold text-red-800">❌ Round 3: HR + Advanced DSA</p>
// //               <p className="text-sm text-gray-700">Missed out due to Advanced DSA</p>
// //             </div>
// //           </div>

// //           <div className="mt-6 text-sm text-gray-700">
// //             <p>📌 <strong>Takeaway:</strong> Started learning Advanced DSA & improving communication skills.</p>
// //             <p className="text-blue-500 mt-2">🔥 Preparing better for future product-based roles!</p>
// //           </div>
// //         </motion.div>

// //         {/* Right Side – Image Carousel with Motion */}
// //         <motion.div
// //           className="w-full max-w-md mx-auto"
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //         >
// //           <Slider {...settings}>
// //             {[pic1, pic2, pic3, pic4, pic5].map((pic, index) => (
// //               <div key={index}>
// //                 <img
// //                   src={pic}
// //                   alt={`Proof ${index + 1}`}
// //                   className="rounded-lg shadow-md h-[700px] w-full object-cover"
// //                 />
// //               </div>
// //             ))}
// //           </Slider>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default InterviewExperince;



// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// import pic1 from "./assets/pic_4.png";
// import pic2 from "./assets/pic_5.png";
// import pic3 from "./assets/pic_6.png";
// import pic4 from "./assets/pic_7.png";
// import pic5 from "./assets/pic_8.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const InterviewExperince = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2800,
//     fade: true,
//   };

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const timeline = [
//     {
//       title: "🎯 Pre-Assessment",
//       desc: "Cleared 4 internal shortlisting rounds before receiving the online assessment opportunity.",
//       color: "yellow",
//     },
//     {
//       title: "✅ Round 1: Online Assessment",
//       desc: "Cleared with 90% – DSA, Aptitude, and JavaScript.",
//       color: "green",
//     },
//     {
//       title: "✅ Round 2: Technical Interview",
//       desc: "MERN stack questions, project deep-dive, and DSA coding tasks.",
//       color: "green",
//     },
//     {
//       title: "❌ Round 3: HR + Advanced DSA",
//       desc: "Missed out due to Advanced DSA.",
//       color: "red",
//     },
//   ];

//   return (
//     <section
//       id="InterviewExperince"
//       className="relative w-[158vw] sm:w-full bg-black text-white py-20 overflow-hidden"
//     >
//       {/* 🌌 Particle Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: { color: "transparent" },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onHover: { enable: true, mode: "repulse" },
//               resize: true,
//             },
//           },
//           particles: {
//             color: { value: ["#00ffcc", "#ff00cc", "#ffcc00"] },
//             links: { enable: false },
//             move: { enable: true, speed: 1, direction: "top", outModes: "out" },
//             size: { value: { min: 2, max: 5 } },
//             opacity: { value: 0.6 },
//             shape: { type: ["circle", "triangle", "polygon", "star"] },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.h2
//           className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent font-[Playfair Display]"
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           Interview <span className="text-white">Experience</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center backdrop-blur-lg bg-white/5 rounded-3xl shadow-2xl p-10 border border-white/10">
//           {/* LEFT SIDE TIMELINE */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             <h2 className="text-3xl font-extrabold mb-4 text-green-400">
//               ServiceNow <span className="text-gray-200">Company</span>
//             </h2>
//             <p className="text-xl font-semibold text-yellow-300 mb-8">
//               💰 40 LPA | Product-Based | Campus Placement
//             </p>

//             <div className="space-y-6">
//               {timeline.map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: idx * 0.2 }}
//                   className={`p-4 rounded-xl shadow-md border-l-4 ${
//                     item.color === "yellow"
//                       ? "bg-yellow-100/20 border-yellow-400"
//                       : item.color === "green"
//                       ? "bg-green-100/20 border-green-400"
//                       : "bg-red-100/20 border-red-400"
//                   }`}
//                 >
//                   <p
//                     className={`text-lg font-bold ${
//                       item.color === "yellow"
//                         ? "text-yellow-300"
//                         : item.color === "green"
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }`}
//                   >
//                     {item.title}
//                   </p>
//                   <p className="text-sm text-gray-300">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1.2, delay: 1 }}
//               className="mt-8 text-sm text-gray-300"
//             >
//               <p>
//                 📌 <strong>Takeaway:</strong> Started learning Advanced DSA &
//                 improving communication skills.
//               </p>
//               <p className="text-blue-400 mt-2">
//                 🔥 Preparing better for future product-based roles!
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE SLIDER */}
//           <motion.div
//             className="w-full max-w-lg mx-auto"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             <Slider {...settings}>
//               {[pic1, pic2, pic3, pic4, pic5].map((pic, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.8 }}
//                   className="rounded-3xl overflow-hidden shadow-2xl"
//                 >
//                   <img
//                     src={pic}
//                     alt={`Proof ${idx + 1}`}
//                     className="h-[500px] w-full object-cover rounded-3xl"
//                   />
//                 </motion.div>
//               ))}
//             </Slider>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InterviewExperince;





import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import pic1 from "./assets/pic_4.png";
import pic2 from "./assets/pic_5.png";
import pic3 from "./assets/pic_6.png";
import pic4 from "./assets/pic_7.png";
import pic5 from "./assets/pic_8.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InterviewExperince = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    fade: true,
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const timeline = [
    {
      title: "🎯 Pre-Assessment",
      desc: "Cleared 4 internal shortlisting rounds before receiving the online assessment opportunity.",
      color: "yellow",
    },
    {
      title: "✅ Round 1: Online Assessment",
      desc: "Cleared with 90% – DSA, Aptitude, and JavaScript.",
      color: "green",
    },
    {
      title: "✅ Round 2: Technical Interview",
      desc: "MERN stack questions, project deep-dive, and DSA coding tasks.",
      color: "green",
    },
    {
      title: "❌ Round 3: HR + Advanced DSA",
      desc: "Missed out due to Advanced DSA.",
      color: "red",
    },
  ];

  return (
    <section
      id="InterviewExperince"
      className="relative w-[158vw] sm:w-full bg-black text-white py-20 overflow-hidden"
    >
      {/* 🌌 Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            number: { value: 60 },
            color: { value: ["#00ffcc", "#ff00cc", "#ffcc00"] },
            links: { enable: false },
            move: { enable: true, speed: 1.5, direction: "top", outModes: "out" },
            size: { value: { min: 2, max: 5 } },
            opacity: { value: 0.6 },
            shape: { type: ["circle", "triangle", "polygon", "star"] },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* 🌟 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent font-[Playfair Display]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Interview <span className="text-white">Experience</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center backdrop-blur-lg bg-white/5 rounded-3xl shadow-2xl p-10 border border-white/10">
          {/* LEFT SIDE TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-extrabold mb-4 text-green-400">
              ServiceNow <span className="text-gray-200">Company</span>
            </h2>
            <p className="text-xl font-semibold text-yellow-300 mb-8">
              💰 40 LPA | Product-Based | Campus Placement
            </p>

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`p-4 rounded-xl shadow-md border-l-4 ${
                    item.color === "yellow"
                      ? "bg-yellow-100/20 border-yellow-400"
                      : item.color === "green"
                      ? "bg-green-100/20 border-green-400"
                      : "bg-red-100/20 border-red-400"
                  }`}
                >
                  <p
                    className={`text-lg font-bold ${
                      item.color === "yellow"
                        ? "text-yellow-300"
                        : item.color === "green"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="mt-8 text-sm text-gray-300"
            >
              <p>
                📌 <strong>Takeaway:</strong> Started learning Advanced DSA &
                improving communication skills.
              </p>
              <p className="text-blue-400 mt-2">
                🔥 Preparing better for future product-based roles!
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE SLIDER */}
          <motion.div
            className="w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Slider {...settings}>
              {[pic1, pic2, pic3, pic4, pic5].map((pic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={pic}
                    alt={`Proof ${idx + 1}`}
                    className="h-[500px] w-full object-cover rounded-3xl"
                  />
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterviewExperince;
