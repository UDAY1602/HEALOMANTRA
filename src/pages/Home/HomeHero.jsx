import React from "react";
import "./homehero.css";
import GlassCard from "./GlassCard";
import yoga1 from "../../assets/home_assets/yoga1.png";
import yoga2 from "../../assets/home_assets/yoga2.png";
import mentalityTag from "../../assets/home_assets/Mentality.png";
import communityTag from "../../assets/home_assets/Comunity.png";

const HomeHero = () => {
  return (
    <section className="explore-section">

      {/* LEFT SIDE */}
      <div className="explore-left">

        <div className="hero-text">
          <div className="heading-bg">
            <h1>
              <span className="bold">Mindfullness</span><br />
              <span className="highlight">More Calm</span><br />
              <span className="bold2">Meaningful</span>
            </h1>
          </div>

          <p>
            We offer a serene and welcoming <br />
            space that encourages relaxation, <br />
            self-discovery, and a deeper <br />
            connection with yourself.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Join us</button>
            <button className="secondary-btn">Explore</button>
          </div>
        </div>

        <div className="hero-image">
          <img className="hero-main-img" src={yoga1} alt="Yoga" />

          {/* LEFT GLASS */}
          <div className="glass-overlay">
            <GlassCard width="200px" height="150px">
              <p>
                People Improve <br />
                their mentality <br />
                here
              </p>
            </GlassCard>
          </div>

          <img className="mentality-tag" src={mentalityTag} alt="Mentality" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="explore-right">

        <h2>Explore Our<br />Offerings</h2>

        <p className="right-sub">
          Whether you're beginner or <br />
          experienced, our community is here to <br />
          support you
        </p>

        <div className="offer-card">
          <img src={yoga2} alt="Community" />

          {/* RIGHT GLASS (Using Same Component) */}
          <div id="right-glass">
            <GlassCard width="160px" height="100px">
              <p>
                Join our Community <br />
                now and start with <br />
                us
              </p>
            </GlassCard>
          </div>
        </div>

        <img className="community-tag" src={communityTag} alt="Community" />
      </div>

    </section>
  );
};

export default HomeHero;
