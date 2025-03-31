import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import BASE_URL from "../config"; // Import API URL

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/auth/session-user`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(!!data))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
