
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from './PremiumButton';

const BrandLogo: React.FC<{ height?: number; mode?: 'light' | 'dark' }> = ({ height = 42, mode = 'light' }) => (
  <svg
    width={height * (780 / 220)}
    height={height}
    viewBox="0 0 780 220"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <text
      x="0"
      y="170"
      fontFamily="Inter, sans-serif"
      fontSize="96"
      fontWeight="800"
      fill={mode === 'light' ? '#0066CC' : '#FFFFFF'}
      letterSpacing="-2.5"
    >
      PROV
    </text>
    <g transform="translate(265,82)">
      <rect x="1" y="76" width="52" height="12" fill="#1B3FE6" />
      <rect x="1" y="20" width="52" height="12" fill="#16A34A" />
      <rect x="1" y="48" width="52" height="12" fill="#FBBF24" />
    </g>
    <text
      x="320"
      y="170"
      fontFamily="Inter, sans-serif"
      fontSize="96"
      fontWeight="800"
      fill={mode === 'light' ? '#0066CC' : '#FFFFFF'}
      letterSpacing="-2.5"
    >
      NOR
    </text>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Problem', path: '/problem' },
    { label: 'Standard', path: '/the-provenor-standard' },
    { label: 'Impact', path: '/impact' },
    { label: 'Voices', path: '/voices' },
    { label: 'Perspectives', path: '/perspectives' },
    { label: 'Trust', path: '/verification-trust' },
    { label: 'Ecosystem', path: '/ecosystem' },
    { label: 'Contact', path: '/partner' },
  ];

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    padding: isScrolled ? '12px 0' : '20px 0',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? `2px solid ${theme.colors.slate200}` : 'none',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 12px',
    fontSize: '11px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: theme.typography.capsSpacing,
    transition: 'all 0.2s',
    textDecoration: 'none',
    color: isActive ? theme.colors.slate900 : theme.colors.slate500,
  });

  return (
    <nav style={navStyle} className="main-navbar">
      <div style={containerStyle} className="navbar-container">
        <div style={{ flexShrink: 0 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <BrandLogo height={isScrolled ? 50 : 60} />
          </Link>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={linkStyle(location.pathname === link.path)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginLeft: '12px' }}>
              <a 
                href="https://gradium-os.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <PremiumButton 
                  variant="dark" 
                  style={{ 
                    padding: '10px 20px', 
                    fontSize: '11px', 
                    borderRadius: '4px',
                    textTransform: 'none' 
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    Gradium<span style={{ color: theme.colors.secondary }}>OS</span>
                  </span>
                </PremiumButton>
              </a>
            </div>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              display: 'none', 
              padding: '10px', 
              borderRadius: '8px', 
              color: theme.colors.slate900, 
              background: 'white', 
              border: `2px solid ${theme.colors.slate200}`,
              cursor: 'pointer' 
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          borderBottom: `2px solid ${theme.colors.slate200}`,
          boxShadow: theme.shadows.heavy,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              style={{ fontSize: '15px', fontWeight: 800, color: theme.colors.slate900, textDecoration: 'none', letterSpacing: theme.typography.titleSpacing }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '12px' }}>
            <a 
              href="https://gradium-os.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMobileMenuOpen(false)} 
              style={{ textDecoration: 'none' }}
            >
              <PremiumButton style={{ width: '100%', textTransform: 'none' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Gradium<span style={{ color: theme.colors.secondary }}>OS</span>
                </span>
              </PremiumButton>
            </a>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 1350px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 768px) {
          .main-navbar { padding: 12px 0 !important; }
          .navbar-container { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
