import React from 'react';
import companylogo from '../../images/company logo.png'
import './NavBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

const VerticalNavbar = ({ activeLinkId }) => {
    return (
        
        <div className="navbar-container bg-light ">
            <div className="vertical-navbar d-flex flex-column flex-shrink-0 p-3 bg-light">
                <div className='row d-flex justify-content-between align-items-center'>
                    <i className="bi bi-list ms-3 menu-icon"></i>
                    <img src={companylogo} alt="Connex Logo" className='logo'/>
                </div> 
                <hr />  
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/dashboard" className={`nav-link ${activeLinkId === 'dashboard' ? 'active' : ''}`} id="dashboard" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Dashboard">
                            <i className="bi bi-speedometer2"></i> <span className="nav-text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/partnermgt" className={`nav-link ${activeLinkId === 'partnermgt' ? 'active' : ''}`} id="partnermgt">
                            <i className="bi bi-people"></i> <span className="nav-text">Partner Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Product" className={`nav-link ${activeLinkId === 'product_request' ? 'active' : ''}`} id="product_request">
                            <i className="bi bi-box-seam"></i> <span className="nav-text">Product Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/priceplan" className={`nav-link ${activeLinkId === 'priceplan' ? 'active' : ''}`} id="priceplan">
                            <i className="bi bi-currency-dollar"></i> <span className="nav-text">Pricing Plan</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mdf" className={`nav-link ${activeLinkId === 'mdf' ? 'active' : ''}`} id="mdf">
                            <i className="bi bi-cash-stack"></i> <span className="nav-text">MDF</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categorymgt" className={`nav-link ${activeLinkId === 'categorymgt' ? 'active' : ''}`} id="categorymgt">
                            <i className="bi bi-grid-3x3-gap"></i> <span className="nav-text">Category Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/vendormgt" className={`nav-link ${activeLinkId === 'vendormgt' ? 'active' : ''}`} id="vendormgt">
                            <i className="bi bi-briefcase"></i> <span className="nav-text">Vendor Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/creditrequest" className={`nav-link ${activeLinkId === 'creditrequest' ? 'active' : ''}`} id="creditrequest">
                            <i className="bi bi-credit-card"></i> <span className="nav-text">Credit Request</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/eventtrequest" className={`nav-link ${activeLinkId === 'eventtrequest' ? 'active' : ''}`} id="eventtrequest">
                            <i class="bi bi-person-arms-up"></i> <span className="nav-text">Event Request</span>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>
    );
}

export default VerticalNavbar;
