import React, { useState, useEffect } from "react";
import "../../assets/styles/BmcManageServices.css"; // Import CSS
import BASE_URL from "../../config"; // Import API URL

const BmcManageServices = () => {
  const [services, setServices] = useState([]);

  // Fetch services (Mock for now, replace with API call later)
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/services`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
  
    fetchServices();
  }, []);
  

  // Function to update service status
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${BASE_URL}/api/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
  
      if (response.ok) {
        setServices((prevServices) =>
          prevServices.map((service) =>
            service.id === id ? { ...service, status: newStatus } : service
          )
        );
      } else {
        console.error("Failed to update service status.");
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };
  
  return (
    <div className="bmc-manage-services-container">
      <h1>Manage Sanitation Services</h1>
      <div className="services-list">
        {services.length === 0 ? (
          <p>No services available.</p>
        ) : (
          services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>Status: <strong>{service.status}</strong></p>

              {/* Action Buttons */}
              <div className="status-buttons">
                <button 
                  className="active-btn" 
                  onClick={() => updateStatus(service.id, "Active")}
                >
                  ✅ Active
                </button>

                <button 
                  className="progress-btn" 
                  onClick={() => updateStatus(service.id, "In Progress")}
                >
                  ⏳ In Progress
                </button>

                <button 
                  className="completed-btn" 
                  onClick={() => updateStatus(service.id, "Completed")}
                >
                  ✔️ Completed
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BmcManageServices;
