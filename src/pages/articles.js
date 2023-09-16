import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article4 from '../../public/images/articles/create modal component in react using react portals.png'
import article5 from '../../public/images/articles/smooth scrolling in reactjs.png'
import article6 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import article7 from '../../public/images/articles/What is higher order component in React.jpg'
import article8 from '../../public/images/articles/What is Redux with easy explanation.png'
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import TransitionEffect from '@/components/TransitionEffect';


const FrammerImage = motion(Image)


const MovingImage = ({title,img,link}) =>{
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display="inline-block"
        x.set(event.pageX);
        y.set(-10);
        
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display="none"
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
    <h2 className='text-xl font-semibold capitalize c hover:underline'>{title}</h2>
    <FrammerImage
    style={{x:x,y:y}}
     ref={imgRef} src={img} alt={title} className='absolute z-10 hidden h-auto rounded-lg md:z-20 md:w-[50%] md:h-[50%] w-96' />
</Link>

    )
    
}


const AllArticles = ({ img, title, date, link }) => {

    return (
        < motion.li 
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5, ease:"easeInOut"}}}
       
        className='relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid md:flex-col md:items-start md:text-base rounded-xl bg-light text-dark first:mt-0 border-dark dark:bg-dark dark:text-light dark:border-light '>
           <MovingImage title={title} img={img} link={link} />
            <span className='pl-4 font-semibold md:pl-0 text-primary dark:text-primaryDark'>{date}</span>
        </motion.li>
    )

}


const FeaturedArticles = ({ title, img, time, summery, link }) => {
    return (
        <li className='relative w-full col-span-1 p-4 border border-b-8 border-r-8 border-solid bg-light border-dark dark:bg-dark dark:border-light rounded-2xl '

        >
            <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Link href={link}
                target="_blank" className="inline-block w-full rounded-lg cursor-pointer "
            >
                <FrammerImage src={img} alt={title} className="w-full h-auto "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='my-2 text-2xl font-bold capitalize hover:underline md:text-lg'>{title}</h2>
            </Link>
            <p className='mb-2 text-sm'>{summery}</p>
            <span className='font-semibold text-primary dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Sumon Hasan | Articles Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <TransitionEffect/>
            <main>
                <Layout className="pt-16 md:pt-8">
                    <AnimatedText text="Words Can Change The World! " className="mb-16 md:mb-8 md:!text-5xl " />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1'>
                        <FeaturedArticles

                            title="Build A Custom Pagination Component In Reactjs From Scratch"

                            summery="Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article1}

                        />
                        < FeaturedArticles

                            title="Build A Custom Pagination Component In Reactjs From Scratch"

                            summery="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article2}
                        />
                    </ul>
                    <h2 className='my-10 mt-32 text-5xl font-bold text-center md:text-3xl text-dark dark:text-light'>
                        All Articles
                    </h2>
                    <ul className='md:text-base'>
                        <AllArticles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="march-12-2023"
                            link="/"
                            img={article3}
                        />
                        <AllArticles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="march-12-2023"
                            link="/"
                            img={article4}
                        />
                        <AllArticles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="march-12-2023"
                            link="/"
                            img={article5}
                        />
                        <AllArticles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="march-12-2023"
                            link="/"
                            img={article6}
                        />
                        <AllArticles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="march-12-2023"
                            link="/"
                            img={article7}
                        />
                        <AllArticles
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="march-12-2023"
                            link="/"
                            img={article8}
                        />
                       
                    </ul>

                </Layout>
            </main>
        </>
    );
};

export default articles;