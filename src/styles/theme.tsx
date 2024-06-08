const lightGrey: string = '#FEFEFE';
const white: string = '#FFFFFF';

const lightTheme = {
  header: '#161617',
  subtitle: '#232232',
  text: '#161617',
  label: '#3C3C3C',
  box: white,
  background: '#F3F3F3',
  remove: '#D36060',
  iconHeart: '#1A5BE1',
  selectedNav: '#1A5BE1',
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
    primary: '#1A5BE1',
    secondary: '#161617',
    error: '#EA596F',
    iconBlue: '#236BFE',
    shadowBlue: '#063BA8',
    blueContainer: '#2269FBCC',
    blueShadowPrimary: 'rgba(26, 92, 225, 0.55)',
    gray: '#8c8c8c',
    white: white,
  },
};

export const theme = {
  light: {
    colors: lightTheme,
    ...defaultStyles,
  },
  dark: {
    colors: darktheme,
    ...defaultStyles,
  },
};
