import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import "../../assets/styles/ReportIssue.css";

const ReportIssue = () => {
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [file, setFile] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);

  // Handle File Upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Capture Image from Webcam
  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  };

  // Get User's Current Location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("area", area);
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);
    formData.append("status", "Pending");
    if (file) {
      formData.append("photo", file);
    } else if (capturedImage) {
      const blob = await fetch(capturedImage).then((res) => res.blob());
      formData.append("photo", blob);
    }

    try {
      const response = await fetch("http://localhost:8082/api/complaints", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Issue reported successfully!");
        setDescription("");
        setArea("");
        setFile(null);
        setCapturedImage(null);
        setLocation({ latitude: "", longitude: "" });
      } else {
        alert("Failed to report the issue.");
      }
    } catch (error) {
      alert("Error reporting issue: " + error.message);
    }
  };

  return (
    <div className="report-wrapper">
      <div className="report-container">
        <h2>Report an Issue</h2>
        <form onSubmit={handleSubmit}>
          
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Describe the issue..."
          />

          <label>Area:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
            placeholder="Enter the location..."
          />

          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} />

          <label>Take a Photo:</label>
          <button type="button" className="camera-btn" onClick={() => setShowCamera(true)}>
            Open Camera
          </button>

          {showCamera && (
            <div>
              <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="webcam-preview" />
              <button type="button" className="camera-btn" onClick={capturePhoto}>Capture Photo</button>
              <button type="button" className="close-camera-btn" onClick={() => setShowCamera(false)}>
                Close Camera
              </button>
            </div>
          )}

          {capturedImage && <img src={capturedImage} alt="Captured Preview" className="preview-image" />}

          <button type="button" className="location-btn" onClick={getLocation}>Send Current Location</button>

          {location.latitude && location.longitude && (
            <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
          )}

          <button type="submit" className="submit-btn">Submit Report</button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
