
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileX, ZapOff, TrendingDown, Activity, TrendingUp } from 'lucide-react';
import { theme } from '../theme';

const GapMismatchMonitor: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '420px',
      backgroundColor: theme.colors.slate900,
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.15)',
      padding: '32px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.error, boxShadow: `0 0 10px ${theme.colors.error}` }} className="pulse"></div>
          <span style={{ fontSize: '10px', fontWeight: 900, color: 'white', letterSpacing: '0.15em' }}>Alignment Failure</span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px', justifyContent: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: 'white' }}>MARKET DEMAND</span>
            <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.neonPrimary }}>TARGET</span>
          </div>
          <div style={{ height: '32px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} style={{ height: '100%', background: theme.colors.primary, boxShadow: `0 0 10px ${theme.colors.primary}60` }} transition={{ duration: 1.5 }} />
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: 'white' }}>CANDIDATE OUTPUT</span>
            <span style={{ fontSize: '11px', fontWeight: 900, color: theme.colors.error }}>DEFICIT</span>
          </div>
          <div style={{ height: '32px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '42%' }} style={{ height: '100%', background: theme.colors.error, boxShadow: `0 0 10px ${theme.colors.error}60` }} transition={{ duration: 1.5, delay: 0.5 }} />
          </div>
        </div>

        <div style={{ padding: '20px', backgroundColor: 'rgba(239, 68, 68, 0.08)', borderRadius: '14px', border: '1px dashed rgba(239, 68, 68, 0.3)', textAlign: 'center' }}>
           <div style={{ fontSize: '9px', fontWeight: 900, color: theme.colors.error, marginBottom: '4px' }}>COST PER HIRE INFLATION</div>
           <div style={{ fontSize: '24px', fontWeight: 900, color: 'white' }}>₹1,85,000+</div>
        </div>
      </div>
    </div>
  );
};

const Problem: React.FC = () => {
  const containerStyle: React.CSSProperties = { maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <section className="problem-hero" style={{ backgroundColor: theme.colors.slate50, minHeight: 'calc(80vh - 112px)', display: 'flex', alignItems: 'center', padding: '60px 0', overflow: 'hidden' }}>
        <div style={containerStyle} className="problem-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }} className="problem-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} style={{ gridColumn: 'span 7' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: theme.colors.error, fontWeight: 900, textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', marginBottom: '24px', padding: '8px 16px', backgroundColor: '#fef2f2', borderRadius: '100px', border: '1px solid #fee2e2' }}>
                <AlertTriangle size={14} /> Critical Failure
              </div>
              <h1 className="problem-title" style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, color: theme.colors.slate900, marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                The <span style={{ whiteSpace: 'nowrap' }}>supply chain</span> <br className="hide-desktop" />for talent is <br /><span style={{ color: theme.colors.error }}>broken.</span>
              </h1>
              <p className="problem-p" style={{ fontSize: '20px', color: theme.colors.slate600, lineHeight: 1.6, maxWidth: '540px' }}>The gap between candidate output and enterprise demand costs lakhs per hire in retraining and lost productivity.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} style={{ gridColumn: 'span 5' }}><GapMismatchMonitor /></motion.div>
          </div>
        </div>
      </section>

      <section className="problem-points" style={{ padding: '120px 0', backgroundColor: theme.colors.slate900, color: 'white' }}>
        <div style={containerStyle} className="problem-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="points-grid">
            {[{ icon: <FileX size={24} />, title: "Inference Bias", text: "Guessing readiness based on generic credentials.", color: theme.colors.error },
              { icon: <ZapOff size={24} />, title: "Signal Noise", text: "Portfolios flooded with AI-assisted boilerplate.", color: "#fbbf24" },
              { icon: <TrendingDown size={24} />, title: "Retraining Tax", text: "Months lost to bridging the readiness distance.", color: theme.colors.primary }
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: '48px', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.12)' }} className="problem-card">
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, marginBottom: '32px', border: `1px solid ${p.color}30` }}>{p.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>{p.title}</h3>
                <p style={{ color: theme.colors.slate400, lineHeight: 1.7, fontSize: '17px' }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        
        .hide-desktop { display: none; }

        @media (max-width: 1024px) {
          .hide-desktop { display: block; }
          .problem-hero { padding: 20px 0 40px !important; min-height: auto !important; }
          .problem-container { padding: 0 20px !important; }
          .problem-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .problem-grid > div { grid-column: span 1 !important; display: flex; flex-direction: column; align-items: center; width: 100%; }
          .problem-title { font-size: clamp(28px, 9vw, 36px) !important; text-align: center; width: 100%; }
          .problem-p { text-align: center; padding: 0 8px; font-size: 16px !important; }
          
          .problem-points { padding: 40px 0 24px !important; }
          .points-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .problem-card { padding: 32px 24px !important; }
        }
      `}</style>
    </div>
  );
};

export default Problem;
