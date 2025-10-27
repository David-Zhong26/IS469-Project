import React, { useState } from 'react';
import ProposalSubmissionPage from './ProposalSubmissionPage';
import './DiscoveryPage.css';

const DiscoveryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [currentView, setCurrentView] = useState('search'); // 'search', 'company', 'campaign', 'proposal'
  const [selectedCompanyData, setSelectedCompanyData] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [filters, setFilters] = useState({
    industry: '',
    region: '',
    companySize: '',
    budgetRange: ''
  });

  const companies = [
    {
      id: 1,
      name: "GlowSkin Lab",
      industry: "Beauty / Skincare",
      region: "North America",
      size: "50-200 employees",
      budgetRange: "$2K - $5K per campaign",
      description: "Clean skincare brand focused on SPF and hydration.",
      logo: "🔬",
      founded: "2019",
      employees: "120",
      campaigns: [
        {
          id: "CAMP_001",
          title: "Spring SPF Launch UGC Reels",
          description: "Create authentic user-generated content showcasing our new SPF line. Focus on natural lighting and skincare routine integration.",
          budget: "$800 - $1.2K / creator",
          deliverable: "3x IG Reels + 1 Story Set"
        },
        {
          id: "CAMP_002", 
          title: "Summer Skincare Routine",
          description: "Showcase daily skincare routine with our products. Focus on morning and evening routines.",
          budget: "$600 - $900 / creator",
          deliverable: "2x IG Posts + 1 TikTok"
        }
      ]
    },
    {
      id: 2,
      name: "EcoWear Co",
      industry: "Fashion / Sustainability",
      region: "Europe",
      size: "20-50 employees",
      budgetRange: "$1K - $3K per campaign",
      description: "Sustainable fashion brand promoting eco-friendly clothing.",
      logo: "🌱",
      founded: "2020",
      employees: "35",
      campaigns: [
        {
          id: "CAMP_003",
          title: "Eco Fashion Week Campaign",
          description: "Highlight sustainable fashion choices and eco-friendly lifestyle. Showcase our new organic cotton collection.",
          budget: "$600 - $900 / creator",
          deliverable: "2x IG Posts + 1 TikTok"
        }
      ]
    }
  ];

  const campaigns = [
    {
      id: 1,
      title: "Spring SPF Launch UGC Reels",
      company: "GlowSkin Lab",
      companyLogo: "🔬",
      budget: "$800 - $1.2K / creator",
      deliverable: "3x IG Reels + 1 Story Set",
      description: "Create authentic user-generated content showcasing our new SPF line. Focus on natural lighting and skincare routine integration."
    },
    {
      id: 2,
      title: "Eco Fashion Week Campaign",
      company: "EcoWear Co",
      companyLogo: "🌱",
      budget: "$600 - $900 / creator",
      deliverable: "2x IG Posts + 1 TikTok",
      description: "Highlight sustainable fashion choices and eco-friendly lifestyle. Showcase our new organic cotton collection."
    }
  ];

  const handleSubmitProposal = (companyName) => {
    setSelectedCompany(companyName);
    setShowModal(true);
  };

  const handleViewCompany = (company) => {
    setSelectedCompanyData(company);
    setCurrentView('company');
  };

  const handleViewCampaign = (campaign, company) => {
    setSelectedCampaign(campaign);
    setSelectedCompanyData(company);
    setCurrentView('campaign');
  };

  const handleSubmitProposalFromCampaign = () => {
    setCurrentView('proposal');
  };

  const handleBackToSearch = () => {
    setCurrentView('search');
    setSelectedCompanyData(null);
    setSelectedCampaign(null);
  };

  const handleBackToCompany = () => {
    setCurrentView('company');
    setSelectedCampaign(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      industry: '',
      region: '',
      companySize: '',
      budgetRange: ''
    });
  };

  const renderCompanyView = () => (
    <div className="company-detail-view">
      <div className="page-header">
        <button className="back-button" onClick={handleBackToSearch}>
          ← Back to Search
        </button>
        <h1>Company Details</h1>
      </div>

      <div className="company-detail-card">
        <div className="company-header">
          <div className="company-logo-large">{selectedCompanyData.logo}</div>
          <div className="company-info">
            <h2>{selectedCompanyData.name}</h2>
            <p className="company-industry">{selectedCompanyData.industry}</p>
          </div>
        </div>

        <div className="company-details">
          <div className="detail-row">
            <span className="detail-label">Company Description:</span>
            <span className="detail-value">{selectedCompanyData.description}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date Founded:</span>
            <span className="detail-value">{selectedCompanyData.founded}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Region:</span>
            <span className="detail-value">{selectedCompanyData.region}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Number of Employees:</span>
            <span className="detail-value">{selectedCompanyData.employees}</span>
          </div>
        </div>

        <div className="company-actions">
          <button className="btn btn-outline">Save Company</button>
        </div>
      </div>

      <div className="campaigns-section">
        <h2>Campaigns by {selectedCompanyData.name}</h2>
        <div className="campaigns-grid">
          {selectedCompanyData.campaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <h3>{campaign.title}</h3>
              <p className="campaign-description">{campaign.description}</p>
              <div className="campaign-details">
                <div className="detail-row">
                  <span className="detail-label">Budget:</span>
                  <span className="detail-value">{campaign.budget}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Deliverables:</span>
                  <span className="detail-value">{campaign.deliverable}</span>
                </div>
              </div>
              <div className="campaign-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => handleViewCampaign(campaign, selectedCompanyData)}
                >
                  View Campaign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCampaignView = () => (
    <div className="campaign-detail-view">
      <div className="page-header">
        <button className="back-button" onClick={handleBackToCompany}>
          ← Back to Company
        </button>
        <h1>Campaign Details</h1>
      </div>

      <div className="campaign-detail-card">
        <div className="campaign-header">
          <h2>{selectedCampaign.title}</h2>
          <div className="campaign-company">
            <span className="company-logo">{selectedCompanyData.logo}</span>
            <span className="company-name">{selectedCompanyData.name}</span>
          </div>
        </div>

        <div className="campaign-details">
          <div className="detail-row">
            <span className="detail-label">Campaign Description:</span>
            <span className="detail-value">{selectedCampaign.description}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Budget Range:</span>
            <span className="detail-value">{selectedCampaign.budget}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Deliverables:</span>
            <span className="detail-value">{selectedCampaign.deliverable}</span>
          </div>
        </div>

        <div className="campaign-actions">
          <button 
            className="btn btn-outline"
            onClick={() => handleViewCompany(selectedCompanyData)}
          >
            View Company Details
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleSubmitProposalFromCampaign}
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );

  if (currentView === 'proposal') {
    return (
      <ProposalSubmissionPage
        campaign={selectedCampaign}
        company={selectedCompanyData}
        onBack={handleBackToCompany}
        onSubmit={() => setShowModal(true)}
      />
    );
  }

  if (currentView === 'company') {
    return renderCompanyView();
  }

  if (currentView === 'campaign') {
    return renderCampaignView();
  }

  return (
    <div className="discovery-page">
      <div className="page-header">
        <h1>Discovery for Influencers</h1>
      </div>

      {/* Companies Search Section */}
      <section className="companies-search">
        <div className="section-header">
          <h2>Companies Search</h2>
          <p>Filter and explore companies that match your profile.</p>
        </div>

        <div className="filter-bar">
          <div className="filter-group">
            <label className="form-label">Industry</label>
            <select 
              className="form-select"
              value={filters.industry}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
            >
              <option value="">All Industries</option>
              <option value="beauty">Beauty / Skincare</option>
              <option value="fashion">Fashion</option>
              <option value="tech">Technology</option>
              <option value="food">Food & Beverage</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="form-label">Region</label>
            <select 
              className="form-select"
              value={filters.region}
              onChange={(e) => handleFilterChange('region', e.target.value)}
            >
              <option value="">All Regions</option>
              <option value="north-america">North America</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="australia">Australia</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="form-label">Company Size</label>
            <select 
              className="form-select"
              value={filters.companySize}
              onChange={(e) => handleFilterChange('companySize', e.target.value)}
            >
              <option value="">All Sizes</option>
              <option value="startup">1-20 employees</option>
              <option value="small">20-50 employees</option>
              <option value="medium">50-200 employees</option>
              <option value="large">200+ employees</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="form-label">Budget Range</label>
            <select 
              className="form-select"
              value={filters.budgetRange}
              onChange={(e) => handleFilterChange('budgetRange', e.target.value)}
            >
              <option value="">All Budgets</option>
              <option value="low">$500 - $1K</option>
              <option value="medium">$1K - $5K</option>
              <option value="high">$5K+</option>
            </select>
          </div>

          <div className="filter-actions">
            <button className="btn btn-primary">Search</button>
            <button className="btn btn-outline" onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>

        <div className="companies-grid">
          {companies.map(company => (
            <div key={company.id} className="company-card">
              <div className="company-header">
                <div className="company-logo">{company.logo}</div>
                <div className="company-info">
                  <h3>{company.name}</h3>
                  <p className="company-industry">{company.industry}</p>
                </div>
              </div>
              
              <div className="company-details">
                <div className="detail-row">
                  <span className="detail-label">Region:</span>
                  <span className="detail-value">{company.region}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Company Size:</span>
                  <span className="detail-value">{company.size}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Budget Range:</span>
                  <span className="detail-value">{company.budgetRange}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Description:</span>
                  <span className="detail-value">{company.description}</span>
                </div>
              </div>

              <div className="company-actions">
                <button 
                  className="btn btn-outline"
                  onClick={() => handleViewCompany(company)}
                >
                  View Company Details →
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleSubmitProposal(company.name)}
                >
                  Submit Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Campaigns Section */}
      <section className="recommended-campaigns">
        <div className="section-header">
          <h2>Recommended Campaigns For You</h2>
          <p>Based on your engagement rate and audience fit.</p>
        </div>

        <div className="campaigns-grid">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-header">
                <h3>{campaign.title}</h3>
                <div className="campaign-company">
                  <span className="company-logo">{campaign.companyLogo}</span>
                  <span className="company-name">{campaign.company}</span>
                </div>
              </div>

              <div className="campaign-details">
                <div className="detail-row">
                  <span className="detail-label">Budget Range:</span>
                  <span className="detail-value">{campaign.budget}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Deliverables:</span>
                  <span className="detail-value">{campaign.deliverable}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Description:</span>
                  <span className="detail-value">{campaign.description}</span>
                </div>
              </div>

              <div className="campaign-actions">
                <button className="btn btn-outline">View Campaign Details</button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleSubmitProposal(campaign.company)}
                >
                  Apply / Submit Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="modal-title">Proposal Sent!</h2>
            <p className="modal-text">
              Your collaboration request was sent to {selectedCompany}.
            </p>
            <p className="modal-subtext">You'll get a response in Inbox.</p>
            <div className="modal-actions">
              <button className="btn btn-primary">Go to Inbox</button>
              <button 
                className="btn btn-outline"
                onClick={() => setShowModal(false)}
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

export default DiscoveryPage;
