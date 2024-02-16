import { useEffect, useState } from "react";
import { readSkills } from "../Model/firebaseCRUD";

const Skills = () => {

  const [skillsArray, setSkillsArray] = useState([]);
  const [skillsType, setSkillsType] = useState('frontend');

  useEffect(() => {
    const fetchData = async () => {
      const data = await readSkills('skills', skillsType);
      setSkillsArray(data)
    };
    fetchData();
  }, [skillsType]);

  function sortSkillsByType(type) {
    setSkillsType(type)
  }

  return (
    <div className="min-h-screen p-16" id="Skills">
      <h2 className="text-center text-4xl font-semibold py-10 text-white">Compétences</h2>
      <div className="">
        <div className="flex flex-row justify-around space-x-4 my-4">
          <button 
            onClick={() => sortSkillsByType('frontend')} 
            className={`font-bold py-2 px-4 rounded-full ${skillsType == 'frontend' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Front-End
          </button>
          <button 
            onClick={() => sortSkillsByType('backend')} 
            className={`font-bold py-2 px-4 rounded-full ${skillsType == 'backend' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Back-End
          </button>
          <button 
            onClick={() => sortSkillsByType('tools')} 
            className={`font-bold py-2 px-4 rounded-full ${skillsType == 'tools' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Outils
          </button>
        </div>
        <ul>
          <div className="flex flex-row justify-between mt-16 px-28 text-slate-100">
            {skillsArray.map((item, i) => (
              <div key={i} className="flex flex-col justify-center items-center ">
                <img width='100px' src={'/public/icons/' + item.img} alt="error" />
                <p className="font-medium pt-3">{item.name}</p>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;