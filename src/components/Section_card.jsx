import Card from "./Card"
import Img from "../assets/images/image-jeremy.png"
import timeType from "../../data.json"

export default function Section_card({action,mode}){
    
    return(
        <section>
            <div>
                <Card
                    type='titre'
                    url={Img}
                    nom={"Robson"}
                    prenom={'Jeremy'}
                    mode={mode}
                    action={action}
                />
            </div>
            <div>
                {/* <Card
                    type={'clasique'}
                    titre={'Work'}
                    time={32}
                    last={36}
                    mode={'week'}
                />
                <Card
                    type={'clasique'}
                    titre={'Play'}
                    time={10}
                    last={8}
                    mode={'week'}
                />
                <Card
                    type={'clasique'}
                    titre={'Study'}
                    time={4}
                    last={7}
                    mode={'week'}
                />
                <Card
                    type={'clasique'}
                    titre={'Exercise'}
                    time={4}
                    last={5}
                    mode={'week'}
                />
                <Card
                    type={'clasique'}
                    titre={'Social'}
                    time={5}
                    last={10}
                    mode={'week'}
                />
                <Card
                    type={'clasique'}
                    titre={'Self Care'}
                    time={2}
                    last={2}
                    mode={'week'}
                /> */}
                {timeType.map((item,index) => (
                    <Card
                        key={index}
                        type="classique"
                        titre={item.title}
                        time={item.timeframes.daily.current}
                        last={item.timeframes.daily.previous}
                        mode={'daily'}
                    />
                ))}
            </div>
        </section>
    )
}