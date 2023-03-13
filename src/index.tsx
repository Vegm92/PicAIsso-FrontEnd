import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./store";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/themes";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import { picAissoTheme } from "./styles/chakraUi";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={picAissoTheme} resetCSS={false}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
