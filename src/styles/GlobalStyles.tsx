import { createGlobalStyle } from "styled-components";
import "@fontsource/kanit";

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  font-family: "kanit, roboto, sans-serif";
  min-height: 100vh;
  margin: 0;
  background: "#101010",

;
}

input {
  outline: none;
  background-color: none;
}
ul, li, ol {
  list-style: none;
}
`;

export default GlobalStyles;
