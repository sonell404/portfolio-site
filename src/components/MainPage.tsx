import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./PAGES/Home";
import AboutText from "./PAGES/AboutText";
import HandDrawnWork from "./PAGES/HandDrawnWork";
import PrintWork from "./PAGES/PrintWork";
import HeaderContainer from "./HEADER/HeaderContainer";
import Footer from "./FOOTER/Footer";

import "./MainPage.css";
import AboutLogo from "./HEADER/AboutLogo";
import MainHeader from "./HEADER/MainHeader";
import MainLogo from "./HEADER/MainLogo";

function MainPage() {
  const location = useLocation();

  return (
    <>
      <HeaderContainer menuOpen={false}>
        <MainHeader>
          <MainLogo />
          <AboutLogo
            version="header"
            fillColour={location.pathname === "/about" ? "#ffffff" : "#212121"}
          />
        </MainHeader>
      </HeaderContainer>
      <div
        className={`main-component-container ${
          useLocation().pathname !== "/" ? "active" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutText />}></Route>
          <Route path="/hand-drawn-work" element={<HandDrawnWork />}></Route>
          <Route path="/print-work" element={<PrintWork />}></Route>
        </Routes>
      </div>
      <Footer>
        <AboutLogo
          version="footer"
          fillColour={location.pathname === "/about" ? "#ffffff" : "#212121"}
        />
      </Footer>
    </>
  );
}

export default MainPage;
