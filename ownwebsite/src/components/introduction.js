import coum from "../photos/minhafoto2.jpg";
import { forwardRef } from "react";

const Introduction = forwardRef((props, ref) => {
  return (
    <div
      className="bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 p-8 pt-16 flex flex-col md:flex-row items-center md:items-start"
      ref={ref}
    >
      <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
      <div className="bg-gradient-to-r from-zinc-900 to-purple-700 p-6 rounded-lg shadow-md max-w-md mx-auto mt-8 mb-8 ring-4 ring-zinc-900">
        <img
          className="object-scale-down h-96 rounded-xl  mx-auto md:mb-0 ring-4 ring-zinc-900"
          src={coum}
          alt="coum"
        />
        </div>
      </div>
      <div className="w-full md:w-1/1 text-center mt-10 md:text-left mx-auto">
        <h2 className="text-white text-4xl font-bold mb-4">About</h2>
        <div className="bg-gradient-to-r from-zinc-900 to-purple-700 p-6 rounded-lg shadow-md  mb-8 ring-4 ring-zinc-900">
        <p className="text-white text-lg leading-relaxed mx-auto mt-4">
          Hi, my name is Luís Silva and I am currently taking my master degree
          in Math and Computer Science at Universidade do Minho in Braga, Portugal. I am passionate about Computers and
          Programming in general and enjoy videogames since I was born
          basically. In my free time, I like to play video games and make fun
          projects just like this website aswell as keep learning more about this field and always improving. Thank you for visiting my website!
        </p>
        </div>
      </div>
    </div>
  );
});

export default Introduction;
