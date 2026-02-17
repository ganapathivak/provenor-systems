
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, MessageSquare, Send, CheckCircle2, Activity, ShieldCheck } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const Partner: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '18px 20px',
    backgroundColor: theme.colors.slate50,
    border: `1px solid ${theme.colors.slate200}`,
    borderRadius: '12px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: 'inherit',
    color: theme.colors.slate900,
    fontWeight: 600
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <section className="partner-hero" style={{ 
        backgroundColor: theme.colors.slate900, 
        color: 'white', 
        minHeight: 'calc(80vh - 112px)', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '40px 0', 
        overflow: 'hidden' 
      }}>
        <div style={containerStyle} className="partner-container">
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ShieldCheck size={14} color={theme.colors.secondary} />
              System Handshake Initialized
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="partner-title"
              style={{ 
                fontSize: 'clamp(32px, 8vw, 68px)', 
                fontWeight: 900, 
                color: 'white', 
                marginBottom: '20px', 
                lineHeight: 1.1, 
                letterSpacing: '-0.04em' 
              }}>
              Scale Your <br /> Verification <span style={{ color: theme.colors.secondary }}>Architecture.</span>
            </motion.h1>
            <p style={{ fontSize: '19px', color: theme.colors.slate400, marginBottom: '40px', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 40px' }}>
              Join the neutral employability ecosystem. Align your organization to the global protocol for verified professional readiness.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="partner-cards">
              {[
                { icon: <Building2 size={24} />, title: "Employer", desc: "Access Verified Talent Pools", variant: 'primary' },
                { icon: <GraduationCap size={24} />, title: "Institution", desc: "Align Curriculum Signals", variant: 'secondary' },
                { icon: <MessageSquare size={24} />, title: "Inquiry", desc: "General & Press Support", variant: 'white' }
              ].map((c, i) => (
                <div key={i} style={{ 
                  backgroundColor: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '32px 20px', 
                  borderRadius: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px'
                }} className="partner-card">
                  <div style={{ color: c.variant === 'secondary' ? theme.colors.secondary : 'white' }}>{c.icon}</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 900, color: 'white', marginBottom: '2px' }}>{c.title}</div>
                    <div style={{ fontSize: '8px', color: theme.colors.slate400, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0' }} className="partner-form-section">
        <div style={containerStyle} className="partner-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '80px', alignItems: 'start' }} className="form-grid">
            <div style={{ gridColumn: 'span 5' }} className="form-info">
              <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '16px' }}>Network Connection</span>
              <h2 className="partner-form-title" style={{ fontSize: 'clamp(28px, 7vw, 52px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Let's Build the <br /><span style={{ color: theme.colors.primary }}>Bridge.</span></h2>
              <p style={{ fontSize: '18px', color: theme.colors.slate500, lineHeight: 1.7, marginBottom: '48px' }}>
                We translate market requirements into systematic readiness signals. Initiate the alignment process today.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="form-checklist">
                {[
                  { t: "Fast-Track Onboarding", d: "Standard alignment typically active in 14 days." },
                  { t: "Institutional Support", d: "Dedicated engineers for kernel integration." },
                  { t: "Global Network Access", d: "Connect with over 120+ verified partner nodes." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: theme.colors.secondary, marginTop: '4px', flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 900, color: theme.colors.slate900, fontSize: '17px', marginBottom: '6px' }}>{item.t}</div>
                      <div style={{ fontSize: '15px', color: theme.colors.slate500, lineHeight: 1.5, fontWeight: 600 }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ gridColumn: 'span 7' }} className="form-column">
              <div style={{ backgroundColor: 'white', padding: '64px', borderRadius: '48px', boxShadow: '0 40px 100px rgba(0,0,0,0.05)', border: `1px solid #e2e8f0` }} className="form-box">
                <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                    <div className="form-field">
                      <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Full Name</label>
                      <input type="text" placeholder="Alex Rivera" style={inputStyle} />
                    </div>
                    <div className="form-field">
                      <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Work Email</label>
                      <input type="email" placeholder="alex@company.com" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Organization Type</label>
                    <select style={inputStyle}>
                      <option>Tech Employer / Hiring Partner</option>
                      <option>Educational Institution</option>
                      <option>Professional Training Provider</option>
                      <option>Governmental Agency</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Inquiry Details</label>
                    <textarea placeholder="Describe your alignment goals..." style={{ ...inputStyle, height: '160px', resize: 'none' }}></textarea>
                  </div>
                  <PremiumButton variant="primary" style={{ width: '100%', padding: '24px' }} type="submit">
                    Initiate Connection
                  </PremiumButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 1024px) {
          .partner-hero { padding: 40px 0 !important; min-height: auto !important; }
          .partner-container { padding: 0 20px !important; }
          .partner-title { font-size: 38px !important; }
          .partner-cards { grid-template-columns: 1fr !important; gap: 12px !important; }
          .partner-card { padding: 24px 16px !important; }
          
          .partner-form-section { padding: 60px 0 !important; }
          .form-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-info { grid-column: span 1 !important; text-align: center; display: flex; flex-direction: column; align-items: center; }
          .form-column { grid-column: span 1 !important; }
          .partner-form-title { font-size: 32px !important; }
          .form-checklist { gap: 24px !important; align-items: flex-start; text-align: left; }
          
          .form-box { padding: 32px 20px !important; border-radius: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .form-field { width: 100% !important; }
        }
      `}</style>
    </div>
  );
};

export default Partner;
