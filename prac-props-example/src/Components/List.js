import React from 'react'
import { Task } from '../Components/Task'

export const List = ({tasks}) => {
    
  return (
    <div>
        <div>
            {tasks.map((task,index)=>(
                <Task task={task} index={index}/>
            ))}
        </div>
    </div>
  )
}
