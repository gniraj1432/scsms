import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/styles/complaintDetails.css";
import BASE_URL from "../../config"; // Import API URL

const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  const [showDropdown, setShowDropdown] = useState(false); // State to toggle the dropdown visibility
  const [selectedStatus, setSelectedStatus] = useState(""); // State to hold the selected status

  // Get session user from sessionStorage
  const sessionUser = JSON.parse(localStorage.getItem("bmc_user"));
  const isBmc = !!sessionUser; // true if logged in and Only BMC can update

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/complaints/${id}`, {
          method: "GET",
          credentials: "include", // Added for session-based authentication
        });
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
      const response = await fetch(`${BASE_URL}/api/complaints/${complaint.id}`, {
        method: "PUT",
        credentials: "include", 
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

                {/* Show Update button only if BMC is logged in */}
                {isBmc && (
                  <>
                    <button onClick={toggleDropdown} className="status-update-btn">
                      Update Status
                    </button>

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
                  </>
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
              {/* <td>{complaint.photoPath && (
                <img 
                  src={`${BASE_URL}/${complaint.photoPath}`} 
                  alt="Complaint-Photo" 
                  style={{ width: "100px", height: "100px", objectFit: "cover" }} 
                />
              )}</td> */}
              <td>
                {complaint.photoPath ? (
                  <img 
                    src={`${BASE_URL}/${complaint.photoPath}`} 
                    alt="Complaint Photos" 
                    style={{ width: "100px", height: "100px", objectFit: "cover" }} 
                  />
                ) : complaint.photoUrl ? (
                  <img 
                    src={complaint.photoUrl} 
                    alt="Complaint Photos" 
                    style={{ width: "100px", height: "100px", objectFit: "cover" }} 
                  />
                ) : (
                  "No Photo Available"
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/track-complaints" className="back-btn">Back to Complaints</Link>
      </div>
    </div>
  );
};

export default ComplaintDetails;








