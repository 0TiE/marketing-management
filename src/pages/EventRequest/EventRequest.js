import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './EventRequest.css';

const EventRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isApproveModalOpen, setApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const data = [
    { id: 'Event Req1', name: 'Name1', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com', status: 'Requested' },
    { id: 'Event Req2', name: 'Name2', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com', status: 'Approved' },
    { id: 'Event Req3', name: 'Name3', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com', status: 'Rejected' },
    { id: 'Event Req4', name: 'Name4', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com', status: 'Requested' },
    { id: 'Event Req5', name: 'Name4', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com', status: 'Approved' },
    { id: 'Event Req6', name: 'Name5', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com', status: 'Rejected' },
    { id: 'Event Req7', name: 'Name6', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com', status: 'Requested' },
    { id: 'Event Req8', name: 'Name7', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com', status: 'Approved' },
    { id: 'Event Req9', name: 'Name8', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com', status: 'Rejected' },
    { id: 'Event Req10', name: 'Name9', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com', status: 'Requested' },
    { id: 'Event Req11', name: 'Name10', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com', status: 'Approved' },
    { id: 'Event Req12', name: 'Name11', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com', status: 'Rejected' },
  ];

  const filteredData = data.filter(
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
                <h3>Event Requests</h3>
              </div>
                <div className="col-lg-6 search-bar-container">
                  <input 
                    type="text" 
                    placeholder="Search by Event ID, Name, BR Number, Status" 
                    className="search-bar" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                  />
                  {searchTerm && (
                    <button className="clear-search-btn1" onClick={clearSearch}>×</button>
                  )}
                </div>
            </div>
            <div className='tbl-container'>
              <table>
                <thead>
                  <tr>
                    <th>EVENT REQ ID</th>
                    <th>NAME</th>
                    <th>BR NUMBER</th>
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
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
                      <td className={`badge badge-${row.status.toLowerCase()}`}>{row.status}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='col-lg-1'></div>
      </div>

      {showModal && selectedRow && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Event Request Details</h2>
              <span className="close" onClick={handleCloseModal}>&times;</span>
            </div>
            <div className="modal-body">
              <p><strong>Event Request ID:</strong> {selectedRow.id}</p>
              <p><strong>Name:</strong> {selectedRow.name}</p>
              <p><strong>BR Number:</strong> {selectedRow.brNumber}</p>
              <p><strong>Phone:</strong> {selectedRow.phone}</p>
              <p><strong>Email:</strong> {selectedRow.email}</p>
              <p><strong>Status:</strong> {selectedRow.status}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-green" onClick={handleApproveClick}>Approve</button>
              <button className="btn btn-red" onClick={handleRejectClick}>Reject</button>
            </div>
          </div>
        </div>
      )}

      {isApproveModalOpen && (
        <div className="modal" onClick={handleCloseApproveModal}>
          <div className="modal-content3" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Approval</h2>
              <span className="close" onClick={handleCloseApproveModal}>&times;</span>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to approve this event request?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-green">Yes</button>
              <button className="btn btn-red" onClick={handleCloseApproveModal}>No</button>
            </div>
          </div>
        </div>
      )}

      {isRejectModalOpen && (
        <div className="modal" onClick={handleCloseRejectModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Rejection</h2>
              <span className="close" onClick={handleCloseRejectModal}>&times;</span>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to reject this event request?</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-green">Yes</button>
              <button className="btn btn-red" onClick={handleCloseRejectModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventRequest;
