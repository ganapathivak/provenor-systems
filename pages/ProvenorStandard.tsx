
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, ArrowRight, ShieldCheck, CheckCircle, Layers, Fingerprint } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const ProtocolSchema: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '420px',
      backgroundColor: theme.colors.slate900,
      borderRadius: '32px',
      border: '2px solid #000',
      padding: '40px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05 }}>
        <svg width="100%" height="100%">
          <pattern id="grid-proto-std" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-proto-std)" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', width: '320px', height: '320px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        <div style={{ backgroundColor: 'white', padding: '48px 40px', borderRadius: '48px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', textAlign: 'center', zIndex: 2, border: '2px solid #000', minWidth: '180px' }}>
          <ShieldCheck size={64} color={theme.colors.primary} style={{ marginBottom: '16px', filter: `drop-shadow(0 0 10px ${theme.colors.primary}40)` }} />
          <div style={{ fontWeight: 900, fontSize: '13px', color: theme.colors.slate900, letterSpacing: '0.3em', textTransform: 'uppercase', lineHeight: 1.4 }}>THE<br/>PROVENOR<br/>STANDARD</div>
        </div>
      </div>
    </div>
  );
};

const ProvenorStandard: React.FC = () => {
  const containerStyle: React.CSSProperties = { maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="std-hero" style={{ backgroundColor: theme.colors.slate900, color: 'white', minHeight: 'calc(70vh - 112px)', display: 'flex', alignItems: 'center', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={containerStyle} className="std-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="std-grid">
            <motion.div style={{ gridColumn: 'span 6' }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '100px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Shield size={14} color={theme.colors.neonSecondary} style={{ filter: `drop-shadow(0 0 5px ${theme.colors.neonSecondary})` }} />
                <span>Structural Integrity Protocol</span>
              </div>
              <h1 className="std-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.04em' }}>A shared code <br /><span style={{ color: theme.colors.neonSecondary }}>for readiness.</span></h1>
              <p className="std-p" style={{ fontSize: '20px', color: theme.colors.slate400, maxWidth: '540px', lineHeight: 1.6, marginBottom: '40px' }}>Defining the neutral standard for competence—ensuring readiness is cultivated, measured, and verified with precision.</p>
              <Link to="/alignment-verification" style={{ textDecoration: 'none' }}><PremiumButton variant="secondary">Examine Process <ArrowRight size={18} /></PremiumButton></Link>
            </motion.div>
            <motion.div style={{ gridColumn: 'span 6' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}><ProtocolSchema /></motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }} className="std-features">
        <div style={containerStyle} className="std-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }} className="std-features-grid">
            <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '32px' }}>
               <div style={{ padding: '32px 48px', backgroundColor: theme.colors.slate50, borderRadius: '32px', border: '2px solid #000', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }} className="feature-card">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(37,99,235,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.primary, marginBottom: '24px', border: `1px solid ${theme.colors.primary}20` }}>
                    <Target size={22} style={{ filter: `drop-shadow(0 0 5px ${theme.colors.primary}40)` }} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px', color: theme.colors.slate900 }}>What it Defines</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     {["Role-specific competence clusters", "Vertical proficiency levels", "Evidence-based criteria", "Readiness thresholds"].map((item, i) => (
                       <li key={i} style={{ display: 'flex', gap: '12px', fontWeight: 700, color: theme.colors.slate600, fontSize: '15px' }}>
                          {/* Fixed Error: Object literal may only specify known properties, and 'theme' does not exist in type 'Properties'. */}
                          <CheckCircle size={16} style={{ color: theme.colors.primary, flexShrink: 0, marginTop: '3px', filter: `drop-shadow(0 0 4px ${theme.colors.primary}30)` }} />
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>

               <div style={{ padding: '32px 48px', backgroundColor: 'white', borderRadius: '32px', border: '2px solid #000', boxShadow: `0 10px 40px ${theme.colors.secondary}10` }} className="feature-card">
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16,185,129,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.secondary, marginBottom: '24px', border: `1px solid ${theme.colors.secondary}30` }}>
                    <Zap size={22} style={{ filter: `drop-shadow(0 0 5px ${theme.colors.secondary}40)` }} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px', color: theme.colors.slate900 }}>What it Enables</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     {["Universal signal portability", "Defensible outcome verification", "Predictive team performance", "Reduced hiring risk"].map((item, i) => (
                       <li key={i} style={{ display: 'flex', gap: '12px', fontWeight: 700, color: theme.colors.slate600, fontSize: '15px' }}>
                          <CheckCircle size={16} style={{ color: theme.colors.secondary, flexShrink: 0, marginTop: '3px', filter: `drop-shadow(0 0 4px ${theme.colors.secondary}30)` }} />
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div style={{ gridColumn: 'span 6', backgroundColor: theme.colors.slate900, borderRadius: '40px', padding: '48px', color: 'white', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '2px solid #000' }} className="identity-block">
               <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05 }} className="bg-icon-hide"><Layers size={300} /></div>
               <span style={{ color: theme.colors.neonSecondary, fontWeight: 900, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px' }}>Identity Architecture</span>
               <h2 style={{ fontSize: '36px', fontWeight: 900, lineHeight: 1.1, marginBottom: '32px' }}>A neutral layer <br /><span style={{ color: theme.colors.neonSecondary }}>of certainty.</span></h2>
               <p style={{ fontSize: '17px', color: theme.colors.slate400, lineHeight: 1.7, marginBottom: '40px' }}>Restoring the economic value of credentials by operating as an independent auditor of readiness.</p>
               
               <div style={{ padding: '32px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <Fingerprint size={24} color={theme.colors.neonSecondary} style={{ filter: `drop-shadow(0 0 5px ${theme.colors.neonSecondary}60)` }} />
                    <h4 style={{ fontWeight: 900, color: 'white', fontSize: '17px' }}>Trust Protocol</h4>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: theme.colors.slate400, fontSize: '14px', fontWeight: 600 }}>
                     <li>• 100% Outcome Oriented</li>
                     <li>• Neutral Asset Ownership</li>
                     <li>• Immutable Evidence Trails</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .std-hero { padding: 40px 0 !important; min-height: auto !important; }
          .std-container { padding: 0 16px !important; }
          .std-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .std-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; width: 100%; }
          .std-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .std-p { text-align: center; padding: 0 8px; font-size: 16px !important; }
          
          .std-features { padding: 60px 0 !important; }
          .std-features-grid { grid-template-columns: 1fr !important; }
          .std-features-grid > div { grid-column: span 1 !important; }
          .feature-card { padding: 32px 24px !important; }
          .identity-block { padding: 32px 24px !important; margin-top: 20px; border-radius: 32px !important; }
          .bg-icon-hide { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ProvenorStandard;
