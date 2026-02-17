
import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'dark';
  style?: React.CSSProperties;
  className?: string;
  type?: 'button' | 'submit';
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'dark', 
  style = {},
  type = 'button'
}) => {
  const getColors = () => {
    switch (variant) {
      case 'primary': 
        return { 
          bg: theme.colors.primary, 
          hoverBg: theme.colors.primaryHover, 
          text: theme.colors.white, 
          border: 'none',
          shadow: '0 6px 20px -5px rgba(37, 99, 235, 0.4)'
        };
      case 'secondary': 
        return { 
          bg: theme.colors.secondary, 
          hoverBg: theme.colors.secondaryHover, 
          text: theme.colors.white, 
          border: 'none',
          shadow: '0 6px 20px -5px rgba(16, 185, 129, 0.4)'
        };
      case 'outline': 
        return { 
          bg: 'transparent', 
          hoverBg: theme.colors.slate900, 
          text: theme.colors.slate900, 
          hoverText: theme.colors.white,
          border: `1px solid ${theme.colors.slate900}`,
          shadow: 'none'
        };
      case 'white': 
        return { 
          bg: theme.colors.white, 
          hoverBg: theme.colors.slate50, 
          text: theme.colors.slate900, 
          border: 'none',
          shadow: '0 10px 20px -8px rgba(0,0,0,0.1)'
        };
      case 'dark':
      default: 
        return { 
          bg: theme.colors.slate900, 
          hoverBg: '#000000', 
          text: theme.colors.white, 
          border: 'none',
          shadow: '0 8px 20px -8px rgba(0,0,0,0.3)'
        };
    }
  };

  const colors = getColors();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { 
          backgroundColor: colors.bg, 
          color: colors.text,
          y: 0,
          boxShadow: colors.shadow
        },
        hover: { 
          backgroundColor: colors.hoverBg, 
          color: 'hoverText' in colors ? colors.hoverText : colors.text,
          y: -2,
          boxShadow: variant === 'outline' ? '0 8px 15px -5px rgba(0,0,0,0.1)' : colors.shadow.replace('0.4', '0.55')
        },
        tap: { 
          scale: 0.98, 
          y: 0 
        }
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 36px',
        fontWeight: 800,
        fontSize: '11px',
        border: colors.border,
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        borderRadius: '10px',
        overflow: 'hidden',
        ...style
      }}
    >
      {variant !== 'outline' && (
        <motion.div
          variants={{
            initial: { x: '-100%', opacity: 0 },
            hover: { x: '100%', opacity: 0.15, transition: { duration: 0.5, ease: 'easeInOut' } }
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />
      )}
      <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
        {children}
      </span>
    </motion.button>
  );
};

export default PremiumButton;