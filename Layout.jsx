import React from 'react';
import App from './App';
import rexLogo from './assets/rex-logo.png';

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-content">
          <img src={rexLogo} alt="Rex" className="layout-header-logo" />
          <h1 className="layout-header-title">Rex - Career Advice Assistant</h1>
        </div>
      </header>

      <main className="layout-main">
        <App />
      </main>

      <footer className="layout-footer">
        <div className="layout-footer-content">
          <p>&copy; 2024 Rex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;