import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light fixed" style={{ width: '280px',  height:"100vh"}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">CONNEX MARCKETING</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        
        <li>
          <a href="#" className="nav-link link-dark ">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-cart-fill me-2"></i>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark active">
            <i className="bi bi-box-seam me-2"></i>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <i className="bi bi-people-fill me-2"></i>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <Dropdown>
        <Dropdown.Toggle as="a" href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-small shadow" aria-labelledby="dropdownUser2">
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;