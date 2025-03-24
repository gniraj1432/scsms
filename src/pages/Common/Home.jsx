import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/styles/Home.css";
import BeforeAfterComparison from "../../components/beforeAfterComparison";

import clean1 from "../../assets/images/clean1.jpg";
import clean2 from "../../assets/images/clean2.jpg";
import clean3 from "../../assets/images/clean3.jpg";
import EC from "../../assets/images/Environmental_Cleanliness.svg";
import ZW from "../../assets/images/Environmental_Cleanliness_Zero_Waste.svg";

// import { Link } from "react-router-dom";
// import TrackComplaints from "../Auth/TrackComplaints";
// import ComplaintDetails from "../Auth/ComplaintDetails";
// import Footer from "../../components/Footer";

const images = [
  { src: clean1, alt: "Clean Street" },
  { src: clean2, alt: "Sanitation Workers" },
  { src: clean3, alt: "Public Hygiene" },
  { src: EC, alt: "Environment Cleanliness" },
  { src: ZW, alt: "Zero Waste" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Buttons Section */}
      <div className="auth-buttons">
        {/* Left Side Buttons */}
        <div className="left-buttons">
          <button className="track-complaints-btn" onClick={() => navigate("/track-complaints")}>
            Track Complaints
          </button>
          <button className="report-issue-btn" onClick={() => navigate("/report-issue")}>
            Report an Issue
          </button>
        </div>

        {/* Right Side Buttons */}
        <div className="right-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
          <button className="bmc-btn" onClick={() => navigate("/bmc-login")}>
            BMC Authority
          </button>
        </div>
      </div>
      <div className="heading">
        <h1>Welcome to Smart Cleanliness & Sanitation Management</h1>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000} // Reasonable delay (3s) for smooth transitions
        transitionTime={1000} // Smooth transition effect (1s)
        emulateTouch // Enable swipe gestures
        dynamicHeight // Adjusts height based on image size
        // stopOnHover // Pause autoplay when hovering over carousel
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Carousel>   

      {/* Before-After Image Comparison Component */}
      <BeforeAfterComparison />  

      {/* Call to Action */}
      <div className="call-to-action">
        <h2>Take Action Now!</h2>
        <p>Every report helps create a cleaner and healthier environment. Don't wait, start reporting today!</p>
        <button className="cta-button" onClick={() => navigate("/report-issue")}>Report an Issue</button>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What People Are Saying</h2>
        <div className="testimonial">
          <p>"This platform has transformed my locality. I reported an issue, and it was cleaned in just two days!"</p>
          <span>- Rahul, Mumbai</span>
        </div>
        <div className="testimonial">
          <p>"A much-needed initiative! Makes it easy to report and track sanitation issues."</p>
          <span>- Priya, Mumbai</span>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>How It Works</h2>
        <div className="faq">
          <h3>📸 Capture</h3>
          <p>Take a photo of the unclean area.</p>
        </div>
        <div className="faq">
          <h3>📍 Report</h3>
          <p>Submit the report along with location details.</p>
        </div>
        <div className="faq">
          <h3>✅ Get It Cleaned</h3>
          <p>BMC and local authorities take action and update the status.</p>
        </div>
      </div>
      
      {/* Footer Component */}
      {/* <Footer /> */}

    </div>
  );
};

export default Home;
