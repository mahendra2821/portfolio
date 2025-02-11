import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-blue-600 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-green-400">
          Hring<span className="text-yellow-400">Dex</span>
        </h1>
        <ul className="hidden md:flex space-x-6 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="space-x-4">
          <button className="text-white">Login</button>
          <button className="bg-yellow-400 px-4 py-2 rounded-lg text-white">
            Sign up for Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-20 text-white px-6">
        <p className="text-lg font-semibold text-yellow-400">START TO SUCCESS</p>
        <h2 className="text-4xl font-bold mt-2">
          Access To <span className="underline">5000+</span> Courses <br /> from <span className="underline">300</span> Instructors <br /> & Institutions
        </h2>
        <p className="text-gray-200 mt-4">
          Various versions have evolved over the years, sometimes by accident.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mt-8 flex items-center bg-white p-2 rounded-full shadow-md w-96">
        <input
          type="text"
          placeholder="What do you want to learn?"
          className="flex-grow px-4 py-2 outline-none text-gray-700"
        />
        <button className="bg-yellow-400 p-3 rounded-full">
          🔍
        </button>
      </div>

      {/* Illustration */}
      <div className="mt-12">
        <img src="https://img.freepik.com/premium-vector/focused-young-student-boy-studying-doing-homework-wooden-table_1322206-37488.jpg?w=360" alt="Illustration" className="w-80" />
      </div>
    </div>
  );
};

export default LandingPage;
