import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './CreditRequest.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import icons for sorting arrows

const Partner_mgt = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isApproveModalOpen, setApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [data, setData] = useState([
    { id: 'Req1', name: 'TrendNet', brNumber: 'BR001', phone: '+94 11 1122 112', email: 'trendnet@gmail.com', status: 'requested' },
    { id: 'Req2', name: 'TechCorp', brNumber: 'BR002', phone: '+94 11 1122 113', email: 'techcorp@gmail.com', status: 'approved' },
    { id: 'Req3', name: 'InnoTech', brNumber: 'BR003', phone: '+94 11 1122 114', email: 'innotech@gmail.com', status: 'rejected' },
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
      row.brNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />;
    }
    return null;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className='partnermgt mt-5'>
            <div className="row mb-3">
              <div className="col-lg-6">
                <h3>Credit Requests</h3>
              </div>
              <div className="col-lg-6 search-bar-container">
                <input
                  type="text"
                  placeholder="Search by Credit ID, Name, BR Number"
                  className="search-bar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={clearSearch}>×</button>
                )}
              </div>
            </div>
            
            <div className='tbl-container'>
              <table>
                <thead>
                  <tr>
                    <th onClick={() => handleSort('id')}>CREDIT REQ ID {getIcon('id')}</th>
                    <th onClick={() => handleSort('name')}>NAME {getIcon('name')}</th>
                    <th onClick={() => handleSort('brNumber')}>BR NUMBER {getIcon('brNumber')}</th>
                    <th onClick={() => handleSort('phone')}>PHONE {getIcon('phone')}</th>
                    <th onClick={() => handleSort('email')}>EMAIL {getIcon('email')}</th>
                    <th onClick={() => handleSort('status')}>STATUS {getIcon('status')}</th>
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
                        <span className={`badge badge-${row.status}`}>
                          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <label className="form-label">Credit REQ ID</label>
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
              <div className="form-group my-5">
                <input type="text" className="form-control" value={selectedRow.status} readOnly />
                <label className="form-label">STATUS</label>
              </div>
            </form>
            <div className="modal-footer">
              {selectedRow.status === 'requested' && (
                <>
                  <button className="btn btn-green" onClick={handleApproveClick}>Approve</button>
                  <button className="btn btn-red" onClick={handleRejectClick}>Reject</button>
                </>
              )}
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
                <input type="password" className="form-control" placeholder="Enter Password" required />
                <label className="form-label">Password</label>
              </div>
              <div className="modal-footer">
                <button className="btn btn-green" type="button" onClick={handleConfirmApprove}>Approve</button>
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
                <input type="password" className="form-control" placeholder="Enter Password" required />
                <label className="form-label">Password</label>
              </div>
              <div className="modal-footer">
                <button className="btn btn-red" type="button" onClick={handleConfirmReject}>Reject</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partner_mgt;
