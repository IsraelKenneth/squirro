import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { skills } from "../../constants";




const SkillsCard1 = (

    ) => {
    
      
      return (
        <div className=" mt-3 flex flex-row gap-6 w-full mr-6">
        <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-loc-1223.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-Henkel-1023.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-SRGSSR-1023.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-BertelsmannFoundation-1023.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-Helvetia-1023.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
          
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-Syntheticus-1123.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
    
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-Evalueserve-1023.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-ocbc-bank-1123.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
            <div className="relative flex w-[15rem] !flex-row  items-center  rounded-[10px]   bg-clip-border">
                <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full p-3 dark:bg-navy-700">
                    <span className="flex items-center text-brand-500 ">
                    <img src="https://squirro.com/hubfs/WEBSITE/Global%20assets/Logostrip%20logos/Logo-Natwest-123.svg" className="w-full"  alt="skills card" />
                    </span>
                </div>
                </div>
            </div>
    
            </div>
      )
    }




const Slider = () => {
    const firstText = useRef(null);
    const secondText = useRef(null)
    const slider = useRef(null);
  
    let xPercent = 0;
    let direction = -1;
  
    useEffect(() => {
        const animation = () => {
          if (xPercent < -100) {
            xPercent = 0;
          } else if (xPercent > 0) {
            xPercent = -100;
          }
    
          gsap.set(firstText.current, { xPercent: xPercent });
          gsap.set(secondText.current, { xPercent: xPercent });
          xPercent += 0.01 * direction;
          requestAnimationFrame(animation);
        };
    
        animation(); // Run the animation function
    
        // Cleanup function to stop the animation when the component unmounts
        return () => cancelAnimationFrame(animation);
      }, []); // Run only once after initial render


    return (
      <section className="relative flex overflow-hidden h-[14rem]">
  
      <div className="absolute">
          <div ref={slider} className=" flex flex-row">
            <div ref={firstText}>
            <SkillsCard1 />
            </div>
            <div ref={secondText}>
            <SkillsCard1 />
            </div>
          </div>
        </div>
  
      </section>
    )
  }

export default Slider