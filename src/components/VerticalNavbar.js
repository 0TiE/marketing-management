import React, { useState } from 'react';
import './VerticalNavbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

const VerticalNavbar = ({ activeLinkId }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <div 
            className={`navbar-container bg-light ${isExpanded ? 'expanded' : 'collapsed'}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="vertical-navbar d-flex flex-column flex-shrink-0 p-3 ">
                <div className='row d-flex justify-content-between align-items-center'>
                    <i className="bi bi-list ms-3 menu-icon"></i>
                    <img src="/logo.png" alt="Company Logo" className='logo' />
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/dashboard" className={`nav-link text-dark ${activeLinkId === 'dashboard' ? 'active' : ''}`} id="dashboard" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Dashboard">
                            <i className="bi bi-speedometer2"></i> <span className="nav-text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/PartnerManagement" className={`nav-link text-dark ${activeLinkId === 'PartnerManagement' ? 'active' : ''}`} id="PartnerManagement">
                            <i className="bi bi-people"></i> <span className="nav-text">Partner Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product" className={`nav-link text-dark ${activeLinkId === 'product_request' ? 'active' : ''}`} id="product_request">
                            <i className="bi bi-box-seam"></i> <span className="nav-text">Product Request</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricePlan" className={`nav-link text-dark ${activeLinkId === 'pricing_plan' ? 'active' : ''}`} id="pricing_plan">
                            <i className="bi bi-currency-dollar"></i> <span className="nav-text">Pricing Plan</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Mdf" className={`nav-link text-dark ${activeLinkId === 'mdf' ? 'active' : ''}`} id="mdf">
                            <i className="bi bi-cash-stack"></i> <span className="nav-text">MDF</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/CMM" className={`nav-link text-dark ${activeLinkId === 'CM' ? 'active' : ''}`} id="CM">
                            <i className="bi bi-grid-3x3-gap"></i> <span className="nav-text">Category Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/VendorManagement" className={`nav-link text-dark ${activeLinkId === 'vendor_management' ? 'active' : ''}`} id="vendor_management">
                            <i className="bi bi-briefcase"></i> <span className="nav-text">Vendor Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/creditreq" className={`nav-link text-dark ${activeLinkId === 'creditreq' ? 'active' : ''}`} id="creditreq">
                            <i className="bi bi-credit-card"></i> <span className="nav-text">Credit Request</span>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/images/user icon.png" alt="User Icon" width="50" height="50" className="rounded-circle me-2" />
                        <strong className='UserProfile'>User</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default VerticalNavbar;
