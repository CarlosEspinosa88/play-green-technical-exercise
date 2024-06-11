import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
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
        primary: string,
        secondary: string,
        error: string,
        iconBlue: string,
        shadowBlue: string,
        blueContainer: string,
        blueShadowPrimary: string,
        grayShadow: string,
        gray: string,
        white: string,
      };
    };
    dark: {
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
        primary: string,
        secondary: string,
        error: string,
        iconBlue: string,
        shadowBlue: string,
        blueContainer: string,
        blueShadowPrimary: string,
        grayShadow: string,
        gray: string,
        white: string,
      };
    };
  }
}
