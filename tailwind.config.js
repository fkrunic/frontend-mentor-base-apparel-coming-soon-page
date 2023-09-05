/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      'desaturated-red': 'hsl(0, 36%, 70%)',
      'soft-red': 'hsl(0, 93%, 68%)',
      'dark-grayish-red': 'hsl(0, 6%, 24%)',
      'lg-start-1': 'hsl(0, 0%, 100%)',
      'lg-end-1': 'hsl(0, 100%, 98%)',
      'lg-start-2': 'hsl(0, 80%, 86%)',
      'lg-end-2': 'hsl(0, 74%, 74%)'
    },
    fontFamily: {
      'josefin-sans': 'Josefin Sans, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

