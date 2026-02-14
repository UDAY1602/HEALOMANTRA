import React from "react";
import "./homeservices.css";
import yogaImage from "../../assets/home_assets/Homeservices/yoga_1.png"; 

const Homeservices = () => {
  return (
    <section className="home-services">
      <h2 className="services-title">What do we Offer?</h2>

      <div className="services-container">
        
      
        <div className="services-column left">
          <div className="service-pill">Hatha Yoga</div>
          <div className="service-pill">Prenatal Yoga</div>
          <div className="service-pill">Power Yoga</div>
          <div className="service-pill">Meditation & breathing</div>
        </div>

     
        <div className="services-image">
          <img src={yogaImage} alt="Yoga Pose" />
        </div>

  
        <div className="services-column right">
          <div className="service-pill">Aerial Yoga</div>
          <div className="service-pill">Iyengar Yoga</div>
          <div className="service-pill">Vinyasa Yoga</div>
          <div className="service-pill">Stress management</div>
        </div>

      </div>
    </section>
  );
};

export default Homeservices;
