import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import AboutMe from "./components/Aboutme";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
    <nav>
      <div className="navbar">
        <Link to="/" className="links">HOME</Link>
        <Link to="/about" className="links">ABOUT ME</Link>
        <Link to="/projects" className="links">PROJECTS</Link>
      </div>
    </nav>

    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    </Router>

  )
};

export default App
