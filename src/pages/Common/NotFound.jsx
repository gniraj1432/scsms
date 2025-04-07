import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/NotFound.css"; // Import CSS file

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">	
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
          
            <div className="contant_box_404">
            <h3 className="h2">
            Look like you're lost
            </h3>
          
            <p>the page you are looking for not avaible!</p>
          
            <button className="home-btn" onClick={() => navigate("/")}>
              Go To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NotFound;