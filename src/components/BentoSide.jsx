
import React, {  useState } from "react";

import { Bertel, Charted, Squirro1, Squirro2, Squirrogrp1, Squirrogrp2, Squirrogrp3, abb2, bankEng } from '../assets';
import SectionHeader from "./SectionHeader";

import { image1, image2,design, image3, image4, image5, image6, image7 } from '../assets/gallery';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const Abstract3 = () => {
  return (
    <div className="absolute top-[-10rem] -left-[32rem] w-[56.625rem] h-[56.625rem]  pointer-events-none">
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
    image: image1,
    description: "Retrieval Augmented Generation (RAG) enhances LLM responses with external knowledge sources integration.",
    description2: "SquirroGPT integrates RAG with Semantic Search for accuracy.",
    description3: "User prompt triggers SquirroGPT to query knowledge base.",
    description4: "Verified response from LLM cross-checked with knowledge base.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-lg font-semibold mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
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
        <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
      </svg>
    )
  },
  {
    title: "3. Chat Results",
    image: Squirro2,
    description: "Access data interactively, no need to open documents.",
    description2: "RAG tech enhances precision, reduces hallucinations.",
    description3: "Chat only analyzes accessible documents, ensuring privacy.",
     svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-lg font-semibold mb-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    )
  },
  {
    title: "4. Chat with Documents",
    image: image4,
    description: "Interactively engage with documents for novel user experience.",
    description2: "Access comprehensive data from one document effortlessly.",
    description3: "Verify answers by clicking evidence chips for cross-referencing.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>

    )
  },
  {
    title: "5. Summarize Documents",
    image: image5,
    description: "Supports document, topical, page, and selection summarization types.",
    description2: "Offers personalized summaries with added instructions.",
    svg: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>

    )
  },
  {
    title: "6. Search & Chat while Browsing",
    image: image6,
    description: "Integrate contextual chat with workplace search for efficiency.",
    description2: "Interact conversationally with data sources for personalized productivity insights.",
    svg: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>

    )
  },
  {
    title: "7. Chat with Structured Data",
    image: image7,
    description: "Chat interface analyzes, visualizes structured data.",
    description2: "Ask questions, parse data, draw conclusions effortlessly.",
    svg: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>

    )
  }
];

const Service = ({ title, description, onClick, isActive, svg }) => {
  return (
    <div
      className={`relative w-full  px-6 pb-3 shadow-lg sm:mx-auto sm:max-w-2xl  rounded-lg sm:px-10 ${isActive ? 'gradient1' : ''}`}
      onClick={onClick}
    >
      <div className="mx-auto px-5">
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>{title}</span>
                <span className="transition ">
                {svg}
                </span>
              </summary>
            </details>
          </div>
          {/* Repeat the same structure for other FAQ items */}
        </div>
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
    <section className="relative w-full  max-width flex padding padding-x flex-col items-center">
      {/* Your SectionHeader component */}
     {/* <Abstract3 /> */}
     <SectionHeader
   title="Meet SquirroGPT"
   brief="Enterprise RAG stack & LLM solution for safe, versatile Generative AI usage, agnostic to Large Language Models."
    />
      <div className="relative  mt-16 gap-10       md:w-full lg:h-full  flex lg:flex-row flex-col gap-y-10 justify-start">
      <motion.div 
    ref={ref}
    initial={{ opacity: 0, x: -50 }} // Initially hidden off-screen to the right
    animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring', damping: 10, stiffness: 100 } } : { opacity: 0, x: -50 }}
      
         className="w-full flex relative flex-col justify-start gap-6">
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
    initial={{ opacity: 0, x: 50 }} // Initially hidden off-screen to the right
    animate={inView ? { opacity: 1, x: 0, transition: { duration: 4, type: 'spring', damping: 10, stiffness: 100 } } : { opacity: 0, x: 50 }}     
        className="w-full flex flex-col justify-start gap-8">
          <div className="flex">
            <img
              src={data[activeService].image}
              className="object-cover w-full lg:h-[20rem] h-[16rem] border  rounded-xl  drop-shadow-md border-gray-300/50 "
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

export default BentoSide