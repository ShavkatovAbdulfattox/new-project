import React from "react";
import aboutKnife from "../../images/about_knife.png";
import "./About.scss";

const About = () => {
  return (
    <section className="section section-about">
      <div className="wrapper">
        <div className="about">
          <div className="about-left">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <div className="about__btn">
              <button>Know More</button>
            </div>
          </div>
          <div className="about-img">
            <img src={aboutKnife} alt="" />
          </div>
          <div className="about-right">
            <h3>Our History</h3>
            <p>
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <button>Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
