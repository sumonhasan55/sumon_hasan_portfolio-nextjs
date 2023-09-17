import {motion} from "framer-motion";

const Skill = ({name,x,y})=>{
    return(
        <motion.div className="absolute flex items-center justify-center p-8 px-6 py-3 font-semibold rounded-full cursor-pointer bg-dark text-light md:dark:bg-dark md:dark:p-0 md:p-0 md:dark:text-light shadow-black dark:text-dark dark:bg-light "
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        
        >
           {name}
        </motion.div>
        

    )

}

const Skills = () => {
    return (
       <>
       <h2 className="w-full mt-32 font-bold text-center text-8xl text-dark dark:text-light md:text-3xl md:mt-16 ">
        Skils
       </h2>
       <div className="flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark 
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       md:bg-circularLightMd md:dark:bg-circularDarkMd
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
       xs:bg-circularLightXm xs:dark:bg-circularDarkXm
       lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div className="flex items-center justify-center p-8 font-semibold rounded-full bg-dark text-light shadow-black dark:text-dark dark:bg-light md:dark:p-3 md:p-2"
        whileHover={{scale:1.05}}
        >
            Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="-5vw" />
        <Skill name="CSS" x="-30vw" y="-12vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Typescript" x="5vw" y="12vw" />
        <Skill name="ReactJs" x="-25vw" y="8vw" />
        <Skill name="Nextjs" x="15vw" y="-12vw" />
        <Skill name="MongoDB" x="24vw" y="-5vw" />
        <Skill name="Mongoose" x="-13vw" y="-10vw" />
        <Skill name="Nodejs" x="5vw" y="-16vw" />
        <Skill name="Tailwind CSS" x="-1vw" y="-7vw" />
        <Skill name="Boostrap" x="18vw" y="18vw" />
        <Skill name="Firebase" x="-10vw" y="-18vw" />
        <Skill name="Angular" x="-6vw" y="-14vw" />
        
        <Skill name="Redux-Toolkit" x="-8vw" y="21vw" />
        
        <Skill name="Firebase" x="-10vw" y="-18vw" />
        
        <Skill name="Firebase" x="-10vw" y="5vw" />
        

       </div>
       </>
    );
};

export default Skills;