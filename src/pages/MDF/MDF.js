import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './MDF.css';

const MDF = () => {
  

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
        <div className="col-lg-11">
          <Header />
        </div>
      </div>
      
    </div>
  );
}

export default MDF;