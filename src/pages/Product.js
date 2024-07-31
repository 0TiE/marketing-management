import React, { useState } from 'react';
import { FaEye, FaPencilAlt, FaPlusCircle } from 'react-icons/fa';
import "./ProductManagement.css";

const Product = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => prevImages.concat(imagesArray));
  };

  return (
    <div className="container-fluid">
      <div className="mt-3">
        <div className="mt-4">
          <div className="mt-4">
            <div className="d-flex flex-wrap">
              <button className="btn btn-primary text-light m-1 mb-3" id="addNewProduct" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Add New Product <FaPlusCircle />
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="dropdown dropdown-btn">
              <button
                className="btn dropdownbtn dropdown-toggle"
                type="button"
                id="dropdownPNameButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product Name
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownPNameButton">
                <li><a className="dropdown-item" id="dropdown-product" href="#">Product 1</a></li>
                <li><a className="dropdown-item" id="dropdown-product" href="#">Product 2</a></li>
                <li><a className="dropdown-item" id="dropdown-product" href="#">Product 3</a></li>
                <li><a className="dropdown-item" id="dropdown-product" href="#">Product 4</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdownbtn dropdown-toggle"
                type="button"
                id="dropdownCategoryButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                <li><a className="dropdown-item" id="dropdown-category" href="#">Category 1</a></li>
                <li><a className="dropdown-item" id="dropdown-category" href="#">Category 2</a></li>
                <li><a className="dropdown-item" id="dropdown-category" href="#">Category 3</a></li>
                <li><a className="dropdown-item" id="dropdown-category" href="#">Category 4</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdownbtn dropdown-toggle"
                type="button"
                id="dropdownVendorButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vendor
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownVendorButton">
                <li><a className="dropdown-item" id="dropdown-vendor" href="#">Vendor 1</a></li>
                <li><a className="dropdown-item" id="dropdown-vendor" href="#">Vendor 2</a></li>
                <li><a className="dropdown-item" id="dropdown-vendor" href="#">Vendor 3</a></li>
                <li><a className="dropdown-item" id="dropdown-vendor" href="#">Vendor 4</a></li>
              </ul>
            </div>
          </div>
          <div className='card-product d-flex flex-wrap justify-content-between'>
            {[...Array(8)].map((_, index) => (
              <div className="card productcard" key={index}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9wR9BBw9TgKPXZ-PeP8G_ZDCh7Tb1RbBlw&s" className="d-block w-100" alt="Product" />
                <div className="card-body">
                  <span className="prodetails-badge text-dark m-1 mb-1">Switch</span>
                  <span className="prodetails-badge text-dark m-1 mb-1">Trendnet</span>
                  <span className="prodetails-badge text-dark m-1 mb-1">Category</span>
                  <div className="cardbtn d-flex justify-content-end mt-4">
                    <a href="#" className="btn btn-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"><FaEye /></a>
                    <a href="#" className="btn btn-icon pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal1"><FaPencilAlt /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div className="modal-dialog modal-xl modle-bg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal2Label">Add New Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className="col-lg-6">
                <div className="card paddcard p-4">
                  <h5>General Information</h5>
                  <div className="mt-4">
                    <div className="d-flex flex-wrap">
                      <span className="badge partnerbadge text-dark m-1 mb-3" id="product_id">Product ID</span>
                    </div>
                  </div>
                  <form>
                    <div className="mb-3">
                      <select className="form-select" id="productVendor">
                        <option selected>Select vendor</option>
                        <option value="1">Vendor 1</option>
                        <option value="2">Vendor 2</option>
                        <option value="3">Vendor 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productName" className="form-label">Product Name</label>
                      <input type="text" className="form-control" id="productName" required />
                    </div>
                    <div className="mb-3">
                      <select className="form-select" id="productCategory">
                        <option selected>Select product category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productDescription" className="form-label">Description</label>
                      <textarea className="form-control" id="productDescription" rows="3" required></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productlink" className="form-label">Link</label>
                      <input type="text" className="form-control" id="productlink" required />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card paddcard p-4">
                  <h5>Product Media</h5>
                  <input
                    type="file"
                    id="productImage"
                    name="productImage"
                    accept="image/*"
                    multiple
                    className="btn btn-secondary mt-3"
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
                </div>
              </div>
            </div>
            <div className="modal-footer text-end">
              <button type="submit" className="btn btn-primary" id="reg_btn">Register Product</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9wR9BBw9TgKPXZ-PeP8G_ZDCh7Tb1RbBlw&s" className="img-fluid" alt="Product" />
                </div>
                <div className="col-md-6">
                  <h4>Product Name</h4>
                  <p>Product Description</p>
                  <p><strong>Category:</strong> Category</p>
                  <p><strong>Vendor:</strong> Vendor</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog modal-xl modle-bg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Edit Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-between">
              <div className="col-lg-6">
                <div className="card paddcard p-4">
                  <h5>General Information</h5>
                  <div className="mt-4">
                    <div className="d-flex flex-wrap">
                      <span className="badge partnerbadge text-dark m-1 mb-3" id="product_id">Product ID</span>
                    </div>
                  </div>
                  <form>
                    <div className="mb-3">
                      <select className="form-select" id="editProductVendor">
                        <option selected>Vendor</option>
                        <option value="1">Vendor 1</option>
                        <option value="2">Vendor 2</option>
                        <option value="3">Vendor 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editProductName" className="form-label">Product Name</label>
                      <input type="text" className="form-control" id="editProductName" value="Product Name" />
                    </div>
                    <div className="mb-3">
                      <select className="form-select" id="editProductCategory">
                        <option selected>Category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editProductDescription" className="form-label">Description</label>
                      <textarea className="form-control" id="editProductDescription" rows="3">Product Description</textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="editProductImage" className="form-label">Link</label>
                      <input type="text" className="form-control" id="editProductImage" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9wR9BBw9TgKPXZ-PeP8G_ZDCh7Tb1RbBlw&s" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card paddcard p-4">
                  <h5>Product Media</h5>
                  <input
                    type="file"
                    id="editProductImage"
                    name="productImage"
                    accept="image/*"
                    multiple
                    className="btn btn-secondary mt-3"
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
                </div>
              </div>
            </div>
            <div className="modal-footer text-end">
              <button type="submit" className="btn btn-primary" id='btn-update'>Update Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;