import React, { useState } from 'react'

const Login = ({handleLogin}) => {


  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#111]'>
      <div className='border-2 border-yellow-400 p-20 rounded-xl'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className='text-yellow-400 bg-transparent outline-none border-2 border-white-600 py-3 px-5 text-xl rounded-full placeholder:text-white' type="email" placeholder='Enter your email'/>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='text-yellow-400 bg-transparent outline-none border-2 border-white-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-3' type="password" placeholder='Enter Password' />
          <button className='text-black bg-yellow-300 outline-none border-2 border-white-600 py-3 px-5 text-xl rounded-full placeholder:text-black mt-7 w-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login