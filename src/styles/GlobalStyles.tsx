import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

#root {
  display: flex;
  justify-content: center;
  padding: 30px;

}

body {
   display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    font-family: "roboto", sans-serif;
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
