import React, { useState, useEffect } from "react";
import "../../assets/styles/BmcReports.css";
import BASE_URL from "../../config"; // Import API URL

const BmcReports = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/reports`);
        const data = await response.json();
        setReport(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReport();
  }, []);

  if (!report) {
    return <p>Loading reports...</p>;
  }

  return (
    <div className="bmc-reports-container">
      <h1>BMC Reports</h1>

      <div className="report-summary">
        <h3>Complaint Summary</h3>
        <p>Total Complaints: {report.totalComplaints}</p>
        <p>Resolved: {report.resolved} ✅</p>
        <p>In Progress: {report.inProgress} ⏳</p>
        <p>Pending: {report.pending} ❌</p>
      </div>

      <div className="area-summary">
        <h3>Cleanliness Report</h3>
        <p>Total Areas: {report.totalAreas}</p>
        <p>Cleaned Areas: {report.cleanedAreas} 🏡</p>
        <p>Uncleaned Areas: {report.uncleanedAreas} ⚠️</p>
      </div>

      <div className="feedback-section">
        <h3>User Feedback</h3>
        <p>Average Rating: {report.averageRating} ⭐</p>
        <p>Complaints with Feedback: {report.complaintsWithFeedback}%</p>
      </div>
    </div>
  );
};

export default BmcReports;
