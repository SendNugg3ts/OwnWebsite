import React from "react";
import { useRef } from "react";
import Introduction from "./introduction";

const Navbar = () => {
    const ref = useRef(null);
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
    <Introduction ref = {ref}/>
    <p>about</p>
    <p>sasa</p>
    <p>gfdgfd</p>
    <p>dfgfdgdf</p>
    <p>dfgfdg</p>
    <p>gdgdfg</p>
    <p>fdfdfd</p>
    <p>dfsdsf</p>
    <p>fsdfsd</p>
    <p>fsdfsdf</p>
    <p>fsdfsdf</p>
    <p>fsfsfs</p>
    <p>fsdfsdf</p>
    <p>fdsfsf</p>
    <p>fsdfsf</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p><p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p>about</p>
    <p>sasa</p>
    <p>gfdgfd</p>
    <p>dfgfdgdf</p>
    <p>dfgfdg</p>
    <p>gdgdfg</p>
    <p>fdfdfd</p>
    <p>dfsdsf</p>
    <p>fsdfsd</p>
    <p>fsdfsdf</p>
    <p>fsdfsdf</p>
    <p>fsfsfs</p>
    <p>fsdfsdf</p>
    <p>fdsfsf</p>
    <p>fsdfsf</p>
    <p>about</p>
    <p>sasa</p>
    <p>gfdgfd</p>
    <p>dfgfdgdf</p>
    <p>dfgfdg</p>
    <p>gdgdfg</p>
    <p>fdfdfd</p>
    <p>dfsdsf</p>
    <p>fsdfsd</p>
    <p>fsdfsdf</p>
    <p>fsdfsdf</p>
    <p>fsfsfs</p>
    <p>fsdfsdf</p>
    <p>fdsfsf</p>
    <p>fsdfsf</p>
    <p>about</p>
    <p>sasa</p>
    <p>gfdgfd</p>
    <p>dfgfdgdf</p>
    <p>dfgfdg</p>
    <p>gdgdfg</p>
    <p>fdfdfd</p>
    <p>dfsdsf</p>
    <p>fsdfsd</p>
    <p>fsdfsdf</p>
    <p>fsdfsdf</p>
    <p>fsfsfs</p>
    <p>fsdfsdf</p>
    <p>fdsfsf</p>
    <p>fsdfsf</p>
    <p>about</p>
    <p>sasa</p>
    <p>gfdgfd</p>
    <p>dfgfdgdf</p>
    <p>dfgfdg</p>
    <p>gdgdfg</p>
    <p>fdfdfd</p>
    <p>dfsdsf</p>
    <p>fsdfsd</p>
    <p>fsdfsdf</p>
    <p>fsdfsdf</p>
    <p>fsfsfs</p>
    <p>fsdfsdf</p>
    <p>fdsfsf</p>
    <p>fsdfsf</p>
    </div>
  );
};
export default Navbar;
