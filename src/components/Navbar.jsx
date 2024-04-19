import {useState} from 'react'
import { menu, close, logo } from '../assets'
import { Link } from 'react-router-dom'
import { navLinks } from '../../constants'

import { motion } from 'framer-motion';


const Navbar = () => {

  const [active, setActive] = useState("")

  const [toggle, setToggle] = useState(false)


  return (  
    <nav className={`padding-x w-full flex items-center justify-center py-5 fixed top-0 z-20 bg-n-8/10 backdrop-blur-sm `}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
        <img src={logo} alt='logo' className='w-30 h-9 object-contain' />
      </Link>
      <ul className='list-none hidden lg:flex flex-row gap-16'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title ? 'text-white' : 'text-secondary'} text-[14px] font-medium cursor-pointer relative flex `}
            onClick={() => setActive(active === link.title ? '' : link.title)} // Toggle active state on click
          >
            <a className='flex-row flex' href={`#${link.id}`}>{link.title} <span> {link.subMenu && (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )} </span></a>
            {/* Dropdown */}
            {active === link.title && link.subMenu && (
              <ul className='origin-top-right absolute -right-6 mt-8 w-[10rem] rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 ease-in-out transition duration-300'>
                {link.subMenu.map((subItem) => (
                  <li key={subItem.id} className='text-[14px] py-2 p-2'>
                    <a className='block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 active:bg-blue-100 cursor-pointer duration-300' href={`#${subItem.id}`}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className='lg:flex hidden flex-row items-center justify-center gap-4'>
      <button href="#_" className="w-fit items-center justify-center  px-3 py-[0.45rem] transition ease-in-out duration-200 mb-2 text-sm font-semibold text-white bg-orange-400 hover:bg-orange-500 rounded-lg sm:w-auto sm:mb-0">
          Book a Demo
        </button>

        <div className='flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>


        </div>
        </div>

        
      <div 
       className='lg:hidden flex flex-1 justify-end items-center'>
        <img className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} src={toggle ? close : menu} alt='menu' />
        <motion.div
      initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : -20 }}
    transition={{ duration: 0.5 }} className={`${!toggle ? 'hidden' : 'flex'} items-center justify-center p-6 bg-gray-200 absolute top-[3rem]  right-0 mx-4 my-2 min-w-[18rem] min-h-[30rem] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} text-[16px] font-medium cursor-pointer`} onClick={() => { setToggle(!toggle); setActive(active === link.title ? '' : link.title); }}>
                <a href={`#${link.id}`}>{link.title} 
                </a>
              </li>
            ))}
            <div className='flex flex-col items-center justify-center gap-4'>
      <button href="#_" className="w-fit items-center justify-center  px-3 py-[0.45rem] transition ease-in-out duration-200 mb-2 text-sm font-semibold text-white bg-orange-400 hover:bg-orange-500 rounded-lg sm:w-auto sm:mb-0">
          Book a Demo
        </button>

        <div className='flex flex-row gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>


        </div>
        </div>
          </ul>
        </motion.div>
      </div>


    </div>
  </nav>
  )
}

export default Navbar