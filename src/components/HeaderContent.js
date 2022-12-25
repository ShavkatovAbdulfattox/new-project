import React from "react";
import "./Header.scss";
import slideImg from "../images/headerSlide.jpg";

const HeaderContent = () => {
  return (
    <>
      <div className="header-content">
        <span>
          <h3>#Gericht</h3>
          <h3>#Bar</h3>
        </span>
        <div className=""></div>

        <div className="header-content__item">
          <div className="header-content__item-desc">
            <h3>
              Chase the new Flavour <span></span>
            </h3>
            <h1>The key to Fine dining</h1>
            <p>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>
            <button>Explore Menu</button>
          </div>
        </div>
        <div className="header-content__image">
          <div>
            <img src={slideImg} alt="headerSlide" />
          </div>
        </div>

        <span>Scroll</span>
      </div>
    </>
  );
};
export default HeaderContent;
