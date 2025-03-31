import React, { useState, useEffect } from "react";
import "../../assets/styles/BmcManageComplaints.css"; 
import BASE_URL from "../../config"; // Import API URL

const BmcManageComplaints = () => {  
  const [complaints, setComplaints] = useState([]);

  // Load complaints from localStorage when the component mounts
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/complaints`);
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
  
    fetchComplaints();
  }, []);
  

  // Update complaint status and save back to localStorage
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${BASE_URL}/api/complaints/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
  
      if (response.ok) {
        setComplaints((prevComplaints) =>
          prevComplaints.map((complaint) =>
            complaint.id === id ? { ...complaint, status: newStatus } : complaint
          )
        );
      } else {
        console.error("Failed to update complaint status.");
      }
    } catch (error) {
      console.error("Error updating complaint status:", error);
    }
  };
  

  return (
    <div className="bmc-manage-complaints-container">
      <h1>BMC - Manage Complaints</h1>
      <div className="complaints-list">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <div key={complaint.id} className="complaint-card">
              <h3>{complaint.issue}</h3>


              <p>Latitude: {complaint.latitude}</p>
              <p>Longitude: {complaint.longitude}</p>
              <p>Status: <strong>{complaint.status}</strong></p>
              {complaint.photoPath && <img src={`${BASE_URL}/${complaint.photoPath}`} alt="Complaint-Photo" />}              

              {/* <p>Status: <strong>{complaint.status}</strong></p> */}

              {/* Option to Update Status */}
              <div className="status-buttons">
                <button className="resolved-btn" onClick={() => updateStatus(complaint.id, "Resolved")}>
                  ✅ Resolved
                </button>
                <button className="in-progress-btn" onClick={() => updateStatus(complaint.id, "In Progress")}>
                  ⏳ In Progress
                </button>
                <button className="pending-btn" onClick={() => updateStatus(complaint.id, "Pending")}>
                  ❌ Pending
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No complaints found.</p>
        )}
      </div>
    </div>
  );
};

export default BmcManageComplaints;
