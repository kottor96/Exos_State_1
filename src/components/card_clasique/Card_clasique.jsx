import Last from "./Last"
import Time_card from "./Temps"
import Titre_card from "./Titre"

export default function Card_clasique({mode,titre,time,last}){
    return(
        <>
            <Titre_card titre={titre}/>
            <Time_card time={time}/>
            <Last mode={mode} last={last}/>
        </>
    )
}