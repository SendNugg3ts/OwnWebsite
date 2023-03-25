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
        className="text-center text-white text-4xl font-bold mb-4"
      >
        My Experience
      </h2>
      <p className="text-white text-lg leading-relaxed mb-4 text-center">
          As a software developer, I have experience working with a variety of programming languages, libraries, and frameworks. <p className="text-center">Here are some of the technologies I've worked with extensively in my college and on my side projects:</p>
        </p>
      <div className="grid grid-cols-4 pt-16 gap-4">
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaPython size={100} className="text-blue-600 mb-2" />
          <p className="text-white pt-2">Python</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaJs size={100} className="text-yellow-400 mb-2" />
          <p className="text-white">JavaScript</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <SiC size={100} className="text-blue-500 mb-2" />
          <p className="text-white">C</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaHtml5 size={100} className="text-red-500 mb-2" />
          <p className="text-white">HTML</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaCss3Alt size={100} className="text-blue-700 mb-2" />
          <p className="text-white">CSS</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaReact size={100} className="text-blue-400 mb-2" />
          <p className="text-white">React</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaNodeJs size={100} className="text-green-600 mb-2" />
          <p className="text-white">Node.js</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaLinux size={100} className="text-black mb-2" />
          <p className="text-white">Linux</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaGit size={100} className="text-red-600 mb-2" />
          <p className="text-white">Git</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaBootstrap size={100} className="text-purple-700 mb-2" />
          <p className="text-white">Bootstrap</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <SiTailwindcss size={100} className="text-blue-500 mb-2" />
          <p className="text-white">Tailwind CSS</p>
        </div>
        <div className="icon-box bg-gradient-to-br from-zinc-900 to-purple-700 text-center items-center p-2 rounded-lg relative z-10 ring-4 ring-zinc-900">
          <FaDatabase size={100} className="text-teal-500 mb-2" />
          <p className="text-white">SQL</p>
        </div>
      </div>
    </div>
  );
});

export default Experience;
