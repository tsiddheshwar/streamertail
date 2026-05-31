/**
 * Streamertail Tokens — Design tokens as JS constants
 * Use these in React, Vue, Angular, or any JS framework
 * for consistent values that match the CSS custom properties.
 */

const colors = {
  primary: '#2563eb',
  primaryHover: '#1d4ed8',
  primaryActive: '#1e40af',
  secondary: '#0d9488',
  secondaryHover: '#0f766e',
  accent: '#f59e0b',
  accentHover: '#d97706',

  // Semantic
  success: '#16a34a',
  successLight: '#dcfce7',
  warning: '#ea580c',
  warningLight: '#fff7ed',
  caution: '#ca8a04',
  cautionLight: '#fefce8',
  danger: '#dc2626',
  dangerLight: '#fef2f2',
  info: '#0284c7',
  infoLight: '#e0f2fe',
  neutral: '#6b7280',
  neutralLight: '#f3f4f6',

  // Aliases
  error: '#dc2626',
  orange: '#ea580c',
  yellow: '#ca8a04',
  red: '#dc2626',
  green: '#16a34a',
  blue: '#0284c7',
  teal: '#0d9488',

  // Gray scale
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  gray950: '#030712',
};

const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
};

const typography = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontFamilyMono: "'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace",
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

const shadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

const borderRadius = {
  sm: '0.25rem',
  default: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
};

const transitions = {
  fast: '150ms ease',
  default: '200ms ease',
  slow: '300ms ease',
};

const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

const darkColors = {
  primary: '#60a5fa',
  primaryHover: '#93c5fd',
  secondary: '#2dd4bf',
  secondaryHover: '#5eead4',
  accent: '#fbbf24',
  accentHover: '#fcd34d',

  success: '#4ade80',
  successLight: '#052e16',
  warning: '#fb923c',
  warningLight: '#431407',
  caution: '#facc15',
  cautionLight: '#422006',
  danger: '#f87171',
  dangerLight: '#450a0a',
  info: '#38bdf8',
  infoLight: '#082f49',
  neutral: '#9ca3af',
  neutralLight: '#1f2937',

  bg: '#0f172a',
  bgSurface: '#1e293b',
  bgElevated: '#334155',
  bgOverlay: 'rgba(0, 0, 0, 0.6)',
  text: '#f1f5f9',
  textSecondary: '#cbd5e1',
  textMuted: '#64748b',
  textLink: '#60a5fa',
  textLinkHover: '#93c5fd',
  borderColor: '#334155',
  borderColorStrong: '#475569',
};

module.exports = {
  colors,
  darkColors,
  spacing,
  typography,
  shadows,
  breakpoints,
  borderRadius,
  transitions,
  zIndex,
};
