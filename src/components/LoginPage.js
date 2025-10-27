import React from 'react';
import './LoginPage.css';

const LoginPage = ({ onUserTypeSelect }) => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <img src="/logo.png" alt="Spotly Logo" className="logo-large" />
            <h1>Spotly</h1>
          </div>
          <p className="login-subtitle">Choose your role to get started</p>
        </div>

        <div className="user-type-selection">
          <div 
            className="user-type-card influencer"
            onClick={() => onUserTypeSelect('influencer')}
          >
            <div className="card-icon">👤</div>
            <h2>I'm an Influencer</h2>
            <p>Discover brands, apply to campaigns, and grow your influence</p>
            <div className="card-features">
              <span>• Find brand partnerships</span>
              <span>• Manage campaigns</span>
              <span>• Track analytics</span>
            </div>
          </div>

          <div 
            className="user-type-card company"
            onClick={() => onUserTypeSelect('company')}
          >
            <div className="card-icon">🏢</div>
            <h2>I'm a Company</h2>
            <p>Find influencers, create campaigns, and manage collaborations</p>
            <div className="card-features">
              <span>• Discover influencers</span>
              <span>• Create campaigns</span>
              <span>• Track performance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
