import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [show,setshow]= useState(false)

  console.log(show)

  const handelShow =()=>{
    setshow((show)=> !show)
  }
  return (

    <div> 
        <nav className='py-8 bg-primary hidden lg:block'>
          <div className='max-w-container mx-auto  flex'>
            <div className='w-1/4'> <NavLink to="/" > <img src="/public/Logo.png" alt="Logo" /> </NavLink> </div>
            <div className='w-2/4 flex items-center justify-center'> 
            <ul className='flex text-white gap-x-50'>
              <li> <NavLink to="/" className={({ isActive }) => isActive ? " underline font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Home</NavLink>  </li>
              <li> <NavLink to="/feature" className={({ isActive }) => isActive ? " underline font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Feature</NavLink>  </li>
              <li> <NavLink to="/service" className={({ isActive }) => isActive ? " underline font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Service</NavLink>  </li>
              <li> <NavLink to="/page" className={({ isActive }) => isActive ? " underline font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Pages</NavLink>  </li>
              <li> <NavLink to="/blog" className={({ isActive }) => isActive ? " underline font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Blog</NavLink>  </li>
            </ul>

      
            
            </div>
            <div className='w-1/4 flex items-center justify-center  '>
              <ul className='flex items-center'>
                <li className='mr-9 text-white font-medium text-lg font-dm'>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>  <NavLink className='bg-secondary py-5 px-12 rounded-lg font-medium text-lg font-dm ' to="/register">Register </NavLink> </li>
              </ul>
              
            </div>

          </div>
        </nav>

        <nav className='sm:block lg:hidden px-3 bg-primary'>

        <div className='flex justify-between items-center '>
          <div className=' py-4 '>
              <NavLink to="/" > <img src="/public/Logo.png" alt="Logo" /> </NavLink>
            </div>

          <div>
          <FaBars  onClick={handelShow} className=' py-2  text-4xl text-white cursor-pointer' />
          </div>
       </div>

       {
          show?
          <div className='text-center'>
          <ul className='flex flex-col text-xl mb-5 text-white '>
          <li onClick={()=>setshow(false)} > <NavLink to="/" className={({ isActive }) => isActive ? "font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Home</NavLink>  </li>
              <li onClick={()=>setshow(false)}  > <NavLink to="/feature" className={({ isActive }) => isActive ? "  font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Feature</NavLink>  </li>
              <li onClick={()=>setshow(false)}  > <NavLink to="/service" className={({ isActive }) => isActive ? "  font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Service</NavLink>  </li>
              <li onClick={()=>setshow(false)}  > <NavLink to="/page" className={({ isActive }) => isActive ? "  font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Pages</NavLink>  </li>
              <li onClick={()=>setshow(false)} > <NavLink to="/blog" className={({ isActive }) => isActive ? "  font-medium text-lg font-dm" : "font-medium text-lg font-dm"}>Blog</NavLink>  </li>
          </ul>
          <div className='text-center pb-6  '>
              <ul className='flex flex-col text-xl mb-5'>
                <li onClick={()=>setshow(false)} className=' text-white font-medium text-lg font-dm mb-4'>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li  onClick={()=>setshow(false)} >  <NavLink className='bg-secondary py-3 px-8 rounded-lg font-medium text-lg font-dm mt-4 ' to="/register">Register </NavLink> </li>
              </ul>
              
            </div>
        </div>
        
        :""

         }


        </nav>
    </div>
  )
}

export default NavBar
