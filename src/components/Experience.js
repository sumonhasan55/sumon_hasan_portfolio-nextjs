import { useScroll,motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref =useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon  reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}

        >
            <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg md:text-xl">{position}&nbsp;<a href={companyLink}
             target="_blank"
              className= "capitalize text-primary dark:text-primaryDark">@{company}</a></h3>
            <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="w-full font-medium md:text-sm ">
                {work}
            </p>
        </motion.div>

    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
    return (
        <div className="my-64">
            <h1 className="w-full mb-32 font-bold text-center text-8xl text-dark dark:text-light md:text-5xl xs:text-3xl md:mb-16 xs:mb-8">Experience</h1>
            <div ref={ref} className="w-[75%] max-auto relative lg:w-[90%] md:w-full">
                <motion.div
                style={{scaleY:scrollYProgress}}
                 className="a absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
                    <Details

                        position="Software Engineer "
                        company="Google"
                        companyLink="www.gooogle.com"
                        time="2022-Present"
                        address="Mountain View"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization"


                    />
                    <Details

                        position="Software Engineer "
                        company="Google"
                        companyLink="www.gooogle.com"
                        time="2022-Present"
                        address="Mountain View"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization"


                    />
                    <Details

                        position="Software Engineer "
                        company="Google"
                        companyLink="www.gooogle.com"
                        time="2022-Present"
                        address="Mountain View"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization"


                    />
                    <Details

                        position="Software Engineer "
                        company="Google"
                        companyLink="www.gooogle.com"
                        time="2022-Present"
                        address="Mountain View"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization"


                    />
                    <Details

                        position="Software Engineer "
                        company="Google"
                        companyLink="www.gooogle.com"
                        time="2022-Present"
                        address="Mountain View"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization"


                    />
                </ul>

            </div>

        </div>
    );
};

export default Experience;