import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoIosArrowForward } from "react-icons/io";
import user_info from "../data/user_info.js";

function Landing() {
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full Stack Developer', 'Fast Learner'],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 md:px-24">
      <div className="self-center">
        <img src={user_info.main.photo} className="rounded-full w-20 mb-6 lg:hidden" />
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-gray-900 dark:text-gray-100 self-center">
            <h2 className="text-xl">
              {text}
              <Cursor cursorStyle="_" />
            </h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">{user_info.main.name}</h1>
            <p className="mt-6 dark:text-gray-300 text-base font-light lg:w-[87%] leading-7">{user_info.main.description}</p>
            <div className="flex gap-2 mt-6">
              <a href="#experience" className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:bg-blue-600 transition-all hover:text-gray-100 duration-300">Experience</a>
              <a href="#projects" className="px-6 py-3 border border-gray-900 dark:border-gray-100 hover:bg-blue-600 transition-all hover:text-gray-100 duration-300">Projects</a>
              <a href="#contact" className="px-6 py-3 hover:text-blue-600 transition-all duration-300 flex gap-3 hover:gap-4">
                <span className="self-center">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block w-[480px] self-center">
            <img className="rounded-[10%] transform rotate-3" src={user_info.main.photo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
