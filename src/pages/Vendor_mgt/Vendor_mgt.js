import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Vendor_mgt.css';

const Vendor_mgt = () => {
  const [vendors, setVendors] = useState([
    { id: '1', logo: 'logo1.png', name: 'Vendor One', email: 'vendor1@example.com', status: 'Available' },
    { id: '2', logo: 'logo2.png', name: 'Vendor Two', email: 'vendor2@example.com', status: 'Not Available' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentVendor, setCurrentVendor] = useState(null);
  const [newVendor, setNewVendor] = useState({
    id: '',
    logo: '',
    name: '',
    email: '',
    status: 'Available' // Default status
  });

  const clearSearch = () => {
    setSearchTerm('');
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.id.includes(searchTerm) || vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewVendor = (vendor) => {
    setCurrentVendor(vendor);
    setShowViewModal(true);
  };

  const handleEdit = (vendor) => {
    setCurrentVendor(vendor);
    setNewVendor(vendor);
    setShowModal(true);
  };

  const handleAddVendor = () => {
    const nextId = (vendors.length + 1).toString();
    setNewVendor({ id: nextId, logo: '', name: '', email: '', status: 'Available' });
    setCurrentVendor(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowViewModal(false);
    setNewVendor({ id: '', logo: '', name: '', email: '', status: 'Available' });
    setCurrentVendor(null);
  };

  const handleVendorChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const handleLogoChange = (e) => {
    setNewVendor({ ...newVendor, logo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSaveVendor = (e) => {
    e.preventDefault();
    if (currentVendor) {
      // Update existing vendor
      setVendors(vendors.map(vendor => (vendor.id === currentVendor.id ? newVendor : vendor)));
    } else {
      // Add new vendor
      setVendors([...vendors, newVendor]);
    }
    closeModal();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className='mt-5'>
            <div className="row mb-3">
              <div className="col-lg-6">
                <h3>Vendor Management</h3>
              </div>
              <div className="col-lg-6 search-bar-container">
                <input 
                  type="text" 
                  placeholder="Search by ID, Name" 
                  className="search-bar" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={clearSearch}>×</button>
                )}
              </div>
            </div>
            <button className="add-product-btn mb-3" onClick={handleAddVendor}>
                  <i className="fas fa-plus"></i> ADD VENDOR
            </button>
            <div className="row">
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>VENDOR LOGO</th>
                      <th>VENDOR NAME</th>
                      <th>EMAIL</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVendors.map(vendor => (
                      <tr key={vendor.id} onClick={() => handleViewVendor(vendor)}>
                        <td>{vendor.id}</td>
                        <td><img src={vendor.logo} alt={vendor.name} className="vendor-logo" /></td>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td className={vendor.status === 'Available' ? 'status-available' : 'status-not-available'}>
                          {vendor.status}
                        </td>
                        <td className="action-icons">
                          <i className="fas fa-edit editicon" onClick={(e) => { e.stopPropagation(); handleEdit(vendor); }}></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content1">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{currentVendor ? 'Edit Vendor' : 'Add Vendor'}</h2>
            </div>
            <form onSubmit={handleSaveVendor}>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={newVendor.id} 
                  readOnly 
                />
                <label className="form-label">Vendor ID</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="file" 
                  className="form-control" 
                  name="logo" 
                  onChange={handleLogoChange} 
                />
                <label className="form-label">Vendor Logo</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  value={newVendor.name} 
                  onChange={handleVendorChange} 
                />
                <label className="form-label">Vendor Name</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  value={newVendor.email} 
                  onChange={handleVendorChange} 
                />
                <label className="form-label">Email</label>
              </div>
              <div className="form-group my-5">
                <select 
                  className="form-control" 
                  name="status" 
                  value={newVendor.status} 
                  onChange={handleVendorChange}
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
                <label className="form-label">Status</label>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-green">{currentVendor ? 'Save Changes' : 'Add Vendor'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showViewModal && (
        <div className="modal">
          <div className="modal-content1">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>View Vendor</h2>
            </div>
            <div className="modal-body">
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={currentVendor.id} 
                  readOnly 
                />
                <label className="form-label">Vendor ID</label>
              </div>
              <div className="form-group my-5">
                <img 
                  src={currentVendor.logo} 
                  alt={currentVendor.name} 
                  className="vendor-logo-view" 
                />
                <label className="form-label">Vendor Logo</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={currentVendor.name} 
                  readOnly 
                />
                <label className="form-label">Vendor Name</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="email" 
                  className="form-control" 
                  value={currentVendor.email} 
                  readOnly 
                />
                <label className="form-label">Email</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={currentVendor.status} 
                  readOnly 
                />
                <label className="form-label">Status</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendor_mgt;
