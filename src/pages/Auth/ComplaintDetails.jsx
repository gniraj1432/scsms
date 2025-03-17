import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/styles/complaintDetails.css";

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  const [showDropdown, setShowDropdown] = useState(false); // State to toggle the dropdown visibility
  const [selectedStatus, setSelectedStatus] = useState(""); // State to hold the selected status

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch(`http://localhost:8082/api/complaints/${id}`);
        if (!response.ok) {
          throw new Error("Complaint not found");
        }
        const complaintData = await response.json();
        setComplaint(complaintData);

        setSelectedStatus(complaintData.status); // Set the default status when the complaint is fetched

      } catch (error) {
        console.error("Error fetching complaint:", error);
        setComplaint(null);
      }
    };
  
    fetchComplaint();
  }, [id]);
  
  // Function to handle status change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Function to handle status update
  const handleStatusUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8082/api/complaints/${complaint.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: selectedStatus }),
      });

      if (response.ok) {
        alert("Status updated successfully!");
        setComplaint((prevComplaint) => ({
          ...prevComplaint,
          status: selectedStatus, // Update the status locally after successful update
        }));
        setShowDropdown(false); // Close the dropdown after update
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error occurred while updating status.");
    }
  };

  if (!complaint) return <p>Loading complaint details...</p>;

  return (
    <div className="complaint-details-wrapper">
      <div className="complaint-details-container">
        <h2>Complaint Details</h2>
        <table className="complaint-table">
          <tbody>
            <tr>
              <td><strong>Area</strong></td>
              <td>{complaint.area}</td>
            </tr>
            <tr>
              <td><strong>Status</strong></td>
              <td>
                {complaint.status}
                {/* Button to toggle dropdown */}
                <button onClick={toggleDropdown} className="status-update-btn">
                  Update Status
                </button>

                {/* Dropdown menu to select the status */}
                {showDropdown && (
                  <div className="status-dropdown">
                    <select 
                      value={selectedStatus} 
                      onChange={handleStatusChange} 
                      className="status-select"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                    <button 
                      onClick={handleStatusUpdate} 
                      className="status-submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                )}
                </td>
            </tr>
            <tr>
              <td><strong>Description</strong></td>
              <td>{complaint.description}</td>
            </tr>
            <tr>
              <td><strong>latitude & Longitude</strong></td>
              <td>{complaint.latitude}, {complaint.longitude}</td>
            </tr>
            <tr>
              <td><strong>Image</strong></td>
              <td>{complaint.photoPath && (
                <img 
                  src={`http://localhost:8082/${complaint.photoPath}`} 
                  alt="Complaint-Photo" 
                  style={{ width: "100px", height: "100px", objectFit: "cover" }} 
                />
              )}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/track-complaints" className="back-btn">Back to Complaints</Link>
      </div>
    </div>
  );
};

export default ComplaintDetails;








