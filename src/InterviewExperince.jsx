// import React from "react";
// import myImage from './assets/pic_3.jpg';

// const InterviewExperince = () => {
//   return (
//     <section id="interviewExperience" className="bg-gray-100 py-16 px-4 md:px-20">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-white shadow-2xl rounded-2xl p-8">

//         {/* Left Side – Info */}
//         <div>
//           <h2 className="text-3xl font-extrabold text-gray-900 mb-2">ServiceNow</h2>
//           <p className="text-xl font-semibold text-blue-600 mb-6">💰 40 LPA | Product-Based | Campus Placement</p>

//           {/* Rounds */}
//           <div className="space-y-6">
//             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-green-800">✅ Round 1: Online Assessment</p>
//               <p className="text-sm text-gray-700">
//                 Cleared with 90% – DSA, Aptitude, and JavaScript.
//               </p>
//             </div>

//             <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-green-800">✅ Round 2: Technical Interview</p>
//               <p className="text-sm text-gray-700">
//                 MERN stack questions, project deep-dive, and coding tasks.
//               </p>
//             </div>

//             <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
//               <p className="text-lg font-bold text-red-800">❌ Round 3: HR + System Design</p>
//               <p className="text-sm text-gray-700">
//                 Missed out due to weak system design fundamentals.
//               </p>
//             </div>
//           </div>

//           <div className="mt-6 text-sm text-gray-700">
//             <p>📌 <strong>Takeaway:</strong> Started learning system design & improving communication.</p>
//             <p className="text-blue-500 mt-2">🔥 Preparing better for future product-based roles!</p>
//           </div>
//         </div>

//         {/* Right Side – Proof Photos */}
//         <div className="space-y-6">
//           <img src={myImage} alt="Round 1 Proof" className="rounded-xl shadow-md" />
//           <img src={myImage} alt="Round 2 Proof" className="rounded-xl shadow-md" />
//           <img src={myImage} alt="Round 3 Proof" className="rounded-xl shadow-md" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InterviewExperince;



// ......................................................................................





import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section id="InterviewExperince" className="bg-black py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-5xl font-extrabold text-center text-green-600 mb-8 font-[Playfair Display]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Interview <span className="text-yellow-500">Experience</span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start bg-white shadow-2xl rounded-2xl p-8">
        
        {/* Left Side with Motion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-extrabold text-green-900 mb-2">
            ServiceNow <span className="text-gray-900">Company</span>
          </h2>
          <p className="text-xl font-semibold text-blue-600 mb-6">
            💰 40 LPA | Product-Based | Campus Placement
          </p>

          <div className="space-y-6">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-bold text-yellow-800">🎯 Pre-Assessment: College Filtration Rounds</p>
              <p className="text-sm text-gray-700">Cleared 4 internal shortlisting rounds before receiving the online assessment opportunity.</p>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-bold text-green-800">✅ Round 1: Online Assessment</p>
              <p className="text-sm text-gray-700">Cleared with 90% – DSA, Aptitude, and JavaScript.</p>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-bold text-green-800">✅ Round 2: Technical Interview</p>
              <p className="text-sm text-gray-700">MERN stack questions, project deep-dive, and DSA coding tasks.</p>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-bold text-red-800">❌ Round 3: HR + Advanced DSA</p>
              <p className="text-sm text-gray-700">Missed out due to Advanced DSA</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            <p>📌 <strong>Takeaway:</strong> Started learning Advanced DSA & improving communication skills.</p>
            <p className="text-blue-500 mt-2">🔥 Preparing better for future product-based roles!</p>
          </div>
        </motion.div>

        {/* Right Side – Image Carousel with Motion */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Slider {...settings}>
            {[pic1, pic2, pic3, pic4, pic5].map((pic, index) => (
              <div key={index}>
                <img
                  src={pic}
                  alt={`Proof ${index + 1}`}
                  className="rounded-lg shadow-md h-[700px] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default InterviewExperince;
