import { useState, useEffect } from "react";
import "./testimonial.css";
// import { reviews } from "./data/data.js";

function Testimonial() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    fetchReviews(); // Fetch reviews on component mount

    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviews.length - 2));
        setIsSliding(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:8080/reviews"); // Backend API
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  return (
    <div className="container">
      <div className={`innerContainer ${isSliding ? "slide" : ""}`}>
        {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
          <div className="card" key={review.id}>
            <h1 className="name">{review.patient_name}</h1>
            <h2 className="designation">{review.designation}</h2>
            <p className="review">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;