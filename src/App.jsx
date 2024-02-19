import "./index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import HeroBanner from "./View/HeroBanner";
import WhoAmI from "./View/WhoAmI";
import Skills from "./View/Skills";
import Experience from "./View/Experience";
import Portfolio from "./View/Portfolio";
import { useEffect, useState } from "react";
import { readData, readSkills } from "./Model/firebaseCRUD";

function App() {
  const [skillsArray, setSkillsArray] = useState([]);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const dataSkills = await readData('skills');
      setSkillsArray(dataSkills);

      const dataProjects = await readData('projects');
      setProjects(dataProjects);
    };
    fetchData();
  }, []);


  return (
    <main className="font-montserrat">
      <Navbar />
      <div className=" flex flex-row">
        <SideBar />
        <div className="flex flex-col lg:ml-20 bg-bgColor">
          <HeroBanner />
          <WhoAmI />
          <Skills skillsArray={skillsArray} />
          <Experience />
          <Portfolio projects={projects} />
        </div>
      </div>
    </main>
  );
}

export default App;
