
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { Bertel, Charted, bankEng } from '../assets';
import SectionHeader from "./SectionHeader";




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


 const Feedback = () => {
  return (
  <section className="w-full flex max-width flex-col padding-x padding-y">

<SectionHeader
          title="Why Customers Love Squirro"
/>

<Swiper
    slidesPerView={'auto'}
    centeredSlides={true}
    spaceBetween={20}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
 




    
 
  <SwiperSlide className='mb-16'>
          
  <div className="border p-7 rounded-xl bg-white drop-shadow-md border-gray-300/50 flex flex-col w-[60rem] h-[24rem] justify-between">
  <div className="flex flex-col gap-y-3.5">
  <img src={data[0].image} alt="Emily Smith" className="h-16 w-28" />
    <p className="font-medium text-n-8"><span className="block text-lg font-sans leading-none">"</span> {data[0].description}</p>
  </div>
  <div className="flex flex-col">
    <p className="pt-2 text-sm font-semibold text-n-8">{data[0].name}</p>
    <p className="text-sm font-medium text-n-8">{data[0].position}</p>
    <p className="text-sm font-medium text-n-8">{data[0].company}</p>
  </div>

  <button className=" items-center justify-center  px-6 py-3 transition ease-in-out duration-200 mb-2 text-xs text-white bg-orange-400 hover:bg-orange-500 rounded-xl w-fit sm:mb-0">
          View Case Study
        </button>
</div>

</SwiperSlide>
      <SwiperSlide className='mb-16'>
    <div className="border p-7 rounded-xl bg-white drop-shadow-md border-gray-300/50 col-span-3 flex flex-col gap-y-10 justify-between">
  <div className="flex flex-col gap-y-3.5">
  <img src={data[1].image} alt="Emily Smith" className="h-16 w-28" />
    <p className="font-medium text-n-8"><span className="block text-lg font-sans leading-none">"</span> {data[1].description}</p>
  </div>
  <div className="flex flex-col">
    <p className="pt-2 text-sm font-semibold text-n-8">{data[1].name}</p>
    <p className="text-sm font-medium text-n-8">{data[1].position}</p>
    <p className="text-sm font-medium text-n-8">{data[1].company}</p>
  </div>

  <button className=" items-center justify-center  px-6 py-3 transition ease-in-out duration-200 mb-2 text-xs text-white bg-orange-400 hover:bg-orange-500 rounded-xl w-fit sm:mb-0">
          View Case Study
        </button>
</div>
 
 </SwiperSlide>

 <SwiperSlide className='mb-16'>
<div className="border p-7 rounded-xl  bg-white drop-shadow-md border-gray-300/50 lg:col-span-4 col-span-3  flex flex-col gap-y-10 justify-between">
  <div className="flex flex-col gap-y-3.5">
  <img src={data[2].image} alt="Emily Smith" className="h-16 w-28" />
    <p className="font-medium text-n-8"><span className="block text-lg font-sans leading-none mt-2">"</span> {data[2].description}</p>
  </div>
  <div className="flex flex-col">
    <p className="pt-2 text-sm font-semibold text-n-8">{data[2].name}</p>
    <p className="text-sm font-medium text-n-8">{data[2].position}</p>
    <p className="text-sm font-medium text-n-8">{data[2].company}</p>
  </div>

  <button className=" items-center justify-center  px-6 py-3 transition ease-in-out duration-200 mb-2 text-xs text-white bg-orange-400 hover:bg-orange-500 rounded-xl w-fit sm:mb-0">
          View Case Study
        </button>
</div>
</SwiperSlide>

  </Swiper>
</section>


  )
}

export default Feedback