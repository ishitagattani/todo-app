import './App.css';
import {useState} from 'react';

export default function TaskForm({onAdd}) {
    const [taskName, settaskName] = useState('');
    function handleSubmit(ev){
        ev.preventDefault();
        onAdd(taskName);
        settaskName('');
    }

    return(
        <form onSubmit={ev=> handleSubmit(ev)}>
            <div className="new-todo">
                <button>O</button>
                <input type="text" 
                    value={taskName} 
                    onChange={ev => settaskName(ev.target.value)}
                    placeholder="Create new task..."/>
            </div>
          
        </form>
    )
}