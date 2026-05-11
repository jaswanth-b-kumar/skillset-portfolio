import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  /* Force-generate classes used only via @apply in CSS (not visible to JIT content scan) */
  safelist: [
    "animate-fade-up", "animate-fade-left", "animate-fade-right",
    "animate-scale-in", "animate-stat-pop",
    "animate-slide-hero", "animate-badge-pulse", "animate-chip-enter",
    "animate-filter-grid", "animate-timeline-grow",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", "Courier New", "monospace"],
        mono: ["Space Mono", "Courier New", "monospace"],
        display: ["Orbitron", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-48px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(48px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.88)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        slideInHero: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marqueeScroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        statPop: {
          '0%':   { transform: 'scale(0.55)', opacity: '0' },
          '65%':  { transform: 'scale(1.1)',  opacity: '1' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        badgePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.5)' },
          '50%':      { boxShadow: '0 0 0 6px rgba(245,158,11,0)' },
        },
        chipEnter: {
          from: { opacity: '0', transform: 'translateY(18px) scale(0.88)' },
          to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        filterGridIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        timelineGrow: {
          from: { height: '0' },
          to:   { height: '100%' },
        },
      },
      animation: {
        'fade-up':       'fadeInUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-left':     'fadeInLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-right':    'fadeInRight 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'float':         'float 5s ease-in-out infinite',
        'scale-in':      'scaleIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-hero':    'slideInHero 0.75s cubic-bezier(0.22,1,0.36,1) forwards',
        'marquee':       'marqueeScroll 40s linear infinite',
        'stat-pop':      'statPop 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'badge-pulse':   'badgePulse 2.4s ease-in-out infinite',
        'chip-enter':    'chipEnter 0.65s cubic-bezier(0.22,1,0.36,1) forwards',
        'filter-grid':   'filterGridIn 0.38s cubic-bezier(0.22,1,0.36,1)',
        'timeline-grow': 'timelineGrow 1.4s cubic-bezier(0.22,1,0.36,1) 0.6s forwards',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
