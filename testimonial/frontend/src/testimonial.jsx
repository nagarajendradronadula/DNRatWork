import { useState, useEffect } from "react";
import "./testimonial.css";
import { reviews } from "./data/data.js";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % (reviews.length - 2)
        );
        setIsSliding(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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