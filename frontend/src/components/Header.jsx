import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Our Approach', path: '/approach' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="navigation-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="navigation-logo">
            Goldline Management
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
            <Link to="/tenant-support" className="tenant-support-link">
              Tenant Support
            </Link>
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
            <Link
              to="/tenant-support"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tenant Support
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
