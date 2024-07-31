import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa'; 

const CMM = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [specifications, setSpecifications] = useState([]);
  const [specification, setSpecification] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNewCategory = () => {
    setIsEditMode(false);
    setCategoryName('');
    setSpecifications([]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCategory = () => {
    // Logic to save the new category or update the existing category
    if (isEditMode) {
      console.log('Updated Category:', { categoryName, specifications });
      // Update the existing category logic here
    } else {
      console.log('New Category:', { categoryName, specifications });
      // Add new category logic here
    }
    setCategoryName('');
    setSpecifications([]);
    setShowModal(false);
  };

  const handleAddSpecification = () => {
    if (specification) {
      setSpecifications([...specifications, specification]);
      setSpecification('');
    }
  };

  const handleEditCard = (cardIndex) => {
    setIsEditMode(true);
    setEditIndex(cardIndex);
    // Logic to load the existing category data into the modal
    const existingCategory = {}; // Fetch the existing category data based on cardIndex
    setCategoryName(existingCategory.categoryName || 'Category ' + (cardIndex + 1));
    setSpecifications(existingCategory.specifications || []);
    setShowModal(true);
  };

  return (
    <div className="container p-3" id="page2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Categories</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNewCategory}
          data-bs-toggle="modal"
          data-bs-target="#addCategoryModal"
        >
          Add New Category +
        </button>
      </div>
      <div className="row">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" id={`category-card-${idx}`}>
              <div className="card-body">
                <h5 className="card-title">Category {idx + 1}</h5>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => handleEditCard(idx)}
                  data-bs-toggle="modal"
                  data-bs-target="#addCategoryModal"
                >
                  <FaPencilAlt /> 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCategoryModalLabel">{isEditMode ? 'Edit Category' : 'Add New Category'}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="categoryName" className="form-label">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="specification" className="form-label">Specification</label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="specification"
                    value={specification}
                    onChange={(e) => setSpecification(e.target.value)}
                  />
                  <button type="button" className="btn btn-secondary ms-2" onClick={handleAddSpecification}>+</button>
                </div>
              </div>
              <div className="mt-3">
                <h5>Specifications</h5>
                <ul>
                  {specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveCategory}>{isEditMode ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMM;
