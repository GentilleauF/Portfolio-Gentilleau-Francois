import { useState } from "react";
import Popup from "../components/PopUp";

const Project = ({ project }) => {
    const [closePopup, setClosePopup] = useState(true);
    const handleScrollTo = (sectionId) => {
        // Get the section element based on ID
        const targetSection = document.getElementById(sectionId);
    
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      };

    return (


        <div>
            <div onClick={() => { setClosePopup(!closePopup); handleScrollTo("Portfolio"); }} className="hover:opacity-50 rounded-lg bg-slate-600 h-80 my-8 cursor-pointer ">
                <img className="rounded-t-lg h-[65%] w-[100%] object-cover" src={project.img} alt="" />
                <h4 className="text-center text-lg font-bold p-1">{project.title}</h4>
                <p className=" pl-3 line-clamp-2 ">{project.description}</p>
            </div>

            <div hidden={closePopup} >
                <Popup
                    closePopup={closePopup}
                    setclosePopup={setClosePopup}
                    title={project.title}
                    image={project.img}
                    description={project.description}
                    link={project.lien}
                    competences={project.competences}
                />

            

            </div>

        </div>


    );
}

export default Project;