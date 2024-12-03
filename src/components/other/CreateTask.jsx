import React, { useContext } from 'react'
import  { useState } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = props => {

  const [userData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

    const data = userData

    data.forEach(function(elem){
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }
    })

    setUserData(data)

    setTaskDate('')
    setAsignTo('')
    setCategory('')
    setTaskTitle('')
    setTaskDescription('')
  }


  return (
    <div className='p-5 bg-[#1C1C1C] mt-4 rounded'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
        <div>
          <h3 className='text-base text-gray-300 mb-0.5'>Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' type="text" placeholder='Make UI Design' />
        </div>
        <div>
          <h3 className='text-base text-gray-300 mb-0.5'>Date</h3>
          <input
          value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' type="date" />
        </div>
        <div>
          <h3 className='text-base text-gray-300 mb-0.5'>Assign to</h3>
          <input 
          value={asignTo}
          onChange={(e)=>{
            setAsignTo(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' type="text" placeholder='employee name' name="" id="" />
        </div>
        <div>
          <h3 className='text-base text-gray-300 mb-0.5'>Category</h3>
          <input 
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' type="text" placeholder='design, dev, etc'/>
        </div>
        </div>
        <div className='w-1/2 flex flex-col items-start'>
          <h3 className='text-base text-gray-300 mb-0.5'>Description</h3>
          <textarea
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
          className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-yellow-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
          <button className='bg-yellow-400 py-3 hover:bg-yellow-600 px-5 rounded text-sm mt-4w-full'>Create Task</button>
        </div>
      </form>
      </div>
  )
}

CreateTask.propTypes = {}

export default CreateTask