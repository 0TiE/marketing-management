import React from 'react'
import "./PartnerRequest.css";

function PartnerRequest() {
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 bg-dark text-white p-4">
          <h3>Sidebar</h3>
          <p>Some sidebar content here.</p>
          <p>Some sidebar content here.</p>
          <p>Some sidebar content here.</p>
          <p>Some sidebar content here.</p>
        </div>

        <div className="col-lg-9 mt-3">
          <div className="d-flex justify-content-start align-items-center mb-3">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownAllTimeButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All-time
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownAllTimeButton">
                <li><a className="dropdown-item" id="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" id="dropdown-item" href="#">This Week</a></li>
                <li><a className="dropdown-item" id="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" id="dropdown-item" href="#">All-time</a></li>
              </ul>
            </div>
          </div>

          <div className="card rounded mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">NEW requests</h5>
              </div>
              <div className="table-responsive table-scroll">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">REQ ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">BR num</th>
                      <th scope="col">TP</th>
                      <th scope="col">email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>R001</td>
                      <td>Test</td>
                      <td>Test</td>
                      <td>Test</td>
                      <td>Test</td>
                      <td><button className="btn btn-primary">Assign</button></td>
                    </tr>
                    <tr>
                      <td>R001</td>
                      <td>Test</td>
                      <td>Test</td>
                      <td>Test</td>
                      <td>Test</td>
                      <td><button className="btn btn-primary">Assign</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="mt-4">
              <div className="d-flex flex-wrap">
                <span className="badge partnerbadge text-dark m-1 mb-3">List of Partners</span>
              </div>
            </div>
            <div className="card rounded">
              <div className="card-body">
                <div className="table-responsive table-scroll">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">PID</th>
                        <th scope="col">Company</th>
                        <th scope="col">Product</th>
                        <th scope="col">Status</th>
                        <th scope="col">Statics</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>P001</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                      </tr>
                      <tr>
                        <td>P001</td>
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
      </div>
    </div>
  )
}

export default PartnerRequest