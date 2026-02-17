
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, ArrowRight, Lock, Eye, Activity, Shield, Building2, GraduationCap, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const AuditLedger: React.FC = () => {
  const [activeConnection, setActiveConnection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const entities = [
    { label: "INSTITUTION", icon: <GraduationCap size={24} />, sub: "Origin of Learning" },
    { label: "EMPLOYER", icon: <Building2 size={24} />, sub: "Origin of Demand" },
    { label: "LEARNER", icon: <User size={24} />, sub: "Origin of Proof" }
  ];

  return (
    <div style={{
      width: '100%',
      height: '520px',
      backgroundColor: theme.colors.slate900,
      borderRadius: '32px',
      border: '2px solid #000',
      padding: '40px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: theme.shadows.heavy
    }} className="audit-ledger">
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 0
      }} className="ledger-bg-icon">
        <ShieldCheck size={400} color="white" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.secondary }} className="pulse"></div>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'white', letterSpacing: theme.typography.capsSpacing }}>NEUTRAL VALIDATION ENGINE</span>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="ledger-viz">
        <svg viewBox="0 0 400 320" style={{ width: '100%', height: '100%', overflow: 'visible', position: 'relative', zIndex: 1 }}>
          <defs>
            <filter id="glow-green">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {entities.map((entity, i) => {
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const x = 200 + Math.cos(angle) * 125;
            const y = 160 + Math.sin(angle) * 125;
            const isActive = i === activeConnection;
            return (
              <g key={`line-${i}`}>
                <motion.line 
                  x1="200" y1="160" x2={x} y2={y} 
                  stroke={isActive ? theme.colors.secondary : "rgba(255,255,255,0.1)"} 
                  strokeWidth={isActive ? "3" : "1.5"}
                  strokeDasharray={isActive ? "none" : "4 4"}
                />
                {isActive && (
                  <motion.circle 
                    r="5" 
                    fill={theme.colors.secondary}
                    initial={{ cx: x, cy: y }}
                    animate={{ cx: 200, cy: 160 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.8))' }}
                  />
                )}
              </g>
            );
          })}

          <g transform="translate(200, 160)">
            <motion.circle 
              r="55" 
              fill={theme.colors.slate900} 
              stroke={theme.colors.secondary} 
              strokeWidth="2.5"
              animate={{ r: [55, 60, 55] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.circle 
              r="75" 
              fill="none" 
              stroke={theme.colors.secondary} 
              strokeWidth="1.5" 
              strokeDasharray="6 6"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              opacity="0.3"
            />
            <foreignObject x="-25" y="-25" width="50" height="50">
              <div style={{ color: theme.colors.secondary, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <ShieldCheck size={40} filter="url(#glow-green)" />
              </div>
            </foreignObject>
          </g>

          {entities.map((entity, i) => {
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const x = 200 + Math.cos(angle) * 125;
            const y = 160 + Math.sin(angle) * 125;
            const isActive = i === activeConnection;

            return (
              <g key={`node-${i}`}>
                <circle cx={x} cy={y} r="32" fill={theme.colors.slate900} stroke={isActive ? "white" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" />
                <foreignObject x={x - 12} y={y - 12} width="24" height="24">
                  <div style={{ color: isActive ? "white" : "rgba(255,255,255,0.4)", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    {entity.icon}
                  </div>
                </foreignObject>
                
                <text x={x} y={y + 50} fill={isActive ? "white" : "rgba(255,255,255,0.4)"} fontSize="11" fontWeight="900" textAnchor="middle" style={{ letterSpacing: '0.05em' }}>
                  {entity.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ 
        backgroundColor: 'rgba(255,255,255,0.03)', 
        padding: '24px', 
        borderRadius: '16px', 
        border: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.secondary, letterSpacing: theme.typography.capsSpacing, marginBottom: '4px' }}>
              CURRENT STATUS: AUDITING {entities[activeConnection].label}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'white' }}>
              Verifying {entities[activeConnection].sub}...
            </div>
          </div>
          <Activity size={18} color={theme.colors.secondary} className="pulse" />
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .ledger-viz { transform: scale(1.15); transform-origin: center; margin: 20px 0; }
          .audit-ledger { padding: 32px 16px !important; height: 560px !important; }
        }
      `}</style>
    </div>
  );
};

const VerificationTrust: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="trust-hero" style={{ 
        backgroundColor: theme.colors.slate900, 
        color: 'white', 
        minHeight: 'calc(100vh - 64px)', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '60px 0', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={containerStyle} className="trust-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ gridColumn: 'span 7' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: theme.colors.secondary, borderRadius: '100px', fontSize: '10px', fontWeight: 900, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing }}>
                <ShieldCheck size={14} />
                Neutral Verification
              </div>
              <h1 className="trust-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.0, letterSpacing: theme.typography.headingSpacing }}>Trust requires <br /><span style={{ color: theme.colors.secondary }}>independence.</span></h1>
              <p className="trust-p" style={{ fontSize: '20px', color: theme.colors.slate400, lineHeight: 1.6, maxWidth: '600px', marginBottom: '40px' }}>
                We operate as the neutral layer in the employability ecosystem, ensuring that "verified" means something undeniable and legally defensible for all stakeholders.
              </p>
              <Link to="/who-its-for" style={{ textDecoration: 'none' }}>
                <PremiumButton variant="white">
                  See Ecosystem Impact <ArrowRight size={18} />
                </PremiumButton>
              </Link>
            </motion.div>

            <motion.div 
              style={{ gridColumn: 'span 5' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AuditLedger />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: 'white' }} className="trust-details-section">
        <div style={containerStyle} className="trust-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing, display: 'block', marginBottom: '16px' }}>Regulatory Certainty</span>
             <h2 className="details-title" style={{ fontSize: 'clamp(28px, 9vw, 36px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '32px', letterSpacing: theme.typography.headingSpacing, lineHeight: 1.1 }}>Separation of Concerns.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'center' }} className="trust-grid">
            <div style={{ gridColumn: 'span 6' }}>
              <p style={{ fontSize: '19px', color: theme.colors.slate500, lineHeight: 1.7, marginBottom: '40px' }} className="trust-p-detail">
                Provenor operates independently from institutions, employers, and training providers. Our only incentive is the accuracy of the readiness signal.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="trust-subgrid">
                <div style={{ padding: '32px', backgroundColor: theme.colors.slate50, borderRadius: '24px', border: '2px solid #000' }}>
                  <Activity size={24} color={theme.colors.primary} style={{ marginBottom: '16px' }} />
                  <div style={{ fontWeight: 900, fontSize: '16px', color: theme.colors.slate900, letterSpacing: theme.typography.titleSpacing }}>Real-Time Audit</div>
                  <div style={{ fontSize: '14px', color: theme.colors.slate500, marginTop: '8px', fontWeight: 600 }}>Continuous verification during the build process.</div>
                </div>
                <div style={{ padding: '32px', backgroundColor: theme.colors.slate50, borderRadius: '24px', border: '2px solid #000' }}>
                  <Eye size={24} color={theme.colors.primary} style={{ marginBottom: '16px' }} />
                  <div style={{ fontWeight: 900, fontSize: '16px', color: theme.colors.slate900, letterSpacing: theme.typography.titleSpacing }}>Full Transparency</div>
                  <div style={{ fontSize: '14px', color: theme.colors.slate500, marginTop: '8px', fontWeight: 600 }}>Auditable evidence trails for every issued signal.</div>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 6' }}>
              <div style={{ backgroundColor: theme.colors.slate900, borderRadius: '48px', padding: '64px', color: 'white', position: 'relative', overflow: 'hidden', border: '2px solid #000' }} className="audit-card">
                <Shield size={120} style={{ position: 'absolute', top: -20, right: -20, opacity: 0.1 }} className="ledger-bg-icon-detail" />
                <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '32px', letterSpacing: theme.typography.headingSpacing }}>The Provenor Audit</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    "Multi-point, randomized assessments",
                    "Direct observation of applied build",
                    "Vertical consistency cross-referencing",
                    "Immutable, tamper-proof signal issuance"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '17px', fontWeight: 700 }}>
                      <CheckCircle size={22} style={{ color: theme.colors.secondary }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        @media (max-width: 768px) {
          .trust-hero { padding: 40px 0 !important; min-height: auto !important; }
          .trust-container { padding: 0 20px !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .hero-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; }
          .trust-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .trust-p { text-align: center; padding: 0 8px; font-size: 16px !important; }
          .ledger-bg-icon { display: none !important; }
          
          .trust-details-section { padding: 60px 0 !important; }
          .details-title { font-size: clamp(24px, 8vw, 32px) !important; }
          .trust-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .trust-grid > div { grid-column: span 1 !important; }
          .trust-p-detail { text-align: center; }
          .trust-subgrid { grid-template-columns: 1fr !important; }
          .audit-card { padding: 40px 24px !important; }
          .ledger-bg-icon-detail { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default VerificationTrust;
