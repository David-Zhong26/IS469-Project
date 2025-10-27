import React, { useState } from 'react';
import './ProposalSubmissionPage.css';

const ProposalSubmissionPage = ({ campaign, company, onBack, onSubmit }) => {
  const [proposalData, setProposalData] = useState({
    campaignId: campaign?.id || '',
    proposalId: `PROP_${Date.now()}`,
    influencerId: 'USER_123', // This would come from user context
    relatedDocuments: null
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (field, value) => {
    setProposalData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProposalData(prev => ({
        ...prev,
        relatedDocuments: file
      }));
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the proposal data to your backend
    console.log('Proposal submitted:', proposalData);
    setShowSuccessModal(true);
  };

  return (
    <div className="proposal-submission-page">
      <div className="page-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Campaign
        </button>
        <h1>Submit Proposal</h1>
      </div>

      <div className="proposal-container">
        <div className="campaign-info-card">
          <h2>Campaign Information</h2>
          <div className="campaign-details">
            <div className="detail-row">
              <span className="label">Company:</span>
              <span className="value">{company?.name || 'GlowSkin Lab'}</span>
            </div>
            <div className="detail-row">
              <span className="label">Campaign Title:</span>
              <span className="value">{campaign?.title || 'Spring SPF Launch UGC Reels'}</span>
            </div>
            <div className="detail-row">
              <span className="label">Campaign Description:</span>
              <span className="value">{campaign?.description || 'Create authentic user-generated content showcasing our new SPF line. Focus on natural lighting and skincare routine integration.'}</span>
            </div>
          </div>
        </div>

        <div className="proposal-form-card">
          <h2>Proposal Details</h2>
          <form className="proposal-form">
            <div className="form-group">
              <label className="form-label">Campaign ID</label>
              <input
                type="text"
                className="form-input"
                value={proposalData.campaignId}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">Proposal ID</label>
              <input
                type="text"
                className="form-input"
                value={proposalData.proposalId}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">Influencer ID</label>
              <input
                type="text"
                className="form-input"
                value={proposalData.influencerId}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">Related Documents</label>
              <div className="file-upload-area">
                <input
                  type="file"
                  id="documents"
                  className="file-input"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label htmlFor="documents" className="file-upload-label">
                  {proposalData.relatedDocuments ? 
                    proposalData.relatedDocuments.name : 
                    'Click to upload documents (PDF, DOC, JPG, PNG)'
                  }
                </label>
                {proposalData.relatedDocuments && (
                  <button 
                    type="button" 
                    className="remove-file-btn"
                    onClick={() => handleInputChange('relatedDocuments', null)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Proposal Message</label>
              <textarea
                className="form-textarea"
                placeholder="Write your proposal message here..."
                rows="5"
                value={proposalData.message || ''}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Proposed Timeline</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., 2 weeks from approval"
                value={proposalData.timeline || ''}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Proposed Rate</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., $500 per post"
                value={proposalData.rate || ''}
                onChange={(e) => handleInputChange('rate', e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="proposal-actions">
        <button className="btn btn-outline" onClick={onBack}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit Proposal
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowSuccessModal(false)}
            >
              ×
            </button>
            <h2 className="modal-title">Proposal Submitted!</h2>
            <p className="modal-text">
              Your proposal has been successfully submitted to {company?.name || 'the company'}.
            </p>
            <p className="modal-subtext">You'll receive a response in your inbox within 2-3 business days.</p>
            <div className="modal-actions">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setShowSuccessModal(false);
                  onBack();
                }}
              >
                Back to Discovery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalSubmissionPage;
