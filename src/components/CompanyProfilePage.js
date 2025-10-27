import React, { useState } from 'react';
import './CompanyProfilePage.css';

const CompanyProfilePage = () => {
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [companyData, setCompanyData] = useState({
    username: 'glow_admin',
    companyName: 'GlowSkin Lab',
    dateFounded: '2019',
    region: 'North America',
    employees: '120',
    industry: 'Beauty / Skincare',
    brandDescription: 'Clean SPF-focused skincare. Dermatologist tested. We care about hydration and sun protection.',
    typicalBudget: '$2K - $5K',
    creatorCompensation: '$400 - $700 / Reel'
  });

  const [editData, setEditData] = useState({ ...companyData });

  const handleEdit = (cardType) => {
    setEditingCard(cardType);
    setEditData({ ...companyData });
  };

  const handleSave = () => {
    setCompanyData({ ...editData });
    setEditingCard(null);
    setShowSavedModal(true);
  };

  const handleCancel = () => {
    setEditingCard(null);
    setEditData({ ...companyData });
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderField = (label, field, value, isEditing = false) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {isEditing ? (
        <input
          type="text"
          className="form-input"
          value={editData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
      ) : (
        <div className="field-value">{value}</div>
      )}
    </div>
  );

  const renderTextareaField = (label, field, value, isEditing = false) => (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {isEditing ? (
        <textarea
          className="form-textarea"
          value={editData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          rows="3"
        />
      ) : (
        <div className="field-value">{value}</div>
      )}
    </div>
  );

  return (
    <div className="company-profile-page">
      <div className="page-header">
        <h1>Company Profile</h1>
      </div>

      <div className="profile-grid">
        {/* Company Detail Card */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Company Detail</h2>
            {editingCard !== 'company' && (
              <button 
                className="btn btn-outline"
                onClick={() => handleEdit('company')}
              >
                Edit Information
              </button>
            )}
          </div>
          
          <div className="card-content">
            {renderField('Username', 'username', companyData.username, editingCard === 'company')}
            {renderField('Company Name', 'companyName', companyData.companyName, editingCard === 'company')}
            {renderField('Date Founded', 'dateFounded', companyData.dateFounded, editingCard === 'company')}
            {renderField('Region', 'region', companyData.region, editingCard === 'company')}
            {renderField('Number of Employees', 'employees', companyData.employees, editingCard === 'company')}
            {renderField('Industry', 'industry', companyData.industry, editingCard === 'company')}
            
            {editingCard === 'company' && (
              <div className="card-actions">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn btn-outline" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Brand Description & Logo Card */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Brand Guidelines / Logo</h2>
            {editingCard !== 'brand' && (
              <button 
                className="btn btn-outline"
                onClick={() => handleEdit('brand')}
              >
                Edit Information
              </button>
            )}
          </div>
          
          <div className="card-content">
            <div className="form-group">
              <label className="form-label">Logo</label>
              <div className="logo-placeholder">
                {editingCard === 'brand' ? (
                  <div className="logo-upload">
                    <div className="logo-preview">🔬</div>
                    <input type="file" accept="image/*" className="file-input" />
                    <button className="btn btn-outline">Upload Logo</button>
                  </div>
                ) : (
                  <div className="logo-display">🔬</div>
                )}
              </div>
            </div>
            
            {renderTextareaField('Brand Description', 'brandDescription', companyData.brandDescription, editingCard === 'brand')}
            
            {editingCard === 'brand' && (
              <div className="card-actions">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn btn-outline" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Campaign Budget Ranges Card */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Campaign Budget Ranges</h2>
            {editingCard !== 'budget' && (
              <button 
                className="btn btn-outline"
                onClick={() => handleEdit('budget')}
              >
                Edit Information
              </button>
            )}
          </div>
          
          <div className="card-content">
            {renderField('Typical Budget Range per Campaign', 'typicalBudget', companyData.typicalBudget, editingCard === 'budget')}
            {renderField('Typical Creator Compensation per Deliverable', 'creatorCompensation', companyData.creatorCompensation, editingCard === 'budget')}
            
            {editingCard === 'budget' && (
              <div className="card-actions">
                <button className="btn btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn btn-outline" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sub-accounts Strip */}
      <div className="sub-accounts-strip">
        <div className="strip-content">
          <span className="strip-text">Brand Sub-accounts: Add or manage sub-brands under this company.</span>
          <button className="btn btn-outline">Manage Sub-accounts</button>
        </div>
      </div>

      {/* Changes Saved Modal */}
      {showSavedModal && (
        <div className="modal-overlay" onClick={() => setShowSavedModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowSavedModal(false)}
            >
              ×
            </button>
            <h2 className="modal-title">Changes Saved</h2>
            <p className="modal-text">
              Your company profile has been updated.
            </p>
            <p className="modal-company-name">{companyData.companyName}</p>
            <div className="modal-actions">
              <button 
                className="btn btn-primary"
                onClick={() => setShowSavedModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfilePage;
