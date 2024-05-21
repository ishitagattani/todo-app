import "./App.css";
import tick from './images/icon-check.svg';

export default function Checkbox({checked,onClick}) {
    return(
        <div onClick={onClick}>
            {!checked &&(
                <div className="checkbox unchecked">
                    <button>O</button>
                </div>
            )}
            {checked &&(
                <div className="checkbox checked">
                    <img src={tick} alt='done'/>
                </div>
            )}
        </div>
    )
}