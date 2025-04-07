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
        const response = await fetch(`${BASE_URL}/api/complaints`, {
          method: "GET",
          credentials: "include", // send session cookie
          headers: {
            "Content-Type": "application/json"
          }
        });
  
        if (!response.ok) {
          throw new Error("Unauthorized or session expired");
        }
  
        const data = await response.json();
        console.log("Fetched complaints data:", data);
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
  
    const checkSession = async () => {
      try {
    //     const res = await fetch(`${BASE_URL}/api/auth/session-user`, {
    //       credentials: 'include',
    //     });
  
    //     if (res.ok) {
    //       const user = await res.json();
    //       console.log("Session user found:", user);
    //       fetchComplaints(); // call only when user is logged in
    //     } else {
    //       console.log("No session, redirecting to login.");
    //       navigate("/login");
    //     }
    //   } catch (err) {
    //     console.error("Session check failed:", err);
    //     navigate("/login");
    //   }
    // };
        const resUser = await fetch(`${BASE_URL}/api/auth/session-user`, {
          method: "GET",
          credentials: 'include',
        });
        
        const resBmc = await fetch(`${BASE_URL}/api/bmc/session-bmc`, {
          method: "GET",
          credentials: 'include',
        });
        
        if (resUser.ok) {
          const user = await resUser.json();
          console.log("Session user found:", user);
          fetchComplaints();
        } else if (resBmc.ok) {
          const bmcUser = await resBmc.json();
          console.log("Session BMC user found:", bmcUser);
          fetchComplaints();
        } else {
          console.log("No session, redirecting to login.");
          navigate("/login");
        }        
      } catch (err) {
        console.error("Session check failed:", err);
        navigate("/login");
      }
    };
  
    checkSession();
  }, [navigate]);

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
