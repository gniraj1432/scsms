import React, { useState } from "react";
import "../../assets/styles/feedback.css";
import BASE_URL from "../../config"; // Import API URL

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const feedbackData = { rating, feedback };
  
    try {
      const response = await fetch(`${BASE_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }
  
      alert("Thank you for your feedback!");
      setRating(0);
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback. Please try again.");
    }
  };
  

  return (
    <div className="feedback-container">
      <h2>⭐ Feedback & Ratings</h2>
      <p>We value your feedback! Please rate our cleanliness services.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <label>Rate Us:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star selected" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
