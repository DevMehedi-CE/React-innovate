import React, { useState } from 'react'
import loginimg from '../assets/loginimg.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
const Login = () => {

  const [email,setEmail]= useState("")
  const [errorEmail, setErrorEmail]= useState("")

  const [password , setPassword] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

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
     
       if(email==""){
        setErrorEmail("email is required")
      }
      else if(password=="")
      {
        setErrorPassword("password is required")
      }

  }

  return (
    <div>
      <div className='max-w-container mx-auto '>
        <div className="lg:flex justify-center items-center pt-9 text-center">
        

          <div className=' hidden lg:block lg:w-[500px]'>
            <img src={loginimg} alt="Image" />
          </div>
          <div>
          <h1 className='mb-10 text-primary font-mono font-bold text-46' >Login your account</h1>
          <form onSubmit={handelSubmit} >
          <div className='font-mono mb-10 '>
            <input onChange={handelEmail} value={email} type="email" placeholder='Enter your email' className='  rounded-lg py-2 px-4 lg:w-96 border-4 border-purple-900' />
            <p  className='text-red-600 font-thin' >{errorEmail}</p>
          </div>
          <div className='font-mono mb-10 '>
            <input onChange={handelPassword} value={password} type="password" placeholder='Enter your password' className='  rounded-lg py-2 px-4 lg:w-96 border-4 border-purple-900' />
            <p  className='text-red-600 font-thin' >{errorPassword}</p>
          </div>
          <Button  title="Login" />
        
        </form>
        <p className='text-primary font-semibold font-dm'> <Link to="/register">Create your account </Link>  </p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
