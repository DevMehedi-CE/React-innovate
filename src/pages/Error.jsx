import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className='max-w-container mx-auto text-center'>
        <img className='lg:max-w-504 mx-auto' src="/public/error.jpg" alt="error" />
        <h1 className='capitalize font-chivo text-3xl lg:text-44 text-red-500 lg:leading-relaxed lg:max-w-530 mx-auto'>this page does not exist in the universe</h1>

       
       <Link to="/" className='capitalize font-chivo text-22 text-blue-600 lg:max-w-530 mx-auto' > Go to Home Page </Link> 
         
    </div>
  )
}

export default Error
