import coum from "../photos/coum.jpg";
import { forwardRef } from "react";

const Introduction = forwardRef((props, ref) => {
  return (
    <div
      className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 p-8 pt-16 flex flex-col md:flex-row items-center md:items-start"
      ref={ref}
    >
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
        <img
          className="w-64 h-64 rounded-full pt-6 mx-auto mb-4 md:mb-0"
          src={coum}
          alt="coum"
        />
      </div>
      <div className="w-full md:w-1/1 text-center md:text-left mx-auto mt-7">
        <h2 className="text-white text-4xl font-bold mb-4">About</h2>
        <p className="text-white text-lg leading-relaxed mx-auto mt-4">
          Hi, my name is Luís Silva and I am currently taking my master degree
          in Math and Computer Science. I am passionate about Computers and
          Programming in general and enjoy videogames since I was born,
          basically. In my free time, I like to play video games and make fun
          projects just like this website aswell as keep learning more about this field and always improving. Thank you for visiting my website!
        </p>
      </div>
    </div>
  );
});

export default Introduction;
