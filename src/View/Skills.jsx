import { useState } from "react";
import Slide from "./Slide";

const Skills = () => {

  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };



  return (
    <div className="  min-h-screen p-16" id="Skills">
      <h2 className="text-center text-4xl font-semibold py-10 text-white">Compétences</h2>

      <div className="relative overflow-hidden text-white">
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
      </div>
    </div>
  );
};

export default Skills;
