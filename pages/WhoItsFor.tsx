
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, UserCheck, CheckCircle2, ArrowRight, BarChart3, Globe, Shield } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const WhoItsFor: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  const personas = [
    {
      role: "Employers",
      icon: <Briefcase size={28} />,
      title: "Eliminate Hiring Guesswork.",
      points: [
        "Reduce noise with verified data",
        "Compare on objective benchmarks",
        "Eliminate retraining overhead",
        "Predictive team performance"
      ],
      stat: "64% Hiring Precision Up",
      color: theme.colors.primary
    },
    {
      role: "Institutions",
      icon: <GraduationCap size={28} />,
      title: "Market-Aligned Outcomes.",
      points: [
        "Align curricula with real roles",
        "Diagnose and bridge cohort gaps",
        "Validate placement readiness",
        "Certified employability signals"
      ],
      stat: "1:1 Market Alignment",
      color: theme.colors.secondary
    },
    {
      role: "Learners",
      icon: <UserCheck size={28} />,
      title: "Evidence-Based Careers.",
      points: [
        "Clarity on what employers value",
        "Portable, verifiable profile",
        "Eliminate early-career risk",
        "Verified readiness signal"
      ],
      stat: "Zero Inference Career",
      color: "#8b5cf6"
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="personas-hero" style={{ 
        backgroundColor: theme.colors.slate50, 
        minHeight: 'calc(80vh - 64px)', 
        display: 'flex', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '60px 0' 
      }}>
        <div style={containerStyle} className="personas-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '16px' }}>Multi-Stakeholder Ecosystem</span>
            <h1 className="personas-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '24px', lineHeight: 1.0, letterSpacing: '-0.04em' }}>
              Built for institutional <br />
              <span style={{ color: theme.colors.primary }}>readiness.</span>
            </h1>
            <p className="personas-p" style={{ fontSize: '20px', color: theme.colors.slate500, maxWidth: '740px', margin: '0 auto', lineHeight: 1.6 }}>
              A unified operating system aligning the entire talent supply chain to a single, trusted definition of professional competence.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '140px 0' }} className="personas-section">
        <div style={containerStyle} className="personas-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="persona-grid">
            {personas.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '40px', 
                  padding: '56px', 
                  border: '1px solid #e2e8f0', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="persona-card"
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: `${p.color}10`, 
                  color: p.color, 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '40px'
                }}>
                  {p.icon}
                </div>
                <div style={{ color: theme.colors.slate400, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '11px', marginBottom: '16px' }}>{p.role}</div>
                <h3 style={{ fontSize: '28px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '32px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{p.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 48px 0', flexGrow: 1 }}>
                  {p.points.map((point, pi) => (
                    <li key={pi} style={{ display: 'flex', gap: '12px', color: theme.colors.slate500, fontSize: '16px', marginBottom: '16px', fontWeight: 600 }}>
                      <CheckCircle2 size={18} style={{ color: theme.colors.secondary, flexShrink: 0, marginTop: '2px' }} />
                      {point}
                    </li>
                  ))}
                </ul>
                <div style={{ paddingTop: '32px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BarChart3 size={16} color={p.color} />
                  <span style={{ fontSize: '13px', fontWeight: 900, color: p.color, letterSpacing: '0.05em' }}>{p.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ 
            marginTop: '140px', 
            background: theme.colors.slate900, 
            borderRadius: '56px', 
            padding: '100px 80px', 
            color: 'white',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '80px',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative'
          }} className="cta-banner">
            <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05 }} className="bg-icon-hide-persona">
              <Globe size={400} />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="cta-banner-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Ready to join the <br />readiness loop?</h2>
              <p style={{ fontSize: '20px', color: theme.colors.slate400, lineHeight: 1.6 }}>Connect demand, learning, and neutral proof in one high-performance operating system.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1 }} className="cta-buttons">
              <Link to="/partner" style={{ textDecoration: 'none' }}>
                <PremiumButton variant="secondary" style={{ width: '100%' }}>
                  Partner as Institution
                </PremiumButton>
              </Link>
              <Link to="/partner" style={{ textDecoration: 'none' }}>
                <PremiumButton variant="white" style={{ width: '100%' }}>
                  Partner as Employer
                </PremiumButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 1024px) {
          .personas-container { padding: 0 20px !important; }
          .persona-grid { grid-template-columns: 1fr !important; }
          .cta-banner { grid-template-columns: 1fr !important; padding: 60px 40px !important; text-align: center; gap: 40px !important; margin-top: 60px !important; }
          .personas-hero { min-height: auto !important; padding: 40px 0 !important; }
          .personas-title, .cta-banner-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .personas-p { text-align: center; font-size: 16px !important; padding: 0 8px; }
          .personas-section { padding: 60px 0 !important; }
          .persona-card { padding: 40px 24px !important; }
          .bg-icon-hide-persona { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default WhoItsFor;
