import './App.css';
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import {useState} from 'react';

export default function Theme(){
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode(){
        setDarkMode(prev=> !prev);
    }
    
    return(
        <div className="theme">
            <button data-theme-toggle onClick={toggleDarkMode}> 
                {!darkMode && (
                    <div className="light">
                        <img className='img' src={sun} alt="light" />
                    </div>
                )}
                {darkMode && (
                    <div className="dark">
                        <img className='img' src={moon} alt="dark" />
                    </div>
                )}
            </button>
        </div>
    )
}