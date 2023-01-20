import { breakpoint } from "./setting/breakpoint";
import { colors, darkThemeColors, lightThemeColors } from "./setting/colors";
import { fonts } from "./setting/fonts";

export const theme = {
  breakpoint,
  colors,
  fonts,
};

export const lightTheme = {
  ...theme,
  colors: lightThemeColors,
};

export const darkTheme = {
  ...theme,
  colors: darkThemeColors,
};
