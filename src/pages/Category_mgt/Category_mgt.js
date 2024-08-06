import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './Category_mgt.css';

const Category_mgt = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', specification: 'Various electronic items' },
    { id: 2, name: 'Furniture', specification: 'Home and office furniture' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ id: '', name: '', specifications: [] });
  const [currentSpecification, setCurrentSpecification] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [viewCategory, setViewCategory] = useState(null);

  useEffect(() => {
    setFilteredCategories(
      categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.id.toString().includes(searchTerm)
      )
    );
  }, [searchTerm, categories]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setNewCategory({
      id: category.id,
      name: category.name,
      specifications: category.specification.split(', '),
    });
    setShowModal(true);
  };

  const handleDelete = (categoryId) => {
    setCategories(categories.filter(category => category.id !== categoryId));
  };

  const openModal = () => {
    const maxId = categories.reduce((max, category) => (category.id > max ? category.id : max), 0);
    setNewCategory({ id: maxId + 1, name: '', specifications: [] });
    setShowModal(true);
    setEditingCategory(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewCategory({ id: '', name: '', specifications: [] });
    setCurrentSpecification('');
  };

  const handleAddSpecification = () => {
    if (currentSpecification) {
      setNewCategory(prevState => ({
        ...prevState,
        specifications: [...prevState.specifications, currentSpecification],
      }));
      setCurrentSpecification('');
    }
  };

  const handleRemoveSpecification = (index) => {
    setNewCategory(prevState => ({
      ...prevState,
      specifications: prevState.specifications.filter((_, i) => i !== index),
    }));
  };

  const handleSaveCategory = () => {
    if (editingCategory) {
      setCategories(categories.map(category => 
        category.id === editingCategory.id 
          ? { ...category, name: newCategory.name, specification: newCategory.specifications.join(', ') } 
          : category
      ));
    } else {
      setCategories([...categories, { 
        id: newCategory.id, 
        name: newCategory.name, 
        specification: newCategory.specifications.join(', ') 
      }]);
    }
    closeModal();
  };

  const handleViewCategory = (category) => {
    setViewCategory(category);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
    setViewCategory(null);
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
                <button className="add-category-btn" onClick={openModal}>
                  <i className="fas fa-plus"></i> ADD CATEGORY
                </button>
              </div>
              <div className="col-lg-6 search-bar-container">
                <input 
                  type="text" 
                  placeholder="Search by ID, Name" 
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
                      <th>CATEGORY NAME</th>
                      <th>SPECIFICATION</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCategories.map(category => (
                      <tr key={category.id} onClick={() => handleViewCategory(category)}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.specification}</td>
                        <td className="action-icons">
                          <i className="fas fa-edit editicon" onClick={(e) => { e.stopPropagation(); handleEdit(category); }}></i>
                          <i className="fas fa-trash trashicon" onClick={(e) => { e.stopPropagation(); handleDelete(category.id); }}></i>
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

      {showModal && (
        <div className="modal">
          <div className="modal-content1">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>{editingCategory ? 'Edit Category' : 'Add Category'}</h2>
            </div>
            <form>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={newCategory.id} 
                  readOnly
                />
                <label className="form-label">Category ID</label>
              </div>
              <div className="form-group my-5">
                <input 
                  type="text" 
                  className="form-control" 
                  value={newCategory.name} 
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} 
                />
                <label className="form-label">Category Name</label>
              </div>
              <div className="form-group my-5 d-flex">
                <input 
                  type="text" 
                  className="form-control" 
                  value={currentSpecification} 
                  onChange={(e) => setCurrentSpecification(e.target.value)} 
                />
                <label className="form-label">Specification</label>
                <button type="button" className="add-specification-btn" onClick={handleAddSpecification}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="specifications-list">
                {newCategory.specifications.map((spec, index) => (
                  <div key={index} className="specification-item">
                    {spec}
                    <span className="remove-specification" onClick={() => handleRemoveSpecification(index)}>&times;</span>
                  </div>
                ))}
              </div>
            </form>
            <div className="modal-footer">
              <button className="btn btn-green" onClick={handleSaveCategory}>
                {editingCategory ? 'Save Changes' : 'Add Category'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showViewModal && viewCategory && (
        <div className="modal">
          <div className="modal-content1">
            <div className="modal-header">
              <span className="close" onClick={closeViewModal}>&times;</span>
              <h2>View Category</h2>
            </div>
            <div className="modal-body">
              <p><strong>Category ID:</strong> {viewCategory.id}</p>
              <p><strong>Category Name:</strong> {viewCategory.name}</p>
              <p><strong>Specifications:</strong></p>
              <ul>
                {viewCategory.specification.split(', ').map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category_mgt;
