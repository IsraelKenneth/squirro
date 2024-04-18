import React, { useState } from "react";
import { Squirro1, abb2, caseStudies, caseStudies2, caseStudies3 } from '../assets';
import SectionHeader from "./SectionHeader";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Abstract3 = () => {
  return (
    <div className="absolute top-[-10rem] -left-[32rem] w-[56.625rem] h-[56.625rem] pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[20.5625rem] max-w-[30.5625rem] h-[28.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={abb2}
        alt="Gradient"
      />
    </div>
  );
};

const data = [
  {
    title: "1. Retrieval Augmented Generation (RAG)",
    image: caseStudies,
    description: "Retrieval Augmented Generation (RAG) enhances LLM responses with external knowledge sources integration.",
    description2: "SquirroGPT integrates RAG with Semantic Search for accuracy.",
    description3: "User prompt triggers SquirroGPT to query knowledge base.",
    description4: "Verified response from LLM cross-checked with knowledge base.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-lg font-semibold mb-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    )
  },
  {
    title: "2. SquirroGPT Chat Conversation",
    image: Squirro1,
    description: "Chat integrates organizational data, defining permissions and sources.",
    description2: "Answers supported by evidence, citing reference sources.",
    description3: "Embed chat for wider accessibility and reach.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-lg font-semibold mb-2">
        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
      </svg>
    )
  },
  // Other data objects follow...
];

const Service = ({ title, description, onClick, isActive, svg }) => {
  return (
    <div
      className={`relative w-full px-6 pb-3 shadow-lg sm:mx-auto sm:max-w-2xl rounded-lg sm:px-10 ${isActive ? 'gradient1' : ''}`}
      onClick={onClick}
    >
      <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
        <div className="">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span>{title}</span>
              <span className="transition">
                {svg}
              </span>
            </summary>
          </details>
        </div>
        {/* Repeat the same structure for other FAQ items */}
      </div>
    </div>
  );
};

const BentoSide = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 50% of the component is in the viewport
  });

  const [activeService, setActiveService] = useState(0); // Initially set to the first service

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  return (
    <section className="relative w-full max-width flex padding padding-x flex-col items-center">
      <Abstract3 />
      <SectionHeader
        title="Meet SquirroGPT"
        brief="Enterprise RAG stack & LLM solution for safe, versatile Generative AI usage, agnostic to Large Language Models."
      />
      <div className="relative mt-16 gap-10 md:w-full lg:h-full flex lg:flex-row flex-col gap-y-10 justify-start">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring', damping: 10, stiffness: 100 } } : { opacity: 0, x: -50 }}
          className="w-full flex relative flex-col justify-start gap-6"
        >
          <div className="flex-col gap-6">
            {data.map((service, index) => (
              <Service
                key={index}
                title={service.title}
                description={service.description}
                onClick={() => handleServiceClick(index)}
                isActive={index === activeService}
                svg={service.svg}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0, transition: { duration: 4, type: 'spring', damping: 10, stiffness: 100 } } : { opacity: 0, x: 50 }}
          className="w-full flex flex-col justify-start gap-8"
        >
          <div className="flex">
            <img
              src={data[activeService].image}
              className="object-cover w-full lg:h-[20rem] h-[16rem] border rounded-xl drop-shadow-md border-gray-300/50"
            />
          </div>
          <p>{data[activeService].description}</p>
          <p>{data[activeService].description2}</p>
          <p>{data[activeService].description3}</p>
          <p>{data[activeService].description4}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoSide;
