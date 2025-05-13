import Ul_btn from "./liste_bouton/Ul_btn";
import Card_clasique from "./card_clasique/Card_clasique";
import Card_name from "./profil_card/Card_profil";

export default function Card({type,url,nom,prenom,titre,time,last,mode}) {
    return(
        <div className="card_bg">
            <div>
                {type=='titre' && 
                    <Card_name
                        url={url}
                        nom={nom}
                        prenom={prenom}
                    />
                }
            </div>
            <div className="card_content">
                {type=='titre' ? 
                    <Ul_btn/>
                    :
                    type = 'clasique' 
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