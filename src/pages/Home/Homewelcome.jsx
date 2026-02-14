import React from "react";
import "./Homewelcome.css";
import heroImage from "../../assets/home_assets/meditating_person.png";

const Homewelcome = () => {
  return (
    <section className="homewelcome">
      <div className="homewelcome-container">

        <div className="homewelcome-left poppins-semibold">
          <h1 className="homewelcome-title">
            <span className="black-text">Welcome to</span>
            <br />
            <span className="highlight-text">Heal O Mantra</span>
          </h1>

          <p className="homewelcome-description poppins-regular">
            HealOMantra is a wellness space dedicated to mindful yoga and holistic healing.
            We help you reconnect with your body, calm your mind, and restore inner balance
            through guided practices rooted in awareness and well-being.
          </p>

          <button className="homewelcome-btn poppins-semibold">Join us</button>
        </div>

        <div className="homewelcome-right">
          <img src={heroImage} alt="Meditating Person" />
        </div>

      </div>
    </section>
  );
};

export default Homewelcome;
