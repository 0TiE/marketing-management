import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Partner_mgt.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; 

const Partner_mgt = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isApproveModalOpen, setApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [data, setData] = useState([
    { id: 'Req1', name: 'Partner Name 1', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'partner1@gmail.com', status: 'requested' },
    { id: 'Req2', name: 'Partner Name 2', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'partner2@gmail.com', status: 'approved' },
    { id: 'Req3', name: 'Partner Name 3', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'partner3@gmail.com', status: 'rejected' },
  ]);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  const handleApproveClick = () => {
    setApproveModalOpen(true);
  };

  const handleRejectClick = () => {
    setRejectModalOpen(true);
  };

  const handleCloseApproveModal = () => {
    setApproveModalOpen(false);
  };

  const handleCloseRejectModal = () => {
    setRejectModalOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleSort = (key) => {
    const direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const handleConfirmApprove = () => {
    const updatedData = data.map(row =>
      row.id === selectedRow.id ? { ...row, status: 'approved' } : row
    );
    setData(updatedData);
    setApproveModalOpen(false);
    setShowModal(false);
  };

  const handleConfirmReject = () => {
    const updatedData = data.map(row =>
      row.id === selectedRow.id ? { ...row, status: 'rejected' } : row
    );
    setData(updatedData);
    setRejectModalOpen(false);
    setShowModal(false);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(
    row =>
      row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.brNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className='partnermgt mt-5'>
            <div className="row mb-3">
              <div className="col-lg-6">
                <h3>Partner Management</h3>
              </div>
              <div className="col-lg-6 search-bar-container">
                <input 
                  type="text" 
                  placeholder="Search by ID, Name, BR Number, Status"
                  className="search-bar" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={clearSearch}>×</button>
                )}
              </div>
            </div>
            <div className="tab-content mt-4">
              <div className="tab-pane fade show active" id="requested">
                <div className='tbl-container'>
                  <table>
                    <thead>
                      <tr>
                        <th onClick={() => handleSort('id')}>
                          REQ ID
                          {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? <FaArrowUp className="sort-arrow" /> : <FaArrowDown className="sort-arrow" />)}
                        </th>
                        <th onClick={() => handleSort('name')}>
                          PARTNER NAME
                          {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? <FaArrowUp className="sort-arrow" /> : <FaArrowDown className="sort-arrow" />)}
                        </th>
                        <th onClick={() => handleSort('brNumber')}>
                          BR NUMBER
                          {sortConfig.key === 'brNumber' && (sortConfig.direction === 'asc' ? <FaArrowUp className="sort-arrow" /> : <FaArrowDown className="sort-arrow" />)}
                        </th>
                        <th onClick={() => handleSort('phone')}>
                          PHONE
                          {sortConfig.key === 'phone' && (sortConfig.direction === 'asc' ? <FaArrowUp className="sort-arrow" /> : <FaArrowDown className="sort-arrow" />)}
                        </th>
                        <th onClick={() => handleSort('email')}>
                          EMAIL
                          {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? <FaArrowUp className="sort-arrow" /> : <FaArrowDown className="sort-arrow" />)}
                        </th>
                        <th onClick={() => handleSort('status')}>
                          STATUS
                          {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? <FaArrowUp className="sort-arrow" /> : <FaArrowDown className="sort-arrow" />)}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map(row => (
                        <tr key={row.id} onClick={() => handleRowClick(row)}>
                          <td>{row.id}</td>
                          <td>{row.name}</td>
                          <td>{row.brNumber}</td>
                          <td>{row.phone}</td>
                          <td>{row.email}</td>
                          <td>
                            <span className={`badge badge-${row.status}`}>{row.status.toUpperCase()}</span>
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
      </div>

      {selectedRow && showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Request Details</h2>
            </div>
            <form>
              <div className='row d-flex'>
                <div className='col-lg-6'>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" value={selectedRow.id} readOnly />
                    <label className="form-label">REQ ID</label>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" value={selectedRow.name} readOnly />
                    <label className="form-label">NAME</label>
                  </div>
                </div>
              </div>
              <div className='row d-flex'>
                <div className='col-lg-6'>
                  <div className="form-group my-3">
                    <input type="text" className="form-control" value={selectedRow.brNumber} readOnly />
                    <label className="form-label">BR NUMBER</label>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className="form-group my-3">
                    <input type="text" className="form-control" value={selectedRow.phone} readOnly />
                    <label className="form-label">PHONE</label>
                  </div>
                </div>
              </div>
              
              <div className='row d-flex'>
                <div className='col-lg-6'>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" value={selectedRow.email} readOnly />
                    <label className="form-label">EMAIL</label>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" value={selectedRow.status} readOnly />
                    <label className="form-label">STATUS</label>
                  </div>
                </div>
              </div>
              <div className="form-group my-5 d-flex justify-content-center">
                <button type="button" className="btn btn-success mx-2" onClick={handleApproveClick}>Approve</button>
                <button type="button" className="btn btn-danger mx-2" onClick={handleRejectClick}>Reject</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isApproveModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={handleCloseApproveModal}>&times;</span>
              <h2>Approve Request</h2>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to approve this request?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={handleConfirmApprove}>Yes</button>
              <button className="btn btn-secondary" onClick={handleCloseApproveModal}>No</button>
            </div>
          </div>
        </div>
      )}

      {isRejectModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={handleCloseRejectModal}>&times;</span>
              <h2>Reject Request</h2>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to reject this request?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={handleConfirmReject}>Yes</button>
              <button className="btn btn-secondary" onClick={handleCloseRejectModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner_mgt;
