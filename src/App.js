import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DiscoveryPage from './components/DiscoveryPage';
import CompanyProfilePage from './components/CompanyProfilePage';
import './App.css';

function App() {
  const [userType, setUserType] = useState(null);
  const [currentPage, setCurrentPage] = useState('discovery');

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setCurrentPage('discovery');
  };

  const renderPage = () => {
    if (!userType) {
      return <LoginPage onUserTypeSelect={handleUserTypeSelect} />;
    }

    switch (currentPage) {
      case 'discovery':
        return userType === 'influencer' ? <DiscoveryPage /> : <CompanyProfilePage />;
      case 'campaigns':
        return <div className="placeholder-page">Campaigns Page - Coming Soon</div>;
      case 'inbox':
        return <div className="placeholder-page">Inbox Page - Coming Soon</div>;
      case 'profile':
        return <div className="placeholder-page">Profile Page - Coming Soon</div>;
      case 'analytics':
        return <div className="placeholder-page">Analytics Page - Coming Soon</div>;
      case 'settings':
        return <div className="placeholder-page">Settings Page - Coming Soon</div>;
      default:
        return userType === 'influencer' ? <DiscoveryPage /> : <CompanyProfilePage />;
    }
  };

  const influencerPages = [
    { id: 'discovery', name: 'Discovery', color: 'red' },
    { id: 'campaigns', name: 'My Campaigns', color: 'red' },
    { id: 'inbox', name: 'Inbox', color: 'red' },
    { id: 'profile', name: 'My Profile', color: 'red' },
    { id: 'analytics', name: 'Analytics', color: 'red' },
    { id: 'settings', name: 'Settings', color: 'red' }
  ];

  const companyPages = [
    { id: 'discovery', name: 'Company Profile', color: 'blue' },
    { id: 'campaigns', name: 'Campaign Management', color: 'blue' },
    { id: 'inbox', name: 'Inbox', color: 'blue' },
    { id: 'profile', name: 'Brand Settings', color: 'blue' },
    { id: 'analytics', name: 'Analytics', color: 'blue' },
    { id: 'settings', name: 'Settings', color: 'blue' }
  ];

  const currentPages = userType === 'influencer' ? influencerPages : companyPages;

  return (
    <div className="App">
      {userType && (
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <div className="logo">💡</div>
              <h1>Spotly</h1>
            </div>
            <div className="nav-links">
              {currentPages.map(page => (
                <button 
                  key={page.id}
                  className={`nav-link ${page.color} ${currentPage === page.id ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page.id)}
                >
                  {page.name}
                </button>
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
