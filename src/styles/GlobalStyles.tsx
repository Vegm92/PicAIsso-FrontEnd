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
  justify-content: center;
}

body {
  font-family: "kanit, roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0;
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
