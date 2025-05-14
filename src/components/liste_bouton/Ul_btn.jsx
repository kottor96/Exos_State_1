import Li_btn from "./Li_btn";

export default function Ul_btn({action,mode}){
    console.log(mode);
    
    return(
        <ul>
            <Li_btn
                nom="Daily" className={mode=='daily' ? 'active' : ''} setMode={action}
            />
            <Li_btn
                nom="Weekly" className={mode=='weekly' ? 'active' : ''} setMode={action}
            />
            <Li_btn
                nom="Monthly" className={mode=='monthly' ? 'active' : ''} setMode={action}
            />
            
        </ul>
    )
}