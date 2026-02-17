
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Activity, TrendingUp, Target, ShieldCheck, Clock, User } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const PerspectiveCard: React.FC<{
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  icon: React.ReactNode;
  accent: string;
}> = ({ title, excerpt, author, date, category, readTime, icon, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{
      backgroundColor: 'white',
      borderRadius: '32px',
      padding: '48px',
      border: `2px solid #000`,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
      position: 'relative',
      overflow: 'hidden'
    }}
    whileHover={{ 
      borderColor: accent, 
      y: -8,
      boxShadow: `0 25px 50px -12px ${accent}15`
    }}
    className="article-card"
  >
    <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: `radial-gradient(circle at top right, ${accent}08 0%, transparent 70%)`, pointerEvents: 'none' }} />
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ 
        width: '56px', 
        height: '56px', 
        borderRadius: '16px', 
        backgroundColor: `${accent}08`, 
        border: `1.5px solid ${accent}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: accent,
        boxShadow: `0 4px 10px ${accent}15`
      }}>
        {icon}
      </div>
      <div style={{ 
        fontSize: '10px', 
        fontWeight: 900, 
        color: accent, 
        textTransform: 'uppercase', 
        letterSpacing: theme.typography.capsSpacing,
        border: `1px solid ${accent}30`,
        padding: '6px 12px',
        borderRadius: '100px',
        backgroundColor: `${accent}05`
      }}>
        {category}
      </div>
    </div>

    <div>
      <h3 style={{ fontSize: '24px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '16px', lineHeight: 1.2 }}>{title}</h3>
      <p style={{ fontSize: '16px', color: theme.colors.slate600, lineHeight: 1.6, marginBottom: '24px' }}>{excerpt}</p>
    </div>

    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: `1.5px solid ${theme.colors.slate100}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: theme.colors.slate100, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.slate500, border: `1px solid ${theme.colors.slate200}` }}>
          <User size={16} />
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 800, color: theme.colors.slate900 }}>{author}</div>
          <div style={{ fontSize: '11px', color: theme.colors.slate500 }}>{date}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 800, color: theme.colors.slate400 }} className="read-time-hide">
        <Clock size={14} /> {readTime}
      </div>
    </div>
  </motion.div>
);

const Perspectives: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  const articles = [
    {
      title: "The Death of Inference: Why Resumes Fail in an AI Era",
      excerpt: "As LLMs commoditize professional writing, the generic resume has lost its value as a signal. We examine the shift towards atomic build evidence.",
      author: "Provenor Labs",
      date: "Oct 12, 2024",
      category: "Ecosystem",
      readTime: "8 min read",
      icon: <TrendingUp size={24} />,
      accent: theme.colors.primary
    },
    {
      title: "Clinicalizing the Transition: From Academic to Professional",
      excerpt: "The readiness gap isn't a failure of education, but a failure of alignment. How vertical standards solve the onboarding crisis.",
      author: "Internal Protocol Team",
      date: "Nov 04, 2024",
      category: "Technical",
      readTime: "12 min read",
      icon: <Activity size={24} />,
      accent: theme.colors.secondary
    },
    {
      title: "The Neutral Audit: Restoring Trust in Credentialing",
      excerpt: "Why the independence of the verification layer is the only way to ensure legally defensible readiness signals for employers.",
      author: "Founding Team",
      date: "Nov 28, 2024",
      category: "Trust",
      readTime: "6 min read",
      icon: <ShieldCheck size={24} />,
      accent: "#8b5cf6"
    },
    {
      title: "Mapping Competence: The Architecture of Role Archetypes",
      excerpt: "A deep dive into how Provenor defines discrete competence clusters to ensure candidates are day-one ready for specific roles.",
      author: "Product Engineering",
      date: "Dec 02, 2024",
      category: "Architecture",
      readTime: "15 min read",
      icon: <Target size={24} />,
      accent: "#f59e0b"
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="perspectives-hero" style={{ 
        backgroundColor: theme.colors.slate50, 
        padding: '80px 0', 
        borderBottom: `2px solid ${theme.colors.slate200}`,
        position: 'relative'
      }}>
        <div style={containerStyle} className="perspectives-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'white', borderRadius: '100px', border: `1.5px solid ${theme.colors.slate200}`, fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing, marginBottom: '24px' }}>
              <BookOpen size={14} color={theme.colors.primary} />
              Readiness Insights
            </div>
            <h1 className="perspectives-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '24px', letterSpacing: '-0.04em' }}>
              Perspectives on <br /><span style={{ color: theme.colors.primary }}>Verifiable Growth.</span>
            </h1>
            <p className="perspectives-p" style={{ fontSize: '20px', color: theme.colors.slate600, maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
              Deep dives into the protocols, economics, and architectural choices that define the future of professional readiness.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '120px 0' }} className="perspectives-content-section">
        <div style={containerStyle} className="perspectives-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }} className="article-grid">
            {articles.map((article, i) => (
              <PerspectiveCard key={i} {...article} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '100px', 
              backgroundColor: theme.colors.slate900, 
              borderRadius: '48px', 
              padding: '80px', 
              color: 'white', 
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: theme.shadows.heavy,
              border: `1.5px solid rgba(255,255,255,0.1)`
            }}
            className="perspectives-newsletter"
          >
            <h2 className="newsletter-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.02em' }}>Stay Synchronized.</h2>
            <p style={{ fontSize: '19px', color: theme.colors.slate400, maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}>
              Join over 2,500 institutional leaders and employers receiving our weekly audit on the readiness economy.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Work Email" 
                style={{ 
                  flexGrow: 1, 
                  padding: '18px 24px', 
                  borderRadius: '12px', 
                  border: '1.5px solid rgba(255,255,255,0.15)', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  color: 'white',
                  fontWeight: 600,
                  width: '100%'
                }} 
              />
              <PremiumButton variant="secondary" style={{ width: '100%' }}>Subscribe</PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .perspectives-hero { padding: 40px 0 !important; }
          .perspectives-container { padding: 0 20px !important; }
          .perspectives-title, .newsletter-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .perspectives-p { text-align: center; font-size: 16px !important; padding: 0 8px; }
          .perspectives-content-section { padding: 40px 0 !important; }
          .article-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .article-card { padding: 32px 24px !important; }
          .read-time-hide { display: none !important; }
          
          .perspectives-newsletter { padding: 40px 24px !important; border-radius: 40px !important; margin-top: 60px !important; }
          .newsletter-form { flex-direction: column !important; gap: 12px !important; align-items: stretch !important; }
        }
      `}</style>
    </div>
  );
};

export default Perspectives;
