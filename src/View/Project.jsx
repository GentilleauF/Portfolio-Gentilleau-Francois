import { useState } from "react";
import Popup from "../components/PopUp";

const Project = ({ project }) => {
    const [closePopup, setClosePopup] = useState(true)
    return (


        <div>
            <div onClick={() => { setClosePopup(!closePopup) }} className="hover:opacity-50 rounded-lg bg-slate-300 h-80 ">
                <img className="rounded-t-lg h-[65%] w-[100%] object-cover" src="/icons/Logo.png" alt="" />
                <h4 className="text-center text-lg font-bold p-1">{project.title}</h4>
                <p className=" pl-3 line-clamp-2 ">{project.description}</p>
            </div>

            <div hidden={closePopup} >
                <Popup
                    closePopup={closePopup}
                    setclosePopup={setClosePopup}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    competences={project.competences}
                />

            </div>

        </div>


    );
}

export default Project;