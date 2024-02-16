import { useEffect, useState } from "react";
import { readSkills } from "../Model/firebaseCRUD";

const Skills = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const [skillsArray, setSkillsArray] = useState([]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };


  useEffect(() => {
    const fetchData = async () => {
      const data = await readSkills('skills');
      setSkillsArray(data)
    };
    fetchData();
  }, []);



  return (
    <div className="  min-h-screen p-16" id="Skills">
      <h2 className="text-center text-4xl font-semibold py-10 text-white">Compétences</h2>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300 transform translate-x-full" style={{ width: '100%', transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          {/* <Slide number={1} />
        <Slide number={2} />
        <Slide number={3} /> */}
          {/* <div className="flex-shrink-0 w-full h-64 bg-gray-300">
      <p className="text-4xl font-bold text-center text-teal-500">{`Slide 1`}</p>
    </div>
    <div className="flex-shrink-0 w-full h-64 bg-gray-300">
      <p className="text-4xl font-bold text-center">{`Slide 2`}</p>
    </div>
        <div className="flex-shrink-0 w-full h-64 bg-gray-300">
      <p className="text-4xl font-bold text-center">{`Slide 3`}</p>
    </div> */}

          <div className="flex-shrink-0 w-full h-[30vh] bg-gray-300">
            <p className="text-4xl font-bold text-center text-teal-500 ">{`Front-End`}</p>
            <div className="absolute top-1/2 flex flex-row justify-between left-28 right-28 transform -translate-y-1/2">
              {skillsArray.map((item, i) => (
                <div key={i} className="flex flex-col justify-center items-center ">
                  <img width={100} src={'/public/icons/' + item.img} alt="error" />
                  <p>{item.name}</p>

                </div>

              ))}
            </div>

          </div>


        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2">
          Previous
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2">
          Next
        </button>
      </div>
//

      {/* </div> */}
    </div>
  );
};

export default Skills;
