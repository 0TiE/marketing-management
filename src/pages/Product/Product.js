import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Product.css';

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    { id: 1, vendor: 'Vendor A', name: 'Product 1', category: 'Category 1', link: '#' },
    { id: 2, vendor: 'Vendor B', name: 'Product 2', category: 'Category 2', link: '#' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setCurrentProduct(null);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImagesChange = (e) => {
    setNewProduct(prevState => ({ ...prevState, images: [...e.target.files] }));
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      id: products.length + 2,
      vendor: '',
      name: '',
      category: '',
      description: '',
      link: '',
      images: []
    });
    closeModal();
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
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.vendor}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td><a href={product.link}>Link</a></td>
                        <td className="action-icons">
                          <i className="fas fa-edit editicon" onClick={() => handleEdit(product)}></i>
                          <i className="fas fa-trash trashicon" onClick={() => handleDelete(product.id)}></i>
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
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
            {!currentProduct && (
              <>
                <label>Product ID: {newProduct.id}</label>
                <div className="form-group">
                  <label>Vendor:</label>
                  <input type="text" name="vendor" value={newProduct.vendor} onChange={handleNewProductChange} />
                </div>
                <div className="form-group">
                  <label>Product Name:</label>
                  <input type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} />
                </div>
                <div className="form-group">
                  <label>Product Category:</label>
                  <select name="category" value={newProduct.category} onChange={handleNewProductChange}>
                    <option value="">Select Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <textarea name="description" value={newProduct.description} onChange={handleNewProductChange} />
                </div>
                <div className="form-group">
                  <label>Product Link:</label>
                  <input type="text" name="link" value={newProduct.link} onChange={handleNewProductChange} />
                </div>
                <div className="form-group">
                  <label>Product Images:</label>
                  <input type="file" multiple onChange={handleImagesChange} />
                </div>
                <button onClick={handleAddProduct}>Add Product</button>
              </>
            )}
            {currentProduct && (
              <p>Product ID: {currentProduct.id}</p>,
              <p>hi</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;