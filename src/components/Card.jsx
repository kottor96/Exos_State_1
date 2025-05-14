import Ul_btn from "./liste_bouton/Ul_btn";
import Card_clasique from "./card_clasique/Card_clasique";
import Card_name from "./profil_card/Card_profil";

export default function Card({type,url,nom,prenom,titre,time,last,mode,isDark,action,night,className,icons,actionBis}) {
    
    return(
        <div className="card">
            <div className={type=='titre'?'card_head' : `card_head ${className}`}>
                {type=='titre' && 
                    <Card_name
                        url={url}
                        nom={nom}
                        prenom={prenom}
                        actionBis={actionBis}
                        night={night}
                        isDark={isDark}
                    />
                }
                {type=='classique' && <img src={icons} onClick={()=>{alert('alerte au mushrom')}} alt="icon"/>}
            </div>
            <div className="card_body">
                {type=='titre' ? 
                    <Ul_btn action={action} mode={mode}/>
                    :
                    type == 'classique' 
                    && 
                    <Card_clasique 
                        titre={titre}
                        time={time}
                        last={last}
                        mode={mode}
                    />
                }
            </div>
        </div>
    )
}