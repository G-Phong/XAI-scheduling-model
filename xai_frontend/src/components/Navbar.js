import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
  // Hier können Sie JavaScript verwenden, um das Dropdown-Verhalten zu steuern

  // Funktion, um das Dropdown zu öffnen/schließen
  const toggleDropdown = (event) => {
    const dropdownMenu = event.currentTarget.nextElementSibling;
    dropdownMenu.classList.toggle("show");
  };

  

  return (
    <nav className="navbar navbar-dark bg-dark text-center">
      <span className="navbar-brand mb-0 h1">Explainify.AI</span>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/schedule" className="nav-link">
            Weekly Schedule
          </Link>
        </li>
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            onClick={toggleDropdown}
          >
            Compare & Understand
          </div>
          <div className="dropdown-menu">
            <Link to="/what-if" className="dropdown-item">
              What-If Scenarios
            </Link>
            <Link to="/visual" className="dropdown-item">
              Visualization
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            onClick={toggleDropdown}
          >
            Interactive Learning Game
          </div>
          <div className="dropdown-menu">
            <Link to="/edugame" className="dropdown-item">
              Educational Game
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            onClick={toggleDropdown}
          >
            Theory Classroom
          </div>
          <div className="dropdown-menu">
            <Link to="/quiz" className="dropdown-item">
              AI Knowledge Quiz
            </Link>
            <Link to="/faq" className="dropdown-item">
              FAQ
            </Link>
          </div>
        </li>
  {/*         <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
