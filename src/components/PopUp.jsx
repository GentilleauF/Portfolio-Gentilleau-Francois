const Popup = ({ title, description, image, closePopup, setclosePopup, link, competences }) => {
    return (
        <div className=" absolute inset-10 h-[80vh] bg-slate-100 text-slate-800 p-3 rounded overflow-auto">
            <div className="flex justify-end p-1 pr-3 font-medium cursor-pointer" onClick={() => { setclosePopup(!closePopup) }}>X</div>
            <h2 className="text-center font-semibold text-2xl mb-10">{title}</h2>

            <div className="text-lg font-medium mb-3">Lien du projet : <a className="text-sm text-blue-900 font-semibold" href={link}>{link}</a>  </div>
            <div className="flex justify-center items-center">
                <img className="mb-5 flex" src={image} alt="project image" />
            </div>

            <p className="mb-10">{description}</p>
            <h3 className="mt-10 font-medium">COMPETENCES :</h3>
            <ul className="pl-4 mb-20">
                {competences.map((competence, i) => (
                    <li className="list-disc" key={i}>{competence}</li>
                ))}

            </ul>
        </div>
    );
}

export default Popup;
