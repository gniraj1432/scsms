import { useState, useEffect } from 'react';
import "../../assets/styles/Modal.css"; // CSS from below

const InfoModal = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 60000); // Auto-close in 20s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShow(false)}>×</button>
        <h2>Hi Folks!</h2>
        <p>Hi there! Hope you're doing well.</p>
        <p>
          Frontend (React + Vite) is live on Vercel and running smoothly.<br />
          Backend APIs work well on localhost and Heroku (except image uploads).<br />
          AWS EC2 integration is in progress and will be fixed soon.
        </p>
        <p>
          You're welcome to explore, fork, or clone the project:<br />
          <a href="https://github.com/gniraj1432/scsms" target="_blank" rel="noreferrer">Frontend Repo</a> | 
          <a href="https://github.com/gniraj1432/scsms-backend" target="_blank" rel="noreferrer"> Backend Repo</a>
        </p>
        <p>Check README for setup instructions.<br />Feedback is always welcome 😊</p>
        <p><strong>I hope you enjoy exploring and using this project — Happy Coding!</strong></p>
        <button className="bottom-close-btn" onClick={() => setShow(false)}>Close</button>
      </div>
    </div>
  );
};

export default InfoModal;
