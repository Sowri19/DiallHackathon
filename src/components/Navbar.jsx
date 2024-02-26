import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/guided-meditation" style={linkStyle}>Guided Meditation</Link>
        </li>
        <li style={liStyle}>
          <Link to="/therapist-support" style={linkStyle}>Therapist Support</Link>
        </li>
        <li style={liStyle}>
          <Link to="/mood-tracker" style={linkStyle}>Mood Tracker</Link>
        </li>
        <li style={liStyle}>
          <Link to="/articles" style={linkStyle}>Articles</Link>
        </li>
        <li style={liStyle}>
          <Link to="/about-us" style={linkStyle}>About Us</Link>
        </li>
        {/* Add more navigation options as needed */}
      </ul>
    </nav>
  );
};

// Styles
const navStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
};

export default Navbar;
