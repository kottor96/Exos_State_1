import Li_btn from "./Li_btn";

export default function Ul_btn(action){
    return(
        <ul>
            <Li_btn
                nom="Daily" setMode={action}
            />
            <Li_btn
                nom="Weekly" setMode={action}
            />
            <Li_btn
                nom="Monthly" setMode={action}
            />
            
        </ul>
    )
}