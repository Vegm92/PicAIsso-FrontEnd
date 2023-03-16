import { DefaultTheme } from "styled-components";
import "@fontsource/kanit";

const theme: DefaultTheme = {
  colors: {
    background: "#101010",
    cardBackground: "#1a191b",
    text: "#FFFFFF",
    textLink1: "#57ABFA",
    textLink2: "#8C53FF",
    loader: "rgba(84, 20, 500, 1)",
    shadow: "0px 0px 45px #CC99FF",
    imgShadow: "0px 0px 45px #CC99FF",
    button: {
      text: "#000000",
      loginForm: "#CC99FF",
      login: "linear-gradient(94deg, #C764EC 0%, #4A36B1 100%)",
      utilsButton: "#57ABFA",
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
};

export default theme;
