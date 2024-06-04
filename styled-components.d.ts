import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
      colors: {
        header: string;
        subtitle: string;
        text: string;
        label: string;
        background: string;
        remove: string;
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
    dark: {
      colors: {
        header: string;
        subtitle: string;
        text: string;
        label: string;
        background: string;
        remove: string;
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
        circle: string;
      };
      otherColors: {
        error: string;
        blue: string;
        blueOne: string;
        blueSecond: string;
        blueContainer: string;
      };
    };
  }
}
