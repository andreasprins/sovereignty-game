/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },
      colors: {
        'suse-dark': '#0C322C',
        'suse-dark-lighter': '#0F3D35',
        'suse-dark-surface': '#11453C',
        'suse-green': '#30BA78',
        'suse-orange': '#FE7C3F',
        'suse-text': '#F0F0F0',
        'suse-muted': '#8FAFA6',
      },
    },
  },
  plugins: [],
};
