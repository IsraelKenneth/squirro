import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const SectionHeader = ({title, brief}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is in the viewport
  });

    return (
      <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -50 }} // Initially hidden off-screen to the left
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate to the center of the screen
      transition={{ duration: 0.9 }} 

      className="flex flex-col items-center justify-center max-width">
        <h1 className="lg:text-3xl text-xl font-bold  leading-9 text-center text-n-8 opacity-90">{title}</h1>
        <p className="text-base leading-normal text-center text-n-8  mt-4 lg:w-[60%] md:w-10/12 w-11/12">{brief}</p>
      </motion.div>
    )}

export default SectionHeader


