import React from 'react'
import Card from '../components/Card'
import { AllData } from '../components/Data'
const Feature = () => {
  return (

    <div className='max-w-container mx-auto mb-40'>
      {/* platform content start  */}
      <div className='lg:flex justify-between items-center mt-40 px-5 lg:px-0'>

       
            <Card header="How simple is it to use our platform?"/> 
            <Card headdes="This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business." /> 
      </div>

      <div className='lg:flex justify-center gap-x-32 '>

      {AllData.map((data,index)=>(

         <div key={index}   className='md:max-w-300 text-center mx-auto lg:mx-0 mt-116' >
           <img  className='mx-auto w-28' src={data.image} alt="" />
            <h2  className='text-2xl font-chivo font-bold mt-26 mb-3 px-4' >{data.title}</h2>
            <p className='px-5'>{data.des}</p>
        </div>
                ))}
      </div>

    </div>
  
  )
}

export default Feature
