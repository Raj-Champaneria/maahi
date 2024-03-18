import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { List } from './Components/List';

function App() {
  const [tasks,setTasks]=useState([])
  const addTask = (newTask)=>{
    setTasks([...tasks,newTask])
  }
  return (
    <div className="">
      <h1>Tasks</h1>
     <Form onAddTask = {addTask}/>
     <List tasks={tasks}/>
    </div>
  );
}

export default App;
