import React from 'react'
import Slider from "./Slider"
import SectionHeader from './SectionHeader'
const CustomersLogo = () => {
  return (
    <div className='flex flex-col'>
    <SectionHeader
    title={"Customers Trusting Squirro "}
    />
      <Slider />
    </div>
  )
}

export default CustomersLogo