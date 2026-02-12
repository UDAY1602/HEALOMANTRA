import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="about-sec1">
      <h1 className="about-title">
        About <span>Heal O Mantra</span>
      </h1>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        
        <div className="timeline-item">
          <div className="timeline-content left">
            <h3>
              What is <span className="highlight">HealOMantra</span> <br />
              and how it is started
            </h3>
            <p>
              <span className="highlight">HealOMantra</span> is a wellness brand dedicated to bringing the
              benefits of yoga, meditation, and holistic health to people of
              all ages. It started with the vision of making authentic yoga
              accessible to communities, combining traditional techniques with
              modern health science. Beginning with small local classes, we
              have grown into a platform offering regular sessions, workshops,
              and corporate wellness programs.
            </p>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-image right"></div>
        </div>

      
        <div className="timeline-item">
          <div className="timeline-image left"></div>

          <div className="timeline-dot"></div>

          <div className="timeline-content right">
            <h3>Journey so far and overall vision</h3>
            <p>
              From our first few students to now conducting 100+ sessions per
              month,<span className="highlight">HealOMantra</span> has expanded its presence through
              collaborations with leading brands like Decathlon and various
              residential communities. Our vision is to become a global
              wellness platform where yoga and holistic living are part of
              everyone’s lifestyle.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content left">
            <h3>Number of members trained till now</h3>
            <p>
              Over 2,500+ participants have attended our yoga classes,
              wellness workshops, and corporate programs including beginners,
              seniors, kids, and expecting mothers.
            </p>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-image right"></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
