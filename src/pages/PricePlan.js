import React from 'react'
import "./PricePlan.css";

function PricePlan() {
    return (
        <div className="container-fluid">
        <div className="row">
        
          <div className="mt-3">
            <div className="mt-4">
              <div className='card-product d-flex flex-wrap justify-content-between'>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
                    </div>
                </div>
                <div class="card cardbatch">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <h5 class="card-title">Batch</h5>
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
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex justify-content-between">
                    <div class="col-lg-12">
                        <div className="card p-4">
                        <div className="mt-4">
                            <div className="d-flex flex-wrap">
                            <span className="badge grnbadge text-dark m-1 mb-3" id='grnid'>GRN ID</span>
                            </div>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="ProductName" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="ProductName" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qty" className="form-label">Quantity</label>
                                <input type="number" className="form-control" id="qty" required/>
                            </div>
                            <div className='mb-3'> 
                                <label htmlFor="margin" className="form-label mb-4">Add Margin</label>
                                <div className="mb-3 d-flex justify-content-between g-5">
                                    <label htmlFor="sales" className="form-label label">Sales</label>
                                    <input type="number" className="form-control" id="salesmargin" required/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="marketing" className="form-label label">Marketing</label>
                                    <input type="number" className="form-control" id="marketingmargin" value={100} />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <label htmlFor="finance" className="form-label label">Finance</label>
                                    <input type="number" className="form-control" id="financemargin" value={100}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="unitprice" className="form-label">Unit Price</label>
                                    <input type="number" className="form-control" id="unitprice" required/>
                            </div>
                            
                        </form>
                        </div>
                    </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" id='btn-setprice' data-bs-dismiss="modal" data-bs-target="#passwordModal" data-bs-toggle="modal">Set Price</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="passwordModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="passwordModalLabel">Enter Password</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <form>
                              <div class="mb-3">
                                  <label for="password" class="form-label">Password</label>
                                  <input type="password" class="form-control" id="password" required/>
                              </div>
                              <button type="submit" class="btn btn-primary" id='button-approve'>Approve</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
    )
  }
  
  export default PricePlan