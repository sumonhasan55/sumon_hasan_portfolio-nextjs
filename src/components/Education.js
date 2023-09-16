import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}

        >
            <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg md:text-xl">{type}
            </h3>
            <span className="font-medium capitalize text-dark/75 xs:text-sm">
                {time} | {place}
            </span>
            <p className="w-full font-medium md:text-sm ">
                {info}
            </p>
        </motion.div>

    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h1 className="w-full mb-32 font-bold text-center text-8xl text-dark dark:text-light md:text-5xl xs:text-3xl md:mb-16 xs:mb-8">Education</h1>
            <div ref={ref} className="w-[75%] max-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="a absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul  className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
                    <Details

                        type="Bachelor Of Science In Computer Science"
                        time="2016-2021"
                        place="World University Of Bangladesh"
                        info="I completed may Bachelor Degree in World University Of Bangladesh in Computer Science and Engineering (B.Sc. in CSE) is a four-year program designed to give students a solid foundation in Computer Science and Computer Engineering."


                    />
                    <Details

                        type="  Diploma In Computer Science"
                        time="2011-2015 "
                        place="Bangladesh Institute Of Technology(BIT)"
                        info="The Diploma in Computer Science and Engineering  is a four-year program designed to give students a solid foundation in Computer Science and Computer Engineering. "


                    />
                    <Details

                        type="Web-Development Course"
                        time="2022-2023 "
                        place="Programing Hero"
                        info="
                        I completed  web development course in Programming Hero which I completed in June 2022 in Six month learning process. After that I am continuously learn new things to be a software engineer."
                    

                    />
                    <Details

                        type="Next Level-2 Web-Development Course"
                        time="2023-Present"
                        place="Programing Hero"
                        info="
                        This course Start 
                        Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, and many more"



                    />
                   
                </ul>

            </div>

        </div>
    );
};

export default Education;