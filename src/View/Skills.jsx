import { useState } from "react";

const Skills = ({ skillsArray }) => {
  //const [filteredSkills, setFilteredSkills] = useState(skillsArray);
  const [skillsType, setSkillsType] = useState("frontend");
  const filteredSkills = skillsArray.filter(item => item.type === skillsType);

  function sortSkillsByType(type) {
    setSkillsType(type);
  }
  
  return (
    <div className="min-h-[50vh] p-7 md:p-16" id="Skills">
      <h2 className="text-center text-4xl font-semibold py-10 text-white">Compétences</h2>
      <div className="">
        <div className="flex flex-row justify-around my-4">
          <button
            onClick={() => sortSkillsByType('frontend')}
            className={`font-bold text-sm md:text-md py-2 px-3 rounded-full ${skillsType == 'frontend' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Front-End
          </button>
          <button
            onClick={() => sortSkillsByType('backend')}
            className={`font-bold text-sm md:text-md py-2 px-3 rounded-full ${skillsType == 'backend' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Back-End
          </button>
          <button
            onClick={() => sortSkillsByType('tools')}
            className={`font-bold text-sm md:text-md py-2 px-3 rounded-full ${skillsType == 'tools' ? 'bg-blue-400 text-white' : 'bg-slate-100 text-blue-500'}`}
          >
            Outils
          </button>
        </div>
        <ul>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  mt-16 xl:px-24 text-slate-100">
            {filteredSkills.map((item, i) => (
              <div key={i} className="flex justify-center items-center flex-col px-5 pb-10">
                <img className=" h-14 md:h-24" src={'/icons/' + item.img} alt="error" />
                <p className="font-medium  pt-3">{item.name}</p>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;