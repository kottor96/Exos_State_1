export default function Li_btn({nom,setMode}){
    <li>
        <button onClick={setMode(nom.toLocaleLowerCase)}>{nom}</button>
    </li>
}