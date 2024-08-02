import React, { useState } from 'react';
import Slider from 'react-slick';
import Header from '../../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Product.css';

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    { id: 1, vendor: 'Vendor A', name: 'Product 1', category: 'Category 1', description: 'Description 1', link: '#', images: ['https://epordo.com/us/uploads/product/fingerprint/ET90.jpg', 'data:image/jpeg;base64,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', 'data:image/jpeg;base64,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'] },
    { id: 2, vendor: 'Vendor B', name: 'Product 2', category: 'Category 2', description: 'Description 2', link: '#', images: ['https://epordo.com/us/uploads/product/fingerprint/ET90.jpg', 'data:image/jpeg;base64,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', 'data:image/jpeg;base64,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'] },
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
    images: []
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

  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
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
      images: []
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
        images: []
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
                <button className="add-product-btn" onClick={() => setIsModalOpen(true)}>
                  <i className="fas fa-plus"></i> ADD PRODUCT
                </button>
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
                    {filteredProducts.map(product => (
                      <tr key={product.id} onClick={() => handleViewProduct(product)}>
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
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={currentProduct ? currentProduct.id : newProduct.id} 
                  readOnly 
                />
                <label className="form-label">Product ID</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  name="vendor" 
                  value={currentProduct ? currentProduct.vendor : newProduct.vendor} 
                  onChange={handleProductChange} 
                />
                <label className="form-label">Vendor</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  value={currentProduct ? currentProduct.name : newProduct.name} 
                  onChange={handleProductChange} 
                />
                <label className="form-label">Product Name</label>
              </div>
              <div className="form-group my-5">
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
              <div className="form-group my-5">
                <textarea 
                  className="form-control" 
                  name="description" 
                  value={currentProduct ? currentProduct.description : newProduct.description} 
                  onChange={handleProductChange} 
                />
                <label className="form-label">Description</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  name="link" 
                  value={currentProduct ? currentProduct.link : newProduct.link} 
                  onChange={handleProductChange} 
                />
                <label className="form-label">Product Link</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="file" 
                  multiple 
                  className="form-control" 
                  onChange={handleImagesChange} 
                />
                <label className="form-label">Product Images</label>
              </div>
            </form>
            <div className="modal-footer">
              <button className="btn btn-green" onClick={handleSaveProduct}>{currentProduct ? 'Save Changes' : 'Add Product'}</button>
            </div>
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
            <div className="modal-body">
              <Slider {...settings}>
                {currentProduct.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Product ${index + 1}`} className="product-image" />
                  </div>
                ))}
              </Slider>
              <div className="product-details mt-5">
                <p><strong>Product Name:</strong> {currentProduct.name}</p>
                <p><strong>Vendor:</strong> {currentProduct.vendor}</p>
                <p><strong>Category:</strong> {currentProduct.category}</p>
                <p><strong>Description:</strong> {currentProduct.description}</p>
                <p><strong>Link:</strong> <a href={currentProduct.link}>{currentProduct.link}</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
