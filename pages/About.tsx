
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Globe, Award, ShieldCheck, Network, Cpu, Activity } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const About: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="about-hero" style={{ 
        backgroundColor: theme.colors.slate900, 
        color: 'white', 
        minHeight: 'calc(85vh - 64px)', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '60px 0', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={containerStyle} className="about-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="hero-grid">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              style={{ gridColumn: 'span 7', position: 'relative', zIndex: 2 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Activity size={14} color={theme.colors.secondary} />
                <span>We Restore Signal Integrity</span>
              </div>
              <h1 className="about-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', lineHeight: 1, letterSpacing: '-0.04em' }}>
                We restore trust <br />between <span style={{ color: theme.colors.secondary }}>learning and work.</span>
              </h1>
              <p className="about-p" style={{ fontSize: '20px', color: theme.colors.slate400, lineHeight: 1.6, maxWidth: '600px' }}>
                We exist to solve a structural problem: professional readiness is neither systematically cultivated nor credibly proven. We are building the bridge.
              </p>
            </motion.div>

            <motion.div 
              style={{ gridColumn: 'span 5' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ 
                padding: '64px', 
                backgroundColor: 'rgba(255,255,255,0.03)', 
                borderRadius: '48px', 
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }} className="about-shield-box">
                <ShieldCheck size={72} color={theme.colors.secondary} style={{ marginBottom: '24px' }} />
                <div style={{ fontWeight: 900, fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>WE VERIFY</div>
                <div style={{ fontWeight: 800, fontSize: '10px', color: theme.colors.secondary }}>LEGALLY DEFENSIBLE READINESS</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0' }} className="about-mission-section">
        <div style={containerStyle} className="about-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '80px', alignItems: 'center' }} className="about-grid">
            <div style={{ gridColumn: 'span 7' }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '16px' }}>Our Mission</span>
              <h2 className="mission-title" style={{ fontSize: '44px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                We ensure learning <br />converts into employability.
              </h2>
              <p style={{ fontSize: '20px', color: theme.colors.slate500, lineHeight: 1.7, marginBottom: '48px' }}>
                By aligning employers, institutions, and learners around shared competence standards, we restore trust in the value of education and the quality of hiring globally.
              </p>
              
              <div style={{ backgroundColor: theme.colors.slate900, padding: '56px', borderRadius: '48px', color: 'white', position: 'relative', overflow: 'hidden' }} className="outcome-box">
                <h3 style={{ fontSize: '26px', fontWeight: 900, color: theme.colors.secondary, marginBottom: '20px' }}>We verify readiness.</h3>
                <p style={{ color: theme.colors.slate400, lineHeight: 1.7, fontSize: '18px', fontWeight: 600 }}>
                  We do not sell training; we validate outcomes. This separation of concerns is fundamental to restoring the economic signal of professional readiness.
                </p>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5', backgroundColor: theme.colors.slate50, padding: '64px', borderRadius: '48px', border: '1px solid #e2e8f0' }} className="about-team-box">
              <div style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '40px' }}>WHO WE ARE</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="team-items">
                {[
                  { label: "Our Team", val: "Provenor Systems", icon: <Shield size={22} /> },
                  { label: "Our Focus", val: "Readiness Orchestration", icon: <Target size={22} /> },
                  { label: "Our Process", val: "The Neutral Audit", icon: <Award size={22} /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px' }}>
                    <div style={{ color: theme.colors.primary, marginTop: '4px' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{item.label}</div>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: theme.colors.slate900 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid, .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .hero-grid > div, .about-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; }
          .about-hero { padding: 40px 0 !important; min-height: auto !important; }
          .about-container { padding: 0 20px !important; }
          .about-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .about-p { text-align: center; font-size: 16px !important; padding: 0 8px; }
          .about-shield-box { padding: 40px 20px !important; }
          
          .about-mission-section { padding: 60px 0 !important; }
          .mission-title { font-size: 32px !important; }
          .outcome-box { padding: 40px 24px !important; border-radius: 40px !important; }
          .about-team-box { padding: 40px 24px !important; border-radius: 40px !important; margin-top: 20px; }
          .team-items { gap: 24px !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
