import Link from "next/link";


const Footer = () => {
    return (
        <>
            <footer className="w-full p-10 mt-10 text-lg font-medium border-t-2 border-dark dark:border-light footer footer-center bg-base-200 dark:bg-dark dark:text-light text-base-content sm:text-base">
               
               
                <aside>
                <Link href="/">Full Stack Web Developer</Link>
                    <p>Copyright © 2023 - All right reserved by SUMON IT Solution Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;