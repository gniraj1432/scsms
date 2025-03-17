import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Common/Home";
import About from "../pages/Common/About";
import Contact from "../pages/Common/Contact";
import NotFound from "../pages/Common/NotFound";
import Login from "../pages/Auth/login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword"; // Import Forgot Password Page
import UserDashboard from "../pages/Auth/UserDashboard";
import ReportIssue from "../pages/Auth/ReportIssue"; // Import User Dashboard
import TrackComplaints from "../pages/Auth/TrackComplaints";
import ComplaintDetails from "../pages/Auth/ComplaintDetails";
import Feedback from "../pages/Auth/Feedback";
import Settings from "../pages/Auth/Settings";
import BmcAuth from "../pages/BMC/BmcAuth";
import BmcDashboard from "../pages/BMC/BmcDashboard";
import BmcTrackComplaints from "../pages/BMC/BmcManageComplaints";
import BmcReports from "../pages/BMC/BmcReports";
import BmcManageServices from "../pages/BMC/BmcManageServices";
import ProtectedRoute from "./ProtectedRoute"; // ✅ Import ProtectedRoute


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element={<UserDashboard />} /> {/* Add Dashboard */}
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/track-complaints" element={<TrackComplaints />} />
      <Route path="/complaint/:id" element={<ComplaintDetails />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Added Forgot Password Route */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />


      {/* ----------BMC------------- */}
      <Route path="/bmc-login" element={<BmcAuth />} />
      <Route path="/bmc-dashboard" element={<BmcDashboard />} />
      <Route path="/manage-complaints" element={<BmcTrackComplaints />} /> 
      <Route path="/manage-services" element={<BmcManageServices />} />
      <Route path="/reports" element={<BmcReports />} />

      {/* Protected Routes */}
      <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
      <Route path="/report-issue" element={<ProtectedRoute><ReportIssue /></ProtectedRoute>} />

     
    </Routes>
  );
}

export default AppRoutes;
