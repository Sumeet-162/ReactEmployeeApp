import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
  

  return (
    <div id="tasklist" className='bg-[#1C1C1C] p-3 mt-5 rounded '>
      <div className='bg-red-400 mt-2  px-4 py-2 flex justify-between rounded'>
        <h2 className='w-1/5 bg-red-400 px-1 rounded-l'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-400' >New Task</h3>
        <h5 className='w-1/5 bg-red-400'>Active Task</h5>
        <h5 className='w-1/5 bg-red-400'>Completed Task</h5>
        <h5 className='w-1/5 bg-red-400 rounded-r'>Failed Task</h5>
      </div>
      <div  className=''>
      {userData.map(function(elem,idx){
        return <div key={idx} className=' border-2 border-white mt-2  px-4 py-2 flex justify-between rounded'>
        <h2 className='w-1/5 px-1 rounded-l'>{elem.firstName}</h2>
        <h3 className='w-1/5' >{elem.taskNumbers.newTask}</h3>
        <h5 className='w-1/5 '>{elem.taskNumbers.active}</h5>
        <h5 className='w-1/5'>{elem.taskNumbers.completed}</h5>
        <h5 className='w-1/5 rounded-r '>{elem.taskNumbers.failed}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask