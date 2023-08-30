import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import HandDrawnWork from "./HandDrawnWork";
import PrintWork from "./PrintWork";
import HeaderContainer from "./HEADER/HeaderContainer";
import Home from "./Home";

function MainPage() {
  return (
    <Router>
      <HeaderContainer menuOpen={false} />
      <div className="main-component-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/hand-drawn-work" element={<HandDrawnWork />}></Route>
          <Route path="/print-work" element={<PrintWork />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default MainPage;
