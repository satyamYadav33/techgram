/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070F',
        panel: '#0B1020',
        card: '#111827',
        neon: '#22d3ee',
        violet2: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34,211,238,0.25)',
      }
    },
  },
  plugins: [],
}
