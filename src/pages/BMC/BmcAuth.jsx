import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/BmcAuth.css";
import BASE_URL from "../../config"; // Import API URL

const BmcAuth = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: e.target[isSignup ? 2 : 0].value, // Adjust based on input fields
      password: e.target[isSignup ? 3 : 1].value,
      ...(isSignup && { fullName: e.target[0].value, bmcId: e.target[1].value })
    };

    const url = isSignup
      ? `${BASE_URL}/api/bmc/signup`
       : `${BASE_URL}/api/bmc/login`;
      //: "http://localhost:3000/track-complaints";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        localStorage.setItem("token", data.token); // Store token (if JWT is used)
        navigate("/bmc-dashboard"); // Redirect after successful login
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bmc-auth-wrapper"> {/* Wrapper for Background */}
      <div className="bmc-auth-container">
        <h2>{isSignup ? "BMC Authority Signup" : "BMC Authority Login"}</h2>

        <form className="bmc-auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Unique BMC ID" required />
            </>
          )}
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>

        <p onClick={handleToggle} className="toggle-link">
          {isSignup ? "Already have an account? Login" : "New? Sign up here"}
        </p>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BmcAuth;
