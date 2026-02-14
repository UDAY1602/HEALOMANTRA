import React from "react";
import "./Homewhy.css";

import ideaIcon from "../../assets/home_assets/ideahandicon.png";
import flowerIcon from "../../assets/home_assets/handflowericon.png";
import meditateIcon from "../../assets/home_assets/meditatingicon.png";

const Homewhy = () => {
  return (
    <section className="why-wrapper">
      <div className="why-section">
        <h2 className="why-title poppins-semibold">
          Why <span>Heal O Mantra</span>
        </h2>

        <div className="why-container poppins-regular">

          <div className="why-card ">
            <div className="why-icon">
              <img src={ideaIcon} alt="Holistic Approach" />
            </div>
            <h3>Holistic Approach</h3>
            <p>
              At Heal O Mantra, we go beyond physical postures by integrating
              movement, breath, and mindfulness to support overall well-being
              and inner harmony.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={flowerIcon} alt="Expert Guidance" />
            </div>
            <h3>Expert Guidance</h3>
            <p>
              Our experienced instructors provide thoughtful, personalized
              guidance, ensuring each practice is safe, purposeful, and aligned
              with your individual journey.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={meditateIcon} alt="Peaceful Environment" />
            </div>
            <h3>Peaceful Environment</h3>
            <p>
              We offer a serene and welcoming space that encourages relaxation,
              self-discovery, and a deeper connection with yourself.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Homewhy;
