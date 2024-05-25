import { FaInstagram, FaArrowCircleUp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Project from "../components/Project";
import ExperienceCard from "../components/ExperienceCard";
import user_info from "../data/user_info.js";
import ToggleTheme from "../components/ToggleTheme.jsx";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Homepage() {
    const { theme, switchTheme } = useContext(AppContext);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [text] = useTypewriter({
        words: ['Software Engineer', 'Full Stack Developer', 'Fast Learner'],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <div className="bg-gray-50 dark:bg-[#101e38]">
            <div className="lg:w-[1200px] md:mx-auto h-full border-x border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0e182c]">
                <ToggleTheme switchTheme={switchTheme} />

                {/* Landing */}
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
         {/* Education
            <div id="education" className="px-6 md:px-24 mt-20">
                <div className="mt-8 p-8 bg-gray-800 dark:bg-[#0a1420] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center">
                        <img className="h-20 w-20 rounded-full mb-4" src={user_info.education[0].image} />
                        <h5 className="font-medium text-gray-100 dark:text-gray-100 text-2xl">{user_info.education[0].school}</h5>
                        <p className="text-gray-400 dark:text-gray-400 text-lg mt-2">{user_info.education[0].degree}</p>
                        <p className="text-gray-400 dark:text-gray-400 text-md mt-1">{user_info.education[0].year}</p>
                    </div>
                </div>
            </div> */}


                {/* Experience */}
                <div id="experience" className="px-6 md:px-24 mt-20">
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Experience</h4>
                    <hr className="border-b-2 border-black-600 mb-6"/>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        {user_info.experience.map((job, index) => (
                            <ExperienceCard 
                                key={index} 
                                image={job.image} 
                                role={job.role} 
                                company={job.company} 
                                year={job.year} 
                                description={job.description} 
                            />
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div id="projects" className="px-6 md:px-24 mt-20">
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Projects</h4>
                    <hr className="border-b-2 border-black-600 mb-6"/>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        {user_info.projects.map((project, index) => (
                            <Project 
                                key={index} 
                                theme={theme} 
                                title={project.title} 
                                description={project.description} 
                                technologies={project.technologies} 
                                github={project.github} 
                                link={project.link} 
                            />
                        ))}
                    </div>
                </div>

               

                <div id="skills" className="px-6 md:px-24 mt-20">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Skills</h4>
                <hr className="border-b-2 border-black-600 mb-6"/>
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 mt-8">
                    <div className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Programming Languages</h4>
                        <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.languages.description}</p>
                        <img className="w-48 mt-4" src={user_info.skills.languages.image + theme} />
                    </div>
                    <div className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Frameworks & Libraries</h4>
                        <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.frameworks.description}</p>
                        <img className="w-48 mt-4" src={user_info.skills.frameworks.image + theme} />
                    </div>
                    <div className="p-6 bg-white dark:bg-[#0e182c] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300">Tools & Platforms</h4>
                        <p className="leading-7 mt-2 text-base font-light text-gray-500 dark:text-gray-300">{user_info.skills.tools.description}</p>
                        <img className="w-48 mt-4" src={user_info.skills.tools.image + theme} />
                    </div>
                </div>
            </div>

                {/* Contact */}
                <div id="Contact" className="px-6 md:px-24 mt-20">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Contact Me</h4>
                <hr className="border-b-2 border-black-600 mb-6"/>
                    <h4 className="text-5xl font-bold text-gray-900 dark:text-gray-100">{user_info.contact.title}</h4>

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

                <hr className="mt-12 border border-gray-300 dark:border-gray-700" />



                {/* Footer */}
                <footer className="p-4 text-center md:flex justify-between">
                    <p className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 text-sm text-center font-light">{user_info.footer}</p>
                    <button onClick={() => scrollToTop()} className="text-gray-500 self-center mt-2 md:mt-0 dark:text-gray-300 mx-auto md:mx-0 text-sm font-light flex gap-2"><FaArrowCircleUp className="self-center" /> Go back to top</button>
                </footer>
            </div>
        </div>
    )
}

export default Homepage;
