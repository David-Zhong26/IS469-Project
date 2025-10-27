import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DiscoveryPage from './components/DiscoveryPage';
import CompanyProfilePage from './components/CompanyProfilePage';
import './App.css';

function App() {
  const [userType, setUserType] = useState(null);
  const [currentPage, setCurrentPage] = useState('discovery');
  const [showDiscoveryDropdown, setShowDiscoveryDropdown] = useState(false);

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setCurrentPage('discovery');
  };

  const handleLogoClick = () => {
    setUserType(null);
    setCurrentPage('discovery');
    setShowDiscoveryDropdown(false);
  };

  const handleDiscoveryClick = () => {
    if (userType === 'influencer') {
      setShowDiscoveryDropdown(!showDiscoveryDropdown);
    } else {
      setCurrentPage('discovery');
    }
  };

  const handleDiscoverySubPage = (subPage) => {
    setCurrentPage(subPage);
    setShowDiscoveryDropdown(false);
  };

  const renderPage = () => {
    if (!userType) {
      return <LoginPage onUserTypeSelect={handleUserTypeSelect} />;
    }

    switch (currentPage) {
      case 'discovery':
        return userType === 'influencer' ? <DiscoveryPage /> : <CompanyProfilePage />;
      case 'companies-search':
        return <DiscoveryPage />;
      case 'campaign-search':
        return <div className="placeholder-page">Campaign Search Page - Coming Soon</div>;
      case 'recommended-company':
        return <div className="placeholder-page">Recommended Company Page - Coming Soon</div>;
      case 'recommended-campaign':
        return <div className="placeholder-page">Recommended Campaign Page - Coming Soon</div>;
      case 'campaigns':
        return <div className="placeholder-page">Campaigns Page - Coming Soon</div>;
      case 'inbox':
        return <div className="placeholder-page">Inbox Page - Coming Soon</div>;
      case 'profile':
        return <div className="placeholder-page">Profile Page - Coming Soon</div>;
      case 'analytics':
        return <div className="placeholder-page">Analytics Page - Coming Soon</div>;
      default:
        return userType === 'influencer' ? <DiscoveryPage /> : <CompanyProfilePage />;
    }
  };

  const influencerPages = [
    { id: 'discovery', name: 'Discovery', color: 'red', hasDropdown: true },
    { id: 'campaigns', name: 'My Campaigns', color: 'red' },
    { id: 'inbox', name: 'Inbox', color: 'red' },
    { id: 'profile', name: 'My Profile', color: 'red' },
    { id: 'analytics', name: 'Analytics', color: 'red' }
  ];

  const companyPages = [
    { id: 'discovery', name: 'Company Profile', color: 'blue' },
    { id: 'campaigns', name: 'Discovery for Company', color: 'blue' },
    { id: 'inbox', name: 'Campaigns and Proposals Management', color: 'blue' },
    { id: 'analytics', name: 'Analytics', color: 'blue' }
  ];

  const currentPages = userType === 'influencer' ? influencerPages : companyPages;

  return (
    <div className="App">
      {userType && (
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand" onClick={handleLogoClick}>
              <img src="/logo.png" alt="Spotly Logo" className="logo" />
              <h1>Spotly</h1>
            </div>
            <div className="nav-links">
              {currentPages.map(page => (
                <div key={page.id} className="nav-item">
                  <button 
                    className={`nav-link ${page.color} ${currentPage === page.id ? 'active' : ''}`}
                    onClick={() => page.hasDropdown ? handleDiscoveryClick() : setCurrentPage(page.id)}
                  >
                    {page.name}
                  </button>
                  {page.hasDropdown && showDiscoveryDropdown && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleDiscoverySubPage('companies-search')}>Companies Search</button>
                      <button onClick={() => handleDiscoverySubPage('campaign-search')}>Campaign Search</button>
                      <button onClick={() => handleDiscoverySubPage('recommended-company')}>Recommended Company</button>
                      <button onClick={() => handleDiscoverySubPage('recommended-campaign')}>Recommended Campaign</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      )}
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
