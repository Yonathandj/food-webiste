import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <About />
    </div>
  );
}

export default App;
