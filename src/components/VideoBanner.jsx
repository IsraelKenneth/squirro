import { BannerVid } from "../assets";



const VideoBanner = () => {
  return (
<section className="background-radial-gradient mb-4 rounded-2xl" style={{
  backgroundColor: 'hsl(218, 41%, 15%)',
  backgroundImage: `radial-gradient(650px circle at 0% 0%, 
    hsl(218, 41%, 35%) 15%, 
    hsl(218, 41%, 30%) 35%, 
    hsl(218, 41%, 20%) 75%, 
    hsl(218, 41%, 19%) 80%, 
    transparent 100%), 
    radial-gradient(1250px circle at 100% 100%, 
    hsl(218, 41%, 45%) 15%, 
    hsl(218, 41%, 30%) 35%, 
    hsl(218, 41%, 20%) 75%, 
    hsl(218, 41%, 19%) 80%, 
    transparent 100%)`
}}>


  <div className="px-6 py-12  md:px-12 items-center justify-center">
    <div className=" mx-auto">
      <div className="flex  items-center justify-between gap-8 lg:flex-row flex-col">
        <div className=" flex justify-start items-center flex-col ">
        
          <h1 className="mb-16 text-5xl font-bold tracking-tight text-gray-100 md:text-5xl">
          SquirroGPT 
          </h1>
          <div className="mb-4 flex flex-row gap-6">
        <button href="#_" className=" items-center justify-center font-bold w-fit px-6 py-3 transition ease-in-out duration-200 mb-2 text-sm text-white bg-orange-400 hover:bg-orange-500 rounded-lg sm:w-auto sm:mb-0">
          SquirroGPT

        </button>
        <button href="#_" className="inline-flex items-center font-bold justify-center w-fit px-6 py-3 mb-2 bg-gray-100 border-gray-300 border hover:bg-gray-300 text-sm rounded-lg transition ease-in-out duration-200 sm:w-auto sm:mb-0">
          Book a Demo
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
        </div>
        <div className="mb-6 lg:mb-0 flex items-center justify-center">
        <video
className=" w-full rounded-lg shadow-lg"
autoPlay
muted
loop
playsInline
>
<source src={BannerVid} type="video/mp4" />
{/* You can add multiple source elements for different video formats */}
Your browser does not support the video tag.
</video>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default VideoBanner;




