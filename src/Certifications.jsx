


import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Modal from "react-modal";
import pic15 from "./assets/pic_15.png";
import pic16 from "./assets/pic_16.png";
import pic17 from "./assets/pic_17.png";
import pic18 from "./assets/pic_18.png";
import pic19 from "./assets/pic_19.png";
import pic20 from "./assets/pic_20.png";
import pic21 from "./assets/pic_21.png";
import pic22 from "./assets/pic_22.png";
import pic23 from "./assets/pic_23.png";
import pic24 from "./assets/pic_24.png";
import pic25 from "./assets/pic_25.png";
import pic26 from "./assets/pic_26.png";
import pic27 from "./assets/pic_27.png";
import pic28 from "./assets/pic_28.png";

const certifications = [
  {
    title: "Genrative AI Mega Workshop",
    authority: "NXTWAVE ACADEMY",
    date: "sep 2024",
    // image: "https://cdn1.ccbp.in/misc/gen-ai-2-mw/VKBKS5YSMZ.png",
    image: pic28,
    },
  {
    title: "Generative AI Mega WorkShop 2.0 (participation certificate)",
    authority: "NXTWAVE ACADEMY ",
    date: "Sep 2024",
    image: pic27,
   },
  {
    title: "React Js",
    authority: "NXTWAVE ACADEMY",
    date: "Jul 2024",
    image: pic15
  ,  },
  {
    title: "Node Js",
    authority: "NXTWAVE ACADEMY",
    date: "March 2024",
    image: pic16,
    },
  {
    title: "Responsive Web Design using Flexbox",
    authority: "NXTWAVE ACADEMY",
    date: "Jan 2024",
    image: pic17,
   },
  {
    title: "Introduction to Databases",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2023",
    image: pic18,
   },
  {
    title: "JavaScript Essentials",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2023",
    image: pic25  },
  {
    title: "Build Your Own Dynamic Web Application",
    authority: "NXTWAVE ACADEMY",
    date: "Oct 2023",
    image:pic24,
   },
  {
    title: "Programming Foundations With Python ",
    authority: "NXTWAVE ACADEMY",
    date: "Sep 2023",
    image: pic23
   },
  {
    title: "XPM 4.0 Fundamentals",
    authority: "NXTWAVE ACADEMY",
    date: "Aug 2023",
    image: pic22,
   },
  {
    title: "Build Your Own Responsive Website",
    authority: "NXTWAVE ACADEMY",
    date: "May 2023",
    image:pic21,
   },
  {
    title: "Build Your Own Static Website",
    authority: "NXTWAVE ACADEMY",
    date: "Nov 2022",
    image:pic20,
  },
  {
    title: "Computer Networks and Internet Protocols",
    authority: "Indian Institute of Technology, Kharagpur",
    date: "May 2024",
    image: pic19,
   },
  {
    title: "ChatGpt & AI Tools",
    authority: "Be10x",
    date: "sep 2024",
    image: pic26 ,
   },



  // {
  //   title: "Generative AI Mega WorkShop 2.0 (participation certificate)",
  //   authority: "NXTWAVE ACADEMY ",
  //   date: "Sep 2024",
  //   image: "https://media-hosting.imagekit.io//6a55366780244db9/Screenshot%202024-09-22%20084929.png?Expires=1833707686&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x9pdTS-kXcHEAjDsTCV~tp5xfWgmOsieSV4zyDjit1vxZp89LyPu3mmcbdB15AL3A3R82bTQw9aymtTg28Eg33-Kq80-TyGmpTxN-HBv9jbU5Cslcq~9h-AxJPO-jgm79O0Q-vf33twWNRc2j4xP-F23PpXTIJzohF-NMDRBNMUjn4-xdrxw8iV3Nl3UwKM3Nx-lm-0-tQbD0mxMOAk2fXCixeYnXzXUsYKDDmwXnWOFafZkyR7JGx74O8F2vcL5sIp6OLg6c8P9Rb8YP23iYGcoFraMwQnOgdPItda9NOeBdE0lg-em25zkGvUhRcn~uVF8uIUvTs4cDjCJlTwoPQ__",
  // },
  {
    title: "NxtCode- 7 Under 7 Challenge (participation certificate)",
    authority: "NXTWAVE ACADFEMY",
    date: "Oct 2024",
    image: "https://media-hosting.imagekit.io//2caa3f58335c4aa2/Screenshot%202024-10-03%20150534.png?Expires=1833707722&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=w2uMaNOui~aONvkIed4JG0noU6~J~z8lO4N2TIwDDLYbUWaOsBuzKZLM2b~fxGhW83mlQCeRZBUFFR1sIQ3pdIMoHfe2RGJxBgU3KrTrFn0VuTyTgLkVQADr-UWRu9VI9KwsVIatUYuBS3tua-5ZOCa39HDY~yoFm7nPwSWpGkdqwKdkJElhpDTbzH5Umkyy7WaqHTxXM3GSQ2hw~CKiLVzdO2GzbQAP~pXatf0xDQ3PxUczB9HZFpz~4LotHetSrH9Ko0fyMalXG0crg2707~Ww7ftBS7p6cHfB6P95HUGov695rx~mS0TRnxHWPoPcRAyYQmveGe9d1vvaXacgoA__",
  },
  {
    title: "NxtCode- 7 Under 7 Challenge",
    authority: "NXTWAVE ACADEMY ",
    date: "Oct 2024",
    image: "https://media-hosting.imagekit.io//57734bb3ae124286/Screenshot%202024-10-03%20150607.png?Expires=1833707733&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1DJT-FxZYYBg88KXp828PkBSn1xLLwXDXcYtrWTT3jwOvBDFL36gBW7RNKTg4aRUsbUOGyX9eeJ7b9MqA8j~3WxzOCSZNxL4RS7Gi0lhelfY4DENpNlJ8b0nRhR1pmRmTfj402h6NzlZdVErvhqnB8nVaz7pXm6sZTwN3cUGD8mD8-Qs9BzUeLp2Ikht8ldGiBMRlxLf0GR~-~4TVd1C20QgkrvCJtrU1YXUaqgldRMXRTGTAIU4EHDrLzKJvBp0ZZIv6O3S5sQQwbFq5VAk8-SmHPlu5H7lomnBFQioTmsPgAEZBjJ4TSgBk2PsDiNPNgw5ZOGt~Rgb574RRw527w__",
  },
  {
    title: "UI/UX Mega Workshop (participation certificate)",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2024",
    image: "https://media-hosting.imagekit.io//c5f30f3e624e4141/Screenshot%202025-01-09%20221017.png?Expires=1833707809&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oAIbS48PoVqJQmguG9YR8YkqCpmWJX7m00Q1a~d1ZFjMTfOnP1JSlaKT6Sy5uUFQOs~M~CUYIDjOoOXyfHesijNR00Ry47ohg8Z9cwcxAx~wayFAmOryovJWXBzJSj--PvsFqd008wHZAXz0LBwK6OICCwr4vnLXiojMfMZylFgd4GrJCUs7jEtTxKMtAmFR711j3XUg6s4SQU1uAZkur8PTx-QPwvMn3kazG0TnMrbzSSCOxH9DSqK4FdBFPh0zfrzsNSIzJo81kdzxcXO~eMaS4YKdggm12Y2UzMZXgF3VwdVR17JTTSif6XwDWeC4oJ2Ft-MmZb74NiU~NbRv4Q__",
  },
  {
    title: "UI/UX Mega Workshop",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2024",
    image: "https://media-hosting.imagekit.io//4d8820ab35964631/Screenshot%202025-01-09%20221035.png?Expires=1833707814&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ur1xujVfNMe8Y0ZuyWNwRlJi4UoBRY~wWlDG39bL~dMLJl13-pyt-RLJVRpSwU8-DLlThdYUm1fKH00KcMBq24ymeK3g63hZaJlnHf5GG8kx1O9455OjZ4DZ1OeBZs13rovP1DY8uqqJTJUn8~vku6mefRbWmGjjqjG1isQ7Ax70BzWpgJs65SL6qvKzMgqy4YL7nsOZduyaM8~IQWBP34mFaUKwvDtGWD96imvuHhB~X5CHx7UeJ9lULNXPjJ6ZuFmj~GTKuSisC0W1yaiXHHsMxfGHp5lZCCVxGHK1QATDArn30YvjUVT2IU9wRR9uMTAJ9Vzp56bDVDS6E2K01Q__",
  },
];

