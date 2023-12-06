import React, { useState } from 'react';
import './style.css';

const Navigation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;

    // Check if the cursor is within the window boundaries
    if (x >= 0 && x <= window.innerWidth && y >= 0 && y <= window.innerHeight) {
      setCursorPosition({ x, y });
    }
  };

  return (
    <div  onMouseMove={handleMouseMove} className="nav-wrapper">
      <nav >
        <NavLink text="Home" />
        <NavLink text="Our Story" />
        <NavLink text="Studio" />
        <NavLink text="Contact" />
        {cursorPosition.x >= 0 && cursorPosition.y >= 0 && (
        <div className="cursor" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></div>
        )}
      </nav>
    </div>
  );
};

const NavLink = ({ text }) => (
  <a href="https://t.me/ibrohim_uraimov" className="hover-this">
    <span>{text}</span>
  </a>
);

export default Navigation;
