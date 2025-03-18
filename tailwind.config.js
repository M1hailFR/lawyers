/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    screens: {
      xs: '400px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    colors: {
      neutral1: '#fff',
      neutral2: '#000',
      neutral3: '#71717A',
      neutral4: '#A1A1AA',
      neutral5: '#E4E4E7',
      neutral6: '#FAFAFA',
      primary: '#00DC82',
      secondary: '#00BD70',
      danger: '#EF4444',
      background: "#fff",
      transparent: 'transparent',
      none: 'none',

    },
    backgroundImage: {
      'gradient-1': 'linear-gradient(45deg, #2A3B4D 0%, rgba(0,59,47) 100%);',
      'gradient-2': 'linear-gradient(45deg, rgba(0,59,47) 0%, #2A3B4D 100%)',
      'gradient-3': 'linear-gradient(45deg, #5C5C5C 0%, #2A3B4D 100%)',
      'gradient-4': 'linear-gradient(90deg, #7fc7ff 0%, #bbbbbb 100%)',
      'gradient-5': 'linear-gradient(45deg, rgba(0,59,47) 0%, #2A3B4D 100%)',
      'gradient-6': 'linear-gradient(90deg, #ffeb3b 0%, #9e9e9e 100%)',
    },
    boxShadow: {
      base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: '0 0 #0000',
    },
  },
}
