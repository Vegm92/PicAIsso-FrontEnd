import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  picAisso: {
    background: "#101010",
    cardBackground: "#1a191b",
    text: "#FFFFFF",
    textLink1: "#57ABFA",
    textLink2: "#CC99FF",
    shadow: "0px 0px 45px #541496",
    imgShadow: "0px 0px 45px #541496",
    button: {
      text: "#000000",
      loginForm: "#CC99FF",
      login: "linear-gradient(94deg, #C764EC 0%, #4A36B1 100%)",
      utilsButton: "#57ABFA",
    },
  },
};

export const picAissoTheme = extendTheme({
  colors,
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: { bg: mode("#101010", "#101010")(props) },
    }),
  },
});
