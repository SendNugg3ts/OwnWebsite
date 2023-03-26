import React from "react";
import { useRef } from "react";
import Experience from "./experience";
import Introduction from "./introduction";
import Links from "./links";

const Navbar = () => {
  const ref = useRef(null);
  const refexp = useRef(null);
  const reflinks = useRef(null);
  const clicktoComponent = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth", block :"start" });
  };
  return (
    <div className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 ">
      <nav className="bg-zinc-900 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white font-bold text-xl">
                My Website
              </a>
            </div>
            <div className="flex">
              <button
                className="px-4 py-2 text-white rounded-md hover:bg-purple-700"
                onClick={()=>clicktoComponent(ref)}
              >
                About
              </button>
              <button
                className="px-4 py-2 text-white rounded-md hover:bg-purple-700"
                onClick={()=>clicktoComponent(refexp)}
              >
                Experience
              </button>
              <button className="px-4 py-2 text-white rounded-md hover:bg-purple-700"
              onClick={()=> clicktoComponent(reflinks)}>
                Links
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Introduction ref={ref} />
      <Experience ref={refexp} />
      <Links ref={reflinks}/>
    </div>
  );
};
export default Navbar;
