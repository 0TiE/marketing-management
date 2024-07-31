import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/VerticalNavbar.js';
import Dashboard from './pages/Dashboard';
import Mdf from './pages/Mdf';
import CMM from './pages/CMM.js';
import Product from './pages/Product';
import PartnerManagement from './pages/PartnerManagement';
import VendorManagement from './pages/VendorManagement';
import CreditReq from './pages/CreditReq';
import PricingPlan from './pages/PricePlan';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/PartnerManagement" element={<PartnerManagement />} />
              <Route path="/mdf" element={<Mdf />} />
              <Route path="/CMM" element={<CMM />} />
              <Route path="/product" element={<Product />} />
              <Route path="/VendorManagement" element={<VendorManagement />} />
              <Route path="/CreditReq" element={<CreditReq />} />
              <Route path="/PricePlan" element={<PricingPlan />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
