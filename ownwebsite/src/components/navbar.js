import React from "react";
import { useRef } from "react";
import Experience from "./experience";
import Introduction from "./introduction";

const Navbar = () => {
    const ref = useRef(null);
    const refexp = useRef(null);
    const clicktoexp = ()=>{
      refexp.current.scrollIntoView({behaviour:'smooth'});
  }
    const clicktoIntro = ()=>{
        ref.current.scrollIntoView({behaviour:'smooth'});
    }
  return (
    <div>
    <nav className="bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              My Website
            </a>
          </div>
          <div className="flex">
            <button className="px-4 py-2 text-white rounded-md hover:bg-blue-800" onClick={clicktoIntro}>
              About
            </button>
            <button className="px-4 py-2 text-white rounded-md hover:bg-blue-800" onClick={clicktoexp}>
              Experience
            </button>
            <button className="px-4 py-2 text-white rounded-md hover:bg-blue-800">
              Links
            </button>
          </div>
        </div>
      </div>
    </nav>
    <Introduction ref = {ref}/>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p><p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>

    <Experience refexp={refexp}/>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    <p>kenfoenf</p>
    </div>
  );
};
export default Navbar;
