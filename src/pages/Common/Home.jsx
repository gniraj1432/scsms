import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/styles/Home.css";
import BeforeAfterComparison from "../../components/beforeAfterComparison";
import Marquee from "react-fast-marquee";
import InfoModal from "../Common/Modal"; // Modal Component

import clean1 from "../../assets/images/clean1.png";
import clean2 from "../../assets/images/clean2.png";
import clean3 from "../../assets/images/clean3.png";
import clean4 from "../../assets/images/clean4.png";
import clean5 from "../../assets/images/clean5.png";
import clean6 from "../../assets/images/clean6.png";
import EC from "../../assets/images/Environmental_Cleanliness.gif";
import ZW from "../../assets/images/Environmental_Cleanliness_Zero_Waste.png";

// import { Link } from "react-router-dom";
// import TrackComplaints from "../Auth/TrackComplaints";
// import ComplaintDetails from "../Auth/ComplaintDetails";
// import Footer from "../../components/Footer";

const images = [
  { src: clean1, alt: "Dirty Street" },
  { src: clean2, alt: "Workers Cleaning" },
  { src: clean3, alt: "Public Awareness" },
  { src: clean4, alt: "Clean Street" },
  { src: clean5, alt: "Community Cleanup" },
  { src: clean6, alt: "Green Space" },
  { src: EC, alt: "Environment Cleanliness" },
  { src: ZW, alt: "Zero Waste" },
];

const Home = () => {
  const navigate = useNavigate();

  const isUserLoggedIn = () => {
    const user = localStorage.getItem("user");
    return user !== null;
  };

  const handleTrackComplaints = () => {
    if (isUserLoggedIn()) {
      navigate("/track-complaints");
    } else {
      alert("Please login to see track complaints.");
      navigate("/login");
    }
  };

  const handleReportIssue = () => {
    if (isUserLoggedIn()) {
      navigate("/report-issue");
    } else {
      alert("Please login to report an issue.");
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      {/* Show Modal */}
      <InfoModal />

      {/* Marquee */}
      <div className="marquee-container">
        <Marquee gradient={false} speed={50}>
          <span className="marquee-text">
            Report cleanliness issues & make an impact! Your city needs you!
          </span>
        </Marquee>
      </div>

      {/* Buttons Section */}
      <div className="auth-buttons">
        {/* Left Side Buttons */}
        <div className="left-buttons">
          <button className="track-complaints-btn" onClick={handleTrackComplaints}>
            Track Complaints
          </button>
          <button className="report-issue-btn" onClick={handleReportIssue}>
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
        useKeyboardArrows // Allows navigation with arrow keys
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
