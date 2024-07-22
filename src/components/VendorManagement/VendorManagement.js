import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

function VendorManagement() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => prevImages.concat(imagesArray));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <div className="col-lg-9 mt-3">
          <div className="mt-4">
            <div className="mt-4">
              <div className="d-flex flex-wrap">
                <button className="btn btn-primary text-light m-1 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add New Vendor <i className="fa fa-plus-circle"></i></button>
              </div>
            </div>
            
            <div className='card-product d-flex flex-wrap justify-content-between'>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div><div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card productcard">
                <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-pencil-alt"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            {/* <nav aria-label="Page navigation example" className="mt-5">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modle-bg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Edit Vendor</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className="col-lg-12">
                <div className="card paddcard p-4">
                  <h5>General Information</h5>
                <div class="row">
                  <div class="col-lg-6">
                    <div className="mt-4">
                      <div className="d-flex flex-wrap">
                        <span className="badge partnerbadge text-dark m-1 mb-3">Vendor ID</span>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Vendor Name</label>
                        <input type="text" className="form-control" id="productName" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="vendorEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="vendoremail" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label">Description</label>
                        <textarea className="form-control" id="productDescription" rows="3" required></textarea>
                      </div>

                      
                        <label htmlFor="productDescription" className="form-label mb-3">Pillars</label>
                        <div class="d-flex justify-content-between flex-wrap mb-3">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                              Pillar 1
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 2
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 3
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                              Pillar 4
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 5
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 6
                            </label>
                          </div>
                        </div>
    
                    </form>
                  </div>
                  <div class="col-lg-5">
                    <input
                      type="file"
                      id="productImage"
                      name="productImage"
                      accept="image/*"
                      multiple
                      className="btn btn-secondary mt-3 mb-3"
                      onChange={handleImageChange}
                    />
                    {selectedImages.length > 0 && (
                      <div className="mt-3">
                        {selectedImages.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Selected ${index}`}
                            style={{ maxWidth: '30%', height: 'auto', marginBottom: '10px' }}
                          />
                        ))}
                      </div>
                    )}
                      <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">WebLink</label>
                        <input type="text" className="form-control" id="productImage" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="productName" required/>
                      </div>
                      <div className="mb-3">
                        <select className="form-select" id="productCategory" required>
                          <option selected>Select TAX Register Status</option>
                          <option value="1">Status 1</option>
                          <option value="2">Status 2</option>
                          <option value="3">Status 3</option>
                        </select>
                      </div>
                      
                      
                  </div>
                </div>
                </div>
              </div>
              
            </div>
            <div className="modal-footer text-end">
              <button type="submit" className="btn btn-primary">Update Vendor</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-xl modle-bg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal2Label">Add New Vendor</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className="col-lg-12">
                <div className="card paddcard p-4">
                  <h5>General Information</h5>
                <div class="row">
                  <div class="col-lg-6">
                    <div className="mt-4">
                      <div className="d-flex flex-wrap">
                        <span className="badge partnerbadge text-dark m-1 mb-3">Vendor ID</span>
                      </div>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Vendor Name</label>
                        <input type="text" className="form-control" id="productName" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="vendorEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="vendoremail" required/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label">Description</label>
                        <textarea className="form-control" id="productDescription" rows="3"></textarea>
                      </div>

                      
                        <label htmlFor="productDescription" className="form-label mb-3">Pillars</label>
                        <div class="d-flex justify-content-between flex-wrap mb-3">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                              Pillar 1
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 2
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 3
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                              Pillar 4
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 5
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                            Pillar 6
                            </label>
                          </div>
                        </div>
    
                    </form>
                  </div>
                  <div class="col-lg-5">
                    <input
                      type="file"
                      id="productImage"
                      name="productImage"
                      accept="image/*"
                      multiple
                      className="btn btn-secondary mt-3 mb-3"
                      onChange={handleImageChange}
                    />
                    {selectedImages.length > 0 && (
                      <div className="mt-3">
                        {selectedImages.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Selected ${index}`}
                            style={{ maxWidth: '30%', height: 'auto', marginBottom: '10px' }}
                          />
                        ))}
                      </div>
                    )}
                      <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">WebLink</label>
                        <input type="text" className="form-control" id="productImage" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="productName" />
                      </div>
                      <div className="mb-3">
                        <select className="form-select" id="productCategory">
                          <option selected>Select TAX Register Status</option>
                          <option value="1">Status 1</option>
                          <option value="2">Status 2</option>
                          <option value="3">Status 3</option>
                        </select>
                      </div>
                      
                      
                  </div>
                </div>
                </div>
              </div>
              
            </div>
            <div className="modal-footer text-end">
              <button type="submit" className="btn btn-primary">Register Vendor</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default VendorManagement