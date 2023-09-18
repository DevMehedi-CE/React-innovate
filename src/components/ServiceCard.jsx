import React from 'react'

const ServiceCard = ({image,headtitle, des}) => {
  return (
    <div>
        <img className='mx-auto lg:mx-0' src={image} alt="" />
        <h2 className='text-22 font-bold font-chivo mb-2 mt-26' >{headtitle}</h2>
        <p className='text-base font-dm' >{des}</p>
    </div>
  )
}

export default ServiceCard
