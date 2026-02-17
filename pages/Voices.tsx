
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  User, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Activity, 
  Award,
  Fingerprint
} from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

type StakeholderType = 'EMPLOYER' | 'INSTITUTION' | 'LEARNER';

const VerificationReport: React.FC<{
  quote: string;
  name: string;
  role: string;
  company: string;
  type: StakeholderType;
  delay: number;
}> = ({ quote, name, role, company, type, delay }) => {
  const getIcon = () => {
    if (type === 'EMPLOYER') return <Building2 size={24} />;
    if (type === 'INSTITUTION') return <GraduationCap size={24} />;
    return <User size={24} />;
  };

  const getColor = () => {
    if (type === 'EMPLOYER') return theme.colors.primary;
    if (type === 'INSTITUTION') return theme.colors.secondary;
    return '#8b5cf6';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      style={{
        backgroundColor: 'white',
        borderRadius: '32px',
        padding: '48px',
        border: '2px solid #000',
        boxShadow: '0 20px 50px rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="voice-card"
    >
      <div style={{ position: 'absolute', top: -15, right: -15, opacity: 0.05, color: getColor() }}>
        {getIcon()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ 
          padding: '10px 16px', 
          backgroundColor: `${getColor()}15`, 
          color: getColor(), 
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: `1px solid ${getColor()}30`
        }} className="voice-tag">
          {getIcon()}
          <span style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {type}
          </span>
        </div>
        <div style={{ color: getColor() }}>
            <Quote size={32} strokeWidth={2.5} />
        </div>
      </div>

      <p style={{ fontSize: '19px', color: theme.colors.slate800, lineHeight: 1.6, fontWeight: 500, flexGrow: 1, fontStyle: 'italic' }} className="voice-quote">
        "{quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: `1.5px solid ${theme.colors.slate100}` }}>
        <div style={{ position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: theme.colors.slate100, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.slate400, overflow: 'hidden', border: `1px solid ${theme.colors.slate200}` }}>
                <User size={28} />
            </div>
            <div style={{ position: 'absolute', bottom: -4, right: -4, backgroundColor: theme.colors.secondary, padding: '4px', borderRadius: '50%', border: '2px solid white' }}>
                <ShieldCheck size={10} color="white" />
            </div>
        </div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 900, color: theme.colors.slate900, letterSpacing: '-0.01em' }}>{name}</div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: theme.colors.slate500 }}>{role} @ <span style={{ color: theme.colors.slate900 }}>{company}</span></div>
        </div>
      </div>
    </motion.div>
  );
};

