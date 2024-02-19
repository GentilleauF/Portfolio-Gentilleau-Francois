const Popup = ({title, description, closePopup, setclosePopup, link, competences}) => {
    return ( 
        <div className=" absolute inset-10 h-[80vh] bg-slate-100 text-slate-800 p-3 rounded overflow-auto">
            <div className="flex justify-end p-1 pr-3" onClick={()=>{ setclosePopup(!closePopup) }}>X</div>
            <h2 className="text-center font-semibold text-2xl mb-10">{title}</h2>
            <p>Lien du projet : {link}</p>
            <p>{description}</p>

            <h3 className="mt-10">COMPETENCES</h3>
            <ul className="pl-2">
                {competences.map((competence, i) => (
                    <li key={i}>- {competence}</li>
                ))}
          
            </ul>
        </div>
     );
}
 
export default Popup;
