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
<div
  class=" m-20 z-50 flex  h-34 overflow-hidden bg-white shadow-lg w-100 rounded-xl"
>
  <svg width="16" height="100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 8 0 
               Q 4 4.8, 8 9.6
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
      fill="tan"
      stroke="tan"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
  </svg>
  <div class="mx-2.5 overflow-hidden w-full">
    <p
      class="mt-1.5 text-xl font-bold text-[black] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
    >
      Notice !
    </p>
    <p class="overflow-hidden leading-5 break-all text-zinc-600 max-h-55">
      Use below credentials for debugging!<br />
      Admin email: admin@example.com <br />
      Employee email: employee1@example.com <br />
      Password: 123
    </p>
  </div>
  <button class="w-16 cursor-pointer focus:outline-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="peru"
      fill="none"
      class="w-7 h-7"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </button>
</div>

    </div>
  )
}

export default Login