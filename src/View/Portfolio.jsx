import { useEffect, useState } from "react";
import { readData } from "../Model/firebaseCRUD";


const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await readData('projects');
      setProjects(data);
    };
    fetchData();
  }, []);


  return (
    <div className="flex flex-col text-white  min-h-screen p-16" id="Portfolio">
      <h2 className="text-center text-4xl font-semibold py-10">Projets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((project) => (

          <a className="" href="">
            <div className="hover:opacity-50 rounded-lg bg-slate-300 h-80 hover:relative">
              <button className=" px-4 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 text-slate-900">En voir +</button>
              <img className="rounded-t-lg h-[65%] w-[100%] object-cover" src="/icons/Logo.png" alt="" />
              <h4 className="text-center text-lg font-bold p-1">{project.title}</h4>
              <p className=" pl-3 line-clamp-2 ">{project.description}</p>
            </div>

          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
