
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Recycle, 
  Network, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Activity, 
  Target,
  GraduationCap,
  Building2, 
  UserCheck
} from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const EcosystemPillarsViz: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '460px',
      height: '460px',
      backgroundColor: theme.colors.slate900,
      borderRadius: '32px',
      border: `2px solid ${theme.colors.slate200}`,
      padding: '40px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: theme.shadows.heavy,
      margin: '0 auto'
    }} className="eco-viz-container">
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
        <svg width="100%" height="100%">
          <pattern id="eco-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#eco-grid)" />
        </svg>
      </div>

      <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="eco-viz-wrapper">
        {/* Unified Readiness Loop - Centered and Rotating */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ 
              width: '240px', 
              height: '240px', 
              border: '1.5px dashed rgba(255,255,255,0.1)', 
              borderRadius: '50%' 
            }}
          />
        </div>

        {/* Dynamic Data Flow Lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', zIndex: 1 }}>
          <defs>
            <filter id="glow-eco">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Triangular stakeholder connection - Vertices mathematically aligned to 160 center */}
          <path 
             d={`M 160,40 L 263.9,220 L 56.1,220 Z`}
             fill="none"
             stroke="rgba(255,255,255,0.15)"
             strokeWidth="1.5"
             strokeDasharray="6 6"
             className="eco-triangle-path"
          />
          
          {[0, 120, 240].map((angle, i) => {
            const rad = (angle - 90) * (Math.PI / 180);
            const targetX = 160 + Math.cos(rad) * 120;
            const targetY = 160 + Math.sin(rad) * 120;
            
            const x2 = targetX;
            const y2 = targetY;

            return (
              <g key={i}>
                <line x1="160" y1="160" x2={x2} y2={y2} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" />
                <motion.circle 
                  r="2.5" 
                  fill={theme.colors.secondary}
                  animate={{ cx: [x2, 160], cy: [y2, 160] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                  filter="url(#glow-eco)"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Neutral Core - Provenor */}
        <div style={{ 
          width: '90px', 
          height: '90px', 
          backgroundColor: 'white', 
          borderRadius: '26px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 0 50px rgba(16, 185, 129, 0.25)',
          zIndex: 10,
          position: 'relative',
          border: '2px solid #000'
        }} className="eco-central-node">
          <ShieldCheck size={44} color={theme.colors.slate900} />
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            style={{ position: 'absolute', inset: -12, border: `2px solid ${theme.colors.secondary}`, borderRadius: '34px' }}
          />
        </div>

        {/* Stakeholder Satellite Nodes */}
        {[
          { icon: <GraduationCap size={24} />, label: "INSTITUTIONS", angle: -90, color: '#6366f1' },
          { icon: <Building2 size={24} />, label: "EMPLOYERS", angle: 30, color: theme.colors.primary },
          { icon: <UserCheck size={24} />, label: "LEARNERS", angle: 150, color: theme.colors.secondary }
        ].map((pillar, i) => {
          const rad = pillar.angle * (Math.PI / 180);
          const x = Math.cos(rad) * 120;
          const y = Math.sin(rad) * 120;
          return (
            <motion.div 
              key={i}
              style={{ 
                position: 'absolute', 
                width: '68px', 
                height: '68px', 
                backgroundColor: 'rgba(255,255,255,0.04)', 
                border: '1px solid rgba(255,255,255,0.12)', 
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                left: `calc(50% + ${x}px - 34px)`,
                top: `calc(50% + ${y}px - 34px)`,
                zIndex: 5,
                backdropFilter: 'blur(4px)'
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeInOut" }}
              className="eco-satellite-node"
            >
              <div style={{ color: 'white' }}>{pillar.icon}</div>
              <span style={{ fontSize: '7px', fontWeight: 900, color: 'white', letterSpacing: '0.12em', textAlign: 'center' }}>{pillar.label}</span>
            </motion.div>
          );
        })}
      </div>

      <div style={{ position: 'absolute', bottom: '36px', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.secondary, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Verified Readiness Network</div>
      </div>
      <style>{`
        @media (max-width: 480px) {
           .eco-viz-wrapper { 
             transform: scale(0.9); 
             transform-origin: center;
           }
           .eco-viz-container { 
             padding: 12px !important; 
             height: 380px !important; 
             width: 100% !important; 
             margin: 0 auto; 
             border-radius: 24px !important; 
             display: flex !important;
             justify-content: center !important;
             align-items: center !important;
           }
           .eco-central-node { width: 70px !important; height: 70px !important; }
           .eco-satellite-node { width: 56px !important; height: 56px !important; }
           /* Fine-tuned triangle position for absolute centering on thin screens */
           .eco-triangle-path { transform: translateX(0px); } 
        }
      `}</style>
    </div>
  );
};

const Ecosystem: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  const lifecycleSteps = [
    { 
      icon: <ShieldCheck size={24} />, 
      label: "The Standard", 
      sub: "Neutral Definition", 
      color: theme.colors.primary,
      desc: "We establish a shared, universally trusted definition of professional readiness." 
    },
    { 
      icon: <Cpu size={24} />, 
      label: "GradiumOS", 
      sub: "Execution Core", 
      color: theme.colors.secondary,
      desc: "Our kernel for building and testing capability under professional constraints." 
    },
    { 
      icon: <Layers size={24} />, 
      label: "Evidence", 
      sub: "Atomic Capture", 
      color: "#6366f1",
      desc: "We capture verifiable performance data directly from applied work cycles." 
    },
    { 
      icon: <Recycle size={24} />, 
      label: "Audit", 
      sub: "Verification Loop", 
      color: "#8b5cf6",
      desc: "Our independent audit process ensures absolute integrity of every issued signal." 
    },
    { 
      icon: <Target size={24} />, 
      label: "Market", 
      sub: "Day 1 Readiness", 
      color: theme.colors.slate900,
      desc: "We enable seamless transitions into roles where performance is already proven." 
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="eco-hero" style={{ 
        backgroundColor: theme.colors.slate900, 
        color: 'white', 
        minHeight: 'calc(100vh - 64px)', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '60px 0', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={containerStyle} className="eco-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="eco-hero-grid">
            <motion.div 
              style={{ gridColumn: 'span 7' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="eco-hero-text"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: theme.colors.secondary, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '10px', marginBottom: '24px' }} className="eco-badge">
                <Network size={16} />
                Global Network Protocol
              </div>
              <h1 className="eco-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                One System. <br />
                <span style={{ color: theme.colors.secondary }}>One Definition.</span>
              </h1>
              <p style={{ fontSize: '20px', color: theme.colors.slate400, lineHeight: 1.6, marginBottom: '40px', maxWidth: '580px' }} className="eco-p">
                We align the entire professional supply chain around a single, trusted outcome: <strong style={{ color: 'white' }}>Verified Readiness.</strong>
              </p>
              <div style={{ display: 'flex', gap: '16px' }} className="eco-ctas">
                <Link to="/partner" style={{ textDecoration: 'none' }}>
                  <PremiumButton variant="secondary">
                    Join Ecosystem <ArrowRight size={18} />
                  </PremiumButton>
                </Link>
                <a href="https://gradium-os.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <PremiumButton variant="white">
                    Explore OS
                  </PremiumButton>
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <EcosystemPillarsViz />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: 'white' }} className="eco-lifecycle-section">
        <div style={containerStyle} className="eco-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '16px' }}>Value Stream Architecture</span>
            <h2 className="eco-lifecycle-title" style={{ fontSize: '48px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '24px', letterSpacing: '-0.03em' }}>The Lifecycle of Truth</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: theme.colors.primary, margin: '0 auto' }} />
          </div>

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }} className="lifecycle-grid">
            {lifecycleSteps.map((step, i) => (
              <motion.div 
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '24px', 
                  padding: '40px 24px', 
                  textAlign: 'center', 
                  border: `2px solid ${theme.colors.slate200}`, 
                  boxShadow: hoveredStep === i ? '0 30px 60px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.03)',
                  position: 'relative',
                  cursor: 'default',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: hoveredStep === i ? 10 : 1,
                  animation: `bounceFloat 3.5s infinite ease-in-out`,
                  animationDelay: `${i * 0.45}s`
                }}
                className="lifecycle-card"
              >
                <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    backgroundColor: `${step}10`, 
                    color: step.color, 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px',
                    transition: 'transform 0.3s',
                    border: `1px solid ${step.color}20`
                  }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '12px', letterSpacing: '-0.01em' }}>{step.label}</h3>
                
                <div style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AnimatePresence mode="wait">
                    {hoveredStep === i ? (
                      <motion.p 
                        key="desc"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        style={{ fontSize: '11px', color: theme.colors.slate600, fontWeight: 700, lineHeight: 1.4, margin: 0 }}
                      >
                        {step.desc}
                      </motion.p>
                    ) : (
                      <motion.p 
                        key="sub"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ fontSize: '9px', color: theme.colors.slate400, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0 }}
                      >
                        {step.sub}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '140px' }} className="eco-stats-section">
        <div style={containerStyle} className="eco-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px' }} className="stats-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ gridColumn: 'span 8', backgroundColor: theme.colors.slate900, borderRadius: '56px', padding: '100px 80px', color: 'white', position: 'relative', overflow: 'hidden', border: '2px solid #000' }}
              className="stats-block-main"
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="stats-main-title" style={{ fontSize: '48px', fontWeight: 900, marginBottom: '64px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Closing the <br /><span style={{ color: theme.colors.secondary }}>Readiness Gap.</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }} className="stats-row">
                  <div>
                    <div style={{ fontSize: '64px', fontWeight: 900, color: theme.colors.primary, marginBottom: '16px', letterSpacing: '-0.04em' }} className="stat-val">90%</div>
                    <p style={{ fontSize: '15px', color: theme.colors.slate400, lineHeight: 1.7, fontWeight: 700 }}>Reduction in initial screening overhead via pre-verified signals.</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '64px', fontWeight: 900, color: theme.colors.secondary, marginBottom: '16px', letterSpacing: '-0.04em' }} className="stat-val">1:1</div>
                    <p style={{ fontSize: '15px', color: theme.colors.slate400, lineHeight: 1.7, fontWeight: 700 }}>Alignment between learning output and market requirements.</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '64px', fontWeight: 900, color: 'white', marginBottom: '16px', letterSpacing: '-0.04em' }} className="stat-val">Zero</div>
                    <p style={{ fontSize: '15px', color: theme.colors.slate400, lineHeight: 1.7, fontWeight: 700 }}>Inference required. Signals are backed by portable evidence.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '24px' }} className="stats-side">
              <div style={{ flex: 1, backgroundColor: theme.colors.slate50, padding: '48px', borderRadius: '40px', border: '2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="side-stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Activity size={20} color={theme.colors.primary} />
                  <span style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, letterSpacing: '0.2em' }}>NETWORK HEALTH</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '12px' }}>Operational Hub</h3>
                <p style={{ color: theme.colors.slate500, fontSize: '16px', lineHeight: 1.6, fontWeight: 600 }}>We define the standards and provide the neutral verification loop.</p>
              </div>
              <div style={{ flex: 1, backgroundColor: 'rgba(16, 185, 129, 0.03)', padding: '48px', borderRadius: '40px', border: '2px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="side-stat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Cpu size={20} color={theme.colors.secondary} />
                  <span style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, letterSpacing: '0.2em' }}>EXECUTION CORE</span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, color: theme.colors.slate900, marginBottom: '12px' }}>GradiumOS</h3>
                <p style={{ color: theme.colors.slate500, fontSize: '16px', lineHeight: 1.6, fontWeight: 600 }}>We operationalize the standards and generate capture of atomic evidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @media (max-width: 1024px) {
          .eco-hero { padding: 40px 0 !important; min-height: auto !important; }
          .eco-container { padding: 0 16px !important; }
          .eco-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; justify-items: center; text-align: center; }
          .eco-hero-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; width: 100%; }
          .eco-badge { justify-content: center; width: 100%; }
          .eco-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; padding: 0 4px; }
          .eco-p { text-align: center; margin-left: auto !important; margin-right: auto !important; width: 100%; padding: 0 8px; font-size: 16px !important; }
          .eco-ctas { flex-direction: column; width: 100%; align-items: center; gap: 12px !important; }
          .eco-ctas > a { width: 100%; max-width: 320px; }
          
          .eco-lifecycle-section { padding: 60px 0 !important; }
          .eco-lifecycle-title { font-size: 32px !important; }
          .lifecycle-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .lifecycle-card { padding: 32px 24px !important; animation: none !important; }
          
          .eco-stats-section { padding-bottom: 60px !important; }
          .stats-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .stats-block-main { grid-column: span 1 !important; padding: 40px 24px !important; border-radius: 40px !important; }
          .stats-main-title { font-size: 32px !important; margin-bottom: 32px !important; text-align: center; }
          .stats-row { grid-template-columns: 1fr !important; gap: 32px !important; text-align: center; }
          .stat-val { font-size: 48px !important; }
          
          .stats-side { grid-column: span 1 !important; }
          .side-stat-card { padding: 32px 24px !important; }
        }
      `}</style>
    </div>
  );
};

export default Ecosystem;
