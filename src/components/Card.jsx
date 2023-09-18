import React from 'react'

const Card = ({header,headdes,title, des, image}) => {
  return (
   
     <div>
        <h1 className=' text-4xl md:text-46 md:leading-relaxed font-chivo font-bold max-w-504'>{header}</h1>
        <p className='font-dm text-lg max-w-530'>{headdes}</p>
        <img className='mx-auto w-28'  src={image} alt="" />
        <h2 className='text-2xl font-chivo font-bold mt-26 mb-3 px-4'>{title}</h2>
        <p className='px-5' >{des}</p>
    </div>
  
  )
}

export default Card
