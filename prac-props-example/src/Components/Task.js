import React from 'react'

export const Task = ({task,index}) => {
  return (
    <div>{index+1} : {task}</div>
  )
}
