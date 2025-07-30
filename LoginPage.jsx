import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './src/LanguageContext.jsx';
import { translations } from './src/translations.js';
import LanguageSelector from './LanguageSelector.jsx';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { language, changeLanguage } = useLanguage();
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const t = translations[language];
  
  useEffect(() => {
    // Show language selector on first visit
    const hasVisited = localStorage.getItem('has-visited');
    if (!hasVisited) {
      setShowLanguageSelector(true);
      localStorage.setItem('has-visited', 'true');
    }
  }, []);
  
  const handleJoinUs = () => {
    navigate('/main');
  };

  const handleLanguageSelect = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setShowLanguageSelector(false);
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">{t.loginTitle}</h1>
            <p className="login-subtitle">{t.loginSubtitle}</p>
          </div>
          
          <div className="login-content">
            <div className="welcome-text">
              <h2>{t.welcomeTitle}</h2>
              <p>{t.welcomeSubtitle}</p>
            </div>
            
            <button className="join-us-btn" onClick={handleJoinUs}>
              <span className="btn-text">{t.joinUsButton}</span>
              <span className="btn-icon">→</span>
            </button>
            
            <div className="features">
              <div className="feature">
                <span className="feature-icon">🏢</span>
                <span>{t.leadingCompanies}</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📍</span>
                <span>{t.localOpportunities}</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🚀</span>
                <span>{t.fastGrowth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showLanguageSelector && (
        <LanguageSelector 
          onLanguageSelect={handleLanguageSelect}
          onClose={() => setShowLanguageSelector(false)}
        />
      )}
    </div>
  );
};

export default LoginPage; 