import { MapPinIcon } from "@heroicons/react/24/outline";
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
      className="flex text-white flex-col p-16"
      id="Experience"
    >
      <h2 className="text-center text-4xl font-semibold py-10">
        Expérience professionnelle
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-slate-600 rounded-sm p-4">
            <p>{experience.date}</p>
            <p className="text-lg font-bold">{experience.title}</p>
            <div className="flex flex-row items-center">
              <MapPinIcon className="w-5 mr-1" />
              <p>{experience.location}</p>
            </div>
            <button className="mt-5">+ de détails</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
