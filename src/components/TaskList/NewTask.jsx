import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 text-xs rounded'>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2 className='mt-4 text-xl font-semibold text-black'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='flex justify-between'>
          <button className='bg-green-500 py-1 px-2 text-sm rounded mt-4'>Accept</button>
        </div>
      </div>
  )
}

export default NewTask