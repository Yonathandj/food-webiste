import React from "react";

import About from "./components/About";
import FeedbackUser from "./components/FeedbackUser";
import Footer from "./components/Footer";
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
      <FeedbackUser />
      <Footer />
    </div>
  );
}

export default App;
