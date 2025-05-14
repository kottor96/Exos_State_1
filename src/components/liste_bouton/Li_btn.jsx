export default function Li_btn({nom,setMode, className}){
    return(
        <li className={className}>
            <button onClick={() => setMode(nom.toLowerCase())}>
                {nom}
            </button>
        </li>
    )
    
}