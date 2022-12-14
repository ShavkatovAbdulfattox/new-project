import React, { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [open, isOpen] = useState(false);

  const handleToggle = () => {
    isOpen(!open);
  };
  console.log(open);
  return (
    <div className="navBar">
      <nav className="nav">
        <div className="nav_title">Gerícht</div>
        
        <ul className={`nav-item ${open ? "open" : "close"}`}>
          <li>
            <a href="#!" className="nav-item__link">
              Home
            </a>
          </li>
          <li>
            <a href="#!" className="nav-item__link">
              Pages
            </a>
          </li>
          <li>
            <a href="#!" className="nav-item__link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#!" className="nav-item__link">
              Blog
            </a>
          </li>
          <li>
            <a href="#!" className="nav-item__link">
              Landing
            </a>
          </li>
        </ul>

        <div className="nav-reg">
          <a>Log in / registration</a>
          <span>|</span>
          <a>book table</a>
        </div>
        <ul className="header-burger" onClick={handleToggle}>
          <li className={`header-burger__first ${open ? "open" : ""}`}></li>
          <li className={`header-burger__second ${open ? "open" : ""}`}></li>
          <li className={`header-burger__third ${open ? "open" : ""}`}></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
