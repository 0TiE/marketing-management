import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './PartnerMDF.css';

const PartnerMDF = () => {
  
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
              {/* <div className="col-lg-6 search-bar-container">
                <input 
                  type="text" 
                  placeholder="Search by ID, Name, Vendor" 
                  className="search-bar" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={clearSearch}>×</button>
                )}
              </div> */}
            </div>
                <button className="add-product-btn mb-3" >
                  REQUEST MDF
                </button>
            <div className="row">
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>VENDOR</th>
                      <th>PRODUCT NAME</th>
                      <th>PRODUCT CATEGORY</th>
                      <th>LINK</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {filteredProducts.map(product => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.vendor}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td><a href={product.link} onClick={(e) => e.stopPropagation()}>Link</a></td>
                        <td className="action-icons">
                          <i className="fas fa-edit editicon" onClick={(e) => { e.stopPropagation(); handleEdit(product); }}></i>
                          <i className="fas fa-trash trashicon" onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}></i>
                        </td>
                      </tr>
                    ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerMDF;
