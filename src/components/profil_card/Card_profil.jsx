import Img_profil from "./Img_profil";
import TogleNigh from "./nigh_light";
import Nom_profil from "./Nom";
import { faSun,faMoon} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Card_name({url,nom,prenom,actionBis,night,isDark}) {
    return(
        <>
            <Img_profil
                url={url}
                actionBis={actionBis}
            />
            <TogleNigh
                night={night}
                isDark={isDark}
            />
            <Nom_profil
                nom={nom}
                prenom={prenom}
            />
        </>
    )
}