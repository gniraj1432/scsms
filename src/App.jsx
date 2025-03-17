import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/styles/global.css"; // Ensure this file is included for styling

function App() {
    document.body.style.overflowX = "hidden"; // Hide horizontal scrolling

  return (
    <>
      <Navbar />
      <div className="content-wrapper"> {/* Added wrapper to prevent footer overlap */}
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
