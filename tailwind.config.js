/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2.25rem',
    },
    screens: {
      sm: '568px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
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

      // Современная синяя
      neutral21: '#FFFFFF',
      neutral22: '#1A1A1A',
      neutral23: '#4A5568',
      neutral24: '#718096',
      neutral25: '#E2E8F0',
      neutral26: '#F7FAFC',
      primary2: '#2563EB',    // Яркий синий
      secondary2: '#1D4ED8',  // Насыщенный синий
      danger2: '#DC2626',

      // Золотая премиум
      neutral31: '#FFFFFF',
      neutral32: '#2D3748',
      neutral33: '#4A5568',
      neutral34: '#718096',
      neutral35: '#EDF2F7',
      neutral36: '#F7FAFC',
      primary3: '#D97706',    // Яркое золото
      secondary3: '#B45309',  // Насыщенный оранжевый
      danger3: '#DC2626',

      // Изумрудная
      neutral41: '#FFFFFF',
      neutral42: '#1A202C',
      neutral43: '#4A5568',
      neutral44: '#718096',
      neutral45: '#E2E8F0',
      neutral46: '#F7FAFC',
      primary4: '#059669',    // Яркий изумрудный
      secondary4: '#047857',  // Насыщенный зеленый
      danger4: '#DC2626',

      // Бордовая люкс
      neutral51: '#FFFFFF',
      neutral52: '#1A202C',
      neutral53: '#4A5568',
      neutral54: '#718096',
      neutral55: '#E2E8F0',
      neutral56: '#F7FAFC',
      primary5: '#BE185D',    // Яркий бордовый
      secondary5: '#9D174D',  // Насыщенный бордовый
      danger5: '#DC2626',
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
