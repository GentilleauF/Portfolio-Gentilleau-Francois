import { useState } from "react";

const Skills = ({ skillsArray }) => {
  //const [filteredSkills, setFilteredSkills] = useState(skillsArray);
  const [skillsType, setSkillsType] = useState("frontend");
  const filteredSkills = skillsArray.filter(item => item.type === skillsType);

  function sortSkillsByType(type) {
    setSkillsType(type);
  }
  
  return (
    <div className="min-h-[50vh] p-10 md:p-16" id="Skills">
      <h2 className="text-center text-4xl font-semibold py-10 text-white">Compétences</h2>
      <div className="">
        <div className="flex flex-row justify-around space-x-4 my-4">
          <button
            onClick={() => sortSkillsByType('frontend')}
            className={`font-bold text-sm md:text-md py-2 px-4 rounded-full ${skillsType == 'frontend' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Front-End
          </button>
          <button
            onClick={() => sortSkillsByType('backend')}
            className={`font-bold text-sm md:text-md py-2 px-4 rounded-full ${skillsType == 'backend' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Back-End
          </button>
          <button
            onClick={() => sortSkillsByType('tools')}
            className={`font-bold text-sm md:text-md py-2 px-4 rounded-full ${skillsType == 'tools' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Outils
          </button>
        </div>
        <ul>
          <div className="flex flex-row flex-wrap justify-between mt-16 px-10 xl:px-24 text-slate-100">
            {filteredSkills.map((item, i) => (
              <div key={i} className="flex flex-col pr-5 pb-10 justify-center items-center ">
                <img className="w-14 md:w-24" src={'/icons/' + item.img} alt="error" />
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