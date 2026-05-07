import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* FONTS */
      fontFamily: {
        display: [
          "var(--font-clash)",
          "sans-serif",
        ],

        sans: [
          "var(--font-satoshi)",
          "system-ui",
          "sans-serif",
        ],

        mono: [
          "var(--font-geist-mono)",
          "monospace",
        ],
      },

      /* COLORS */
      colors: {
        background: "var(--background)",

        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground:
            "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground:
            "var(--secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground:
            "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground:
            "var(--accent-foreground)",
        },

        card: {
          DEFAULT: "var(--card)",
          foreground:
            "var(--card-foreground)",
        },

        border: "var(--border)",

        ring: "var(--ring)",
      },

      /* RADIUS */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ANIMATIONS */
      animation: {
        float:
          "float 6s ease-in-out infinite",

        "pulse-slow":
          "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },

      /* SHADOWS */
      boxShadow: {
        premium:
          "0 10px 40px rgba(0,0,0,0.08)",

        soft:
          "0 4px 20px rgba(0,0,0,0.04)",

        glow:
          "0 0 40px rgba(139,92,246,0.35)",
      },

      /* BACKDROP */
      backdropBlur: {
        xs: "2px",
      },

      /* LETTER SPACING */
      letterSpacing: {
        tighter: "-0.04em",
        premium: "-0.06em",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;