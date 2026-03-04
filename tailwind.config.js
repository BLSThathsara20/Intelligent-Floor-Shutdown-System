/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          teal: '#0d9488',
          amber: '#d97706',
          violet: '#7c3aed',
          rose: '#e11d48',
          emerald: '#059669',
        },
        surface: {
          DEFAULT: '#faf9f7',
          elevated: '#ffffff',
          muted: '#f5f4f2',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px -4px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 12px 24px -8px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "pulse-dot": "pulseDot 1.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "live-blink": "liveBlink 1.2s ease-in-out infinite",
        "live-glow": "liveGlow 2.5s ease-in-out infinite",
        "live-shimmer": "liveShimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.3", boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "50%": { opacity: "0.6", boxShadow: "0 0 0 6px rgba(16, 185, 129, 0)" },
        },
        liveBlink: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.7)" },
          "50%": { opacity: "0.2", boxShadow: "0 0 6px 4px rgba(16, 185, 129, 0.5)" },
        },
        liveGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.15)" },
          "50%": { boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.08)" },
        },
        liveShimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
