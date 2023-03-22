import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              My Website
            </a>
          </div>
          <div className="flex">
            <button className="px-4 py-2 text-white rounded-md hover:bg-blue-800">
              Introduction
            </button>
            <button className="px-4 py-2 text-white rounded-md hover:bg-blue-800">
              Technologies
            </button>
            <button className="px-4 py-2 text-white rounded-md hover:bg-blue-800">
              Links
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
