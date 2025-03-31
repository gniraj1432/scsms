import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/dashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  
  return (
    
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      
      <div className="dashboard-sections">
        <Link to="/report-issue" className="dashboard-card">
          <h2>📢 Report an Issue</h2>
          <p>Submit a cleanliness issue to the authorities.</p>
        </Link>

        <Link to="/track-complaints" className="dashboard-card">
          <h2>📋 Track Complaints</h2>
          <p>Monitor the status of your submitted complaints.</p>
        </Link>

        <Link to="/nearby-updates" className="dashboard-card">
          <h2>🤖Smart Waste Collection Assistant</h2>
          <p>Smart Assistant for User  </p>
        </Link>

        <Link to="/feedback" className="dashboard-card">
          <h2>⭐ Feedback & Ratings</h2>
          <p>Give feedback and rate the cleanliness services.</p>
        </Link>

        <Link to="/settings" className="dashboard-card">
          <h2>⚙️ User Settings</h2>
          <p>Manage your profile and account settings.</p>
        </Link>

        <div className="dashboard-container">
          {/* <h1></h1> */}
          <div className="welcome-message">
            <p>
              <strong>"A Clean City is a Healthy City! 🌿✨"</strong>
            </p>
            <p>
              Let’s work together to keep our surroundings clean and green. Dispose of waste
              responsibly, report cleanliness issues, and contribute to a healthier environment. 
              Every small effort makes a big difference!
            </p>
          </div>

          <button onClick={() => navigate("/")} className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
