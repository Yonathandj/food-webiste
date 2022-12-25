import React from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Menu />
    </div>
  );
}

export default App;
