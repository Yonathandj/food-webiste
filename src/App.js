import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  const API_KEY = "8a75ac0b051c4f28ae0db38ef9d14b78";
  const API_URL = "http://api.spoonacular.com/food/menuItems/search?";

  return (
    <div>
      <div className="header">
        <Navbar />
        <Hero />
      </div>
      <About API_KEY={API_KEY} API_URL={API_URL} />
      <Menu API_KEY={API_KEY} API_URL={API_URL} />
    </div>
  );
}

export default App;
