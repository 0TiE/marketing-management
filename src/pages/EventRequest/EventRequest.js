import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './EventRequest.css';

const EventRequest = () => {
  const [activeTab, setActiveTab] = useState('requested');
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
    { id: 'Event Req1', name: 'Name1', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com' },
    { id: 'Event Req2', name: 'Name2', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com' },
    { id: 'Event Req3', name: 'Name3', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com' },
    { id: 'Event Req4', name: 'Name4', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com' },
    { id: 'Event Req5', name: 'Name4', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com' },
    { id: 'Event Req6', name: 'Name5', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com' },
    { id: 'Event Req7', name: 'Name6', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com' },
    { id: 'Event Req8', name: 'Name7', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com' },
    { id: 'Event Req9', name: 'Name8', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com' },
    { id: 'Event Req10', name: 'Name9', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com' },
    { id: 'Event Req11', name: 'Name10', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com' },
    { id: 'Event Req12', name: 'Name11', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com' },
  ];

  const filteredData = data.filter(
    row =>
      row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.brNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className='partnermgt mt-5'>
            <div className='tab-search'>
              <div className="tabs">
                  <button className={`tab ${activeTab === 'requested' ? 'active' : ''}`} onClick={() => setActiveTab('requested')}>REQUESTED</button>
                  <button className={`tab ${activeTab === 'approved' ? 'active' : ''}`} onClick={() => setActiveTab('approved')}>APPROVED</button>
                  <button className={`tab ${activeTab === 'rejected' ? 'active' : ''}`} onClick={() => setActiveTab('rejected')}>REJECTED</button>
              </div>
              <div className='search'>
                <div className="col-lg-6 search-bar-container">
                  <input 
                    type="text" 
                    placeholder="Search by Event ID, Name, BR Number" 
                    className="search-bar1" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                  />
                  {searchTerm && (
                    <button className="clear-search-btn1" onClick={clearSearch}>×</button>
                  )}
                </div>
              </div>
            </div>
            <div className="tab-content">
              {activeTab === 'requested' && (
                <div className="tab-pane fade show active" id="requested">
                  <div className='tbl-container'>
                    <table>
                      <thead>
                        <tr>
                          <th>Event REQ ID</th>
                          <th>NAME</th>
                          <th>BR NUMBER</th>
                          <th>PHONE</th>
                          <th>EMAIL</th>
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 'approved' && (
                <div className="tab-pane fade show active" id="approved">
                  <div className='tbl-container'>
                    <table>
                      <thead>
                        <tr>
                          <th>Event REQ ID</th>
                          <th>NAME</th>
                          <th>BR NUMBER</th>
                          <th>PHONE</th>
                          <th>EMAIL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map(row => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.brNumber}</td>
                            <td>{row.phone}</td>
                            <td>{row.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 'rejected' && (
                <div className="tab-pane fade show active" id="rejected">
                  <div className='tbl-container'>
                    <table>
                      <thead>
                        <tr>
                          <th>Event REQ ID</th>
                          <th>NAME</th>
                          <th>BR NUMBER</th>
                          <th>PHONE</th>
                          <th>EMAIL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map(row => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.brNumber}</td>
                            <td>{row.phone}</td>
                            <td>{row.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
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
              <div className="form-group my-5">
                <input type="text" className="form-control" value={selectedRow.id} readOnly />
                <label className="form-label">Event REQ ID</label>
              </div>
              <div className="form-group my-5">
                <input type="text" className="form-control" value={selectedRow.name} readOnly />
                <label className="form-label">NAME</label>
              </div>
              <div className="form-group my-5">
                <input type="text" className="form-control" value={selectedRow.brNumber} readOnly />
                <label className="form-label">BR NUMBER</label>
              </div>
              <div className="form-group my-5">
                <input type="text" className="form-control" value={selectedRow.phone} readOnly />
                <label className="form-label">PHONE</label>
              </div>
              <div className="form-group my-5">
                <input type="text" className="form-control" value={selectedRow.email} readOnly />
                <label className="form-label">EMAIL</label>
              </div>
            </form>
            <div className="modal-footer">
              <button className="btn btn-green" onClick={handleApproveClick}>Approve</button>
              <button className="btn btn-red" onClick={handleRejectClick}>Reject</button>
            </div>
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
            <form>
              <div className="form-group my-5">
                <input type="password" className="form-control" placeholder="" required/>
                <label className="form-label">Password</label>
              </div>
              <div className="modal-footer">
                <button className="btn btn-green" type="submit">Approve</button>
              </div>
            </form>
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
            <form>
              <div className="form-group my-5">
                <textarea className="form-control" placeholder="" required></textarea>
                <label className="form-label">Reason for rejection</label>
              </div>
              <div className="modal-footer">
                <button className="btn btn-red" type="submit">Reject</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventRequest;
