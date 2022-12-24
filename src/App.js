import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const API_KEY = "8a75ac0b051c4f28ae0db38ef9d14b78";
  const API_URL = "https://api.spoonacular.com/food/menuItems/search";

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
