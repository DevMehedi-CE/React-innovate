import React, { useState } from 'react'
import Button from '../components/Button'
import Registerimg from '../assets/register.jpg'
import { Link } from 'react-router-dom'

const Register = () => {

  const [name,setName] = useState("")
  const [errorName, setErrorName]= useState("")

  const [email,setEmail]= useState("")
  const [errorEmail, setErrorEmail]= useState("")

  const [password , setPassword] = useState("")
  const [errorPassword, setErrorPassword] = useState("")


  const handelName =(event)=>{
    setName(event.target.value)
    setErrorName("")

  }

  const handelEmail =(event)=>{
    setEmail(event.target.value)
    setErrorEmail("")
  }

  const handelPassword = (event)=>{
    setPassword (event.target.value)
    setErrorPassword("")
  }



  const handelSubmit =(event)=>{
      event.preventDefault()
     

      if(name==""){
        setErrorName("name is required")
      }
      else if(email==""){
        setErrorEmail("email is required")
      }
      else if(password=="")
      {
        setErrorPassword("password is required")
      }

  }

  return (
    <div>
      <div className='max-w-container mx-auto'>



        <div className=' text-center lg:flex justify-center items-center' >
        <div className='lg:w-2/4'>
        <h1 className='text-primary font-chivo font-bold text-46' >Please Registration</h1>

        <form onSubmit={handelSubmit} > 
          <div className='font-mono mb-10 pt-10'>
            <input onChange={handelName} value={name} type="text" placeholder='Enter your full name' className='  rounded-lg py-2 px-4 md:w-96 border-4 border-purple-900' />
            <p  className='text-red-600 font-thin' >{errorName}</p>
          </div>
          <div className='font-mono mb-10 '>
            <input onChange={handelEmail} value={email} type="email" placeholder='Enter your email' className='  rounded-lg py-2 px-4 md:w-96 border-4 border-purple-900' />
            <p  className='text-red-600 font-thin' >{errorEmail}</p>
          </div>
          <div className='font-mono mb-10 '>
            <input onChange={handelPassword} value={password} type="password" placeholder='Enter your password' className='  rounded-lg py-2 px-4 md:w-96 border-4 border-purple-900' />
            <p  className='text-red-600 font-thin' >{errorPassword}</p>
          </div>
          <Button  title="Submit" />
        
        </form>

        <p className='text-primary font-semibold font-dm'>Already have an account ?  <Link to="/login" > Login </Link>   </p>
       

        </div>

        <div className='lg:w-2/4 hidden lg:block'>

        <img className='w-[500px]' src={Registerimg} alt="Image" />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Register
