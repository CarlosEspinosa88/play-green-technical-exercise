/* eslint-disable no-unused-vars */
import type { ThemeKeys } from './themeInterface';

export type ColorScheme = {
  colorScheme: ThemeKeys;
  setColorScheme: (mode: ThemeKeys) => void;
};
