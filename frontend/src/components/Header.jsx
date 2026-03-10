import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Our Approach', path: '/approach' },
    { name: 'Media', path: '/media' },
    { name: 'About', path: '/about' }
  ];

  const logoUrl = 'https://customer-assets.emergentagent.com/job_asset-performance-1/artifacts/kcyldvtx_WhatsApp%20Image%202026-03-10%20at%208.23.52%20AM%20%281%29.jpeg';

  return (
    <header className="navigation-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="navigation-logo">
            <img src={logoUrl} alt="Goldline Management" className="logo-image" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navigation-menu desktop-nav">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navigation-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="navigation-utilities">
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
