import { useEffect, useState } from "react";
import { readSkills } from "../Model/firebaseCRUD";

const Slide = ({ skillType, type }) => {
    const [skillsArray, setSkillsArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await readSkills('skills', skillType);
            setSkillsArray(data)
        };
        fetchData();
    }, []);

    return (
        <div className="flex-shrink-0 w-full h-64 bg-slate-600">
            <p className="text-4xl font-bold text-center  ">{type}</p>
            <div className="flex flex-row justify-between mt-10 px-28">
                {skillsArray.map((item, i) => (
                    <div key={i} className="flex flex-col justify-center items-center ">
                        <img width='80px' src={'/public/icons/' + item.img} alt="error" />
                        <p>{item.name}</p>

                    </div>




                ))}
            </div>
                  {/* <div className="relative overflow-hidden text-white">
        <div className="flex transition-transform duration-300 transform translate-x-full" style={{ width: '80vw', transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>

          <Slide skillType={'frontend'} type={'Front-End'} />
          <Slide skillType={'backend'} type={'Back-End'} />
          <Slide skillType={'tools'} type={'Outils'} />
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2">
          Previous
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2">
          Next
        </button>
      </div> */}
        </div>
    );
}

export default Slide;