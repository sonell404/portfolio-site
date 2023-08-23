import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import HandDrawnWork from "./components/HandDrawnWork";
import PrintWork from "./components/PrintWork";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/hand-drawn" element={<HandDrawnWork />}></Route>
          <Route path="/print" element={<PrintWork />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
