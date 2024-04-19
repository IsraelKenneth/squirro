import React from 'react'
import SectionHeader from './SectionHeader'
import { caseStudies, caseStudies2, caseStudies3 } from '../assets'


import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const Card3 = ({title, description, buttonhit, image}) =>{

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is in the viewport
  });


    return(
        <motion.div
         ref={ref}
        initial={{ opacity: 0, x: -50 }} // Initially hidden off-screen to the left
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate to the center of the screen
        transition={{ duration: 0.9 }}
        className=" relative flex   "
        >
  <div className="bg-[#f2f2f8] w-[22rem]  lg:w-[20rem] border-gray-300 border relative drop-shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
    <img className="rounded-t-lg hover:scale-95 transition duration-500 ease-out" src={image} alt="hey" />
    <div className="py-6 px-8 rounded-lg bg-white">
      <h1 className="text-gray-700 font-bold text-md mb-3 hover:text-gray-900 cursor-pointer">{title}</h1>
      <p className="text-gray-700 tracking-wide text-xs">{description}</p>
      <button className="mt-4 text-xs px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 ease-in-out transition duration-200">
          Read More
    </button>
    </div>
    <div className="absolute top-2 right-2 py-[0.1rem] px-1 bg-white rounded-lg">
      <span className="text-md text-[0.7rem]">{title}</span>
    </div>
  </div>
  </motion.div>
)
}


const DiscoverMore = () => {
  return (
    <section className=' padding max-width'>
       <SectionHeader
   title="Discover More from Squirro"
   brief="Browse our library of insightful resources, guides, and case studies and discover how Squirro can empower your organization and your teams."
    />

    <div className=" flex flex-wrap gap-8 md:mt-16 mt-6 justify-center items-center">
    <Card3 
    title="Case Studies"
    description="A 30-Day Knowledge Management Challenge: The Bertelsmann Foundation"
    buttonhit="Read Now"
    image={caseStudies}
    />

<Card3 
    title="Case Studies"
    description="A 30-Day Knowledge Management Challenge: The Bertelsmann Foundation"
    buttonhit="Read Now"
    image={caseStudies2}
    />

<Card3 
    title="Case Studies"
    description="A 30-Day Knowledge Management Challenge: The Bertelsmann Foundation"
    buttonhit="Read Now"
    image={caseStudies3}
    />


    </div>

    </section>
  )
}

export default DiscoverMore