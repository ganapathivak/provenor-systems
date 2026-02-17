
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Workflow, Search, Database, BadgeCheck, ArrowRight, Terminal, Activity, ShieldCheck } from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const VerificationPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const pipelineStages = [
    { label: "Align", icon: <Target size={12} />, description: "Role Requirement Sync" },
    { label: "Map", icon: <Workflow size={12} />, description: "Competence Cluster Mapping" },
    { label: "Signal", icon: <Search size={12} />, description: "Readiness Threshold Trigger" },
    { label: "Build", icon: <Database size={12} />, description: "Evidence Capture" },
    { label: "Verify", icon: <ShieldCheck size={12} />, description: "Independent Signal Audit" }
  ];

  const terminalLogs = [
    "Synchronizing role definition with market vertical standards...",
    "Defining proficiency clusters for architecture profile...",
    "Calibrating readiness threshold for deployment...",
    "Extracting atomic evidence from simulation build logs...",
    "Executing final neutral audit: issuing verification signal..."
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '460px',
      backgroundColor: theme.colors.slate900,
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '32px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: theme.shadows.heavy
    }} className="pipeline-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.secondary }} className="pulse"></div>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'white', letterSpacing: '0.2em' }}>Verification Engine: Active</span>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="pipeline-svg-wrapper">
        <svg viewBox="0 0 400 120" style={{ width: '100%', overflow: 'visible' }}>
          <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
          <motion.line x1="0" y1="60" x2={(activeStage + 1) * 80} y2="60" stroke={theme.colors.secondary} strokeWidth="2" transition={{ duration: 0.8 }} />
          {pipelineStages.map((stage, i) => {
            const x = i * 80 + 40;
            const isActive = i === activeStage;
            const isCompleted = i < activeStage;
            return (
              <g key={i}>
                {isActive && (
                  <motion.circle cx={x} cy="60" r="28" fill="none" stroke={theme.colors.secondary} strokeWidth="1" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1.2, opacity: 0 }} transition={{ repeat: Infinity, duration: 2 }} />
                )}
                <motion.circle cx={x} cy="60" r="18" fill={isActive || isCompleted ? theme.colors.slate900 : "transparent"} stroke={isActive || isCompleted ? theme.colors.secondary : "rgba(255,255,255,0.15)"} strokeWidth="2" animate={{ scale: isActive ? 1.1 : 1 }} />
                <foreignObject x={x - 6} y={54} width="12" height="12"><div style={{ color: isActive || isCompleted ? theme.colors.secondary : 'rgba(255,255,255,0.3)' }}>{stage.icon}</div></foreignObject>
                <text x={x} y="95" fill={isActive ? "white" : "rgba(255,255,255,0.4)"} fontSize="9" fontWeight="900" textAnchor="middle" style={{ letterSpacing: '0.1em' }}>{stage.label.toUpperCase()}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <Terminal size={14} color={theme.colors.secondary} />
          <span style={{ fontSize: '10px', fontWeight: 800, color: theme.colors.slate400, fontFamily: 'monospace', letterSpacing: '0.05em' }}>Verification Log</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeStage} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} style={{ fontSize: '13px', fontWeight: 700, color: 'white', fontFamily: 'monospace', lineHeight: 1.4 }}>
            <span style={{ color: theme.colors.secondary }}>[Stage {activeStage + 1}]</span> {terminalLogs[activeStage]}
          </motion.div>
        </AnimatePresence>
      </div>
      <style>{`
        @media (max-width: 480px) {
           .pipeline-svg-wrapper { transform: scale(0.85); transform-origin: center; }
           .pipeline-container { padding: 24px 16px !important; }
        }
      `}</style>
    </div>
  );
};

const AlignmentVerification: React.FC = () => {
  const containerStyle: React.CSSProperties = { maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="verify-hero" style={{ backgroundColor: theme.colors.slate50, minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', padding: '60px 0', overflow: 'hidden' }}>
        <div style={containerStyle} className="verify-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '80px', alignItems: 'center' }} className="verify-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} style={{ gridColumn: 'span 6' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: theme.colors.primary, fontWeight: 900, textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.25em', marginBottom: '24px' }}><Activity size={14} />Operational Logic</div>
              <h1 className="verify-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '32px', lineHeight: 1.0, letterSpacing: '-0.04em' }}>Precision <br /><span style={{ color: theme.colors.primary }}>Verification.</span></h1>
              <p className="verify-p" style={{ fontSize: '20px', color: theme.colors.slate500, lineHeight: 1.7, maxWidth: '540px', marginBottom: '40px' }}>A clinical protocol designed to eliminate hiring guesswork by auditing the transition from learning to professional performance.</p>
              <PremiumButton variant="dark">Deploy Protocol <ArrowRight size={18} /></PremiumButton>
            </motion.div>
            <motion.div style={{ gridColumn: 'span 6' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}><VerificationPipeline /></motion.div>
          </div>
        </div>
      </section>
      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        @media (max-width: 768px) {
          .verify-hero { padding: 40px 0 !important; min-height: auto !important; }
          .verify-container { padding: 0 20px !important; }
          .verify-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .verify-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; }
          .verify-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .verify-p { text-align: center; padding: 0 8px; font-size: 16px !important; }
        }
      `}</style>
    </div>
  );
};

export default AlignmentVerification;
