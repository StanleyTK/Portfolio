import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import user_info from "../data/user_info.js";

function ContactSection() {
  return (
    <div id="contact" className="px-6 md:px-24 mt-20">
      <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Contact Me</h4>
      <hr className="border-b-2 border-black-600 mb-6"/>
      <p className="mt-8 leading-7 text-base text-gray-500 dark:text-gray-300 font-light">{user_info.contact.description}</p>
      <div className="mt-12">
        <a href={user_info.socials.instagram} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
          <FaInstagram className="self-center text-lg" />
          <span className="self-center">Follow on Instagram</span>
        </a>
        <a href={user_info.socials.linkedin} className="flex gap-4 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 hover:text-gray-700 transition-all duration-300 mt-4">
          <FaLinkedin className="self-center text-lg" />
          <span className="self-center">Follow on Linkedin</span>
        </a>
      </div>
      <hr className="mt-6 w-72 border dark:border-gray-800" />
      <a href={`mailto:${user_info.main.email}`} className="flex mt-6 text-gray-500 dark:text-gray-300 hover:dark:text-gray-300 gap-4 hover:text-gray-700 transition-all duration-300">
        <MdEmail className="self-center text-lg" />
        <span>{user_info.main.email}</span>
      </a>
    </div>
  );
}

export default ContactSection;
