import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        forest: {
          DEFAULT: '#1B5E20',
          dark:    '#0a3d0f',
          light:   '#2E7D32',
        },
        saffron: {
          DEFAULT: '#F57F17',
          light:   '#FFB300',
          dark:    '#E65100',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)",
      },
    },
  },
  plugins: [],
}

export default config
