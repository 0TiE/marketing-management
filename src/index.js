import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PartnerRequest from './components/PartnerRequest/PartnerRequest';
import ProductManagement from './components/ProductManagement/ProductManagement';
import VendorManagement from './components/VendorManagement/VendorManagement';
import PartnerManagement from './components/PartnerManagement/PartnerManagement';
import Sidebar from './components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/partner-request" element={<PartnerRequest />} />
      <Route path="/product-management" element={<ProductManagement />} />
      <Route path="/vendor-management" element={<VendorManagement />} />
      <Route path="/partner-management" element={<PartnerManagement />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
