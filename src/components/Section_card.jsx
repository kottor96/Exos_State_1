import Card from "./Card"
import Img from "../assets/images/image-jeremy.png"
import Img_bis from '../assets/images/user_bis.jpg'
import timeType from "../../data.json"
import timeType2 from "../../data_bis.json"
import playIcon from '../assets/icon/icon-play.svg'
import workIcon from '../assets/icon/icon-work.svg'
import selfIcon from '../assets/icon/icon-self-care.svg'
import studyIcon from '../assets/icon/icon-study.svg'
import socialIcon from '../assets/icon/icon-social.svg'
import exercicesIcon from '../assets/icon/icon-exercise.svg'
import { useState } from "react"

export default function Section_card({action,mode,night,isDark}){
    const couleur = {'Study':'rouge','Work':'orange','Self Care':'jaune','Play':'cyan','Social':'violet','Exercise':'vert','Anti Social':'violet'}
    const icons = {'Play':playIcon,'Work':workIcon,'Self Care':selfIcon,'Study':studyIcon,'Social':socialIcon,'Exercise':exercicesIcon,'Anti Social':socialIcon}
    const [user,setUser] = useState(timeType)
    function changeUser(){
        user==timeType? setUser(timeType2) : setUser(timeType)
    }
    return(
        <section>
            <div className="titre">
                <Card
                    type='titre'
                    url={user==timeType? Img:Img_bis}
                    nom={user==timeType? 'Robson':'Mertens'}
                    prenom={user==timeType? 'Jeremy':'Aurélien'}
                    mode={mode}
                    action={action}
                    actionBis={changeUser}
                    night={night}
                    isDark={isDark}
                />
            </div>
            <div className="commun">
                {user.map((item,index) => (
                    
                    <Card
                        key={index}
                        type="classique"
                        titre={item.title}
                        className={couleur[item.title]}
                        icons={icons[item.title]}
                        time={item.timeframes[mode].current}
                        last={item.timeframes[mode].previous}
                        mode={mode}
                    />
                ))}
            </div>
        </section>
    )
}