import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
