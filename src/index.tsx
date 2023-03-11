import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App/App";
import { store } from "./store";
import GlobalStyles from "./styles/GlobalStyles";
import theme, { picAissoTheme } from "./styles/themes";
import { ThemeProvider } from "styled-components";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={picAissoTheme} resetCSS={false}>
          <GlobalStyles />
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
