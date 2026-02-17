
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

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

const Footer: React.FC = () => {
  const sectionHeaderStyle: React.CSSProperties = {
    color: 'white',
    fontWeight: 800,
    marginBottom: '20px',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: theme.typography.capsSpacing,
  };

  const linkStyle: React.CSSProperties = {
    color: '#cbd5e1',
    fontSize: '14px',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.2s',
    textDecoration: 'none',
  };

  return (
    <footer style={{ backgroundColor: '#020617', color: '#94a3b8', padding: '80px 0 48px', borderTop: `1px solid rgba(255,255,255,0.1)` }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px' }} className="footer-grid">
          <div style={{ gridColumn: 'span 4' }} className="footer-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', textDecoration: 'none' }}>
              <BrandLogo height={60} mode="dark" />
            </Link>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#94a3b8', maxWidth: '300px' }}>
              Turning learning into verifiable competence through market alignment, applied build, and neutral verification protocols.
            </p>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={sectionHeaderStyle}>Solution</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/the-provenor-standard" style={linkStyle} className="footer-link">The Standard</Link></li>
              <li><Link to="/impact" style={linkStyle} className="footer-link">Impact Results</Link></li>
              <li><Link to="/voices" style={linkStyle} className="footer-link">Testimonials</Link></li>
              <li><Link to="/perspectives" style={linkStyle} className="footer-link">Perspectives</Link></li>
            </ul>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={sectionHeaderStyle}>Ecosystem</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/who-its-for" style={linkStyle} className="footer-link">Employers</Link></li>
              <li><Link to="/who-its-for" style={linkStyle} className="footer-link">Institutions</Link></li>
              <li><Link to="/who-its-for" style={linkStyle} className="footer-link">Learners</Link></li>
              <li><a href="https://gradium-os.vercel.app/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="footer-link">GradiumOS</a></li>
            </ul>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={sectionHeaderStyle}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/about" style={linkStyle} className="footer-link">Mission</Link></li>
              <li><Link to="/partner" style={linkStyle} className="footer-link">Contact</Link></li>
              <li><Link to="/partner" style={linkStyle} className="footer-link">Partners</Link></li>
            </ul>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={sectionHeaderStyle}>Process</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/alignment-verification" style={linkStyle} className="footer-link">Verification</Link></li>
              <li><Link to="/verification-trust" style={linkStyle} className="footer-link">Trust Protocol</Link></li>
              <li><Link to="/problem" style={linkStyle} className="footer-link">Readiness Gap</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '12px' }}>
          <p style={{ color: '#64748b' }}>© {new Date().getFullYear()} Provenor Systems Private Limited. All signals verified under the Provenor Standard.</p>
        </div>
      </div>
      <style>{`
        .footer-link:hover { color: white !important; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-brand { grid-column: span 2 !important; margin-bottom: 40px; }
        }
        @media (max-width: 600px) {
           .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
           .footer-brand { grid-column: span 1 !important; }
           footer { padding: 32px 0 40px !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
