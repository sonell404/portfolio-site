import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./PAGES/Home";
import About from "./HEADER/About";
import HandDrawnWork from "./PAGES/HandDrawnWork";
import PrintWork from "./PAGES/PrintWork";
import HeaderContainer from "./HEADER/HeaderContainer";
import Footer from "./FOOTER/Footer";

import "./MainPage.css";

function MainPage() {
  return (
    <>
      <HeaderContainer menuOpen={false} />
      <div
        className={`main-component-container ${
          useLocation().pathname !== "/" ? "active" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/hand-drawn-work" element={<HandDrawnWork />}></Route>
          <Route path="/print-work" element={<PrintWork />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
