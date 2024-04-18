
import React, { useEffect, useState } from "react";
import { projectsData, services } from "../../constants";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";


export const ProjectCard = ({
  index,
  vid,
  description,
  link,
}) => {
  return (
<>
<div className="relative max-width overflow-hidden shadow-xl">
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
                <p className="w-full h-full"> {description} <span><Link className="underline" href={link}>Learn More</Link></span></p>
              </div>
            </div>
            <video
              className="h-full object-cover w-full lg:w-[50rem] items-center justify-center md:p-10 p-0"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={vid} type="video/mp4"/>
              {/* You can add multiple source elements for different video formats */}
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </AnimatePresence>
    </div>
              </>
  );
};







const DomainSpecific = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    setProjects(getProjectsByActiveTab());
  }, [activeTab]);

  const handleTabClick = (tabIndex) =>{
    setActiveTab(tabIndex)
  }

  const getProjectsByActiveTab = () => {
    switch (activeTab) {
      case 1:
        return projectsData.webworks;
      case 2:
        return projectsData.mobilework;
      case 3:
        return projectsData.graphicworks;
      case 4:
        return projectsData.designworks;
      default:
        return [];
    }
  };
  return (
      <div className="w-full flex flex-col padding-x items-center justify-center min-h-screen">

          <SectionHeader
          title="Domain-Specific Insights Solutions"
          />

          <div className="hidden lg:grid grid-flow-col text-center text-gray-500 bg-gray-300 rounded-full p-1 mt-10 w-[70%] ">
                <button
                    className={`flex justify-center font-medium py-4 uppercase ${activeTab === 1 ? "bg-white rounded-full shadow text-indigo-900 py-4" : " text-black"}`}
                    onClick={() => handleTabClick(1)}
                >
                    Knowledge Mgmt
                </button>
                <button
                    className={`flex justify-center py-4 font-medium uppercase ${activeTab === 2 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(2)}
                >
                    Risk, Compliance & Audit <br className="block md:hidden" /> 
                </button>
                <button
                    className={`flex justify-center font-medium py-4 uppercase ${activeTab === 3 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(3)}
                >
                    Service Mgmt 
                </button>

                <button
                    className={`flex justify-center py-4 font-medium uppercase ${activeTab === 4 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(4)}
                >
                    Sales Mgmt
                </button>

            </div>


            <div className="lg:hidden grid grid-flow-col items-center text-center text-gray-500 bg-gray-300 rounded-full p-1 w-full my-14">
                <button
                    className={`flex justify-center cursor-none py-1 uppercase ${activeTab === 1 ? "bg-white rounded-full shadow text-indigo-900 py-4" : " text-black"}`}
                    onClick={() => handleTabClick(1)}
                >
                    <img src={services[0].icon} alt="Web" width={40} height={30} />
                </button>
                <button
                    className={`flex justify-center py-1 cursor-none uppercase ${activeTab === 2 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(2)}
                >
                <img src={services[1].icon} alt="Web" width={40} height={30} />
                </button>
                <button
                    className={`flex justify-center cursor-none py-1 uppercase ${activeTab === 3 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(3)}
                >
                <img src={services[2].icon} alt="Web" width={40} height={30} />
                </button>

                <button
                    className={`flex justify-center cursor-none py-1 uppercase ${activeTab === 3 ? "bg-white rounded-full shadow text-indigo-900 py-4" : "text-black"}`}
                    onClick={() => handleTabClick(4)}
                >
                <img src={services[2].icon} alt="Web" width={40} height={30} />
                </button>

            </div>
            

         <div className='w-full flex flex-wrap md:mt-24 mt-5'>
        
        {projects.map((project, index) => (
            <ProjectCard key={index}
              vid={project.vid}
              description={project.description}
              link={project.link}
            />
        ))}


    </div>

      </div>
  );}

  export default DomainSpecific

