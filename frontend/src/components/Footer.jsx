import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const logoUrl = 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/kcyldvtx_WhatsApp%20Image%202026-03-10%20at%208.23.52%20AM%20%281%29.jpeg';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logoUrl} alt="Goldline Management" className="footer-logo" />
          </div>

          <div className="footer-section">
            <h4 className="body-regular" style={{ fontWeight: '700', marginBottom: '16px' }}>
              Navigation
            </h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/approach" className="footer-link">Our Approach</Link>
              <Link to="/media" className="footer-link">Media</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/consultation" className="footer-link">Consultation</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="body-regular" style={{ fontWeight: '700', marginBottom: '16px' }}>
              Contact
            </h4>
            <div className="footer-contact">
              <a href="tel:+353874539911" className="footer-contact-item">
                <Phone size={16} />
                <span>+353 87 453 9911</span>
              </a>
              <a href="mailto:goldlinemanagement@outlook.com" className="footer-contact-item">
                <Mail size={16} />
                <span>goldlinemanagement@outlook.com</span>
              </a>
            </div>
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
