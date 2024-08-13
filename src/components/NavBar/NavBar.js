import React, { useState } from "react";
import companylogo from "../../images/CONNEX.png";
import connexcodeworks from "../../images/connexcodeworks.png";
import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMDF, setShowMDF] = useState(false);

  const toggleMDF = () => {
    setShowMDF(!showMDF);
  };

  return (
    <div className="navbar-container bg-light">
      {/* Header */}
      <div className="vertical-navbar d-flex flex-column flex-shrink-0 p-3 bg-light">
        <div className="row">
          <i className="bi bi-list ms-3 menu-icon"></i>
          <img src={companylogo} alt="Connex Logo" className="logo" />
        </div>
        <hr />
        <div className="nav-container">
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="mb-1">
              <NavLink
                to="/dashboard"
                className="nav-link"
                activeClassName="active"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Dashboard"
              >
                <i className="bi bi-speedometer2"></i>{" "}
                <span className="nav-text">Dashboard</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/partnermgt"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-people"></i>{" "}
                <span className="nav-text">Partner Management</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/Product"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-box-seam"></i>{" "}
                <span className="nav-text">Product Management</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/priceplan"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-currency-dollar"></i>{" "}
                <span className="nav-text">Pricing Plan</span>
              </NavLink>
            </li>
            {/* MDF Section */}
            <li className="mb-1">
              <div
                className="nav-link mdf-toggle"
                onClick={toggleMDF}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-cash-stack"></i>{" "}
                <span className="nav-text">MDF</span>
              </div>
              {showMDF && (
                <ul className="nav flex-column ms-3">
                  <li className="mb-1">
                    <NavLink
                      to="internalmdf"
                      className="nav-link"
                      activeClassName="active"
                    ><i className="bi bi-cash-stack"></i>
                      Internal MDF
                    </NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink
                      to="partnermdf"
                      className="nav-link"
                      activeClassName="active"
                    ><i className="bi bi-cash-stack"></i>
                      Partner MDF
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-1">
              <NavLink
                to="/categorymgt"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-grid-3x3-gap"></i>{" "}
                <span className="nav-text">Category Management</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/vendormgt"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-briefcase"></i>{" "}
                <span className="nav-text">Vendor Management</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/creditrequest"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-credit-card"></i>{" "}
                <span className="nav-text">Credit Request</span>
              </NavLink>
            </li>
            <li className="mb-1">
              <NavLink
                to="/eventtrequest"
                className="nav-link"
                activeClassName="active"
              >
                <i className="bi bi-person-arms-up"></i>{" "}
                <span className="nav-text">Event Request</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Footer */}
        <footer className="fixed-bottom text-center fc text-white p-2 bg-dark">
          <img
            src={connexcodeworks}
            className="logo2 fixed-bottom"
            alt="Connex Code Works Logo"
          />
          Designed and Developed by{" "}
          <strong>CODE-WORKS Software Engineer Team</strong> © 2024 Connex
          Information Technologies (PVT) LTD
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
