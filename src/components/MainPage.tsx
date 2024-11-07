import { Routes, Route, useLocation } from "react-router-dom";

// Import necessary components for pages
import AboutText from "./PAGES/AboutText";
import HandDrawnWork from "./PAGES/HandDrawnWork";
import PrintWork from "./PAGES/PrintWork";
import ContactForm from "./PAGES/ContactForm";
import HomeFace from "./PAGES/HomeFace";
import HeaderContainer from "./HEADER/HeaderContainer";
import Footer from "./FOOTER/Footer";

// Import necessary components for header and logos
import AboutLogo from "./HEADER/AboutLogo";
import MainHeader from "./HEADER/MainHeader";
import MainLogo from "./HEADER/MainLogo";
import Menu from "./MENU/Menu";

import "./MainPage.css";

// MainPage component
function MainPage() {
  // Get location
  const location = useLocation();

  return (
    <>
      <HeaderContainer>
        <MainHeader>
          <MainLogo />
          <AboutLogo
            version="header"
            // If location is about or home, fill colour is white, else black
            fillColour={
              location.pathname === "/about" || location.pathname === "/"
                ? "#ffffff"
                : "#212121"
            }
          />
          <Menu className="mobile-menu" />
        </MainHeader>
      </HeaderContainer>
      <div className="menu-and-content">
        <Menu className="menu" />
        {location.pathname === "" || location.pathname === "/" ? (
          <HomeFace />
        ) : null}

        <div
          className={`main-component-container active ${
            useLocation().pathname !== "/" ? "active" : ""
          }`}
          role="main"
          aria-label="Main Content Container"
        >
          {/* Routes for pages */}
          <Routes>
            <Route path="/home" element={<AboutText />}></Route>
            <Route path="/about" element={<AboutText />}></Route>
            <Route path="/hand-drawn-work" element={<HandDrawnWork />}></Route>
            <Route path="/print-work" element={<PrintWork />}></Route>
            <Route path="/contact-me" element={<ContactForm />}></Route>
          </Routes>
        </div>
      </div>
      <Footer>
        <AboutLogo
          version="footer"
          // If location is about, fill colour is black, else white
          fillColour={
            location.pathname === "/about" || location.pathname === "/"
              ? "#ffffff"
              : "#212121"
          }
        />
      </Footer>
    </>
  );
}
// End of MainPage component

export default MainPage;
