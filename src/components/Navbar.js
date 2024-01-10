// src/components/Navbar.js
import React from "react";
import { Navbar as DaisyNavbar, Dropdown, Badge, Button } from "react-daisyui";

function Navbar() {
  return (
    <DaisyNavbar className="navbar">
      <div className="navbar-logo">Toko Online</div>
      <div className="nav-links">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Products
        </a>
        <a href="#" className="nav-link">
          Profile
        </a>
      </div>
    </DaisyNavbar>
  );
}

export default Navbar;
