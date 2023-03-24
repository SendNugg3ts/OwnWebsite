import React from "react";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaGit,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiC } from "react-icons/si";
import { forwardRef } from "react";

const Experience = (props, refexp) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 experience">
      <h2
        className="text-center text-white text-4xl font-bold mb-4"
        refexp={refexp}
      >
        My Experience
      </h2>
      <div className="grid grid-cols-4 pt-16 gap-4">
        <div className="icon-item flex flex-col items-center">
          <FaPython size={50} className="text-blue-600 mb-2" />
          <p className="text-white">Python</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaJs size={50} className="text-yellow-400 mb-2" />
          <p className="text-gray-700">JavaScript</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <SiC size={50} className="text-gray-500 mb-2" />
          <p className="text-gray-700">C</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaHtml5 size={50} className="text-red-500 mb-2" />
          <p className="text-gray-700">HTML</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaCss3Alt size={50} className="text-blue-700 mb-2" />
          <p className="text-gray-700">CSS</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaReact size={50} className="text-blue-400 mb-2" />
          <p className="text-gray-700">React</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaNodeJs size={50} className="text-green-600 mb-2" />
          <p className="text-gray-700">Node.js</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaLinux size={50} className="text-gray-900 mb-2" />
          <p className="text-gray-700">Linux</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaGit size={50} className="text-red-600 mb-2" />
          <p className="text-gray-700">Git</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaBootstrap size={50} className="text-purple-700 mb-2" />
          <p className="text-gray-700">Bootstrap</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <SiTailwindcss size={50} className="text-blue-500 mb-2" />
          <p className="text-gray-700">Tailwind CSS</p>
        </div>
        <div className="icon-item flex flex-col items-center">
          <FaDatabase size={50} className="text-teal-500 mb-2" />
          <p className="text-gray-700">SQL</p>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Experience);
