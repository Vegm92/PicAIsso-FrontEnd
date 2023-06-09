import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "../styles/themes";
import { RootState, setupStore, store } from "../store";
import { getComponentRouter, router } from "../routers/routes";
import { picAissoTheme } from "../styles/chakraUi";
import GlobalStyles from "../styles/GlobalStyles";

export const preloadedStateLoggedIn = {
  user: {
    email: "",
    id: "",
    isLogged: true,
    token: "",
  },
};

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ChakraProvider theme={picAissoTheme}>{children}</ChakraProvider>
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export const renderRouterWithProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};
