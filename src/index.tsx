import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import theme from "./theme";
import GlobalStyles from "./styles/GlobalStyles";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS={false}>
        <GlobalStyles />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
