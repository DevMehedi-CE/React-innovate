import React from 'react'
import HeroData from '../components/HeroData'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='!bg-no-repeat !bg-cover !bg-center pt-195 pb-195 lg:pb-552 relative' style={{background:"url(/public/BG.png)"}} >

      <div className='max-w-container mx-auto text-center'>
        <HeroData head='Get your work done with Management Tool' />
        <HeroData  des='The world first project management platform that connects everything' />
        
       
        <input type="email" placeholder="enter your email " className="py-5 px-6 mt-8 min-w-300 md:min-w-480 rounded-md " />
        <br className='lg:hidden' />

        <Link to="/register" className='bg-secondary py-4 px-12 rounded-md min-w-300 inline-block mt-2 lg:min-w-0 lg:-ml-48' >
        Try it free
        </Link>



        <HeroData img='/public/Laptop Screen.png' />
      </div>
      






    </div>
  )
}

export default Home
