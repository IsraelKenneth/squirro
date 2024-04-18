import React from 'react'
import SectionHeader from './SectionHeader'

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


export const Card2 = ({title, paragragh, bgColor}) =>{
  
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
    className='relative flex '>


    <div className={`${bgColor}  border border-[#E1CB4C]/30 backdrop-blur-sm pt-4 pb-8 px-6 rounded-lg shadow-lg w-[22rem] h-[24rem] lg:w-[20rem] items-center justify-between flex flex-col hover:scale-105  transition ease-in-out duration-300`}>
    <h3 className="text-md font-semibold mb-2 mt-6">{title}</h3>
    <p className=" text-center text-sm">{paragragh}</p>
    <button className="text-xs mt-4 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 ease-in-out transition duration-200 w-[80%] ">
          Read More
    </button>
  </div>
  </motion.div>
  )
}

const Rag = () => {
  return (
    <section className='max-width  padding my-20 lg:mt-0 min-h-screen flex items-center justify-center flex-col'>
        <SectionHeader 
        title="The RAG Technology Powering It"
        brief= "Squirro's platform encompasses all of the essential technical components required for our use-case-specific and tailored enterprise ready solutions."
        />

        <div className='flex flex-wrap gap-8 md:mt-32 mt-6 justify-center items-center'>
        <Card2 
        bgColor="bg-[#f2f2f8] hover:bg-[#0E0725] hover:opacity-90 hover:text-white text-gray-600"
        title="Insight Engine"
        paragragh="Squirro's Insight Engne combines AI technologies such as machine learning, natural language processing, and knowledge graphs to extract valuable insights from large and diverse datasets quickly and efficiently."
        />

        <Card2 
        bgColor="bg-[#0E0725] opacity-90 text-white "
        title="Semantic Enterprise Search"
        paragragh="Squirro's enterprise search solution comprehends and interprets user queries, delivering precise and relevant results based on actual data. It continuously refines its accuracy and relevance through ongoing learning and adaptation."
        />

        <Card2
        bgColor="bg-[#f2f2f8] text-gray-600 hover:bg-[#0E0725] hover:opacity-90 hover:text-white" 
        title="Data Classification"
        paragragh="Squirro's AI Studio is a no-code machine learning (ML) platform for creating and deploying ML models without writing code. Squirro's Model-as-a-Service offers an end-to-end solution for deploying and maintaining your ML models in a production environment."
        />
        </div>
    </section>
  )
}

export default Rag