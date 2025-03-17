import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Smart Cleanliness & Sanitation Management System (SCSMS)</h2>
      <p className="lead text-center">
        SCSMS is a web-based application designed to enhance urban cleanliness by enabling citizens to report unclean areas with images and location data.
      </p>

      <div className="row my-5">
        {/* Purpose Section */}
        <div className="col-md-6">
          <h4>🌍 Purpose</h4>
          <p>
            The platform allows users to submit sanitation reports by capturing images and providing location details.
            Municipal authorities (BMC) receive these reports in real-time and take necessary actions to maintain cleanliness.
          </p>
        </div>

        {/* Features Section */}
        <div className="col-md-6">
          <h4>🚀 Key Features</h4>
          <ul>
            <li>📷 <strong>Photo Upload:</strong> Capture or upload images of unclean areas.</li>
            <li>📍 <strong>Automatic Location Tracking:</strong> Uses IP-based geolocation for precise reporting.</li>
            <li>📊 <strong>Real-Time Status Updates:</strong> Track report progress from submission to resolution.</li>
            <li>👥 <strong>Dedicated Portals:</strong> Separate portals for users, administrators, and BMC staff.</li>
          </ul>
        </div>
      </div>

      <div className="row my-5">
        {/* How it Works Section */}
        <div className="col-md-6">
          <h4>🛠 How It Works</h4>
          <ol>
            <li><strong>Sign Up & Login:</strong> Users create an account to access the system.</li>
            <li><strong>Submit a Report:</strong> Upload a photo and add optional details.</li>
            <li><strong>BMC Action:</strong> Authorities review and take necessary action.</li>
            <li><strong>Proof Submission:</strong> Cleaned areas are updated with proof images.</li>
          </ol>
        </div>

        {/* Benefits Section */}
        <div className="col-md-6">
          <h4>💡 Why Use SCSMS?</h4>
          <p>
            SCSMS helps ensure cleaner surroundings by promoting community engagement and transparency in sanitation management.
            The platform empowers users to contribute to a healthier environment with real-time updates and efficient problem resolution.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-4">
        <h4>Join Us in Keeping Our Cities Clean!</h4>
        <p className="lead">Take action today by reporting sanitation issues in your area.</p>
        <button onClick={() => navigate("/report-issue")}>Report an Issue</button>
      </div>
    </div>
  );
};

export default About;
