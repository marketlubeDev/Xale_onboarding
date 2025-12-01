/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['var(--font-helvetica-neue)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-helvetica-neue)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
  