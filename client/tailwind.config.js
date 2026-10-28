/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1E3A5F',
          900: '#14213D', // Primary Brand Color
          950: '#0B1324',
        },
        royal: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB', // Secondary Brand Color
          700: '#1D4ED8',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F5B82E', // Accent Color
          600: '#D9981A',
        },
        surface: '#FFFFFF',
        canvas: '#F8FAFC',
        textMain: '#172033',
        textMuted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