const Voices: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  const testimonials = [
    {
      type: 'EMPLOYER' as const,
      quote: "Provenor has clinicalized our hiring process. We no longer rely on inference; we look at readiness clusters backed by atomic evidence. It is the standard we have been waiting for.",
      name: "Rohan Deshmukh",
      role: "VP of Engineering",
      company: "TechNexus India",
    },
    {
      type: 'INSTITUTION' as const,
      quote: "By aligning our cohorts with vertical standards, we have bridged the gap between theory and day-one readiness. Our placement precision has doubled.",
      name: "Dr. Priyanka Joshi",
      role: "Dean of Academic Innovation",
      company: "Indus Institute of Technology",
    },
    {
      type: 'LEARNER' as const,
      quote: "The transparency of the Provenor system gave me a portable, verified signal of my own capability. I did not have to sell myself—the data did it for me.",
      name: "Arjun Iyer",
      role: "Solutions Architect",
      company: "Verified Candidate",
    },
    {
      type: 'EMPLOYER' as const,
      quote: "The retraining overhead was our biggest efficiency leak. Provenor hires contribute from their first week because they have already proven their build capacity.",
      name: "Kavita Krishnan",
      role: "Chief Talent Officer",
      company: "Global Systemic",
    },
    {
      type: 'INSTITUTION' as const,
      quote: "Finally, a neutral layer of truth. Provenor provides a diagnostic report that helps us iterate our curricula for real world impact.",
      name: "Prof. Rajesh Khanna",
      role: "Director of Student Outcomes",
      company: "Modern University",
    },
    {
      type: 'LEARNER' as const,
      quote: "Knowing exactly what employers value and having the high fidelity platform to prove my skills changed everything. I am now a verified professional asset.",
      name: "Ishita Verma",
      role: "Full Stack Developer",
      company: "Verified Graduate",
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="voices-hero" style={{ 
        backgroundColor: theme.colors.slate50, 
        padding: '60px 0 60px', 
        borderBottom: `1px solid ${theme.colors.slate100}`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={containerStyle} className="voices-container">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: theme.colors.primary, fontWeight: 900, textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.3em', marginBottom: '16px' }}>
                <Activity size={14} />
                Global Trust Ledger
              </div>
              <h1 className="voices-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '20px', lineHeight: 1.0, letterSpacing: '-0.04em' }}>
                Voices of <br /><span style={{ color: theme.colors.primary }}>Verification.</span>
              </h1>
              <p className="voices-p" style={{ fontSize: '19px', color: theme.colors.slate500, maxWidth: '680px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                Hear from the stakeholders who are restoring the economic definition of professional readiness through the Provenor Standard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', backgroundColor: 'white' }} className="voices-grid-section">
        <div style={containerStyle} className="voices-container">
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }} className="voices-grid">
            <AnimatePresence mode="popLayout">
                {testimonials.map((t, i) => (
                    <VerificationReport key={t.name} {...t} delay={i} />
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: theme.colors.slate900, color: 'white', position: 'relative', overflow: 'hidden' }} className="voices-footer-section">
        <div style={{ ...containerStyle, position: 'relative', zIndex: 1, textAlign: 'center' }} className="voices-container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginBottom: '80px' }} className="footer-icons-grid">
              {[
                  { icon: <ShieldCheck size={40} />, label: "Neutral Audit", sub: "Clinical Integrity" },
                  { icon: <Fingerprint size={40} />, label: "Atomic Proof", sub: "Evidence Based" },
                  { icon: <Award size={40} />, label: "Global Signal", sub: "Universal Trust" }
              ].map((item, i) => (
                  <motion.div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      <div style={{ color: theme.colors.secondary }}>{item.icon}</div>
                      <div style={{ fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em' }}>{item.label}</div>
                      <div style={{ fontSize: '10px', color: theme.colors.slate500, fontWeight: 700 }} className="icon-sub-hide">{item.sub}</div>
                  </motion.div>
              ))}
          </div>

          <h2 className="voices-footer-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '32px', letterSpacing: '-0.03em' }}>Ready to join the <br /><span style={{ color: theme.colors.secondary }}>readiness loop?</span></h2>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }} className="footer-ctas">
            <PremiumButton variant="secondary" style={{ padding: '24px 48px' }}>Join the Network</PremiumButton>
            <PremiumButton variant="white" style={{ padding: '24px 48px' }}>Request Protocol Audit</PremiumButton>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .voices-hero { padding: 40px 0 !important; }
          .voices-container { padding: 0 20px !important; }
          .voices-title, .voices-footer-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .voices-p { text-align: center; font-size: 16px !important; padding: 0 8px; }
          .voices-grid-section { padding: 40px 0 !important; }
          .voices-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .voice-card { padding: 32px 24px !important; }
          .voice-quote { fontSize: 16px !important; }
          .voice-tag { padding: 8px 12px !important; }
          
          .voices-footer-section { padding: 60px 0 !important; }
          .footer-icons-grid { gap: 24px !important; margin-bottom: 40px !important; }
          .icon-sub-hide { display: none !important; }
          .footer-ctas { flex-direction: column; gap: 16px !important; align-items: center; }
        }
      `}</style>
    </div>
  );
};

export default Voices;
