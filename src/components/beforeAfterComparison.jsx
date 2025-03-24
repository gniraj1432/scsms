import React from "react";
import ReactCompareImage from "react-compare-image";
import "../assets/styles/BeforeAfterComparison.css"; // Import the CSS

// Image URLs for Before-After Comparison  
import beforeImage from "../assets/images/Before.png"; // Before image  
import afterImage from "../assets/images/After.png"; // After image 

const BeforeAfterComparison = () => {
  return (
    <div className="before-after-container">
      <h2 className="before-after-heading">See How Your Actions Make the City Cleaner!</h2>
      <ReactCompareImage leftImage={beforeImage} rightImage={afterImage} />
    </div>
  );
};

export default BeforeAfterComparison;
