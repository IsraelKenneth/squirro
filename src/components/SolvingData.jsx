import React from 'react'
import { Squirro2, Squirrogrp1, Squirrogrp2, Squirrogrp3, close } from '../assets'

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import "../index.css"




export const Card2 = ({title, paragragh, image, Margin}) =>{
    return(
        <div className='relative'>
      <div className='absolute  z-2 left-2 flex space-x-2 gradient1 text-gray-900 border-gray-200 shadow-2xl -mt-5 w-9 h-9 px-2 py-3 rounded-full items-center drop-shadow-md border-neutral-200/50'
      >
        <img src={image} alt='squirro' className='object-contain w-full h-[3rem]' />
      </div>
      <div
        className={`flex flex-col ${Margin} md:w-64 w-full h-[10rem] bg-n-8/10 border p-7 rounded-xl  drop-shadow-md border-gray-300/50  justify-between `}
      >
        <h3 className='text-sm font-semibold mb-2 '>{title}</h3>
        <p className='text-gray-600 text-xs'>{paragragh}</p>
      </div>
    </div>
  )
}

const SolvingData = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is in the viewport
  });


  return (
    <section className='max-width padding lg:mt-0 flex flex-col items-center justify-center'>
 
    <div className="relative border mt-16 gap-10  p-7 rounded-xl bg-[#f4f4f4] dark:bg-gray-700 drop-shadow-md  border-neutral-200/50 md:w-full lg:h-[32rem]  flex lg:flex-row flex-col gap-y-10 justify-start">
    
    <div ref={ref} className='w-full flex relative flex-col justify-start gap-6'>
    <div className='max-w-[20rem] '>
    <h2 className='font-Montserrat w-full text-2xl font-semibold'>Solving Data Challenges</h2>
    </div>

    <motion.div
    initial={{ opacity: 0, x: -50 }} // Initially hidden off-screen to the left
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate to the center of the screen
    transition={{ duration: 0.9 }} // Smooth transition animation
    className='flex-col gap-6'>
    <Card2 
    Margin="mb-10"
    title="Slow and Unproductive Search"
    paragragh=" SquirroGPT uses RAG technology with LLM for precise data retrieval and semantic search."
    image= {Squirrogrp1} 

    />
    <div className='flex flex-col md:flex-row gap-8'>
    <Card2
    title="Fragmented Information Silos"
    paragragh="Squirro connects disparate data sources for fast, seamless search, bridging intranets, wikis, and repositories."
    image={Squirrogrp2}
    />

    <Card2
    title="Lack of Knowledge Sharing"
    paragragh="
Squirro enhances efficiency by sharing context-based insights, facilitating knowledge sharing across departments."
    image={Squirrogrp3}
     />
    </div>
    </motion.div>
    

   </div>
   <div className='lg:w-[70%] w-full h-full flex relative justify-center bg-n-8/10 border  rounded-xl  drop-shadow-md border-gray-300/50  '>
   <img src={Squirro2} className='object-cover w-full lg:h-full h-[30rem] border  rounded-xl  drop-shadow-md border-gray-300/50 '/>
   </div>
   </div>
  </section>
  )
}

export default SolvingData