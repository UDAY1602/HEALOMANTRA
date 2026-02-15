import React from "react";
import "./CustomerReview.css";

const CustomerReview = () => {
  return (
    <section className="sec2">
      <div className="sec2-container">

      
        <h2 className="sec2-title">
          What Our <br />
          <span>Customers say</span>
        </h2>

        <p className="sec2-subtext">
          Don’t just take our word for it. Here’s what real
          customers say about their experience
        </p>

        
        <div className="reviews">
          <div className="review-card">
            <div className="stars">★★★★★☆</div>
            <p className="review-text">
              Joining HealOMantra has been lifechanging.
              My flexibility and focus have improved, and I feel
              more energetic every day.
            </p>
            <h4 className="review-name">K. Ramesh</h4>
          </div>

          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">
              The prenatal sessions helped me stay active and calm
              throughout my pregnancy. Highly recommend!
            </p>
            <h4 className="review-name">S. Priya</h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
