import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import React from 'react';
import { forwardRef } from "react";
import Minhaf1 from "../photos/minhafoto1.jpg";

const Links = forwardRef((props, reflinks) => {
    
  return (
    <div  ref={reflinks}className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 pt-32">
        <h2 className="text-xl text-center pt-6 text-white font-bold mb-2">Links</h2>
    <div className="bg-gradient-to-r from-zinc-900 to-purple-700 p-6 rounded-lg shadow-md max-w-md mx-auto mb-8 ring-4 ring-zinc-900">
      <p className="text-white mb-4">These are my social links that you can use to contact me and the last one is my resume:</p>
      <div className="flex justify-between">
        <a className="text-white hover:text-gray-800 transition-colors duration-200" href="https://github.com/SendNugg3ts">
          <FaGithub size={24} />
        </a>
        <a className="text-white hover:text-gray-800 transition-colors duration-200" href="https://www.linkedin.com/in/luís-filipe-1009b213b/">
          <FaLinkedin size={24} />
        </a>
        <a className="text-white hover:text-gray-800 transition-colors duration-200" href="https://www.instagram.com/luissilva__19/">
          <FaInstagram size={24} />
        </a>
        <a className="text-white hover:text-gray-800 transition-colors duration-200" href="https://example.com/your-resume.pdf">
          <IoDocumentTextOutline size={24} />
        </a>
      </div>
    </div>
    <div className="bg-gradient-to-r from-zinc-900 to-purple-700 p-6 rounded-lg shadow-md max-w-md mx-auto mb-8 ring-4 ring-zinc-900">
    <img
          className="object-scale-down h-48  rounded-xl  mx-auto ring-4 ring-zinc-900"
          src={Minhaf1}
          alt="Minhaf2"
        />
        </div>
    </div>
  );
});

export default Links;