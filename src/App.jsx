import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext.jsx'
import Navbar from '../Navbar.jsx'
import LandingPage from '../LandingPage.jsx'
import ServicesPage from '../ServicesPage.jsx'
import JoinForm from '../JoinForm.jsx'
import LoginPage from '../LoginPage.jsx'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={
              <>
                <Navbar />
                <LandingPage />
                <ServicesPage />
                <JoinForm />
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App 