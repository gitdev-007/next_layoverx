import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#001a4d',
        'electric-blue': '#0066ff',
      },
    },
  },
  plugins: [],
}

export default config
