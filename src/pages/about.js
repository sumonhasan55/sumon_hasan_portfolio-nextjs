import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import porfilePic from "../../public/images/profile/profile-1.jpg"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";



const AnimatedNumbers = ({ value }) => {

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)

        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {

            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);

            }
        })

    }, [springValue, value])


    return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>Sumon Hasan | About Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <TransitionEffect/>
            <main className="flex flex-col items-center justify-center w-full md:items-start">
                <Layout className="pt-16 lg:pt-8 md:pt-4 xs:pt-2">
                    <AnimatedText text="Yes! I believe In Qualitys" className="md:!text-5xl md:!text-start mb-10 text-6xl " />
                    <div className="grid w-full grid-cols-8 gap-16 md:gap-3">
                        
                        <div className="flex flex-col items-start justify-start col-span-3 md:col-span-8 md:order-2 ">
                            <h2 className="mb-4 text-lg font-bold uppercase dark:text-light/75 text-dark/75">Biography</h2>
                            <p className="my-2 font-medium text-justify ">
                            As a web developer,I have worked on a variety of projects,from small personal projects to large enterprise applications. I have a strong understanding of front-end and back-end development,and I am able to work independently or as part of a team. 

                            </p>
                            <p className="my-2 font-medium text-justify">
                            I am also experienced in creating and managing databases, and I have a good understanding of RESTful API design.I am confident, enthusiastic, quick learner and always eager to learn new technologies and stay current with the latest web development trends.
                            </p>

                            <p className="my-2 font-medium text-justify ">
                                Whether I'm working on a website,and
                                other digital product,I bring my commitment to design excellence and user-centered thinking to every project I work on.I look forward to the opportunity to bring my skills and passion to your next project.


                            </p>

                        </div>


                        <div className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light md:col-span-8 md:items-center xl:col-span-8 md:order-1 ">
                            <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image src={porfilePic} alt="" className="w-full h-auto border-2 rounded-2xl border-dark dark:border-light"
                             priority
                             sizes="(max-width:768px) 100vw,
                             (max-width:1200px) 50vw,
                             50vw
                             "
                            ></Image>

                        </div>



                        <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-4 md:flex-row md:gap-5 md:order-3 md:w-full">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block font-bold text-7xl md:text-3xl sm:text-2xl xs:text-xl ">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-base sm:text-base">satisfied clients</h2>

                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block font-bold text-7xl md:text-3xl sm:text-2xl xs:text-xl ">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-base sm:text-base ">project completed</h2>
                            </div>


                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block font-bold text-7xl md:text-3xl sm:text-2xl xs:text-xl ">
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-base sm:text-base">years of experience</h2>


                            </div>

                        </div>
                    </div>
                    <Skills/>
                  
                    <Education/>
                    <Experience/>

                </Layout>
            </main>
        </>
    );
};

export default about;