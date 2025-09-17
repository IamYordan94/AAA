/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'amsterdam-orange': 'var(--flyer-orange)',
        'dutch-blue': 'var(--dutch-blue)',
        'teal-accent': 'var(--teal-accent)',
        'cream-text': 'var(--cream-text)',
      },
      backgroundImage: {
        'amsterdam-skyline': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\'%3E%3Cpath d=\'M0,20 L10,15 L20,18 L30,12 L40,16 L50,10 L60,14 L70,8 L80,12 L90,6 L100,10 L100,20 Z\' fill=\'%23f97316\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
