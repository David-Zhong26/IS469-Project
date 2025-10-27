import React, { useState } from 'react';
import DiscoveryPage from './components/DiscoveryPage';
import CompanyProfilePage from './components/CompanyProfilePage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('discovery');

  const renderPage = () => {
    switch (currentPage) {
      case 'discovery':
        return <DiscoveryPage />;
      case 'profile':
        return <CompanyProfilePage />;
      default:
        return <DiscoveryPage />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="logo">💡</div>
            <h1>Spotly</h1>
          </div>
          <div className="nav-links">
            <button 
              className={`nav-link ${currentPage === 'discovery' ? 'active' : ''}`}
              onClick={() => setCurrentPage('discovery')}
            >
              Discovery
            </button>
            <button 
              className={`nav-link ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={() => setCurrentPage('profile')}
            >
              Profile
            </button>
            <button className="nav-link">Inbox</button>
            <button className="nav-link">My Profile</button>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
