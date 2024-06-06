const lightGrey: string = '#FEFEFE';
const white: string = '#FFFFFF';

const lightTheme = {
  header: '#161617',
  subtitle: '#232232',
  text: '#161617',
  label: '#3C3C3C',
  background: '#F3F3F3',
  remove: '#D36060',
};

const darktheme = {
  header: lightGrey,
  subtitle: lightGrey,
  text: lightGrey,
  label: lightGrey,
  background: '#181828',
  remove: white,
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
    circle: '50%',
  },
  otherColors: {
    primary: '#1A5BE1',
    secondary: '#161617',
    error: '#EA596F',
    iconBlue: '#236BFE',
    shadowBlue: '#063BA8',
    blueContainer: '#2269FBCC',
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
