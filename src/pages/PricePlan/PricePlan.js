import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './PricePlan.css';

const PricePlan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [batches, setBatches] = useState([
    { id: 1, grnid: 'GRN 001', name: 'Batch 1', vendorName: 'Vendor 1', createDate: '2024-01-01' },
    { id: 2, grnid: 'GRN 002', name: 'Batch 2', vendorName: 'Vendor 2', createDate: '2024-02-01' },
    { id: 3, grnid: 'GRN 003', name: 'Batch 3', vendorName: 'Vendor 3', createDate: '2024-03-01' },
    { id: 4, grnid: 'GRN 004', name: 'Batch 4', vendorName: 'Vendor 4', createDate: '2024-04-01' }
  ]);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const filteredBatches = batches.filter(batch => 
    batch.id.toString().includes(searchTerm) || 
    batch.grnid.toLowerCase().includes(searchTerm.toLowerCase()) || 
    batch.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewBatch = (batch) => {
    setSelectedBatch(batch);
  };

  const closeModal = () => {
    setSelectedBatch(null);
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
                  <h3>Pricing Plan</h3>
              </div>
              <div className="col-lg-6 search-bar-container">
                <input 
                  type="text" 
                  placeholder="Search by ID, GRN ID, Vendor Name" 
                  className="search-bar" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={clearSearch}>×</button>
                )}
              </div>
            </div>
            <div className="row">
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>BATCH ID</th>
                      <th>GRN ID</th>
                      <th>VENDOR NAME</th>
                      <th>CREATE DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBatches.map(batch => (
                      <tr key={batch.id} onClick={() => handleViewBatch(batch)}>
                        <td>{batch.id}</td>
                        <td>{batch.grnid}</td>
                        <td>{batch.vendorName}</td>
                        <td>{batch.createDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {selectedBatch && (
            <div className="modal">
              <div className="modal-content1">
                <div className="modal-header">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h2>View Batch</h2>
                </div>
                <form>
                  <div className="form-group my-5">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={selectedBatch.grnid} 
                      readOnly
                    />
                    <label className="form-label">GRN ID</label>
                  </div>
                </form>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PricePlan;
