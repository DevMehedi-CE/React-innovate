import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';


const Service = () => {
  return (
    <div className='max-w-container mx-auto mb-40'>

            <div className='text-center mt-40'>
            <h3 className='text-xl font-dm text-[#FF7364] mb-1'>Our Services</h3>
            <h1 className='text-46 font-chivo font-bold' >How It Works</h1>
            </div>
        

      <div className='lg:flex justify-between  mt-20' >
        <div className=' mt-3 text-center lg:text-left lg:max-w-330 border border-gray-500 rounded-lg p-9 hover:bg-primary hover:text-white ease-in duration-300 '>
          <ServiceCard image='/public/plan.png' headtitle='Plan Product Roadmap' des='A product roadmap is a shared source of truth that outlines the vision, direction, priorities' />
          <div className='flex items-center  mt-26 gap-x-1   '>
          <Link to='/register' className='text-base font-dm  '> Read More </Link> <BsArrowRight/>
          </div>
        </div>
        <div className=' mt-3 text-center lg:text-left lg:max-w-330 border border-gray-500 rounded-lg p-9 hover:bg-primary hover:text-white ease-in duration-300 '>
          <ServiceCard image='/public/assign.png' headtitle='Assign Any Work' des='Work assignment or job assignment is allocating work to work centers or appropriate ' />
          <div className='flex items-center  mt-26 gap-x-1   '>
          <Link to='/register' className='text-base font-dm  '> Read More </Link> <BsArrowRight/>
          </div>
        </div>
        <div className=' mt-3 text-center lg:text-left lg:max-w-330 border border-gray-500 rounded-lg p-9 hover:bg-primary hover:text-white ease-in duration-300 '>
          <ServiceCard image='/public/monitor.png' headtitle='Monitor Work Progress' des='Monitor Work ProgressKeeping records and monitoring activities helps people see progress' />
          <div className='flex items-center  mt-26 gap-x-1   '>
          <Link to='/register' className='text-base font-dm  '> Read More </Link> <BsArrowRight/>
          </div>
        </div>
        <div className=' mt-3 text-center lg:text-left lg:max-w-330 border border-gray-500 rounded-lg p-9 hover:bg-primary hover:text-white ease-in duration-300 '>
          <ServiceCard image='/public/pertect.png' headtitle='Pertect Intergration' des='App integration, in a general sense, is the process of resources or capabilities from one application ' />
          <div className='flex items-center  mt-26 gap-x-1   '>
          <Link to='/register' className='text-base font-dm  '> Read More </Link> <BsArrowRight/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Service
