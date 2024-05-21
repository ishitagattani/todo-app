import './App.css';
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from 'react';
import Theme from "./Theme";

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(()=>{
    if(tasks.length===0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks ?? []);
  },[])

  function addTask(name){
    setTasks(prev=> {
      return [...prev, {name: name,done: false}]
    })
  }

  function updateTaskDone(taskIndex,newDone){
    setTasks(prev=> {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })
  }

  function removeTask(indextoRemove){
    setTasks(prev=> {
      return prev.filter((taskObject,index)=> index!==indextoRemove)
    })
  }

  const taskCount=tasks.length;
  return (
    <main>
        <header>
          <div className="header">
            <h2 className="logo">T O D O</h2>
            <Theme />
          </div>
          <TaskForm onAdd={addTask}/>
          {tasks.map((task,index)=> (
          <Task {...task} 
              onToggle={done=> updateTaskDone(index,done)} 
              onDelete={()=>removeTask(index)}/>
          ))}
          <div className="task-count">
            {taskCount>0 && (<p>{taskCount} items left</p>)}
            <div className="active">
              <p>All Active Completed</p>
            </div>
            <p>Clear Completed</p>
          </div>
        </header>
    </main>
  );
}

export default App;
