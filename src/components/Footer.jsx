import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";

function Footer() {
  const { theme, switchTheme } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="p-4 text-center md:flex justify-between">
      <p className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 text-sm text-center font-light">{user_info.footer}</p>
      <button onClick={scrollToTop} className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 mx-auto md:mx-0 text-sm font-light flex gap-2">
        <FaArrowCircleUp className="self-center" /> Go back to top
      </button>
    </footer>
  );
}

export default Footer;
