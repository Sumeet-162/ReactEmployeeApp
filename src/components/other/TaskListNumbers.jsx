import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-7 justify-between gap-5 screen p-5 rounded-xl mb-5'>
      <div className='w-[45%] px-9 py-6 rounded-xl bg-red-400'>
        <h2 className='text-3xl font-semibold bg-red-400'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium bg-red-400'>New Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 rounded-xl bg-blue-400'>
        <h2 className='text-3xl font-semibold bg-blue-400'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium bg-blue-400'>Completed Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 rounded-xl bg-green-400'>
        <h2 className='text-3xl font-semibold bg-green-400'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium bg-green-400'>Accepted Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 rounded-xl bg-orange-400'>
        <h2 className='text-3xl font-semibold bg-orange-400'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium bg-orange-400'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers