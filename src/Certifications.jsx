// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Modal from "react-modal";

// const certifications = [
//   {
//     title: "Machine Learning Specialization",
//     authority: "Coursera (Stanford University)",
//     date: "Jan 2025",
//     image: "https://i.pinimg.com/736x/0e/0d/aa/0e0daa727badfd109ff8a3d8f6d7ee43.jpg",
//   },
//   {
//     title: "Full-Stack Web Development",
//     authority: "FreeCodeCamp",
//     date: "Dec 2024",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     authority: "Amazon Web Services",
//     date: "Nov 2024",
//     image: "https://upload.wikimedia.org/wikipedia/commons/9/93/AWS_Certified_Logo.png",
//   },
// ];

// Modal.setAppElement("#root");

// const Certifications = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedCert, setSelectedCert] = useState(null);
//   const controls = useAnimation();

//   // Start scrolling animation
//   const startScrolling = () => {
//     controls.start({
//       x: ["0%", "-100%"],
//       transition: {
//         repeat: Infinity,
//         duration: 10, // Speed of scrolling
//         ease: "linear",
//       },
//     });
//   };

//   // Stop scrolling when modal opens
//   const stopScrolling = () => {
//     controls.stop();
//   };

//   // Open Modal
//   const openModal = (cert) => {
//     setSelectedCert(cert);
//     setModalIsOpen(true);
//     stopScrolling(); // Stop scrolling
//   };

//   // Close Modal
//   const closeModal = () => {
//     setModalIsOpen(false);
//     startScrolling(); // Resume scrolling
//   };

//   return (
//     <section className="py-20 bg-gray-900 text-white relative">
//       <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

//       {/* Scrolling Wrapper */}
//       <div className="overflow-hidden relative">
//         <motion.div className="flex space-x-6" animate={controls}>
//           {[...certifications, ...certifications].map((cert, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 rounded-xl shadow-lg p-4 min-w-[300px] cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => openModal(cert)}
//             >
//               <img src={cert.image} alt={cert.title} className="rounded-md w-full h-40 object-cover" />
//               <h3 className="text-lg font-semibold mt-2">{cert.title}</h3>
//               <p className="text-sm text-gray-400">{cert.authority}</p>
//               <p className="text-xs text-gray-500">Issued: {cert.date}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Modal for Full-Screen Certificate View */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-90"
//       >
//         {selectedCert && (
//           <div className="p-4 bg-transparent max-w-4xl mx-auto text-center">
//             <h2 className="text-2xl font-bold text-white mb-4">{selectedCert.title}</h2>
//             <img
//               src={selectedCert.image}
//               alt={selectedCert.title}
//               className="w-auto max-h-[80vh] mx-auto rounded-lg"
//             />
//             <button
//               onClick={closeModal}
//               className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </Modal>
//     </section>
//   );
// };

// export default Certifications;



import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Modal from "react-modal";

