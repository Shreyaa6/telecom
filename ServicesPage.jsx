import React from 'react';
import { useLanguage } from './src/LanguageContext.jsx';
import { translations } from './src/translations.js';
import './ServicesPage.css';

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="services-page">
      {/* Job Categories Section */}
      <section className="job-categories" id="services">
        <div className="container">
          <h2>Our Job Categories</h2>
          <p className="section-subtitle">Explore the different types of roles we offer through our partner companies</p>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-header">
                <div className="category-icon">🛠️</div>
                <h3>Engineer / Technician Roles</h3>
                <div className="experience-level">2-3 years experience</div>
              </div>
              
              <div className="job-titles">
                <h4>📋 Job Titles:</h4>
                <ul>
                  <li>Field Engineer – Transmission & IP</li>
                  <li>Telecom Technician – Air Fiber & WiFi</li>
                  <li>Network Installation Engineer</li>
                  <li>UBR/ENT Site Maintenance Engineer</li>
                </ul>
              </div>
              
              <div className="responsibilities">
                <h4>✅ Responsibilities:</h4>
                <ul>
                  <li>Maintain and troubleshoot Air Fiber, WiFi, UBR/ENT sites</li>
                  <li>Work on L2/L3 routers, SMPS, patch cords, and transmission lines</li>
                  <li>Coordinate with NOC (Network Operation Center)</li>
                  <li>Conduct physical surveys and manage site architecture data</li>
                  <li>Fault diagnosis and timely escalation to the supervisor</li>
                </ul>
              </div>
            </div>

            <div className="category-card">
              <div className="category-header">
                <div className="category-icon">👨‍💼</div>
                <h3>IBS / Transmission Supervisory Roles</h3>
                <div className="experience-level">4-6 years experience</div>
              </div>
              
              <div className="job-titles">
                <h4>📋 Job Titles:</h4>
                <ul>
                  <li>IBS Site Supervisor</li>
                  <li>Telecom Network Operations Supervisor</li>
                  <li>Regional O&M (Operation & Maintenance) Lead</li>
                  <li>SMPS & ISP Coordination Supervisor</li>
                </ul>
              </div>
              
              <div className="responsibilities">
                <h4>✅ Responsibilities:</h4>
                <ul>
                  <li>Lead and train technicians and field engineers</li>
                  <li>Oversee audits, quality checks, and HOTO (handover/takeover)</li>
                  <li>Coordinate preventive & corrective maintenance (PM/CM)</li>
                  <li>Ensure safety compliance, PPE usage, training documentation</li>
                  <li>Manage spares, equipment health, and GIS/asset updates</li>
                  <li>Interact with Jio Circle Planners & NOC for timely resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies-section">
        <div className="container">
          <h2>Our Partner Companies</h2>
          <p className="section-subtitle">These jobs are offered by different leading telecom companies across India</p>
          
          <div className="companies-grid">
            <div className="company-card">
              <div className="company-logo">📱</div>
              <h3>Reliance Jio</h3>
              <p>India's largest telecom operator with extensive network coverage</p>
              <div className="company-roles">
                <h4>Available Roles:</h4>
                <ul>
                  <li>Fiber Installation Engineer</li>
                  <li>Network Operations Specialist</li>
                  <li>Site Maintenance Technician</li>
                  <li>Customer Service Representative</li>
                </ul>
              </div>
            </div>

            <div className="company-card">
              <div className="company-logo">📡</div>
              <h3>Bharti Airtel</h3>
              <p>Premier telecom company with pan-India presence</p>
              <div className="company-roles">
                <h4>Available Roles:</h4>
                <ul>
                  <li>IBS Site Engineer</li>
                  <li>Network Installation Technician</li>
                  <li>Operations Supervisor</li>
                  <li>Field Service Engineer</li>
                </ul>
              </div>
            </div>

            <div className="company-card">
              <div className="company-logo">🏢</div>
              <h3>BSNL</h3>
              <p>Government-owned telecom service provider</p>
              <div className="company-roles">
                <h4>Available Roles:</h4>
                <ul>
                  <li>Telecom Technician</li>
                  <li>Network Maintenance Engineer</li>
                  <li>Regional Operations Lead</li>
                  <li>Infrastructure Specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Tele Tower?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3>Local Opportunities</h3>
              <p>Find jobs in your own city or nearby areas, reducing commute time and improving work-life balance.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🏢</div>
              <h3>Top Companies</h3>
              <p>Work with India's leading telecom companies including Jio, Airtel, Vodafone, and more.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Career Growth</h3>
              <p>Clear career progression paths from technician to supervisory roles with proper training.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Salaries</h3>
              <p>Attractive compensation packages with benefits and performance-based incentives.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Training & Development</h3>
              <p>Comprehensive training programs to enhance your technical skills and knowledge.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>All companies follow strict safety protocols with proper PPE and training requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 