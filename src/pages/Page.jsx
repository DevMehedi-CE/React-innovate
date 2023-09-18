import React from 'react'
import Button from '../components/Button'
import { PageData } from '../components/PageData'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className='max-w-container mx-auto mt-160 mb-140'>


       <div className='lg:flex justify-between'>
        <div className='max-w-753'>
          <img className='hidden lg:block' src="/public/Elements.png" alt="" />
        </div>
        <div className='max-w-553 mx-auto'>
        <h3 class="  text-3xl lg:text-46 font-chivo font-bold text-center lg:leading-relaxed lg:text-left mb-16">We provide features for your Business</h3>
        <div  className='lg:flex flex-wrap gap-x-100 items-center' >
            {
              PageData.map((data,index)=>(
                      <div key={index} className='text-center mt-2 lg:text-left lg:max-w-220' >
                      <img src={data.image} className='mx-auto lg:mx-0' />
                      <h2 className='font-chivo font-bold text-22 '  >{data.title}</h2>
                      <p  className='text-lg font-dm text-third' >{data.des}</p>
                      </div>      
              ))
            }
           <Link to="/register"  >
          <Button className="text-center mt-2 lg:text-left lg:max-w-220" title="Get Started" >   Get Started </Button>
          </Link>
          </div>

         
        </div>
    
       </div>



    

      
    </div>
  )
}

export default Page
