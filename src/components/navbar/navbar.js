import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function navbar() {
  return (
    <nav className="navbar">
      <img className="mylogo" src={logo} alt="my logo" />
      <ul className="nav-links">
        <li>
          <a href="/" class="nav-link">
            HOME
          </a>
        </li>
        <li>
          <a href="/" class="nav-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/" class="nav-link">
            SERVICE
          </a>
        </li>
        <li>
          <a href="/" class="nav-link">
            IMAGES
          </a>
        </li>
      </ul>
    </nav>
  );
}
