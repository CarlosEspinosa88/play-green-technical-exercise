import type { Themes } from '../interfaces';

const lightGrey: string = '#FEFEFE';
const white: string = '#FFFFFF';
const darkBlueSecondary: string = '#161617'
const lightBluePrimary: string = '#1A5BE1'

const lightTheme = {
  header: darkBlueSecondary,
  subtitle: '#232232',
  text: darkBlueSecondary,
  label: '#3C3C3C',
  box: white,
  background: '#F3F3F3',
  remove: '#D36060',
  iconHeart: lightBluePrimary,
  selectedNav: lightBluePrimary,
};

const darktheme = {
  header: lightGrey,
  subtitle: lightGrey,
  text: lightGrey,
  label: lightGrey,
  box: '#35354a',
  background: '#181828',
  remove: white,
  iconHeart: white,
  selectedNav: white,
};

const defaultStyles = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '15px',
    extra: '20px',
    circle: '50%',
  },
  otherColors: {
    primary:lightBluePrimary,
    secondary: darkBlueSecondary,
    error: '#EA596F',
    iconBlue: '#236BFE',
    shadowBlue: '#063BA8',
    blueContainer: '#2269FBCC',
    blueShadowPrimary: 'rgba(26, 92, 225, 0.55)',
    grayShadow: 'rgba(106, 106, 107, 0.25)',
    gray: '#8C8C8C',
    white: white,
  },
};

export const theme: Themes = {
  light: {
    colors: lightTheme,
    ...defaultStyles,
  },
  dark: {
    colors: darktheme,
    ...defaultStyles,
  },
};
