import React from "react";
import Blog from "../HomePage/Blog";
import Header from "../HomePage/Header";
import LogoSection from "../HomePage/LogoSection";
function Homepage() {
  return (
    <div>
      <Header />
      <LogoSection />
      <Blog />
    </div>
  );
}

export default Homepage;
