import { Routes, Route, useLocation } from "react-router-dom";

import AboutText from "./PAGES/AboutText";
import HandDrawnWork from "./PAGES/HandDrawnWork";
import PrintWork from "./PAGES/PrintWork";
import CodeWork from "./PAGES/CodeWork";
import HeaderContainer from "./HEADER/HeaderContainer";
import Footer from "./FOOTER/Footer";

import AboutLogo from "./HEADER/AboutLogo";
import MainHeader from "./HEADER/MainHeader";
import MainLogo from "./HEADER/MainLogo";
import MenuContainer from "./MENU/MenuContainer";

import "./MainPage.css";

function MainPage() {
  const location = useLocation();

  return (
    <>
      <HeaderContainer>
        <MainHeader>
          <MainLogo />
          <AboutLogo
            version="header"
            fillColour={location.pathname === "/about" || location.pathname === "/" ? "#ffffff" : "#212121"}
          />
        </MainHeader>
      </HeaderContainer>
      <MenuContainer />
      <div
        className={`main-component-container ${
          useLocation().pathname !== "/" ? "active" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<AboutText />}></Route>
          <Route path="/about" element={<AboutText />}></Route>
          <Route path="/hand-drawn-work" element={<HandDrawnWork />}></Route>
          <Route path="/print-work" element={<PrintWork />}></Route>
          <Route path="/code-work" element={<CodeWork />}></Route>
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
