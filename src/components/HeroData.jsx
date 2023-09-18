import React from 'react'

const HeroData = ({head,des,img}) => {
  return (
    <div>
      <h1 className='  text-4xl md:text-56 md:leading-relaxed text-white font-chivo max-w-796 text-center mx-auto'>{head}</h1>
      <p className='text-white text-lg font-dm max-w-467 pt-5 text-center mx-auto'>{des}</p>
      <img src={img}  className='absolute -bottom-52 left-1/2 -translate-x-2/4 hidden lg:block' />
    </div>
  )
}

export default HeroData
