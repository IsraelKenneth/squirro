import React, { useRef, useState } from 'react';
import { Bertel, Charted, Sapiens, bankEng } from '../assets';
import SectionHeader from "./SectionHeader";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: Bertel,
    description: "We have had a wonderful experience working with the Squirro team on this project. Working with such outstanding professionals makes our lives much easier, and we can see the results of their dedication to the project.",
    name: "Anthony Silberfeld",
    position: "Director of Transatlantic Relations",
    company: "The Bertelsmann Foundation",
  },
  {
    image: Charted,
    description: "The Insights solution is a good example of how we leverage technology and FinTech partnerships to co-create innovative analytics capabilities to enable our frontline teams to have better conversations.",
    name: "Bireshwar Dasgupta",
    position: "Global Head, Data Solutions, DCDA",
    company: "Standard Chartered Bank",
  },
  {
    image: bankEng,
    description: "The proactive approach of colleagues from Squirro and internally meant we delivered in record time with a super usage level.",
    name: "Helen Packard",
    position: "Digital Transformation Lead",
    company: "Bank of England",
  },
 ];

 const Sapien = () => {
  return (
    <div className="absolute top-[5rem] right-[3rem] w-full h-full pointer-events-none">
      <img
        className="absolute top-1/2 left-16 lg:left-36 w-[30.5625rem] h-[70.5625rem] -translate-x-1/2 -translate-y-1/2 text-white"
        src={Sapiens}
        />
    </div>
  );
};


 const Trial = () => {


  return (

    <div className="bg-n-8/10 border-t-2 rounded-t-3xl mt-10 py-10" >
  <section className=" relative padding-x max-width mx-auto w-full px-10  ">

    <SectionHeader
    title="Why Customers Love Squirro"
    />
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper absolute top-3"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className='mb-10 items-center justify-center mx-auto'>
              <div className="border p-7 rounded-xl bg-white drop-shadow-md mx-auto lg:w-[70%] border-neutral-800/50 flex flex-col gap-y-6 justify-between">
                <div className="flex flex-col gap-y-3.5">
                  <p className="font-bold text-lg text-n-8">{item.company}</p>
                  <p className="font-medium text-xs text-n-8 mt-3">
                    <span>
                      <svg height="20px" className="mb-2" fill="n-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xml:space="preserve">
                        <g>
                          <g id="right_x5F_quote">
                            <g>
                              <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"></path>
                              <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className='border-1 border opacity-50 mb-4 w-full border-n-8' />
                  <img src={item.image} alt={item.name} className="h-18 w-20" />
                  <p className="pt-2 text-xs font-semibold text-n-8">{item.name}</p>
                  <p className="text-xs font-medium text-n-8">{item.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          <Sapien />
  </section>
</div>

  );
};

export default Trial;