const certifications = [
  {
    title: "Genrative AI Mega Workshop",
    authority: "NXTWAVE ACADEMY",
    date: "sep 2024",
    image: "https://cdn1.ccbp.in/misc/gen-ai-2-mw/VKBKS5YSMZ.png",
  },
  {
    title: "Generative AI Mega WorkShop 2.0 (participation certificate)",
    authority: "NXTWAVE ACADEMY ",
    date: "Sep 2024",
    image: "https://media-hosting.imagekit.io//6a55366780244db9/Screenshot%202024-09-22%20084929.png?Expires=1833707686&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x9pdTS-kXcHEAjDsTCV~tp5xfWgmOsieSV4zyDjit1vxZp89LyPu3mmcbdB15AL3A3R82bTQw9aymtTg28Eg33-Kq80-TyGmpTxN-HBv9jbU5Cslcq~9h-AxJPO-jgm79O0Q-vf33twWNRc2j4xP-F23PpXTIJzohF-NMDRBNMUjn4-xdrxw8iV3Nl3UwKM3Nx-lm-0-tQbD0mxMOAk2fXCixeYnXzXUsYKDDmwXnWOFafZkyR7JGx74O8F2vcL5sIp6OLg6c8P9Rb8YP23iYGcoFraMwQnOgdPItda9NOeBdE0lg-em25zkGvUhRcn~uVF8uIUvTs4cDjCJlTwoPQ__",
  },
  {
    title: "React Js",
    authority: "NXTWAVE ACADEMY",
    date: "Jul 2024",
    image: "https://media-hosting.imagekit.io//17393e328ea047b6/Screenshot%202025-02-09%20161134.png?Expires=1833705721&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q8SeXBkYE80EE47lucPQtgu8lZQQvvZDD0N~6LHyzwydcfJATtA9SR2qzzapwQhgn0Ji-LZ6cPRIdUaV~1w1Bx39fO2ZB4tSyk9hFvXlU~zlW-eFhLCydGvy-ss~wzRT5SdsFBH8KHLTMdN2xngD1Ym30B21EUpg~FJSkcQLB5LNG040twbmMCUkoHmGMAeLI7gEraHj6yxNxlWPLERA7SNhdluWeqDOzXyjA85hD3rHDO-s3op1Oa4JXEitw-RXzOU5MqDZ2YOlYpemT8rsQwUGVjwvzCgk6LylLhbK7Pmg3pnXaC9pwLeQ8q9zSFcjQZECUzCmyJit5lqBp4CY9A__",
  },
  {
    title: "Node Js",
    authority: "NXTWAVE ACADEMY",
    date: "March 2024",
    image: "https://media-hosting.imagekit.io//063d7fa77bc24a2b/Screenshot%202025-02-09%20161538.png?Expires=1833705954&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vzoEicdaZnLSN1kMEeAKLWp3NWHk6bDy1Db0DX8wl6Z6mRWhN-XT4bGuFEmiISRb8QhQu0mpOimU9H2qRuYcfHmtHu6bzXDCYeHK1uB3vuqrQy9YFWzjp7vwt1uKW2iLtaW9rGRbwO-2lt446qijk4jiwWprms9sMhX7McTneo6o~aoz9F23LGR7Ill8GOH7bBK1wZevEuOhDH5wopVnm4H9dJZTr-Zv1hYSjfTjHp61Ju6Xo1l3uWP7YjyWilPqvW6CIrIhX38cEcGO-N6P9N7bi1uR2FnAUjeVuGirHrDDg4DB0GUYXcPGvd6iEe8cFP1M4nSqi2laGa9YwFfPRQ__",
  },
  {
    title: "Responsive Web Design using Flexbox",
    authority: "NXTWAVE ACADEMY",
    date: "Jan 2024",
    image: "https://media-hosting.imagekit.io//6f621622e3c647c7/Screenshot%202025-02-09%20161902.png?Expires=1833706166&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MB9LcfALbB~r81zDsSdCHP8uifrZ4QZkuPwUE~-t0sGqVr52UyscJ9-lLGKsnPXyCdQN7v4aTtd4Vz0NiCvQZfMdgHmjA6ZbHTtAbJhgDCoNQK~KFyub6AS2DyejATGhR2bXNT5Gq9njwFa4NG-cbkC2Bh0wrjTIEVkdQgu4K0o0038oggxYmbgOeWwbOXFB-q-UivYCJikRzLfFH~Bl1k-ecMzVvdFJKH~c6tXRM~6uC0dI7I-PGbbvIssCjOdi60wAZBRtIIaEYo-ih6OxgGf9k7~Q21Fr9QwSPcnnNk09efnaD47HX1x4EI9FBqH-~0oPXYzNlJb3wAeonvDOGA__",
  },
  {
    title: "Introduction to Databases",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2023",
    image: "https://media-hosting.imagekit.io//0617634a2ae54393/Screenshot%202025-02-09%20162244.png?Expires=1833706384&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y8HLuxwSb4zTyMGCHObI3lo4k-Y9gTTn40KmnZOtvd7vI4b7r-YmNw4ypJGujO1Xx38v52R9S8AWjncwjxKUUbk9nlU9aJM4i3WBLwNrKr2VvooO6XkZMx6BLJPfY18pyNuTCbJeLY6whBXqf0vXW~wlpeR5ohxOPNCrGDJeqWnYhF7m7PD~jkjtF3Nv8Nj8LrwRFjNfuGpdMPjp1IeAj4ec4At32wLIThOB4CQMaG-Wm0ZKVckv9~3dLJLn-sJ8~YeEupF97aCeRfCPN23OKoWCq24VpVAu2~OeycxZvIfQAeguOQQJyrBlm-vpw~wPKnhB597mn3I13dCA3l0V3g__",
  },
  {
    title: "JavaScript Essentials",
    authority: "NXTWAVE ACADEMY",
    date: "Dec 2023",
    image: "https://media-hosting.imagekit.io//7ada20db12b34a79/Screenshot%202025-02-09%20172720.png?Expires=1833710412&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ccuxG7~9Uq6a5fx767pgpvtNduG~owm-rceaE4qDiSZYObb0JoHTSeKBc4fd50K5ub5uTjgc0ewSFssYXAGmjM8lrVXZplfIofeGXN65mh42gt5DrJO6qLlQYK~PeFoOxF3FLSyas5Hml1MutMiPHmWL7WXWOirnPvJ67eFQJvyHX7aARSPfJGDJpwP-uHON0T4U5nYnrz2qlvnAqCop8xoOPvrQzFBykbYcR8O2GTUTBj4DwVW8XItNOyjnvri7vVCNmcV-bYf-obzlTl9rzHmjI7FqpT2EOCIwna6hMq5tRnySU2lWWTdvDNHtdz8De4K7maL~TnfYcPfpzkMNvw__",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    authority: "NXTWAVE ACADEMY",
    date: "Oct 2023",
    image: "https://media-hosting.imagekit.io//7abe279fc9894c02/Screenshot%202025-02-09%20172700.png?Expires=1833710407&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mWB9UtqBI4kUyldNZVewA8pjubSkn7SMTRzghQg5nrBHxV8B08UAon1KDZREFZMliyFoV-mnVUc8um-no1V~i7~zI3zC1SNd5h-bSfjnco40T8MSO5PImyRCSW-zu-F9~K2hdlYEDj0BADB097OkvUQYrPaAMPY1-EsOSpcqEGiaaH7fXoqpEjZGl81G5bLcLxRK6rBz9~gPvKNIoqKNLyfbuObjG3VjWqJNB6pChOcn2qGz~tdISn4JIadzWFrSrbos~0TMCXUgQ9K2DzacSe5L5321hL0rmh-iE2jPeZzU~7CLj~7KN7yNb0mlLOI~rnQPiqQ5fXD-X72APwY-hA__",
  },
  {
    title: "Programming Foundations With Python ",
    authority: "NXTWAVE ACADEMY",
    date: "Sep 2023",
    image: "https://media-hosting.imagekit.io//5b35d4c4aa484a72/Screenshot%202025-02-09%20172639.png?Expires=1833710402&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DBCjF4MuB-inWdm9otAZvzxxBh8ZPX9D8R9xp3IT2ya3tiNPRUZRat5-ZppBKfEZlbQs4oIEc9La4qkeyDwGmEQUfEoYB-09pHBpwoadbxlpq7eSi-ibEJJc7MMRx6J0HVh~UgOZo8v5oX83aPbQ2lcsNR5cPQh-lasM-k51QaDoAebM6wOO4e16AgtUfOgvcJAO33TrPYrJ3v7jzEioa3BgqfJtJ45avfTD3inoDlnSChTc6vv5BBxQVwdubO5N3Ak4m1-CvzsY1fVNOV6a1oj-iZNQVuHUQ~vqL3nicwoDHwsGV8Ee5VB~KgWICCt~EfXwjUioLWT-Tdhk5RCB9g__",
  },
  {
    title: "XPM 4.0 Fundamentals",
    authority: "NXTWAVE ACADEMY",
    date: "Aug 2023",
    image: "https://media-hosting.imagekit.io//72e564f25a1a438b/Screenshot%202025-02-09%20172618.png?Expires=1833710395&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=atXKc2qC~hKWaR0ZyoJMP9yhn98qBZSL8PSkSW4oDPGAXEuTd4sq7OqLjBd-itvrE4a-pCl53F1oI6g6poPUTDM-VBrbx8eGbNrJhzww2mCGZuyhIkTbqfp7dcTdBE6oLP75TH5FQiTzipOT3brUY20-XqCIwEzbfo5NzGXfGqXpEsPyeDzOt~v-ee3KhiB574A3Urw1dGRzjif8tbTN6lfqeg-NUoJFNWcAJrQZSiKuTPOu6FLj~6eL3nIP2Yl~zJgRYevax~oHW4NtwGw4ifn2byggbqlLY9giYDdORvQWK-maDVHKOSg1JStK0O6MWOr9T8zpkR9njvh9NwgMkQ__",
  },
  {
    title: "Build Your Own Responsive Website",
    authority: "NXTWAVE ACADEMY",
    date: "May 2023",
    image: "https://media-hosting.imagekit.io//29e30da5d59c4580/Screenshot%202025-02-09%20172545.png?Expires=1833710384&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=esxHG1PzxgysN7M4HmuJMsNiVF10UAsKyxUUnfgyaquVU~CJ2nXrx7zvVyAjBkCF~pFW9PtFoeqzHYNaJ4yyk2TtwuAivWRedZ9LO4DuOdxRIPwf9549kU6UU4JPgy6AmLJQtFGSRzNu-y-Ro6zlTw5lQ49dEXFnARGFqPoz~Kdt56wxWcrXMHCWKpOlY5UIIP-y-4Stot0E0ShLFz4Wc~c2pTCC5HQaFoLEDHfSSM7V82b3AyJtiAtK-Yd-vtl4OqF5nwWNTv-KT3FbX~UfZb2d-egeO0JchrgFXyE-HDZqCvx-MvEgxUzWgVu4viT8BuJRQpkfLNw-X-wRzHtd0w__",
  },
  {
    title: "Build Your Own Static Website",
    authority: "NXTWAVE ACADEMY",
    date: "Nov 2022",
    image: "https://media-hosting.imagekit.io//4999efacb508431c/Screenshot%202025-02-09%20172515.png?Expires=1833710376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qRFen417yCLAQ1Eev54RbCqdwVTbzo4Fxx4SYepYvsFnohLyqlpbvU9RhpMkiUce2hVfgId4Z6OS2R8mT3o-ji-W-T2NyLbQOFjfeUx3qRS-DbcX2Vtadz58WSoET9fYrFTy3RTgn8FpIef6uo5wBebU2mqbfo4X19Uc34EbUz2eEFZP6vFeoqGAtZMP6egU3KJWAdbtionikQvF1MvC4V7nZRd2JrZEt0XFMiRYaEVoZnN6ZL8GAROiyu2m8HSsQgm4i9oLsol5ziV~tCksCpp16yQMmkQm8GHSua2bL87DW4Do8-r~QRaCMWbiRS3KILIg7k7cKFuJvYrxf47VYA__",
  },
  {
    title: "Computer Networks and Internet Protocols",
    authority: "Indian Institute of Technology, Kharagpur",
    date: "May 2024",
    image: "https://media-hosting.imagekit.io//c08c3bae65034748/Screenshot%202025-02-09%20163510.png?Expires=1833710364&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ab4YgJtgxQ3lm87qSK~CGjD-JW97TOJUFz34WWFW0N3uCWJPGDwEJN5vPoqge1G6BaRsHZxk0Fjffyorpf7OwGrubJ-er9NpDOLZmk5rQdloj-kyAb8tdlCErGeLQRWym1n8WdBRoMaXfMz5NcmOZnCllf3ZjCKWvWgTPkti1Dack07ktFs15BYfM2bGpxHwRjWkwLkn5DPnTd1F~DIh6ZDdY7vM9~jzAeC75zcYuLhmO-fkeZtwsZDiZde23ZS4DDnd3nU3d94ACHEI6MvxH2HBB6jorgcSHW0alrSfIrljnf0AM-eUzq1lnvBQvk5KKb1EQJHZ2CzITaX-e~W1fw__",
  },
  {
    title: "ChatGpt & AI Tools",
    authority: "Be10x",
    date: "sep 2024",
    image: "https://media-hosting.imagekit.io//038762f3a5224d70/Screenshot%202024-09-22%20092111.png?Expires=1833710695&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jm0AA-tPKjy5fvjJ2NLjWaE0g1Inszjbbro584uiAZQ4EzRD6m46ZJzGLyrtT1pv32n27~dcBaihqYerFTXDmHrglglbV6NFCI874RlG-b-B3TGotzRuZDrIXjI2zFnZwDtSODkXIiEvZ4z7P7Irec~EdTeJPma3yUnGeEclDskePaIXOyfbJOOo8VyPz488LY04JXy2nF9MJQBk3ZqQdWkm-3Ubr7vErWvhqeSLjSJ5n96lMRqWZ3f4YYlsJ47qQpwLlaSfC0JTKTfwzg1vWfVGTWzHfPXq43czD2M4I~gpAZf3PlzwWXsCiYFS3ccFZBZH56G7gZLNhQd0sVD34w__",
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
    <section className="py-20 bg-black text-white relative">
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

