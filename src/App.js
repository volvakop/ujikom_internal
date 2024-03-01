import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutMePage from "./components/AboutMe";
import RencanakanPerjalanan from "./components/RencanakanPerjalanan"
// import BudayaSejarah from "./components/BudayaSejarah"
import CulturalHistoryPortal from "./components/CulturalHistoryPortal";



function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
      <span className="logo">

      </span>

     <span className="logo">

      <img src="putraanjing.jpg" alt="logo" width='90px' height='10px'/> 
     </span>
        
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/pariwisata" className="button rounded">
          Pariwisata
        </NavLink>
        <NavLink to='/about' className="button rounded">
          tentang Soerabaya
        </NavLink>
        <NavLink to='/rencanakanperjalanan' className="button rounded">
          Rencanakan Perjalanan
        </NavLink>
        <NavLink to='/budayadansejarah' className="button rounded">
          Budaya Dan Sejarah
        </NavLink>


      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pariwisata" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/rencanakanperjalanan" element={<RencanakanPerjalanan />} />
          {/* <Route path="/budayadansejarah" element={<BudayaSejarah />} /> */}
          <Route path="/budayadansejarah" element={<CulturalHistoryPortal />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
