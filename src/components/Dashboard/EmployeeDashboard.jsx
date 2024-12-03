import React from 'react'
import Header from '../other/header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#111] h-screen'>
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskListNumbers data = {props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard