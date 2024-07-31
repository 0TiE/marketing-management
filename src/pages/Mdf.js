import React, { useState } from 'react';
import CardSection from './CardSection'; 

const Mdf = () => {
  const [activeTab, setActiveTab] = useState('internal');
  const [activeStatus, setActiveStatus] = useState('requested');
  const [filters, setFilters] = useState({
    timeframe: 'All-time',
    partner: 'All',
    product: 'All'
  });
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleRequestMdfClick = () => {
    setShowForm(true);
    setCurrentStep(1); // Start from the first step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Form submitted");
    setShowForm(false);
    setCurrentStep(1); // Reset to first step after submission
  };

  const handleBackClick = () => {
    setShowForm(false);
    setCurrentStep(1); // Reset to first step when going back to the main content
  };

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderContent = () => {
    return <CardSection activeTab={activeTab} activeStatus={activeStatus} filters={filters} />;
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 1: Business Unit Details</h3>
            <div className="mb-3">
              <label htmlFor="frn" className="form-label">FRN #</label>
              <input type="text" className="form-control" id="frn" required />
            </div>
            <div className="mb-3">
              <label htmlFor="businessUnitName" className="form-label">Business Unit Name</label>
              <input type="text" className="form-control" id="businessUnitName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="products" className="form-label">Product(s)</label>
              <input type="text" className="form-control" id="products" required />
            </div>
            <div className="mb-3">
              <label htmlFor="productManager" className="form-label">Product Manager</label>
              <input type="text" className="form-control" id="productManager" required />
            </div>
            <div className="mb-3">
              <label htmlFor="buHead" className="form-label">BU Head</label>
              <input type="text" className="form-control" id="buHead" required />
            </div>
            <div className="mb-3">
              <label htmlFor="marketingResource" className="form-label">Marketing Resource</label>
              <input type="text" className="form-control" id="marketingResource" required />
            </div>
           
            <button type="button" className="btn btn-secondary" onClick={handleBackClick}>Cancel</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
          </>
        );
      case 2:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 2: Campaign Details</h3>
            <div className="mb-3">
              <label htmlFor="campaignName" className="form-label">Campaign Name</label>
              <input type="text" className="form-control" id="campaignName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="campaignGoals" className="form-label">Campaign Goals / Objectives</label>
              <textarea className="form-control" id="campaignGoals" rows="3" required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="targetMarket" className="form-label">Target Market & Personas</label>
              <textarea className="form-control" id="targetMarket" rows="3" required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="targetRegions" className="form-label">Target Region(s)</label>
              <input type="text" className="form-control" id="targetRegions" required />
            </div>
            <div className="mb-3">
              <label htmlFor="campaignDescription" className="form-label">Campaign Description</label>
              <textarea className="form-control" id="campaignDescription" rows="3" required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="targetAudienceSize" className="form-label">Target Number of Attendees or Audience Size</label>
              <input type="number" className="form-control" id="targetAudienceSize" required />
            </div>
            <div className="mb-3">
              <label htmlFor="goLiveDate" className="form-label">Go Live Date(s)</label>
              <input type="date" className="form-control" id="goLiveDate" required />
            </div>
            
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
          </>
        );
        case 3:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 3: MDF Request</h3>
            <div className="mb-3">
              <label htmlFor="mdfAmount" className="form-label">MDF Amount (Include all taxes)</label>
              <input type="number" className="form-control" id="mdfAmount" required />
            </div>
            <div className="mb-3">
              <label htmlFor="taxValue" className="form-label">Tax Value</label>
              <input type="number" className="form-control" id="taxValue" required />
            </div>
            <div className="mb-3">
              <label htmlFor="totalValue" className="form-label">Total Value (Include Tax)</label>
              <input type="number" className="form-control" id="totalValue" required />
            </div>
            
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
            
          </>
        );
      case 4:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 4: Expected Outcomes</h3>
            <div className="mb-3">
              <label htmlFor="newDealRegistrations" className="form-label">Target Number of New Deal Registrations</label>
              <input type="number" className="form-control" id="newDealRegistrations" required />
            </div>
            <div className="mb-3">
              <label htmlFor="expectedRoi" className="form-label">Expected ROI in Net New Pipeline (in LKR)</label>
              <input type="number" className="form-control" id="expectedRoi" required />
            </div>
            <div className="mb-3">
              <label htmlFor="roiTime" className="form-label">MDF "X" Time</label>
              <input type="text" className="form-control" id="roiTime" required />
            </div>
            <div className="mb-3">
              <label htmlFor="closureForecast" className="form-label">Closure Forecast (Timeline)</label>
              <input type="text" className="form-control" id="closureForecast" required />
            </div>
           
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
            
          </>
        );
      case 5:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 5: Campaign Ownership</h3>
            <div className="mb-3">
              <label htmlFor="campaignOwnership" className="form-label">Campaign Ownership</label>
              <textarea className="form-control" id="campaignOwnership" rows="3" required></textarea>
            </div>
            
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
          </>
        );
      case 6:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 6: Partner Details</h3>
            <div className="mb-3">
              <label htmlFor="partnerCompanyName" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="partnerCompanyName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="partnerContactName" className="form-label">Ownership / Responsible Person Name</label>
              <input type="text" className="form-control" id="partnerContactName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="partnerContactDesignation" className="form-label">Designation</label>
              <input type="text" className="form-control" id="partnerContactDesignation" required />
            </div>
            <div className="mb-3">
              <label htmlFor="partnerContactInfo" className="form-label">Contact Number & Email Address</label>
              <input type="text" className="form-control" id="partnerContactInfo" required />
            </div>
            
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
          </>
        );
      case 7:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 7: Branding Details</h3>
            <div className="mb-3">
              <label htmlFor="brandingDetails" className="form-label">Branding Details</label>
              <textarea className="form-control" id="brandingDetails" rows="3" required></textarea>
            </div>
            
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
          </>
        );
      case 8:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 8: Vendor Details & Contribution</h3>
            <div className="mb-3">
              <label htmlFor="vendorName" className="form-label">Vendor Name</label>
              <input type="text" className="form-control" id="vendorName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="vendorContactName" className="form-label">Contact Person</label>
              <input type="text" className="form-control" id="vendorContactName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="vendorContactDesignation" className="form-label">Designation</label>
              <input type="text" className="form-control" id="vendorContactDesignation" required />
            </div>
            <div className="mb-3">
              <label htmlFor="vendorContactInfo" className="form-label">Contact Number & Email Address</label>
              <input type="text" className="form-control" id="vendorContactInfo" required />
            </div>
            <div className="mb-3">
              <label htmlFor="vendorMdfUsd" className="form-label">MDF From Vendor (USD)</label>
              <input type="number" className="form-control" id="vendorMdfUsd" required />
            </div>
            <div className="mb-3">
              <label htmlFor="vendorMdfLkr" className="form-label">MDF From Vendor (LKR)</label>
              <input type="number" className="form-control" id="vendorMdfLkr" required />
            </div>
            <div className="mb-3">
              <label htmlFor="mdfMode" className="form-label">Mode of MDF</label>
              <input type="text" className="form-control" id="mdfMode" required />
            </div>
            <div className="mb-3">
              <label htmlFor="vendorMdfReceiveDate" className="form-label">Date Receive Vendor MDF</label>
              <input type="date" className="form-control" id="vendorMdfReceiveDate" required />
            </div>
            
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleNext}>Next</button>
          </>
        );
      case 9:
        return (
          <>
            <h2>MDF Request Form</h2>
            <h3>Section 9: Connex Contribution</h3>
            <div className="mb-3">
              <label htmlFor="connexContribution" className="form-label">Connex Contribution (LKR)</label>
              <input type="number" className="form-control" id="connexContribution" required />
            </div>
            
            
            <button type="button" className="btn btn-secondary" onClick={handleBackClick}>Cancel</button>
            <button type="button" className="btn btn-secondary me-2" onClick={handlePrev}>Back</button>
            <button type="submit" className="btn btn-primary me-2">Submit</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container p-3" id="mdf">
      <h1 className="mb-4">MDF</h1>
      
      {!showForm && (
        <>
          {/* Button Group centered */}
          <div className="d-flex justify-content-center mb-3" id="toggle-buttons">
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${activeTab === 'internal' ? 'btn-primary' : 'btn-secondary'}`}
                id="internal-button"
                onClick={() => setActiveTab('internal')}
              >
                INTERNAL
              </button>
              <button
                type="button"
                className={`btn ${activeTab === 'partner' ? 'btn-primary' : 'btn-secondary'}`}
                id="partner-button"
                onClick={() => setActiveTab('partner')}
              >
                PARTNER
              </button>
            </div>
          </div>
          
          <div className="d-flex justify-content-around mb-3" id="status-buttons">
            <button
              type="button"
              className={`btn ${activeStatus === 'requested' ? 'btn-primary' : 'btn-light'}`}
              id="requested-button"
              onClick={() => setActiveStatus('requested')}
            >
              Requested
            </button>
            <button
              type="button"
              className={`btn ${activeStatus === 'pending' ? 'btn-primary' : 'btn-light'}`}
              id="pending-button"
              onClick={() => setActiveStatus('pending')}
            >
              Pending
            </button>
            <button
              type="button"
              className={`btn ${activeStatus === 'approved' ? 'btn-primary' : 'btn-light'}`}
              id="approved-button"
              onClick={() => setActiveStatus('approved')}
            >
              Approved
            </button>
            <button
              type="button"
              className={`btn ${activeStatus === 'issued' ? 'btn-primary' : 'btn-light'}`}
              id="issued-button"
              onClick={() => setActiveStatus('issued')}
            >
               Issued
            </button>
            <button type="button" className="btn btn-primary mb-3 float-end" id="request-mdf-button" onClick={handleRequestMdfClick}>Request MDF</button>
            </div>
          
                    
                    <div className="d-flex justify-content-around mb-4" id="filter-dropdowns">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown-timeframe" data-bs-toggle="dropdown" aria-expanded="false">
                Timeframe: {filters.timeframe}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdown-timeframe">
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('timeframe', 'All-time')}>All-time</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('timeframe', 'Option 1')}>Option 1</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('timeframe', 'Option 2')}>Option 2</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown-partner" data-bs-toggle="dropdown" aria-expanded="false">
                Partner: {filters.partner}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdown-partner">
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('partner', 'All')}>All</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('partner', 'Option 1')}>Option 1</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('partner', 'Option 2')}>Option 2</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdown-product" data-bs-toggle="dropdown" aria-expanded="false">
                Product: {filters.product}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdown-product">
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('product', 'All')}>All</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('product', 'Option 1')}>Option 1</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('product', 'Option 2')}>Option 2</a></li>
              </ul>
            </div>
          </div>
          
          
        </>
      )}
      
      {/* Content based on active tab and status */}
      {!showForm ? renderContent() : (
        <form onSubmit={handleSubmit}>
          {renderForm()}
        </form>
      )}
    </div>
  );
}

export default Mdf;

         
