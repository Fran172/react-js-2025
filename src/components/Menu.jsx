import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`right-side-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          ×
        </button>

      </div>
    </div>
  );
};

export default Menu;