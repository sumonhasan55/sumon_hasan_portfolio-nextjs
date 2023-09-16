import { split } from "postcss/lib/list";
import {motion} from "framer-motion";


const quote = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08
        }
    }

}
const singleWord = {
    initial:{
        y:50,
        opacity:0,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }

}


const AnimatedText = ({text,className=""}) => {
    return (
        <div className="flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center md:text-2xl sm:p-0">
            <motion.h1 className={`inline-block w-full text-dark text-6xl font-bold capitalize  dark:text-light ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >
               {
                text.split(" ").map((word,index)=>
                < motion.span key={word+'-'+index} className="inline-block"
                variants={singleWord}
               
                > 
                    {word}&nbsp;

                </motion.span>

                )
               }
                </motion.h1>
            
        </div>
    );
};

export default AnimatedText;