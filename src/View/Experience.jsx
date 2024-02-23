import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { readData, readDataOrdered } from "../Model/firebaseCRUD";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await readDataOrdered('experiences');
      setExperiences(data);
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex text-white flex-col p-10 md:p-16"
      id="Experience"
    >
      <h2 className="text-center text-4xl font-semibold py-10">
        Expérience professionnelle
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-slate-600 rounded-sm p-4">
            <p className="text-xl my-3 font-bold text-blue-400">{experience.title}</p>
            <div className="flex flex-row items-center">
              <CalendarIcon className="w-5 mr-2" />
               <p>{experience.date}</p>
            </div>
           
            <div className="flex flex-row items-center">
              <MapPinIcon className="w-5 mr-2" />
              <p>{experience.location}</p>
            </div>
            <div className="mt-5 font-medium">Compétences :</div>
            <ul className="pl-5">
              {experience.competences.map((competence, i) => (
                <li key={i} className="list-disc mb-2">{competence}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
