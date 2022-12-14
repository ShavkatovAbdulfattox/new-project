import React, { Component } from "react";
import HeaderContent from "./HeaderContent";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Nav />
        <HeaderContent />

        <div className="header-pagination">
          <ul>
            <li>
              <button className="active">01</button>
            </li>
            <li>
              <button>02</button>
            </li>
            <li>
              <button>03</button>
            </li>
            <li>
              <button>04</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
