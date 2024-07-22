import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import "./PartnerManagement.css";

function PartnerManagement() {
  return (
    <div class="container-fluid">
      <div className="row">
        
          <Sidebar />
       
        <div className="col-lg-9 mt-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" id="requested-tab" data-bs-toggle="pill" href="#requested">Requested</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="approved-tab" data-bs-toggle="pill" href="#approved">Approved</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="rejected-tab" data-bs-toggle="pill" href="#rejected">Rejected</a>
            </li>
          </ul>

          <div class="tab-content mt-5">
            <div class="tab-pane fade show active" id="requested">
            <div class="card rounded mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title">New Requests</h5>
                  <form class="form-inline d-flex my-2 my-lg-0">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                </div>
                <div class="table-responsive tablescroll">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">REQ ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">BR Number</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal" onclick="loadModalContent(this)">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal" >
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                      <tr data-bs-toggle="modal" data-bs-target="#requestModal">
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td><button class="btn btn-primary">Assign</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            </div>
            <div class="tab-pane fade" id="approved">
            <div class="card rounded mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title">Approved Requests</h5>
                  <form class="form-inline d-flex my-2 my-lg-0">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                </div>
                <div class="table-responsive tablescroll">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">REQ ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">BR Number</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
            <div class="tab-pane fade" id="rejected">
            <div class="card rounded mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title">Rejected Requests</h5>
                  <form class="form-inline d-flex my-2 my-lg-0">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                </div>
                <div class="table-responsive tablescroll">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">REQ ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">BR Number</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>R001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modle-bg">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex justify-content-between">
                  <div className="col-lg-12">
                    
                    <div class="row">
                      <div class="col-lg-12">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="reqid" className="form-label">Request ID</label>
                            <input type="text" className="form-control" id="reqId" required/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="brnumber" className="form-label">BR Number</label>
                            <input type="text" className="form-control" id="brnum" required/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phonenum" required/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required/>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                <div className="modal-footer text-end">
                  <button type="submit" className="btn btn-primary" data-bs-target="#passwordModal" data-bs-toggle="modal" data-bs-dismiss="modal">Approve</button>
                  <button type="submit" className="btn btn-danger" data-bs-target="#rejectModal" data-bs-toggle="modal" data-bs-dismiss="modal"> Reject</button>
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
                              <button type="submit" class="btn btn-primary">Approve</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

          <div class="modal fade" id="rejectModal" tabindex="-1" aria-labelledby="rejectModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="rejectModalLabel">Rejection Comment</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <form>
                              <div class="mb-3">
                                  <label for="rejectionComment" class="form-label">Comment</label>
                                  <textarea class="form-control" id="rejectionComment" rows="3" required></textarea>
                              </div>
                              <button type="submit" class="btn btn-danger">Reject</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    
    </div>
  )
}

export default PartnerManagement