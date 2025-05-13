import Card from "./Card"
import Img from "../assets/images/image-jeremy.png"
import timeType from "../../data.json"

export default function Section_card({action,mode}){
    
    return(
        <section className="ligh_mode">
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
                        time={item.timeframes[mode].current}
                        last={item.timeframes[mode].previous}
                        mode={mode}
                    />
                ))}
            </div>
        </section>
    )
}