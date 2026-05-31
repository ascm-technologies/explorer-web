/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        sm: "20px",
        lg: "24px",
        xl: "24px",
        "2xl": "24px",
      },
    },

    extend: {

      maxWidth: {
        layout: "1100px",
      },

      colors: {
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",

        bg: "var(--color-bg)",
        text: "var(--color-text)",
        border: "var(--color-border)",
      },

      borderRadius: {
        shell: "20px",
        card: "24px",
      },

      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
      },

    },
  },

  plugins: [],
};