
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  ArrowRight, 
  Globe,
  CheckCircle,
  Network,
  Activity,
  UserCheck,
  User,
  Shield,
  BarChart3, 
  Cpu,
  Layers,
  Workflow,
  AlertCircle,
  BrainCircuit,
  Briefcase
} from 'lucide-react';
import { theme } from '../theme';
import PremiumButton from '../components/PremiumButton';

const StateAlignmentEngine: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const cycleDuration = 12000;
    const growthDuration = 10000;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = (time - startTime) % cycleDuration;
      
      if (elapsed <= growthDuration) {
        setProgress((elapsed / growthDuration) * 110);
      } else {
        setProgress(110);
      }
      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const metrics = useMemo(() => ({
    technical: Math.min(100, progress * 1.15),
    experience: Math.min(100, progress * 1.1),
    behaviour: Math.min(100, progress * 1.05)
  }), [progress]);

  const isTargetReached = progress >= 95;

  const timelineFill = useMemo(() => {
    const clamp = (val: number) => Math.min(100, Math.max(0, val));
    return {
      self: clamp((progress - 0) / 15 * 100),
      institute: clamp((progress - 15) / 35 * 100),
      gradium: clamp((progress - 50) / 45 * 100),
      fit: clamp((progress - 95) / 5 * 100)
    };
  }, [progress]);

  return (
    <motion.div
      style={{
        width: '100%',
        background: '#09090b',
        borderRadius: '2rem',
        padding: '24px',
        border: `1.5px solid ${isTargetReached ? theme.colors.neonSecondary : '#27272a'}`,
        boxShadow: isTargetReached ? `0 0 30px ${theme.colors.secondary}30` : '0 20px 50px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: 'Inter, sans-serif'
      }}
      className="alignment-engine-card"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <div style={{ fontSize: '9px', fontWeight: 900, color: theme.colors.slate50, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '6px' }}>ALIGNMENT ENGINE</div>
          <h4 style={{ fontSize: '20px', fontWeight: 900, color: 'white', margin: 0, letterSpacing: '-0.02em' }}>Core Readiness Signal</h4>
        </div>
        <AnimatePresence>
          {isTargetReached && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              style={{
                backgroundColor: theme.colors.secondary,
                color: 'white',
                padding: '6px 12px',
                borderRadius: '100px',
                fontSize: '10px',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: `0 0 20px ${theme.colors.secondary}60`
              }}
            >
              <UserCheck size={12} /> FIT
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '32px' }} className="metrics-grid">
        {[
          { label: 'Technical', val: metrics.technical, icon: <BrainCircuit size={16} />, color: theme.colors.neonPrimary },
          { label: 'Experience', val: metrics.experience, icon: <Briefcase size={16} />, color: '#a855f7' },
          { label: 'Behaviour', val: metrics.behaviour, icon: <Activity size={16} />, color: '#f59e0b' }
        ].map((m, i) => (
          <div key={i} style={{ padding: '12px 8px', background: 'rgba(255,255,255,0.06)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <div style={{ color: m.color, marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{m.icon}</div>
            <div style={{ fontSize: '8px', fontWeight: 900, color: theme.colors.slate400, textTransform: 'uppercase', marginBottom: '4px' }}>{m.label}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 900, color: 'white' }}>{Math.floor(m.val)}%</div>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '10px', fontWeight: 900, color: theme.colors.slate400 }}>TIMELINE</span>
          <span style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            fontWeight: 900, 
            color: isTargetReached ? theme.colors.secondary : 'white' 
          }}>
            {Math.min(100, Math.floor(progress))}% READY
          </span>
        </div>
        <div style={{ height: '8px', display: 'flex', gap: '4px' }}>
          {[
            { width: '15%', fill: timelineFill.self },
            { width: '35%', fill: timelineFill.institute },
            { width: '45%', fill: timelineFill.gradium },
            { width: '5%', fill: timelineFill.fit }
          ].map((seg, i) => (
            <div key={i} style={{ width: seg.width, height: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <motion.div 
                style={{ 
                  height: '100%', 
                  background: i === 3 ? theme.colors.secondary : theme.colors.primary,
                  boxShadow: i === 3 ? `0 0 10px ${theme.colors.secondary}60` : `0 0 10px ${theme.colors.primary}60`
                }}
                animate={{ width: `${seg.fill}%` }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CompetenceEngine: React.FC = () => {
  const [points, setPoints] = useState([0.3, 0.4, 0.2, 0.5, 0.3, 0.4]);
  const [currentLog, setCurrentLog] = useState("Initializing Verification...");
  const [isComplete, setIsComplete] = useState(false);

  const labels = ["FULL STACK", "CLOUD ARCHITECT", "PRODUCT MANAGEMENT", "ENG INTEGRITY", "CYBERSECURITY", "RELIABILITY ENG"];
  const marketDemandData = [0.72, 0.78, 0.70, 0.80, 0.75, 0.82];

  const marketMatch = useMemo(() => {
    const avg = points.reduce((a, b) => a + b, 0) / points.length;
    return Math.round(avg * 100);
  }, [points]);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;
    const duration = 5000;
    const holdDuration = 1500;
    const baseline = [0.3, 0.4, 0.2, 0.5, 0.3, 0.4];
    const targets = [0.94, 0.85, 0.92, 0.85, 0.81, 0.88];

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const totalElapsed = time - startTime;
      const cycleTime = totalElapsed % (duration + holdDuration);
      
      if (cycleTime <= duration) {
        setIsComplete(false);
        const progress = cycleTime / duration;
        const currentPoints = baseline.map((b, i) => b + (targets[i] - b) * progress);
        setPoints(currentPoints);
        setCurrentLog(`Auditing ${labels[Math.floor(cycleTime / 800) % labels.length]}...`);
      } else {
        setPoints(targets);
        setIsComplete(true);
        setCurrentLog("Verification Complete: Signal Verified");
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const centerX = 160;
  const centerY = 160;
  const radius = 95;

  const getPath = (data: number[]) => {
    return data.map((d, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      const x = centerX + Math.cos(angle) * radius * d;
      const y = centerY + Math.sin(angle) * radius * d;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ') + ' Z';
  };

  return (
    <div style={{ width: '100%', maxWidth: '440px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="competence-engine-wrapper">
      <motion.div 
        style={{
          width: '100%',
          backgroundColor: '#020617',
          borderRadius: '3rem',
          boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 24px 32px 24px',
          position: 'relative',
          overflow: 'visible',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* Header section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.secondary, boxShadow: `0 0 12px ${theme.colors.secondary}` }} 
              />
              <span style={{ fontSize: '11px', fontWeight: 900, color: 'white', letterSpacing: '0.25em' }}>SIGNAL AUDIT</span>
            </div>
          </div>

          {/* Center Radar Chart */}
          <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '1/1', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 320 320" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <path d={getPath([1, 1, 1, 1, 1, 1])} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
              <path d={getPath([0.75, 0.75, 0.75, 0.75, 0.75, 0.75])} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 2" />
              <path d={getPath(marketDemandData)} fill="none" stroke={theme.colors.neonPrimary} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              <motion.path 
                d={getPath(points)} 
                fill="rgba(16, 185, 129, 0.15)" 
                stroke={theme.colors.neonSecondary} 
                strokeWidth="3" 
                style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }} 
              />
              {points.map((d, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const x = centerX + Math.cos(angle) * radius * d;
                const y = centerY + Math.sin(angle) * radius * d;
                const isMet = d >= marketDemandData[i];
                
                const labelX = centerX + Math.cos(angle) * (radius + 40);
                const labelY = centerY + Math.sin(angle) * (radius + 40);
                const textAnchor = "middle";

                return (
                  <g key={i}>
                    <motion.circle 
                      cx={x} cy={y} r="5.5" 
                      fill={isMet ? theme.colors.neonSecondary : theme.colors.error} 
                      style={{ filter: `drop-shadow(0 0 6px ${isMet ? theme.colors.neonSecondary : theme.colors.error}80)` }} 
                    />
                    <text 
                      x={labelX} 
                      y={labelY} 
                      fill={isMet ? "white" : theme.colors.slate400} 
                      fontSize="9" 
                      fontWeight="900" 
                      textAnchor={textAnchor}
                      className={i === 2 ? "product-mgmt-label" : ""}
                      style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}
                    >
                      {labels[i]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Floating White Scorecard - High Contrast */}
            <motion.div 
              className="readiness-scorecard"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '180px',
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                border: '1px solid #e2e8f0',
                zIndex: 10
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '9px', fontWeight: 900, color: theme.colors.slate400, letterSpacing: '0.1em' }}>READINESS SCORE</span>
                <ShieldCheck size={20} color={theme.colors.secondary} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '42px', fontWeight: 900, color: theme.colors.secondary, lineHeight: 1 }}>{marketMatch}</span>
                <span style={{ fontSize: '20px', fontWeight: 900, color: theme.colors.secondary }}>%</span>
              </div>
              <div>
                <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden', marginBottom: '8px' }}>
                  <motion.div 
                    animate={{ width: `${marketMatch}%` }} 
                    style={{ height: '100%', backgroundColor: theme.colors.secondary }} 
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: theme.colors.slate500 }}>{isComplete ? 'CERTIFIED' : 'VALIDATING...'}</span>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isComplete ? theme.colors.secondary : theme.colors.primary }} className="pulse" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terminal log section at the bottom - Stable Height */}
          <div style={{ 
            marginTop: '32px', 
            padding: '20px 24px', 
            backgroundColor: 'rgba(255,255,255,0.03)', 
            borderRadius: '1.5rem', 
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.4)',
            minHeight: '80px', 
            width: '100%'
          }}>
            <Activity size={18} color={theme.colors.neonSecondary} className="pulse" style={{ flexShrink: 0 }} />
            <span style={{ 
              fontSize: '13px', 
              fontWeight: 800, 
              color: 'white', 
              fontFamily: 'monospace', 
              letterSpacing: '0.02em', 
              lineHeight: 1.3,
              display: 'block'
            }}>
              {currentLog}
            </span>
          </div>
        </div>
      </motion.div>
      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        @media (max-width: 480px) {
          .competence-engine-wrapper { 
            transform: scale(0.8); 
            margin: 0px 0 100px 0; 
          }
          .competence-engine-wrapper > div { 
            padding: 16px 16px 24px 16px !important; 
          }
          .readiness-scorecard {
            right: auto !important;
            left: 50% !important;
            bottom: -440px !important; 
            transform: translateX(-50%) translateY(-100%) !important;
            width: 220px !important;
            padding: 24px !important;
            box-shadow: 0 40px 80px rgba(0,0,0,0.7) !important;
            border: 2px solid #e2e8f0 !important;
            background-color: white !important;
          }
          .product-mgmt-label {
            transform: translate(-18px, 14px);
          }
        }
      `}</style>
    </div>
  );
};

const CandidateProfile: React.FC<{ scale?: string }> = ({ scale = "1" }) => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '2rem', 
      padding: '24px', 
      border: `1.5px solid ${theme.colors.slate900}`,
      boxShadow: theme.shadows.premium,
      width: '100%',
      maxWidth: '320px',
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }} className="candidate-profile-card">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '1.25rem', backgroundColor: theme.colors.slate50, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.slate500, position: 'relative', border: `1px solid ${theme.colors.slate200}` }}>
            <User size={24} />
            <div style={{ position: 'absolute', bottom: -4, right: -4, width: '20px', height: '20px', backgroundColor: theme.colors.secondary, borderRadius: '50%', border: '2.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <ShieldCheck size={10} color="white" />
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 900, color: theme.colors.slate900 }}>Arjun Iyer</h4>
            <div style={{ fontSize: '8px', fontWeight: 800, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solutions Architect</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px', marginBottom: '20px' }}>
          {[
            { l: 'SKILLS', v: '9.6' },
            { l: 'BUILD', v: '9.0' },
            { l: 'SIGNAL', v: '9.4' }
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center', padding: '10px 4px', background: theme.colors.slate50, borderRadius: '1rem', border: `1px solid ${theme.colors.slate200}` }}>
              <div style={{ fontSize: '6px', fontWeight: 800, color: theme.colors.slate400, marginBottom: '2px' }}>{s.l}</div>
              <div style={{ fontSize: '14px', fontWeight: 900, color: theme.colors.slate900 }}>{s.v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
             <span style={{ fontSize: '9px', fontWeight: 900, color: theme.colors.slate500 }}>MATCH</span>
             <span style={{ fontSize: '9px', fontWeight: 900, color: theme.colors.secondary }}>98%</span>
          </div>
          <div style={{ height: '6px', background: theme.colors.slate100, borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '98%' }} style={{ height: '100%', background: theme.colors.secondary }} transition={{ duration: 1.5 }} />
          </div>
        </div>
      </div>

      <div style={{ height: '36px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '10px', border: `1px solid ${theme.colors.secondary}40`, display: 'flex', alignItems: 'center', padding: '0 10px', gap: '8px' }}>
         <BarChart3 size={12} color={theme.colors.secondary} />
         <span style={{ fontSize: '10px', fontWeight: 800, color: theme.colors.slate900 }}>Verified Build History Approved</span>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
    position: 'relative',
    zIndex: 10
  };

  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const isHovered = useRef(false);
  const archRef = useRef(null);
  const isArchInView = useInView(archRef, { amount: 0.4 });

  const protocolSteps = [
    {
      id: 'alignment',
      title: "01. Market Role Alignment",
      subtitle: "THE BLUEPRINT",
      description: "Structural analysis of professional roles into discrete competence clusters defined by market demand.",
      details: ["Competence Mapping", "Vertical Standards", "Role Archetypes"],
      icon: <Target size={22} />,
      color: theme.colors.neonPrimary,
      bgIcon: <Target size={300} style={{ opacity: 0.06, color: 'white' }} />
    },
    {
      id: 'simulation',
      title: "02. High Fidelity Simulation",
      subtitle: "THE FORGE",
      description: "Learners enter GradiumOS to build real systems under professional constraints to generate atomic evidence.",
      details: ["Kinetic Builds", "Evidence Records", "Practical Validation"],
      icon: <Activity size={22} />,
      color: theme.colors.neonSecondary,
      bgIcon: <Activity size={300} style={{ opacity: 0.06, color: 'white' }} />
    },
    {
      id: 'verification',
      title: "03. Neutral Signal Issuance",
      subtitle: "THE PROOF",
      description: "Evidence is audited against the Provenor Standard to issue a legally defensible readiness signal.",
      details: ["Neutral Audit", "Auditable Records", "Verified Proof"],
      icon: <ShieldCheck size={22} />,
      color: "#8b5cf6",
      bgIcon: <ShieldCheck size={300} style={{ opacity: 0.06, color: 'white' }} />
    }
  ];

  useEffect(() => {
    let interval: number;
    const stepDuration = 5000;
    const updateFreq = 50;

    if (isArchInView) {
      interval = window.setInterval(() => {
        if (!isHovered.current) {
          setProgress(prev => {
            if (prev >= 100) {
              setActiveStep(current => (current + 1) % protocolSteps.length);
              return 0;
            }
            return prev + (100 / (stepDuration / updateFreq));
          });
        }
      }, updateFreq);
    }
    return () => clearInterval(interval);
  }, [isArchInView]);

  return (
    <div style={{ backgroundColor: theme.colors.white }}>
      
      {/* HERO SECTION */}
      <section className="hero-section" style={{ 
        minHeight: '85vh', 
        padding: '60px 0 100px',
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center',
        background: `radial-gradient(circle at 80% 30%, ${theme.colors.slate50} 0%, ${theme.colors.white} 100%)`,
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, zIndex: 1 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dotPatternHero" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill={theme.colors.slate300} />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotPatternHero)" />
          </svg>
        </div>

        <div style={containerStyle} className="home-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="hero-grid">
            <motion.div style={{ gridColumn: 'span 6', zIndex: 20 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '100px', backgroundColor: theme.colors.slate900, color: 'white', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: theme.typography.capsSpacing, marginBottom: '32px', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                <Globe size={14} style={{ color: theme.colors.neonSecondary, filter: `drop-shadow(0 0 5px ${theme.colors.neonSecondary})` }} />
                <span>Readiness Protocol</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.04em' }}>
                <span style={{ display: 'block' }}>Learning Exists.</span>
                <span style={{ color: theme.colors.primary, fontSize: '1.05em', whiteSpace: 'nowrap', marginTop: '12px', display: 'block' }}>Readiness is Earned.</span>
              </h1>
              <p className="hero-p" style={{ fontSize: '20px', color: theme.colors.slate600, maxWidth: '540px', marginBottom: '48px', lineHeight: 1.6, fontWeight: 500 }}>
                Converting educational outcomes into <strong style={{ color: theme.colors.slate900 }}>verifiable signals</strong> that bridge the structural gap in talent acquisition.
              </p>
              <div style={{ display: 'flex', gap: '16px' }} className="hero-ctas">
                <Link to="/partner" style={{ textDecoration: 'none' }}>
                  <PremiumButton variant="dark" style={{ padding: '18px 40px' }}>Join Ecosystem <ArrowRight size={18} /></PremiumButton>
                </Link>
                <Link to="/perspectives" style={{ textDecoration: 'none' }}>
                  <PremiumButton variant="outline" style={{ padding: '18px 40px' }}>Read Insights</PremiumButton>
                </Link>
              </div>
            </motion.div>
            
            <motion.div style={{ gridColumn: 'span 6', display: 'flex', justifyContent: 'flex-end', position: 'relative' }} className="hero-visual" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <CompetenceEngine />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section ref={archRef} className="arch-section" style={{ padding: '140px 0', backgroundColor: '#020617', color: 'white', overflow: 'hidden', position: 'relative' }}>
        <div style={containerStyle} className="home-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '80px' }} className="arch-grid">
            <div style={{ gridColumn: 'span 5' }}>
              <span style={{ color: theme.colors.neonSecondary, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '10px', display: 'block', marginBottom: '16px', filter: `drop-shadow(0 0 5px ${theme.colors.neonSecondary}80)` }} className="arch-sub-heading-mobile">Architecture of Truth</span>
              <h2 className="arch-heading" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '48px', letterSpacing: '-0.04em' }}>From potential. <br /><span style={{ color: theme.colors.neonSecondary }}>To proven.</span></h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {protocolSteps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    className="arch-step-btn"
                    onMouseEnter={() => { isHovered.current = true; setActiveStep(i); setProgress(0); }}
                    onMouseLeave={() => { isHovered.current = false; }}
                    onClick={() => { setActiveStep(i); setProgress(0); }}
                    style={{ 
                      padding: '24px 32px', 
                      borderRadius: '1.25rem', 
                      cursor: 'pointer', 
                      backgroundColor: activeStep === i ? 'rgba(255, 255, 255, 0.08)' : 'transparent', 
                      border: `1px solid ${activeStep === i ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255,255,255,0.05)'}`,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ 
                        color: activeStep === i ? step.color : theme.colors.slate500,
                        filter: activeStep === i ? `drop-shadow(0 0 8px ${step.color}60)` : 'none'
                      }}>
                        {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                      </div>
                      <h4 style={{ fontSize: '18px', fontWeight: 900, color: activeStep === i ? 'white' : theme.colors.slate500, transition: 'color 0.3s' }}>{step.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ gridColumn: 'span 7' }}>
              <div className="arch-card" style={{ minHeight: '520px', backgroundColor: 'white', borderRadius: '3rem', padding: '64px', border: `1px solid ${theme.colors.slate900}`, position: 'relative', boxShadow: theme.shadows.heavy, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                    <div style={{ fontSize: '10px', fontWeight: 900, color: protocolSteps[activeStep].color, textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.2em' }}>{protocolSteps[activeStep].subtitle}</div>
                    <h3 className="arch-step-title" style={{ fontSize: '30px', fontWeight: 900, marginBottom: '24px', color: theme.colors.slate900 }}>{protocolSteps[activeStep].title.split('. ')[1]}</h3>
                    <p className="arch-step-desc" style={{ fontSize: '15px', color: theme.colors.slate600, lineHeight: 1.6, marginBottom: '40px', fontWeight: 500 }}>{protocolSteps[activeStep].description}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="arch-details">
                      {protocolSteps[activeStep].details.map((detail, idx) => (
                        <div key={idx} className="arch-detail-item" style={{ padding: '24px 20px', backgroundColor: theme.colors.slate50, borderRadius: '1.25rem', border: `1px solid ${theme.colors.slate200}`, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <CheckCircle size={18} color={protocolSteps[activeStep].color} style={{ filter: `drop-shadow(0 0 5px ${protocolSteps[activeStep].color}40)` }} />
                          <div className="arch-detail-text" style={{ fontSize: '14px', fontWeight: 900, color: theme.colors.slate900 }}>{detail}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE SECTION */}
      <section className="evidence-section" style={{ padding: '140px 0', backgroundColor: theme.colors.slate50 }}>
        <div style={containerStyle} className="home-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '0.4em', display: 'block', marginBottom: '16px' }}>Operational Proof</span>
            <h2 className="evidence-section-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, letterSpacing: '-0.04em' }}>Evidence Over Inference</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: theme.colors.primary, margin: '24px auto', borderRadius: '2px', boxShadow: `0 0 10px ${theme.colors.primary}40` }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <motion.div className="evidence-block" style={{ width: '100%', padding: '70px', backgroundColor: 'white', borderRadius: '3.5rem', border: `1px solid ${theme.colors.slate900}`, boxShadow: theme.shadows.premium, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div>
                <div style={{ width: '60px', height: '60px', borderRadius: '1.25rem', backgroundColor: 'rgba(37, 99, 235, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.primary, marginBottom: '32px', border: `1px solid ${theme.colors.primary}30`, boxShadow: `0 0 15px ${theme.colors.primary}20` }}>
                  <UserCheck size={28} />
                </div>
                <h3 className="evidence-title" style={{ fontSize: '36px', fontWeight: 900, marginBottom: '20px', color: theme.colors.slate900 }}>Verified Competence</h3>
                <p className="evidence-p" style={{ color: theme.colors.slate600, fontSize: '20px', lineHeight: 1.6, marginBottom: '36px', fontWeight: 500 }}>
                  Replacing generic resumes with atomic proof. Every hire is backed by verifiable performance signals that correlate directly to role success.
                </p>
                <div style={{ display: 'flex', gap: '24px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={18} color={theme.colors.secondary} /><span style={{ fontSize: '14px', fontWeight: 800, color: theme.colors.slate700 }}>Atomic Proof</span></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={18} color={theme.colors.secondary} /><span style={{ fontSize: '14px', fontWeight: 800, color: theme.colors.slate700 }}>Audit History</span></div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}><CandidateProfile scale="1.05" /></div>
            </motion.div>

            <motion.div className="evidence-block dark" style={{ width: '100%', padding: '70px', backgroundColor: '#020617', borderRadius: '3.5rem', color: 'white', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', alignItems: 'center', border: '1px solid rgba(255,255,255,0.15)' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="evidence-visual" style={{ width: '100%' }}><StateAlignmentEngine /></div>
              <div>
                <div style={{ width: '60px', height: '60px', borderRadius: '1.25rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.neonSecondary, marginBottom: '32px', border: `1px solid ${theme.colors.neonSecondary}50`, boxShadow: `0 0 15px ${theme.colors.neonSecondary}30` }}>
                  <Network size={28} />
                </div>
                <h3 className="evidence-title" style={{ fontSize: '36px', fontWeight: 900, marginBottom: '20px' }}>Market Alignment</h3>
                <p className="evidence-p" style={{ color: theme.colors.slate300, fontSize: '20px', lineHeight: 1.6, marginBottom: '36px', fontWeight: 500 }}>
                  Curriculum outputs mapped to role-specific requirements. We bridge the gap by ensuring every learning milestone is a professional capability.
                </p>
                <div style={{ display: 'flex', gap: '32px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Workflow size={20} color={theme.colors.neonSecondary} /><span style={{ fontSize: '15px', fontWeight: 800 }}>Vertical Standards</span></div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Target size={20} color={theme.colors.neonSecondary} /><span style={{ fontSize: '15px', fontWeight: 800 }}>Role Specific</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="home-footer-cta" style={{ padding: '120px 0', backgroundColor: theme.colors.slate900, color: 'white' }}>
        <div style={containerStyle} className="home-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'center' }} className="footer-cta-grid">
            <div style={{ gridColumn: 'span 8' }}>
              <h2 className="footer-cta-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Ready to join the <br /><span style={{ color: theme.colors.secondary }}>readiness loop?</span></h2>
              <p style={{ fontSize: '20px', color: theme.colors.slate400, maxWidth: '600px', lineHeight: 1.6 }}>Align demand, learning, and neutral proof in one high-performance operating system. Start your handshake today.</p>
            </div>
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/partner" style={{ textDecoration: 'none' }}>
                <PremiumButton variant="secondary" style={{ width: '100%', padding: '20px' }}>Join the Network</PremiumButton>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <PremiumButton variant="white" style={{ width: '100%', padding: '20px' }}>Our Protocol</PremiumButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        /* Tablet & Small Desktop (to prevent overlap) */
        @media (min-width: 769px) and (max-width: 1150px) {
          .hero-grid { gap: 32px !important; }
          .hero-title { font-size: clamp(28px, 6vw, 48px) !important; }
          .hero-p { font-size: 16px !important; }
          .hero-visual { transform: scale(0.85); transform-origin: right center; }
          .arch-grid { gap: 40px !important; }
          .arch-card { padding: 32px !important; }
        }

        /* Mobile Breakpoint - Stacking */
        @media (max-width: 768px) {
          section { padding: 40px 0 !important; }
          .home-container { padding: 0 16px !important; }
          .hero-section { min-height: auto !important; padding: 20px 0 40px !important; }
          .arch-section { padding: 80px 0 !important; }
          .evidence-section { padding: 60px 0 !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; justify-items: center; }
          .hero-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; width: 100%; }
          .hero-title, .arch-heading, .evidence-section-title, .footer-cta-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; padding: 0 4px; }
          .arch-heading { text-align: center !important; width: 100% !important; margin: 0 auto 32px !important; } 
          .arch-sub-heading-mobile { text-align: center !important; width: 100% !important; display: block !important; margin: 0 auto 12px !important; } 
          .evidence-section h2 { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; }
          .hero-p, .evidence-p { text-align: center; padding: 0 8px; font-size: 16px !important; margin-bottom: 32px !important; }
          .hero-ctas { justify-content: center; flex-direction: column; width: 100%; align-items: center; gap: 12px !important; }
          .hero-ctas > a { width: 100%; max-width: 300px; }
          .hero-visual { width: 100% !important; max-width: 360px !important; justify-content: center !important; }
          
          .arch-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .arch-grid > div { grid-column: span 1 !important; text-align: center; display: flex; flex-direction: column; align-items: center; }
          .arch-step-btn { padding: 12px 16px !important; border-radius: 1rem !important; width: 100% !important; max-width: 320px !important; }
          .arch-step-btn h4 { font-size: 15px !important; }
          
          .arch-card { min-height: auto !important; padding: 32px 16px !important; border-radius: 2rem !important; width: 100% !important; }
          .arch-step-title { font-size: 20px !important; margin-bottom: 12px !important; text-align: center; }
          .arch-step-desc { font-size: 13px !important; margin-bottom: 20px !important; text-align: center; }
          
          .arch-details { grid-template-columns: 1fr !important; gap: 10px !important; width: 100%; }
          .arch-detail-item { padding: 12px !important; border-radius: 1rem !important; gap: 8px !important; align-items: center; text-align: center; }
          .arch-detail-text { font-size: 12px !important; }
          
          .evidence-block { grid-template-columns: 1fr !important; padding: 32px 20px !important; gap: 40px !important; text-align: center; border-radius: 2.5rem !important; }
          .evidence-block > div { display: flex; flex-direction: column; align-items: center; width: 100%; }
          .evidence-title { font-size: 28px !important; text-align: center; }
          .evidence-block.dark { grid-template-areas: "content" "visual"; }
          .evidence-block.dark > div:first-child { grid-area: visual; order: 2; width: 100% !important; padding-top: 20px; }
          .evidence-block.dark > div:last-child { grid-area: content; order: 1; }
          .evidence-visual { width: 100% !important; max-width: 100% !important; }
          .alignment-engine-card { padding: 13px !important; border-radius: 1.5rem !important; }
          
          .home-footer-cta { padding-top: 40px !important; padding-bottom: 24px !important; }
          .footer-cta-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-cta-grid > div { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
