import "./App.css";
import cross from './images/icon-cross.svg';
import Checkbox from './CheckBox';

export default function Task({name,done,onToggle,onDelete}){
    return(
        <div className={'task '+ (done?'done':'')}>
            <div className='task-start'>
                <Checkbox checked={done} onClick={()=> onToggle(!done)}/>
                {name}
            </div>
            <button className='delete' onClick={onDelete}><img src={cross} alt='delete'/></button>
        </div>
    )
}