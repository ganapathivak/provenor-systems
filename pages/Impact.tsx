
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Target, 
  GraduationCap, 
  Building2, 
  UserCheck 
} from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const EcosystemStabilityVisual: React.FC = () => {
  const [stage, setStage] = useState<'drift' | 'ai' | 'provenor'>('drift');

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setStage('drift');
        await new Promise(r => setTimeout(r, 3000));
        setStage('ai');
        await new Promise(r => setTimeout(r, 3000));
        setStage('provenor');
        await new Promise(r => setTimeout(r, 5000));
      }
    };
    sequence();
  }, []);

  const nodes = [
    { 
      id: 'inst', 
      label: 'INSTITUTIONS', 
      icon: <GraduationCap />, 
      pos: { 
        drift: { x: -140, y: -70 }, 
        ai: { x: -170, y: -100 }, 
        provenor: { x: -100, y: -60 } 
      } 
    },
    { 
      id: 'ent', 
      label: 'ENTERPRISE', 
      icon: <Building2 />, 
      pos: { 
        drift: { x: 140, y: -70 }, 
        ai: { x: 170, y: -100 }, 
        provenor: { x: 100, y: -60 } 
      } 
    },
    { 
      id: 'talent', 
      label: 'TALENT', 
      icon: <UserCheck />, 
      pos: { 
        drift: { x: 0, y: 100 }, 
        ai: { x: 0, y: 120 }, 
        provenor: { x: 0, y: 75 } 
      } 
    },
  ];

  const springConfig = { stiffness: 50, damping: 15 };

  const getStatusText = () => {
    if (stage === 'drift') return "Ecosystem Equilibrium";
    if (stage === 'ai') return "Market Gap Detected";
    return "Readiness Bridge Active";
  };

  const getStatusColor = () => {
    if (stage === 'drift') return theme.colors.slate400;
    if (stage === 'ai') return theme.colors.error;
    return theme.colors.secondary;
  };

  return (
    <div style={{
      width: '100%',
      height: '480px',
      backgroundColor: '#020617',
      borderRadius: '48px',
      border: '2px solid rgba(255,255,255,0.15)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 60px 100px rgba(0,0,0,0.7)',
    }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
        <svg width="100%" height="100%">
          <pattern id="impact-grid-v3" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#impact-grid-v3)" />
        </svg>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: '32px', left: '32px', zIndex: 30 }} className="status-monitor">
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: getStatusColor(),
                  boxShadow: `0 0 10px ${getStatusColor()}`
                }} 
              />
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 900, 
                color: 'white', 
                letterSpacing: theme.typography.capsSpacing, 
                textTransform: 'uppercase' 
              }}>
                {getStatusText()}
              </span>
           </div>
        </div>

        <div className="viz-scaler" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg 
            viewBox="-400 -300 800 600"
            style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}
          >
            {nodes.map((node, i) => {
              const nextNode = nodes[(i + 1) % nodes.length];
              return (
                <motion.line
                  key={`${node.id}-${nextNode.id}`}
                  animate={{
                    x1: node.pos[stage].x,
                    y1: node.pos[stage].y,
                    x2: nextNode.pos[stage].x,
                    y2: nextNode.pos[stage].y,
                    stroke: stage === 'provenor' ? theme.colors.secondary : (stage === 'drift' ? 'rgba(255,255,255,0.15)' : theme.colors.error),
                    strokeWidth: stage === 'provenor' ? 4 : 2,
                    opacity: stage === 'drift' ? 0.3 : 0.8
                  }}
                  transition={{ type: 'spring', ...springConfig }}
                  strokeDasharray={stage === 'provenor' ? "0" : "8 6"}
                />
              );
            })}
          </svg>

          <AnimatePresence mode="wait">
            {stage === 'ai' && (
              <motion.div
                key="ai-label"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="impact-label-container"
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  width: '100%',
                  zIndex: 25,
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '22px', 
                  fontWeight: 900, 
                  color: theme.colors.error, 
                  letterSpacing: theme.typography.capsSpacing,
                  textShadow: '0 0 15px rgba(239, 68, 68, 0.6)'
                }} className="drift-label-mobile">
                  AI MARKET DRIFT
                </div>
              </motion.div>
            )}
            {stage === 'provenor' && (
              <motion.div
                key="provenor-label"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="impact-label-container"
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  width: '100%',
                  zIndex: 25,
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: 900, 
                  color: theme.colors.secondary, 
                  letterSpacing: theme.typography.capsSpacing,
                  textShadow: `0 0 15px ${theme.colors.secondary}80`
                }} className="drift-label-mobile">
                  PROVENOR PROTOCOL
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              animate={{ 
                x: `calc(-50% + ${node.pos[stage].x}px)`, 
                y: `calc(-50% + ${node.pos[stage].y}px)`,
                borderColor: stage === 'provenor' ? theme.colors.secondary : 'rgba(255,255,255,0.25)',
                scale: stage === 'provenor' ? 1.15 : (stage === 'ai' ? 1.05 : 1.0),
                boxShadow: stage === 'provenor' ? `0 12px 30px rgba(16, 185, 129, 0.4)` : '0 8px 15px rgba(0,0,0,0.5)'
              }}
              transition={{ type: 'spring', ...springConfig }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '100px',
                height: '100px',
                border: '2.5px solid',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                zIndex: 20,
                backgroundColor: '#020617',
                backdropFilter: 'blur(10px)',
                color: 'white'
              }}
              className="impact-node"
            >
              <div style={{ color: stage === 'provenor' ? theme.colors.secondary : 'white' }} className="node-icon-wrapper">
                {React.cloneElement(node.icon as React.ReactElement<any>, { className: "node-icon" })}
              </div>
              <div style={{ fontWeight: 900, color: 'white', letterSpacing: '0.12em', textAlign: 'center' }} className="node-label">
                {node.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        .node-icon { width: 24px; height: 24px; }
        .node-label { font-size: 9px; }

        @media (max-width: 480px) {
          .node-icon { width: 32px !important; height: 32px !important; }
          .node-label { font-size: 11px !important; }
          .viz-scaler {
            transform: scale(0.65);
            transform-origin: center;
          }
          .status-monitor {
            top: 24px !important;
            left: 50% !important;
            transform: translateX(-50%) scale(1.1) !important;
            transform-origin: center !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .drift-label-mobile {
            font-size: 26px !important;
            width: 100% !important;
            text-align: center !important;
          }
          .impact-label-container {
            bottom: -15px !important;
          }
        }
      `}</style>
    </div>
  );
};

const Impact: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section style={{ 
        backgroundColor: theme.colors.slate900, 
        color: 'white', 
        minHeight: 'calc(100vh - 112px)', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '60px 0', 
        position: 'relative', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }} className="impact-hero">
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="impact-grid-main">
            <motion.div 
              style={{ gridColumn: 'span 6', position: 'relative', zIndex: 1 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '100px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing, marginBottom: '32px', border: '1.5px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }} className="badge-small impact-hero-badge">
                <Activity size={16} color={theme.colors.secondary} />
                Ecosystem Stabilization Engine
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 72px)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.25, letterSpacing: theme.typography.headingSpacing }} className="title-responsive">
                Restoring <br /><span style={{ color: theme.colors.secondary }}>Certainty.</span>
              </h1>
              <p style={{ fontSize: '20px', color: theme.colors.slate300, lineHeight: 1.6, marginBottom: '36px', maxWidth: '500px' }} className="text-small">
                The readiness gap is expanding. AI noise makes talent unidentifiable. Provenor acts as the neutral bridge that pulls the ecosystem back together.
              </p>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="impact-ctas">
                <PremiumButton variant="secondary" style={{ padding: '14px 30px', fontSize: '11px' }}>Analyze Drift Logs</PremiumButton>
                <div style={{ height: '40px', width: '2px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '0 8px' }} className="hide-mobile" />
                <div style={{ display: 'flex', flexDirection: 'column' }} className="hide-mobile">
                  <span style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.slate400, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Ecosystem Status</span>
                  <span style={{ fontSize: '14px', fontWeight: 900, color: 'white' }}>Verifying Signal Integrity</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ gridColumn: 'span 6', position: 'relative', zIndex: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <EcosystemStabilityVisual />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: theme.colors.slate100 }} className="impact-stats-section">
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', marginBottom: '60px' }} className="stats-header-grid">
            <div style={{ gridColumn: 'span 12', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="section-header-mobile">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', backgroundColor: 'white', borderRadius: '100px', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing, marginBottom: '24px', border: `1.5px solid ${theme.colors.slate200}`, boxShadow: '0 4px 15px rgba(0,0,0,0.05)', margin: '0 auto' }} className="badge-small analytics-badge">
                  <TrendingUp size={16} color={theme.colors.primary} />
                  Stability Analytics
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '24px', letterSpacing: theme.typography.headingSpacing, lineHeight: 1.0, textAlign: 'center', width: '100%' }} className="subtitle-responsive">The High Signal <br />Differential.</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="impact-cards-grid">
            {[
              { 
                icon: <TrendingUp size={28} />, 
                title: "Velocity Shift", 
                desc: "Time to competence reduced by clinicalizing the transition from academic learning to professional deployment.",
                val: "65%",
                unit: "Onboarding Gain",
                color: theme.colors.primary
              },
              { 
                icon: <Target size={28} />, 
                title: "Placement Precision", 
                desc: "Eliminating the inference based economy through evidence matching against vertical role standards.",
                val: "98.4%",
                unit: "Alignment Score",
                color: theme.colors.secondary
              },
              { 
                icon: <Cpu size={28} />, 
                title: "Audit Efficiency", 
                desc: "Removing manual verification friction via immutable evidence capture within the build core.",
                val: "10x",
                unit: "Verification Speed",
                color: "#8b5cf6"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '40px', 
                  borderRadius: '32px', 
                  border: `2px solid ${theme.colors.slate300}`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="impact-stat-card"
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `radial-gradient(circle at center, ${item.color}08 0%, transparent 70%)` }} />
                <div style={{ color: item.color, border: `1px solid ${item.color}20`, width: 'fit-content', padding: '10px', borderRadius: '12px', background: `${item.color}05` }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: theme.colors.slate900, letterSpacing: theme.typography.headingSpacing }}>{item.title}</h3>
                <p style={{ color: theme.colors.slate600, fontSize: '15px', lineHeight: 1.6 }} className="card-text-mobile">{item.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '32px', borderTop: `1.5px solid ${theme.colors.slate100}` }}>
                  <div style={{ fontSize: '44px', fontWeight: 900, color: theme.colors.slate900, letterSpacing: '-0.04em' }} className="stat-value-mobile">{item.val}</div>
                  <div style={{ fontSize: '10px', fontWeight: 900, color: item.color, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing }}>{item.unit}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0', backgroundColor: theme.colors.slate900, color: 'white', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="impact-closing-section">
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }} className="impact-closing-grid">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="closing-content-mobile">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <ShieldCheck size={24} color={theme.colors.secondary} />
                  <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.secondary, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing }}>Institutional Restoration</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 900, marginBottom: '24px', lineHeight: 1.05, letterSpacing: theme.typography.headingSpacing }} className="subtitle-responsive">Restoring the <br /><span style={{ color: theme.colors.secondary }}>Economic Floor.</span></h2>
              <p style={{ fontSize: '18px', color: theme.colors.slate300, lineHeight: 1.7, marginBottom: '40px', maxWidth: '520px' }} className="text-small">
                By establishing a neutral verification layer, we eliminate the structural friction of credential inflation. We move from an economy of certificates to an economy of competence.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '40px', 
                padding: '60px', 
                border: '2px solid rgba(255,255,255,0.15)',
                position: 'relative',
                zIndex: 1,
                backdropFilter: 'blur(20px)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
              }} className="impact-closing-card">
                <div style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.secondary, letterSpacing: theme.typography.capsSpacing, marginBottom: '32px' }}>ANNUAL READINESS VALUE GAP</div>
                <div style={{ fontSize: 'clamp(36px, 8vw, 68px)', fontWeight: 900, color: 'white', marginBottom: '16px', letterSpacing: '-0.05em', textShadow: '0 5px 15px rgba(0,0,0,0.3)' }} className="closing-stat-mobile">₹14.2L Cr</div>
                <p style={{ fontSize: '16px', color: theme.colors.slate300, lineHeight: 1.6, marginBottom: '40px' }} className="card-text-mobile">
                  The latent economic productivity locked within the Indian workforce due to misaligned skills and high-inference hiring protocols.
                </p>
                <PremiumButton variant="white" style={{ width: '100%', padding: '18px' }}>Join the Standard</PremiumButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        @media (max-width: 1024px) {
          .impact-hero { padding: 40px 0 !important; min-height: auto !important; }
          .impact-grid-main { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .impact-grid-main > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; }
          
          .impact-hero-badge { margin-bottom: 56px !important; margin-left: auto !important; margin-right: auto !important; }

          .impact-ctas { flex-direction: column; align-items: center; width: 100%; }
          .impact-ctas > button { width: 100%; max-width: 280px; }
          .hide-mobile { display: none !important; }
          .title-responsive { font-size: 36px !important; margin-bottom: 24px !important; }
          .text-small { font-size: 16px !important; }
          .badge-small { font-size: 9px !important; padding: 8px 16px !important; margin: 0 auto !important; display: inline-flex; }

          .impact-stats-section { padding: 60px 0 !important; }
          .stats-header-grid { display: flex !important; flex-direction: column !important; align-items: center !important; width: 100% !important; margin-bottom: 32px !important; }
          .section-header-mobile { grid-column: span 12 !important; text-align: center !important; display: flex !important; flex-direction: column !important; align-items: center !important; width: 100% !important; justify-content: center !important; }
          .analytics-badge { margin-bottom: 24px !important; margin-left: auto !important; margin-right: auto !important; }
          .subtitle-responsive { font-size: 28px !important; width: 100% !important; text-align: center !important; margin: 0 auto !important; display: block !important; margin-bottom: 24px !important; }
          
          .impact-cards-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .impact-stat-card { padding: 32px 24px !important; border-radius: 24px !important; text-align: center; align-items: center; }
          .card-text-mobile { font-size: 14px !important; }
          .stat-value-mobile { font-size: 40px !important; }

          .impact-closing-section { padding: 80px 0 !important; }
          .impact-closing-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .closing-content-mobile { display: flex; flex-direction: column; align-items: center; }
          .impact-closing-card { padding: 40px 24px !important; border-radius: 32px !important; width: 100%; }
          .closing-stat-mobile { font-size: 44px !important; }
        }
      `}</style>
    </div>
  );
};

export default Impact;
