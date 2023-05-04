/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['{app,components}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
    },
  },
};
