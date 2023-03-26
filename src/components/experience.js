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

const Experience = forwardRef((props, refexp) => {
  return (
    <div ref = {refexp} className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700">
      <h2 
        className="text-center text-white text-4xl font-bold mb-4 mt-8"
      >
        My Experience
      </h2>
      <div className="bg-gradient-to-r from-zinc-900 to-purple-700 p-6 rounded-lg shadow-md mx-auto max-w-5xl mb-8 ring-4 ring-zinc-900">
      <p className="text-white text-lg leading-relaxed mb-4 text-center">
          As a software developer, I have experience working with a variety of programming languages, libraries, and frameworks. <p className="text-center">Here are some of the technologies I've worked with extensively in my college, internships and on my side projects:</p>
        </p>
        </div>
      <div className="grid grid-cols-3 pt-16 gap-3 column-gap-1 place-items-center mx-auto">
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaPython size={100} className="text-blue-600 mt-2" />
          <p className="text-white mt-2">Python</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaJs size={100} className="text-yellow-400 mt-2" />
          <p className="text-white">JavaScript</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <SiC size={100} className="text-blue-500 mt-2" />
          <p className="text-white">C</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaHtml5 size={100} className="text-red-500 mt-2" />
          <p className="text-white">HTML</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaCss3Alt size={100} className="text-blue-700 mt-2" />
          <p className="text-white">CSS</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaReact size={100} className="text-blue-400 mt-2" />
          <p className="text-white">React</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaNodeJs size={100} className="text-green-600 mt-2" />
          <p className="text-white">Node.js</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaLinux size={100} className="text-black mt-2" />
          <p className="text-white">Linux</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaGit size={100} className="text-red-600 mt-2" />
          <p className="text-white">Git</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaBootstrap size={100} className="text-purple-700 mt-2" />
          <p className="text-white">Bootstrap</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <SiTailwindcss size={100} className="text-blue-500 mt-2" />
          <p className="text-white">Tailwind CSS</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 p-2 rounded-lg ring-4 ring-zinc-900 flex flex-col items-center max-w-xs">
          <FaDatabase size={100} className="text-teal-500 mt-2" />
          <p className="text-white">SQL</p>
        </div>
      </div>
    </div>
  );
});

export default Experience;
