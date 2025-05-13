export default function Li_btn({nom,setMode}){
    return(
        <li>
            <button onClick={() => setMode(nom.toLowerCase())}>
                {nom}
            </button>
        </li>
    )
    
}