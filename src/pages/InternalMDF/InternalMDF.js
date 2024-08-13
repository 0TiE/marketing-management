import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './InternalMDF.css';

const InternalMDF = () => {
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
            <div className="form-group my-5">
              <input type="text" className="form-control" name="id" value={formData.id} readOnly />
              <label className="form-label">FRN #</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="businessUnit" value={formData.businessUnit} onChange={handleInputChange} />
              <label className="form-label">Business Unit Name</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="productName" value={formData.productName} onChange={handleInputChange} />
              <label className="form-label">Product(s)</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="productManager" value={formData.productManager} onChange={handleInputChange} />
              <label className="form-label">Product Manager</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="buHead" value={formData.buHead} onChange={handleInputChange} />
              <label className="form-label">BU Head</label>
            </div>
            <div className="form-group my-5">
              <input type="text" className="form-control" name="marketingResource" value={formData.marketingResource} onChange={handleInputChange} />
              <label className="form-label">Marketing Resource</label>
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
                <label className="form-label">MDF "X" Time</label>
              </div>
              <div className="form-group my-5">
                <input type="text" className="form-control" name="timeline" onChange={handleInputChange} />
                <label className="form-label">Closure Forecast (Timeline)</label>
              </div>
            </>
          );

          case 5:
            return (
              <>
                <h5>Campaign Ownership</h5>
                <div className="form-group my-5">
                  <textarea 
                    className="form-control" 
                    name="campaignownership" 
                    onChange={handleInputChange} 
                    rows="4" 
                  />
                  <label className="form-label">Campaign Ownership</label>
                </div>
                
              </>
            );
      
            case 6:
              return (
                <>
                <h5>Partner Details</h5>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" name="companyname" onChange={handleInputChange} />
                    <label className="form-label">Company Name</label>
                  </div>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" name="ownership" onChange={handleInputChange} />
                    <label className="form-label">Ownership / Responsible Person Name</label>
                  </div>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" name="designation" onChange={handleInputChange} />
                    <label className="form-label">Designation</label>
                  </div>
                  <div className="form-group my-5">
                    <input type="text" className="form-control" name="contactnumber" onChange={handleInputChange} />
                    <label className="form-label">Contact Number & Email Address</label>
                  </div>
                </>
              );

              case 7:
                return (
                  <>
                    <h5>Branding Details</h5>
                    <div className="form-group my-5">
                      <textarea 
                        className="form-control" 
                        name="brandingdetails" 
                        onChange={handleInputChange} 
                        rows="4" 
                      />
                      <label className="form-label">Branding Details</label>
                    </div>
                    
                  </>
                );
            
                case 8:
                  return (
                    <>
                    <h5>Vendor Details & Contribution</h5>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="vendorname" onChange={handleInputChange} />
                        <label className="form-label">Vendor Name</label>
                      </div>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="contactperson" onChange={handleInputChange} />
                        <label className="form-label">Contact Person</label>
                      </div>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="designation" onChange={handleInputChange} />
                        <label className="form-label">Designation</label>
                      </div>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="contactnumber" onChange={handleInputChange} />
                        <label className="form-label">Contact Number & Email Address</label>
                      </div>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="mdfusd" onChange={handleInputChange} />
                        <label className="form-label">MDF From Vendor (USD)</label>
                      </div>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="mdflkr" onChange={handleInputChange} />
                        <label className="form-label">MDF From Vendor (LKR)</label>
                      </div>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="modemdf" onChange={handleInputChange} />
                        <label className="form-label">Mode of MDF</label>
                      </div>
                      <div className="form-group my-5">
                        <input 
                          type="datetime-local" 
                          className="form-control" 
                          name="receivedate" 
                          value={formData.goLiveDate} 
                          onChange={handleInputChange} 
                        />
                        <label className="form-label">Date Receive Vendor MDF</label>
                      </div>
                    </>
                  );

                  case 9:
                  return (
                    <>
                    <h5>Connex Contribution</h5>
                      <div className="form-group my-5">
                        <input type="text" className="form-control" name="c_contribution" onChange={handleInputChange} />
                        <label className="form-label">Connex Contribution (LKR)</label>
                      </div>
                    </>
                  );
        
      default:
        return null;
    }
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
                <h3>Internal MDF</h3>
              </div>
            </div>
            <button className="add-product-btn mb-3" onClick={handleOpenModal}>
              REQUEST MDF
            </button>
            <div className="row">
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>MDF ID</th>
                      <th>BUSINESS UNIT NAME</th>
                      <th>PRODUCT NAME</th>
                      <th>PRODUCT CATEGORY</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map through your data here */}
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
                    Submit
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

export default InternalMDF;
