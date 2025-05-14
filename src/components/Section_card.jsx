import Card from "./Card"
import Img from "../assets/images/image-jeremy.png"
import timeType from "../../data.json"
import playIcon from '../assets/icon/icon-play.svg'
import workIcon from '../assets/icon/icon-work.svg'
import selfIcon from '../assets/icon/icon-self-care.svg'
import studyIcon from '../assets/icon/icon-study.svg'
import socialIcon from '../assets/icon/icon-social.svg'
import exercicesIcon from '../assets/icon/icon-exercise.svg'

export default function Section_card({action,mode}){
    const couleur = {'Study':'rouge','Work':'orange','Self Care':'jaune','Play':'cyan','Social':'violet','Exercise':'vert'}
    const icons = {'Play':playIcon,'Work':workIcon,'Self Care':selfIcon,'Study':studyIcon,'Social':socialIcon,'Exercise':exercicesIcon}
    
    
    return(
        <section>
            <div className="titre">
                <Card
                    type='titre'
                    url={Img}
                    nom={"Robson"}
                    prenom={'Jeremy'}
                    mode={mode}
                    action={action}
                />
            </div>
            <div className="commun">
                {timeType.map((item,index) => (
                    
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