import React, { useState } from 'react';
import Slider from 'react-slick';
import Header from '../../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Product.css';

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    { id: 1, vendor: 'Vendor A', name: 'Product 1', category: 'Category 1', description: 'Description 1', link: '#', images: [], status: 'Available' },
    { id: 2, vendor: 'Vendor B', name: 'Product 2', category: 'Category 2', description: 'Description 2', link: '#', images: [], status: 'Not Available' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    id: products.length + 1,
    vendor: '',
    name: '',
    category: '',
    description: '',
    link: '',
    images: [],
    status: 'Available'
  });

  const filteredProducts = products.filter(product =>
    product.id.toString().includes(searchTerm) ||
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewProduct({
      id: products.length + 1,
      vendor: '',
      name: '',
      category: '',
      description: '',
      link: '',
      images: [],
      status: 'Available'
    });
    setCurrentProduct(null);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setCurrentProduct(null);
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    if (currentProduct) {
      setCurrentProduct(prevState => ({ ...prevState, [name]: value }));
    } else {
      setNewProduct(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleImagesChange = (e) => {
    const files = [...e.target.files];
    if (currentProduct) {
      setCurrentProduct(prevState => ({ ...prevState, images: files }));
    } else {
      setNewProduct(prevState => ({ ...prevState, images: files }));
    }
  };

  const handleSaveProduct = () => {
    if (currentProduct) {
      setProducts(products.map(product => product.id === currentProduct.id ? currentProduct : product));
    } else {
      setProducts([...products, newProduct]);
      setNewProduct({
        id: products.length + 1,
        vendor: '',
        name: '',
        category: '',
        description: '',
        link: '',
        images: [],
        status: 'Available'
      });
    }
    closeModal();
  };

  const handleViewProduct = (product) => {
    setCurrentProduct(product);
    setIsViewModalOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
                  <h3>Product Management</h3>
              </div>
              <div className="col-lg-6 search-bar-container">
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
              </div>
            </div>
            <button className="add-product-btn mb-3" onClick={() => setIsModalOpen(true)}>
                  <i className="fas fa-plus"></i> ADD PRODUCT
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
                      <th>STATUS</th>
                      <th>LINK</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <tr key={product.id} onClick={() => handleViewProduct(product)}>
                        <td>{product.id}</td>
                        <td>{product.vendor}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td className={product.status === 'Available' ? 'status-available' : 'status-not-available'}>
                          {product.status}
                        </td>
                        <td><a href={product.link} onClick={(e) => e.stopPropagation()}>Link</a></td>
                        <td className="action-icons">
                          <i className="fas fa-edit editicon" onClick={(e) => { e.stopPropagation(); handleEdit(product); }}></i>
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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
            </div>
            <form>
              <div className="form-group mt-4 mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  value={currentProduct ? currentProduct.id : newProduct.id} 
                  readOnly 
                />
                <label className="form-label">Product ID</label>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="vendor" 
                      value={currentProduct ? currentProduct.vendor : newProduct.vendor} 
                      onChange={handleProductChange} 
                    />
                    <label className="form-label">Vendor</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      value={currentProduct ? currentProduct.name : newProduct.name} 
                      onChange={handleProductChange} 
                    />
                    <label className="form-label">Product Name</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <select 
                      className="form-control" 
                      name="category" 
                      value={currentProduct ? currentProduct.category : newProduct.category} 
                      onChange={handleProductChange}
                    >
                      <option value="">Select Category</option>
                      <option value="Category 1">Category 1</option>
                      <option value="Category 2">Category 2</option>
                    </select>
                    <label className="form-label">Product Category</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <select 
                      className="form-control" 
                      name="status" 
                      value={currentProduct ? currentProduct.status : newProduct.status} 
                      onChange={handleProductChange}
                    >
                      <option value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                    <label className="form-label">Product Status</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="link" 
                      value={currentProduct ? currentProduct.link : newProduct.link} 
                      onChange={handleProductChange} 
                    />
                    <label className="form-label">Product Link</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <input 
                      type="file" 
                      className="form-control" 
                      multiple 
                      onChange={handleImagesChange} 
                    />
                    <label className="form-label">Product Images</label>
                  </div>
                </div>
              </div>
              <div className="form-group my-3">
                <textarea 
                  className="form-control" 
                  name="description" 
                  value={currentProduct ? currentProduct.description : newProduct.description} 
                  onChange={handleProductChange}
                ></textarea>
                <label className="form-label">Product Description</label>
              </div>
              <button type="button" className="btn btn-primary mt-4" onClick={handleSaveProduct}>Save</button>
            </form>
          </div>
        </div>
      )}
      {isViewModalOpen && currentProduct && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={closeViewModal}>&times;</span>
              <h2>View Product</h2>
            </div>
            <div className="product-details">
              <p><strong>Product ID:</strong> {currentProduct.id}</p>
              <p><strong>Vendor:</strong> {currentProduct.vendor}</p>
              <p><strong>Name:</strong> {currentProduct.name}</p>
              <p><strong>Category:</strong> {currentProduct.category}</p>
              <p><strong>Status:</strong> {currentProduct.status}</p>
              <p><strong>Link:</strong> <a href={currentProduct.link}>{currentProduct.link}</a></p>
              <p><strong>Description:</strong> {currentProduct.description}</p>
              {currentProduct.images.length > 0 && (
                <div className="product-images">
                  <h4>Product Images:</h4>
                  <Slider {...settings}>
                    {currentProduct.images.map((image, index) => (
                      <div key={index}>
                        <img src={URL.createObjectURL(image)} alt={`Product Image ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
