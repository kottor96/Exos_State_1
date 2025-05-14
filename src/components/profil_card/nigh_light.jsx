import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon} from '@fortawesome/free-solid-svg-icons'


export default function TogleNigh({night,isDark}){
    console.log(isDark);
    
    return(
        <div onClick={night}>

            <FontAwesomeIcon icon={isDark=='dark_mode'?faSun:faMoon}/>

        </div>
    )
}
