import React from "react";

const Homewhy = () => {
  return (
    <section className="why-wrapper">
      <div className="why-section">
        <h2 className="why-title">
          Why <span>Heal O Mantra</span>
        </h2>

        <div className="why-container">

          <div className="why-card">
            <div className="why-icon">
              {/* Add your PNG here later */}
              <div className="icon-placeholder"></div>
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
              <div className="icon-placeholder"></div>
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
              <div className="icon-placeholder"></div>
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
