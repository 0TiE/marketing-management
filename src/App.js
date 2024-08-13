import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard';
import PartnerMgt from './pages/Partner_mgt/Partner_mgt';
import Product from './pages/Product/Product'
import PricePlan from './pages/PricePlan/PricePlan';
import PartnerMdf from './pages/PartnerMDF/PartnerMDF';
import InternalMdf from './pages/InternalMDF/InternalMDF';
import CategoryMgt from './pages/Category_mgt/Category_mgt';
import VendorMgt from './pages/Vendor_mgt/Vendor_mgt';
import CreditReq from './pages/CreditRequest/CreditRequest';
import EventReq from './pages/EventRequest/EventRequest';

import MyDataTable from './pages/MyDataTable/MyDataTable';



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/header" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partnermgt" element={<PartnerMgt />} />
        <Route path="/product" element={<Product />} />
        <Route path="/priceplan" element={<PricePlan />} />
        <Route path="/internalmdf" element={<InternalMdf />} />
        <Route path="/partnermdf" element={<PartnerMdf />} />
        <Route path="/categorymgt" element={<CategoryMgt />} />
        <Route path="/vendormgt" element={<VendorMgt />} />
        <Route path="/creditrequest" element={<CreditReq />} />
        <Route path="/eventtrequest" element={<EventReq />} />
        <Route path="/mydatatbl" element={<MyDataTable />} />
      </Route>
    )
  );
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;

const Root = () => {
  return (
    <> 
      <NavBar />
      <div className="flex h-screen ">
      
        <div className="flex-1 me-4 p-4 mb-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};