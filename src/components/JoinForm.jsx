import React from 'react';
import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../data/translations.js';
import '../styles/JoinForm.css';

const JoinForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const handleJoinUs = () => {
    window.open('https://forms.gle/xY7jPDpbj3tpfaz7A', '_blank');
  };
  
  return (
    <section className="join" id="join">
      <div className="container">
        <h2 className="animate-fade-in">{t.joinOurTeam}</h2>
        <p className="animate-fade-in">{t.joinOurTeamDesc}</p>
        
        <div className="join-button-container animate-scale-in">
          <button onClick={handleJoinUs} className="join-us-today-btn">
            <span className="btn-text">Join Us Today</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinForm; 