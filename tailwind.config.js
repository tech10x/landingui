/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'cs': {'max': '991px'},
        'cmd': {'max': '767px'},
        'cxl': {'min': '991px'}
      },
      boxShadow: {
        'custom': '0 14px 24px 0 rgba(0, 0, 0, 0.60), 0 18px 30px 0 rgba(0, 0, 0, 0.109)',
      }
    },
  },
});
