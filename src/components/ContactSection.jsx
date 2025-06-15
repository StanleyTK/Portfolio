import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import user_info from "../data/user_info.js";

function ContactSection() {
  return (
    <div id="contact" className="px-6 md:px-24 mt-5 font-sans">
      <p className="mt-4 leading-7 text-base text-gray-500 dark:text-gray-300 font-light">{user_info.contact.description}</p>
      <div className="mt-12 space-y-4">
        <a href={user_info.socials.github} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-all duration-300">
          <FaGithub className="self-center text-lg" />
          <span className="self-center">Follow on GitHub</span>
        </a>
        <a href={user_info.socials.instagram} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-all duration-300">
          <FaInstagram className="self-center text-lg" />
          <span className="self-center">Follow on Instagram</span>
        </a>
        <a href={user_info.socials.linkedin} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-all duration-300">
          <FaLinkedin className="self-center text-lg" />
          <span className="self-center">Follow on LinkedIn</span>
        </a>
      </div>
      <hr className="mt-6 w-72 border dark:border-gray-800" />
      <a href={`mailto:${user_info.main.email}`} className="flex mt-6 mb-12 text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 gap-4">
        <MdEmail className="self-center text-lg" />
        <span>{user_info.main.email}</span>
      </a>
    </div>
  );
}

export default ContactSection;