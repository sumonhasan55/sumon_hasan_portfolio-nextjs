import Link from "next/link";
import { CircularText } from "./Icons";


const HireMe = () => {
    return (
        <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:left-auto md:top-0 md:bottom-auto md:absolute md:right-0">
            <div className="relative flex items-center justify-center h-auto w-44 md:w-24">
                <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
                <Link href="mailto:wubsumon7577@gmail.com" className="absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 dark:bg-light dark:text-dark dark:border-light bg-dark text-light border-dark hover:bg-light hover:text-dark dark:hover:text-light dark:hover:bg-dark
                md:w-12 md:h-12 md:text-[10px]">Hire Me</Link>
            </div>
            
        </div>
    );
};

export default HireMe;