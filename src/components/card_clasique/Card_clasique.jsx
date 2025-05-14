import Last from "./Last";
import Time_card from "./Temps";
import Titre_card from "./Titre";
import trois from '../../assets/icon/icon-ellipsis.svg'

export default function Card_clasique({mode,titre,time,last}){
    return(
        <>
            <div className="point">
                <Titre_card titre={titre}/>
                <img src={trois} alt="point" />
            </div>
            
            <Time_card time={time}/>
            <Last mode={mode} last={last}/>
            
        </>
    )
}