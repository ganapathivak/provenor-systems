// Import React to resolve React namespace for type definitions like ReactNode
import React from 'react';

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  color?: string;
}