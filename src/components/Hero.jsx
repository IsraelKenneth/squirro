
import { motion, AnimatePresence } from 'framer-motion';
import { abb, abb3 } from '../assets';

import React, { useEffect, useRef } from 'react';

import { useInView } from 'react-intersection-observer';

export const Abstract = () => {
  return (
    <div className="absolute top-[-10rem] -left-[20rem] w-[56.625rem] h-[56.625rem] opacity-10 pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[30.5625rem] h-[28.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={abb}
        alt="Gradient"
      />
    </div>
  );
};


export const Abstract2 = () => {
  return (
    <div className="  top-[-2rem] right-[10rem] absolute lg:top-[5rem] lg:right-[3rem] w-[20.625rem] h-[20.625rem] pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 w-[8.5625rem] max-w-[12.5625rem] h-[8.5625rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          borderRadius: '50%', // Make it a circle
          background: 'linear-gradient(18deg, rgba(209,148,41,1) 0%, rgba(237,197,127,1) 64%, rgba(222,169,76,0.6811099439775911) 99%)',
          transform: 'scaleX(-1)', // Flip horizontally
        }}
      ></div>
    </div>
  );
};


export const Abstract3 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.querySelector('.abstract3');
      if (element) {
        element.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute top-[-3rem] right-[-18rem] md:right-[-4rem] lg:right-[17rem] w-[56.625rem] h-[56.625rem] pointer-events-none abstract3">
      <img
        className="absolute top-1/2   h-[7.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={abb3}
        alt="Gradient"
        style={{ transform: 'scaleX(-1)' }} // Flip horizontally
      />
    </div>
  );
};


export const Abstract4 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.querySelector('.abstract4');
      if (element) {
        element.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute lg:top-[-10rem] top-[-2rem] md:left-[43rem] left-[26rem] lg:left-[65rem] w-[56.625rem] h-[56.625rem] pointer-events-none abstract4">
      <img
        className="absolute top-1/2   h-[4.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={abb3}
        alt="Gradient"
        style={{ transform: 'scaleX(-1)' }} // Flip horizontally
      />
    </div>
  );
};

const Hero = () => {

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the component is in the viewport
  });


  return (
<section className="relative pt-32  pb-20 bg-white">
<Abstract />
{/* <Abstract2 /> */}

  <div className="px-12 mx-auto max-w-7xl">
    <motion.div
    ref={ref}
    initial={{ opacity: 0, x: 50 }} // Initially hidden off-screen to the right
    animate={inView ? { opacity: 1, x: 0, transition: { duration: 4, type: 'spring', damping: 10, stiffness: 100 } } : { opacity: 0, x: 50 }}
    className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="z-2 mb-8 text-4xl text-gradient1 font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
        <span>Where</span>{" "}
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-orange-400 to-orange-500 lg:inline">
            Data Finds
        </span>{" "}
        <span>Purpose</span>
      </h1>
      <p className="px-0 mb-8 text-lg font-semibold text-gray-600 md:text-xl lg:px-24">
      Enterprise-Ready Generative AI for Search, Insights, & Automation.
      </p>
      <div className="mb-4 space-x-0  md:space-x-6 md:mb-8">
        <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 transition ease-in-out duration-200 mb-2 text-lg text-white bg-orange-400 hover:bg-orange-500 rounded-xl sm:w-auto sm:mb-0">
          SquirroGPT

        </a>
        <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 border-gray-300 border hover:bg-gray-300 text-lg rounded-xl transition ease-in-out duration-200 sm:w-auto sm:mb-0">
          Book a Demo
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </motion.div>
    <div className="w-full mx-auto mt-20 text-center md:w-10/12">
      <div className="relative z-0 w-full mt-8">
        <div className="relative overflow-hidden shadow-xl">
        <AnimatePresence>
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.9 }}
                className="relative overflow-hidden shadow-xl"
              >
                <div className="flex items-center flex-none px-4 bg-orange-400 rounded-b-none h-11 rounded-xl">
                  <div className="flex space-x-1.5">
                    <p className="w-3 h-"> Squirro.com</p>
                  </div>
                </div>
                <video
                  className="h-full object-cover w-full items-center justify-center md:p-10 p-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://squirro.com/hubfs/WEBSITE/Homepage/HeroVideo-SquirroGPT%20EnterpriseSearch-1123_Final.webm" type="video/mp4" />
                  {/* You can add multiple source elements for different video formats */}
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>

    <Abstract3 data-scroll data-scroll-speed="0.5" />
    <Abstract4 data-scroll data-scroll-speed="5" />
  </div>
</section>

  )
}

export default Hero