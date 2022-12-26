import React from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Menu />
      <Review />
    </div>
  );
}

export default App;
