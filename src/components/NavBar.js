import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Insert your logo here */}
      </div>
      <ul className="nav-links">
        <li><a href="#biography">Biography</a></li>
        <li><a href="#demos">Demos</a></li>
        <li><a href="#studio">Studio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;