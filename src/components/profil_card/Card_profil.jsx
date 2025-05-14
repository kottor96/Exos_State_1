import Img_profil from "./Img_profil";
import Nom_profil from "./Nom";

export default function Card_name({url,nom,prenom,actionBis}) {
    return(
        <>
            <Img_profil
                url={url}
                actionBis={actionBis}
            />
            <Nom_profil
                nom={nom}
                prenom={prenom}
            />
        </>
    )
}