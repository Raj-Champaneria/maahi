import React, { useState } from 'react'

export const Form = ({onAddTask}) => {
    const[task,setTask] =useState('');
    const handleChange = (e)=>{
  setTask(e.target.value)
    }
    const handleSubmit = (e)=>{
e.preventDefault()
onAddTask(task)
setTask('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} onChange={handleChange}/>
            <button>Add Task</button>
        </form>
    </div>
  )
}
