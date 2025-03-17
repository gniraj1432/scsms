import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/BmcDashboard.css";

const BmcDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bmc-dashboard-container">
      <h1>Welcome to BMC Dashboard</h1>
      <p>Manage complaints, sanitation services, and track reports here.</p>
      
      <div className="bmc-actions">
        <button onClick={() => navigate("/track-complaints")} className="dashboard-btn">Track Complaints</button>
        <button onClick={() => navigate("/manage-services")} className="dashboard-btn">Manage Service</button>

        <button onClick={() => navigate("/reports")} className="dashboard-btn">View Reports</button>
      </div>
      
      <button onClick={() => navigate("/")} className="logout-btn">Logout</button>
    </div>
  );
};

export default BmcDashboard;
