import Link from "next/link"
import Logo from "./Logo"
import { useRouter } from "next/router"
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons"
import { motion } from "framer-motion";
import UseThemeSwitcher from "./hooks/UseThemeSwitcher";
import { useState } from "react";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()

    return (
        <Link href={href}
            className={`${className} relative group`}
        >
            {title}
            <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}  dark:bg-light`}

            >&nbsp;</span>

        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    const handleClick = () => {
        toggle();
        router.push(href)

    }

    return (
        <button href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
            
        >
            {title}
            <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}  dark:bg-dark`}

            >&nbsp;</span>

        </button>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const [mode, setMode] = UseThemeSwitcher()
    return (
        <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8"
        >
            <button className="flex-col items-center justify-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className="flex items-center justify-between w-full lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/articles" title="Articles" className="mx-4" />
                </nav>


                <nav className="flex flex-wrap items-center justify-center">
                    <motion.a className="w-6 mr-4" href="https://twitter.com" target={"_blank"}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a className="w-6 mx-4" href="https://github.com/sumonhasan55" target={"_blank"}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a className="w-6 mx-4" href="https://www.linkedin.com/in/hm-sumon-hasan" target={"_blank"}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a className="w-6 mx-4" href="/" target={"_blank"}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a className="w-6 ml-4" href="/" target={"_blank"}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <DribbbleIcon />
                    </motion.a>
                    <button
                        className={`flex items-center justify-center p-1 ml-3 rounded-full   
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    >
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>


            {
                isOpen ?
                    < motion.div
                    initial={{scale:0, opacity:0, x:"-50%",y:"-50%"}}
                    animate={{scale:1,opacity:1}}
                     className="  min-w-[70vw] flex flex-col items-center justify-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32">
                        <nav className="flex flex-col items-center justify-center ">
                            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
                            <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
                        </nav>


                        <nav className="flex flex-wrap items-center justify-center mt-2">
                            <motion.a className="w-6 mr-4 rounded-full sm:mx-1 bg-light dark:bg-dark" href="https://twitter.com" target={"_blank"}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}

                            >
                                <TwitterIcon />
                            </motion.a>
                            <motion.a className="w-6 mx-4 rounded-full sm:mx-1 bg-light dark:bg-dark" href="https://github.com/sumonhasan55" target={"_blank"}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}

                            >
                                <GithubIcon />
                            </motion.a>
                            <motion.a className="w-6 mx-4 sm:mx-1" href="https://www.linkedin.com/in/hm-sumon-hasan" target={"_blank"}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}

                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a className="w-6 mx-4 sm:mx-1" href="/" target={"_blank"}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}

                            >
                                <PinterestIcon />
                            </motion.a>
                            <motion.a className="w-6 ml-4 rounded-full sm:mx-1 bg-light" href="/" target={"_blank"}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}

                            >
                                <DribbbleIcon />
                            </motion.a>
                            <button
                                className={`flex items-center justify-center p-1 ml-3  sm:mx-1 rounded-full   
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            >
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>


                    : null

            }
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>

        </header>
    )
}

export default Navbar
