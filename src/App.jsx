import "./index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import HeroBanner from "./View/HeroBanner";
import WhoAmI from "./View/WhoAmI";
import Skills from "./View/Skills";
import Experience from "./View/Experience";
import Portfolio from "./View/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col lg:ml-20">
          <HeroBanner />
          <WhoAmI />
          <Skills/>
          <Experience/>
          <Portfolio/>
        </div>
      </div>
    </>
  );
}

export default App;
