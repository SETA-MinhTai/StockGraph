import React from "react";
import "./NavBar.css";

const NavBar = ({ showReport, setShowReport }) => {
    return (
        <div className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>

            {/* Buttons */}
            <ul className="nav-buttons">
                <li className={!showReport ? "active" : ""} onClick={() => setShowReport(false) }>Analytics</li>
                <li className={showReport ? "active" : ""} onClick={() => setShowReport(true) }> Reports</li>
            </ul>
        </div>
    );
};

export default NavBar;