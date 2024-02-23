import { useState } from "react";
import Popup from "../components/PopUp";
import Project from "./Project";

const Portfolio = ({ projects }) => {
  const [isDetailProjetShown, SetIsDetailProjetShown] = useState(true);

  return (
    <div className="flex flex-col text-white  min-h-screen p-10 md:p-16 relative" id="Portfolio">
      <h2 className="text-center text-4xl font-semibold py-10 ">Projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

        {projects.map((project) => (
          <Project key={project.id} project={project}  />

        ))}
      </div>
    </div>
  );
};

export default Portfolio;
