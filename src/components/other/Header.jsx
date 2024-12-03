import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import { getLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    //window.location.reload()
  }

  return (
    <div className='flex items-end justify-between rounded-xl'>
      <h1 className='text-2xl text-gray-50 m-2.5 '>Hello <span className='text-3xl font-semibold'>👋</span></h1>
      <button onClick={logOutUser} className='bg-yellow-400 text-black text-lg font-medium px-5 py-2 rounded-sm m-5'>Log Out</button>
    </div>
  )
}

export default Header