Modal.setAppElement("#root");

const Certifications = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const controls = useAnimation();

  // Function to start infinite back-to-back scrolling
  const startScrolling = () => {
    controls.start({
      x: ["0%", "-100%"], // Move left
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,// Adjust speed here
        ease: "linear",
      },
    });
  };

  // Stop scrolling when modal opens
  const stopScrolling = () => {
    controls.stop();
  };

  // Open modal and stop scrolling
  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalIsOpen(true);
    stopScrolling();
  };

  // Close modal and restart scrolling after it fully closes
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!modalIsOpen) {
      const timer = setTimeout(() => {
        startScrolling();
      }, 300); // Delay before restarting scroll
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen]);

  return (
    <section id="certificates" className="w-[150vw] sm:w-full bg-black text-white ">
      <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

      {/* Scrolling Wrapper */}
      <div className="overflow-hidden relative w-full">
        <motion.div className="flex space-x-6 min-w-max" animate={controls}>
          {[...certifications, ...certifications].map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-4 min-w-[300px] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(cert)}
            >
              <img src={cert.image} alt={cert.title} className="rounded-md w-full h-40 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.authority}</p>
              <p className="text-xs text-gray-500">Issued: {cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Full-Screen Certificate View */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
        overlayClassName="fixed inset-0 bg-black bg-opacity-90"
      >
        {selectedCert && (
          <div className="p-4 bg-transparent max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedCert.title}</h2>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-auto max-h-[80vh] mx-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;

