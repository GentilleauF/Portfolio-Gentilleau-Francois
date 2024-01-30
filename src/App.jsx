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
    <main className="font-montserrat">
      <Navbar />
      <div className=" flex flex-row">
        <SideBar />
        <div className="flex flex-col lg:ml-20 bg-bgColor">
          <HeroBanner />
          <WhoAmI />
          <Skills/>
          <Experience/>
          <Portfolio/>
        </div>
      </div>
    </main>
  );
}

export default App;
