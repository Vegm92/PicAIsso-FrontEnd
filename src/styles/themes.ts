import { DefaultTheme } from "styled-components";
import "@fontsource/kanit";
import { extendTheme } from "@chakra-ui/react";

export const colors = {
  picAisso: {
    background: "#101010",
    cardBackground: "#1a191b",
    text: "#FFFFFF",
    textLink1: "#1E79D1",
    textLink2: "#8C53FF",
    shadow: "0px 0px 45px #541496",
    button: {
      loginForm: "rgba(84, 20, 150, 0.93)",
      login: "linear-gradient(94deg, #C764EC 0%, #4A36B1 100%)",
      utilsButton: "#1E79D1",
    },
  },
};
export const picAissoTheme = extendTheme({ colors });

const theme: DefaultTheme = {
  colors: {
    background: "#101010",
    cardBackground: "#1a191b",
    text: "#FFFFFF",
    textLink1: "#1E79D1",
    textLink2: "#8C53FF",
    shadow: "0px 0px 45px #541496",
    button: {
      loginForm: "rgba(84, 20, 150, 0.93)",
      login: "linear-gradient(94deg, #C764EC 0%, #4A36B1 100%)",
      utilsButton: "#1E79D1",
    },
  },

  fontFamilies: {
    mainFontFamily: "kanit, roboto, sans serif",
  },

  fontSizes: {
    mainFontSize: "1rem",
    biggerFontSize: "1.125rem",
    biggestFontSize: "1.25rem",
    bigTitleFontSize: "2rem",
  },

  sizes: {
    mobileWidth: "320px",
    desktopBreakpoint: "900px",
    inputHeight: "60px",
  },

  distances: {
    inputLeftPadding: "16px",
  },
};

export default theme;
