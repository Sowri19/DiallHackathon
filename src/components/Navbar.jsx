import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/profiles" style={linkStyle}>
            Profiles
          </Link>
        </li>
        {/* Add more navigation options as needed */}
      </ul>
    </nav>
  );
};

// Styles
const navStyle = {
  backgroundColor: "#333",
  padding: "10px 0",
};

const ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
};

const liStyle = {
  margin: "0 10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "4px",
};

export default Navbar;
