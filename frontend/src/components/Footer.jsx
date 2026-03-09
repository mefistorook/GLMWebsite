import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="heading-3">Goldline Management Limited</h3>
            <p className="body-small" style={{ marginTop: '16px' }}>
              Structured property operations engineered for performance.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="body-regular" style={{ fontWeight: '700', marginBottom: '16px' }}>
              Navigation
            </h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/approach" className="footer-link">Our Approach</Link>
              <Link to="/portfolio" className="footer-link">Portfolio</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/tenant-support" className="footer-link">Tenant Support</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="body-regular" style={{ fontWeight: '700', marginBottom: '16px' }}>
              Contact
            </h4>
            <p className="body-small">
              For enquiries and consultations,<br />
              please use our support form.
            </p>
          </div>
        </div>

        <div className="footer-compliance">
          <p className="body-small">
            Goldline Management Limited provides operational property support and asset oversight services. 
            We do not act as a property brokerage or licensed letting agency.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="body-small">
            © {new Date().getFullYear()} Goldline Management Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
