import React from 'react';
import { useLanguage } from './src/LanguageContext.jsx';
import { translations } from './src/translations.js';
import './JoinForm.css';

const JoinForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="join" id="join">
      <div className="container">
        <h2 className="animate-fade-in">{t.joinOurTeam}</h2>
        <p className="animate-fade-in">{t.joinOurTeamDesc}</p>

        <form className="join-form animate-scale-in">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder={t.fullName} required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder={t.emailAddress} required />
          </div>
          <div className="form-group">
            <input type="tel" id="phone" name="phone" placeholder={t.phoneNumber} />
          </div>
          <div className="form-group">
            <select id="position" name="position" required>
              <option value="">{t.selectPosition}</option>
              <option value="engineer">{t.networkEngineer}</option>
              <option value="developer">{t.softwareDeveloper}</option>
              <option value="sales">{t.salesRepresentative}</option>
              <option value="support">{t.customerSupport}</option>
              <option value="other">{t.other}</option>
            </select>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder={t.tellUsWhy} rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">{t.submitApplication}</button>
        </form>
      </div>
    </section>
  );
};

export default JoinForm; 