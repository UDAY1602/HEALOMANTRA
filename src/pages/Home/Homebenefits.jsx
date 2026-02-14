import React from "react";
import "./benefits.css";

import flexibility from "../../assets/home_assets/Flexibility.png";
import balance from "../../assets/home_assets/Balance.png";
import calm from "../../assets/home_assets/Calm.png";



const Homebenefits = () => {
    return (
    <section className="benefits-section">
      
      <h2 className="benefits-title">
        Your <span>Yoga Journey</span> Benefits
      </h2>

      <p className="benefits-subtitle">
        A gentle path toward inner peace, physical vitality, and mindful
        living guiding you to reconnect with yourself.
      </p>

      <div className="benefits-container">

        <div className="benefit-card">
          <img src={flexibility} alt="Flexibility" />
          
        </div>

        <div className="benefit-card">
          <img src={balance} alt="Balance" />
          
        </div>

        <div className="benefit-card">
          <img src={calm} alt="Calm" />
          
        </div>

      </div>

    </section>
  );

};

export default Homebenefits;
