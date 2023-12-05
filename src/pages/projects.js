import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Project1 from "../../public/images/projects/dentiscare.png";
import Project2 from "../../public/images/projects/hm-pc-builder.png";
import Project3 from "../../public/images/projects/Developer-Portfolio.png";
import Project4 from "../../public/images/projects/E-Book-Collection.png";
import Project5 from "../../public/images/projects/HTML Templete.png";
import Project6 from "../../public/images/projects/Shhop_Angular.png";
import { motion } from 'framer-motion';
import TransitionEffect from "@/components/TransitionEffect";


const FrammerImage = motion(Image)





const FeturedProjects = ({ type, title, summery, img, link, github }) => {
    return (
        <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl rounded-br-2xl border-dark bg-light dark:border-light dark:bg-dark md:flex-col md:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:right-2 xs:h-[102%] md:w-[103%] xs-rounded-[1.5rem]" />
            <Link href={link} target="_blank"
                className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
            >

                <FrammerImage src={img} alt={title} className="w-full lg:h-48 h-56 border-2 border-solid shadow-2xl dark:border-light border-dark rounded-xl "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{type}</span>
                <Link
                    href={link} target="_blank" className="hover:underline underline-offset-2"

                >
                    <h2 className="w-full my-2 text-4xl font-bold text-left sm:text-sm ">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summery}</p>
                <div className="flex items-center mt-2">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>
                </div>
            </div>
        </article>
    )

};
const Project = ({ img, type, title, github, link }) => {

    return (
        <>
           
            

            <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:border-light dark:bg-dark">
                <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
                <Link href={link} target="_blank"
                    className="w-full overflow-hidden rounded-lg cursor-pointer "
                >


                    <FrammerImage src={img} alt={title} className="w-full h-48 lg:h-auto border-2 border-solid shadow-2xl border-dark dark:border-light rounded-xl"
                        priority
                        sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 50vw
                 "
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                </Link>
                <div className="flex flex-col items-start justify-between pl-6 full">
                    <span className="text-lg font-medium text-primary dark:text-primaryDark">{type}</span>
                    <Link
                        href={link} target="_blank" className="hover:underline underline-offset-2"

                    >
                        <h2 className="w-full my-2 text-4xl font-bold text-left md:text-lg ">{title}</h2>
                    </Link>


                </div>
                <div className="flex justify-between w-full md:flex-col md:items-center mt-2">
                    <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="p-2 px-2 ml-4 text-lg font-semibold underline md:text-base">Visit Project</Link>
                </div>
            </article>
        </>
    )


}


const projects = () => {
    return (
        <>
            <Head>
                <title>Sumon Hasan | Projects Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <TransitionEffect/>
            <main className="flex flex-col items-center justify-center w-full mb-16 md:flex-row md:mb-8">
                <Layout className="pt-16 md:pt-8">
                    <AnimatedText text="My Projects that I like to share!" className="mb-16 md:!text-5xl !text-7xl " />
                    <div className="grid grid-cols-12 gap-24 md:grid-cols-12 md:gap-5">
                        <div className="col-span-12 md:w-full">
                            <FeturedProjects


                                title="Dentist Care"
                                img={Project1}

                                summery="This is Online Doctor Appointment Website."
                                type="React.js Project"

                                link="https://dentiscare-ceee4.firebaseapp.com/"
                                github="https://github.com/sumonhasan55/doctors-portal-client.git"

                            />
                        </div>

                     
                        <div className="col-span-6 ">
                            <Project
                                title="PC Builder"
                                img={Project2}


                                type="Nextjs Project"

                                link="https://e-books-catalog-client-st.vercel.app/"
                                github="https://github.com/sumonhasan55/hm-pc-builder-nextjs.git"

                            />

                        </div>

                        <div className="col-span-6 ">
                            <Project
                                title="Portfolio"
                                img={Project3}


                                type="HTML&CSS Project"

                                link="https://sumon-hasan-portfolio.netlify.app/"
                                github="https://github.com/sumonhasan55/Sumon-Hasan-Portfolio.git"

                            />

                        </div>
                    
                        <div className="col-span-12">
                            <FeturedProjects


                                title="E Book Catelog"
                                img={Project4}

                                summery="This is Book Catelog Web site,Authentic User can search and add new books."
                                type="React + TypeScript + Vite"

                                link="https://e-books-catalog-client.vercel.app/"
                                github="https://github.com/sumonhasan55/e-books-catalog-client.git"

                            />
                        </div>
                       
                       <div className="col-span-6 ">
                            <Project
                                title="HTML Templete"
                                img={Project5}


                                type="Basic Project"

                                link="https://electra-mart.netlify.app/"
                                github="https://github.com/sumonhasan55/Electra-Shop-Tailwindcss.git"

                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Smart-E-Shop"
                                img={Project6}


                                type="Angular Project"

                                link="https://smart-e-shop-angular.vercel.app/"
                                github="https://github.com/sumonhasan55/Smart-E-Shop-Angular.git"

                            />
                        </div>

                </div>




                    
                </Layout>
            </main>
        </>
    );
};

export default projects;