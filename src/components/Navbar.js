import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <img
          src="/mlbb-logo.png"
          alt="Mobile Legends Logo"
          className="logo-img"
        />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">HOME</a>
        </li>

        <li>
          <a href="#news">NEWS</a>
        </li>

        <li>
          <a href="#heroes">HEROES</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;