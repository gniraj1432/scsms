import React, { useState, useEffect } from "react";
import axios from "axios"; // For API calls
import "../../assets/styles/settings.css";

const Settings = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
    darkMode: false,
    notifications: true,
  });

  useEffect(() => {
    // Fetch user settings from the backend
    const fetchUserSettings = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/api/user/settings");
        const response = await axios.get("http://localhost:5000/api/user/settings");
        setUser(response.data); // Populate state with fetched data
      } catch (error) {
        console.error("Error fetching user settings:", error);
      }
    };
    fetchUserSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, profilePicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password && user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("darkMode", user.darkMode);
      formData.append("notifications", user.notifications);
      if (user.profilePicture) {
        formData.append("profilePicture", user.profilePicture);
      }

      // await axios.put("http://localhost:5000/api/user/settings", formData);
      await axios.put("http://localhost:8082/api/user/settings", formData);
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update settings.");
    }
  };

  return (
    <div className={`settings-container ${user.darkMode ? "dark-mode" : ""}`}>
      <h2>⚙️ User Settings</h2>
      <p>Manage your profile and account settings.</p>

      <form onSubmit={handleSubmit}>
        {/* Profile Picture Upload */}
        <label>Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {user.profilePicture && (
          <img
            src={user.profilePicture instanceof File ? URL.createObjectURL(user.profilePicture) : user.profilePicture}
            alt="Profile"
            className="profile-preview"
          />
        )}

        {/* Name */}
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />

        {/* Email */}
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />

        {/* Change Password */}
        <label>New Password:</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} />

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />

        {/* Notification Preferences */}
        <label>
          <input type="checkbox" name="notifications" checked={user.notifications} onChange={handleChange} />
          Enable Notifications
        </label>

        {/* Dark Mode Toggle */}
        <label>
          <input type="checkbox" name="darkMode" checked={user.darkMode} onChange={handleChange} />
          Enable Dark Mode
        </label>

        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
};

export default Settings;
