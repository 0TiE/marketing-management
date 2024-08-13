import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './PartnerMDF.css';

const PartnerMDF = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    id: 'REQ123',
    name: 'John Doe',
    brNumber: 'BR123456',
    phone: '+123456789',
    email: 'john.doe@example.com',
    status: 'Pending',
    productName: '',
    productCategory: '',
    businessUnit: '',
    requestDetails: '',
    campaignName: '',
    campaignGoals: '',
    targetMarket: '',
    targetRegion: '',
    campaignDescription: '',
    targetAudienceSize: '',
    goLiveDate: '',
    mdfAmount: '',
    taxValue: '',
    totalValue: '',
    newdealreg: '',
    roi: '',
    mdfxtime: '',
    timeline: '',
    campaignownership: '',
    companyname: '',
    ownership: '',
    designation: '',
    contactnumber: '',
    brandingdetails: '',
    vendorname: '',
    contactperson: '',
    mdfusd: '',
    mdflkr: '',
    modemdf: '',
    receivedate: '',
    c_contribution: '',
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1); // Reset to first step when closing
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleApproveClick = () => {
    console.log('Approved', formData);
    handleCloseModal();
  };

  const handleRejectClick = () => {
    console.log('Rejected', formData);
    handleCloseModal();
  };

  const renderFormSection = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h5>Business Unit Details</h5>
            <div className='row d-flex'>
              <div className='col-lg-6'>
                <div className="form-group mt-5 mb-2 ">
                  <input type="text" className="form-control" name="id" value={formData.id} readOnly />
                  <label className="form-label">FRN #</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-group mt-5 mb-2">
                  <input type="text" className="form-control" name="businessUnit" value={formData.businessUnit} onChange={handleInputChange} />
                  <label className="form-label">Business Unit Name</label>
                </div>
              </div>
            </div>
            
            <div className='row d-flex'>
              <div className='col-lg-6'>
                <div className="form-group my-4">
                  <input type="text" className="form-control" name="productName" value={formData.productName} onChange={handleInputChange} />
                  <label className="form-label">Product(s)</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-group my-4">
                  <input type="text" className="form-control" name="productManager" value={formData.productManager} onChange={handleInputChange} />
                  <label className="form-label">Product Manager</label>
                </div>
              </div>
            </div>
            
            <div className='row d-flex'>
              <div className='col-lg-6'>
                <div className="form-group mt-1 mb-3">
                  <input type="text" className="form-control" name="buHead" value={formData.buHead} onChange={handleInputChange} />
                  <label className="form-label">BU Head</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-group mt-1 mb-3">
                  <input type="text" className="form-control" name="marketingResource" value={formData.marketingResource} onChange={handleInputChange} />
                  <label className="form-label">Marketing Resource</label>
                </div>
              </div>
            </div>
      
          </>
        );
      case 2:
        return (
          <>
            <h5>Campaign Details</h5>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="campaignName" value={formData.campaignName} onChange={handleInputChange} />
              <label className="form-label">Campaign Name</label>
            </div>
            <div className="form-group my-5">
              <textarea 
                className="form-control" 
                name="campaignGoals" 
                value={formData.campaignGoals} 
                onChange={handleInputChange} 
                rows="4" 
              />
              <label className="form-label">Campaign Goals / Objectives</label>
            </div>
            <div className="form-group my-5">
              <textarea 
                className="form-control" 
                name="targetMarket" 
                value={formData.targetMarket} 
                onChange={handleInputChange} 
                rows="4"
              />
              <label className="form-label">Target Market & Personas</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="targetRegion" value={formData.targetRegion} onChange={handleInputChange} />
              <label className="form-label">Target Region(s)</label>
            </div>
            <div className="form-group my-5">
              <textarea 
                className="form-control" 
                name="campaignDescription" 
                value={formData.campaignDescription} 
                onChange={handleInputChange} 
                rows="4"
              />
              <label className="form-label">Campaign Description</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="targetAudienceSize" value={formData.targetAudienceSize} onChange={handleInputChange} />
              <label className="form-label">Target Number of Attendees or Audience Size</label>
            </div>
            <div className="form-group my-5">
              <input 
                type="datetime-local" 
                className="form-control" 
                name="goLiveDate" 
                value={formData.goLiveDate} 
                onChange={handleInputChange} 
              />
              <label className="form-label">Go Live Date(s)</label>
            </div>

          </>
        );
      case 3:
        return (
          <>
            <h5>MDF Request</h5>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="mdfAmount" value={formData.mdfAmount} onChange={handleInputChange} />
              <label className="form-label">MDF Amount (Include all taxes)</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="taxValue" value={formData.taxValue} onChange={handleInputChange} />
              <label className="form-label">Tax Value</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="totalValue" value={formData.totalValue} onChange={handleInputChange} />
              <label className="form-label">Total Value (Include Tax)</label>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h5>Expected Outcomes</h5>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="newdealreg" onChange={handleInputChange} />
              <label className="form-label">Target Number of New Deal Registrations</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="roi" onChange={handleInputChange} />
              <label className="form-label">Expected ROI in Net New Pipeline (in LKR)</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="mdfxtime" onChange={handleInputChange} />
              <label className="form-label">MDF to ROI Multiplier (X Times)</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="timeline" onChange={handleInputChange} />
              <label className="form-label">Expected Timeline to Close These Deals</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="campaignownership" onChange={handleInputChange} />
              <label className="form-label">Campaign Ownership</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="companyname" onChange={handleInputChange} />
              <label className="form-label">Company Name</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="ownership" onChange={handleInputChange} />
              <label className="form-label">Contact Person</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="designation" onChange={handleInputChange} />
              <label className="form-label">Designation</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="contactnumber" onChange={handleInputChange} />
              <label className="form-label">Contact Number</label>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h5>Campaign Branding & Marketing Material</h5>
            <div className="form-group my-5">
              <textarea 
                className="form-control" 
                name="brandingdetails" 
                onChange={handleInputChange} 
                rows="4"
              />
              <label className="form-label">Details of Branding & Marketing Material</label>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <h5>Vendor Details</h5>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="vendorname" onChange={handleInputChange} />
              <label className="form-label">Vendor Name</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="contactperson" onChange={handleInputChange} />
              <label className="form-label">Contact Person</label>
            </div>
          </>
        );
      case 7:
        return (
          <>
            <h5>Expected MDF Spend</h5>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="mdfusd" onChange={handleInputChange} />
              <label className="form-label">MDF Spend in USD</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="mdflkr" onChange={handleInputChange} />
              <label className="form-label">MDF Spend in LKR</label>
            </div>
          </>
        );
      case 8:
        return (
          <>
            <h5>Campaign Execution Date</h5>
            <div className="form-group my-5">
              <input 
                type="datetime-local" 
                className="form-control" 
                name="modemdf" 
                onChange={handleInputChange} 
              />
              <label className="form-label">Mode of MDF</label>
            </div>
            <div className="form-group my-5">
              <input type="date" className="form-control" name="receivedate" onChange={handleInputChange} />
              <label className="form-label">Receive Date</label>
            </div>
          </>
        );
      case 9:
        return (
          <>
            <h5>Company Contribution</h5>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="c_contribution" onChange={handleInputChange} />
              <label className="form-label">Company Contribution (LKR)</label>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const [requests, setRequests] = useState([
    {
      id: 'REQ123',
      businessUnit: 'Sales',
      campaignName: 'Summer Promo',
      targetMarket: 'North America',
      targetRegion: 'West Coast',
      mdfAmount: '100,000',
      totalValue: '120,000',
      roi: '200,000',
      status: 'Pending',
    },
    {
      id: 'REQ124',
      businessUnit: 'Marketing',
      campaignName: 'Holiday Special',
      targetMarket: 'Europe',
      targetRegion: 'Germany',
      mdfAmount: '80,000',
      totalValue: '95,000',
      roi: '150,000',
      status: 'Approved',
    },
    // Add more data as needed
  ]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
          <div className='mt-5'>
            <div className="row mb-3">
              <div className="col-lg-6">
                <h3>Partner MDF</h3>
              </div>
            </div>
            <div className='row d-flex'>
              <div className='col-lg-6'>
                <button className="add-product-btn mb-3" onClick={handleOpenModal}>
                REQUEST MDF
                </button>
              </div>
              <div className="col-lg-6 search-bar-container">
                <input 
                  type="text" 
                  placeholder="Search by ID, Business unit Name, Campaign Name, BR Number, Status"
                  className="search-bar" 
                />
                <button className="clear-search-btn">×</button>
              </div>
            </div>
            
            <div className="row">
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>REQUEST ID</th>
                      <th>BUSINESS UNIT NAME</th>
                      <th>CAMPAIGN NAME</th>
                      <th>TARGET MARKET/REGION</th>
                      <th>MDF AMOUNT (LKR)</th>
                      <th>TOTAL VALUE (LKR)</th>
                      <th>EXPECTED ROI (LKR)</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request, index) => (
                      <tr key={index}>
                        <td>{request.id}</td>
                        <td>{request.businessUnit}</td>
                        <td>{request.campaignName}</td>
                        <td>{`${request.targetMarket}/${request.targetRegion}`}</td>
                        <td>{request.mdfAmount}</td>
                        <td>{request.totalValue}</td>
                        <td>{request.roi}</td>
                        <td>{request.status}</td>
                        <td>
                          <button 
                            className="action-btn edit-btn"
                            onClick={() => console.log('Edit', request.id)}
                          >
                            <i className="fas fa-edit editicon"></i>
                          </button>
                          <button 
                            className="action-btn delete-btn"
                            onClick={() => console.log('Delete', request.id)}
                          >
                            <i className="fas fa-trash trashicon"></i>
                          </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content2">
            <div className="modal-header">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>MDF Request Form</h2>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress">
                {Array.from({ length: 9 }, (_, index) => (
                  <div
                    key={index}
                    className={`progress-step ${currentStep >= index + 1 ? 'active' : ''}`}
                  >
                  </div>
                ))}
              </div>
            </div>

            <form>
              {renderFormSection()}
              <div className="form-group my-5 d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePreviousClick}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNextClick}
                  disabled={currentStep === 9}
                >
                  Next
                </button>
                {currentStep === 9 && (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleApproveClick}
                  >
                    Approve
                  </button>
                )}
                {currentStep === 9 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleRejectClick}
                  >
                    Reject
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerMDF;

