export type ThemeKeys = 'light' | 'dark';

type Theme = {
  colors: {
    header: string,
    subtitle: string,
    text: string,
    label: string,
    box: string,
    background: string,
    remove: string,
    iconHeart: string,
    selectedNav: string,
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    extra: string;
    circle: string;
  };
  otherColors: {
    primary: string;
    secondary: string;
    error: string;
    iconBlue: string;
    shadowBlue: string;
    blueContainer: string;
  };
};

export type Themes = {
  light: Theme;
  dark: Theme;
};
