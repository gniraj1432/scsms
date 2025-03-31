import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/styles/trackComplaints.css";
import BASE_URL from "../../config"; // Import API URL

const TrackComplaints = () => {
  const navigate = useNavigate();

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/complaints`);
        const data = await response.json();
        console.log("Fetched complaints data:", data); // Debug log
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="track-complaints-wrapper">
      <div className="track-complaints-container">
        <h1>Track Your Complaints</h1>
        <p>Monitor the status of your submitted complaints.</p>
        <div className="complaints-list">
          {complaints.length > 0 ? (
            complaints.map((complaint) => (
              <div key={complaint.id} className="complaint-card">
                <h3>{complaint.description}</h3>
                <p>Area: <strong>{complaint.area}</strong></p>
                <p>Status: <strong>{complaint.status}</strong></p>
                <Link to={`/complaint/${complaint.id}`} className="view-details">View Details</Link>
              </div>
            ))
          ) : (
            <p>No complaints found.</p>
          )}
        </div>
        <div className="dashboard-complaint-link">
            <h2>📢 Report an Issue</h2>
            <p>Submit a cleanliness issue to the authorities.</p>
            <button onClick={() => navigate("/report-issue")}>Report an Issue</button>
        </div>
      </div>
    </div>
  );
};

export default TrackComplaints;
