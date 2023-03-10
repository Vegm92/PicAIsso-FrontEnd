import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { userReducer } from "./store/features/users/usersSlice/usersSlice";
import { RootState, AppStore } from "./store";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import theme, { picAissoTheme } from "./styles/themes";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: { username: "", isLogged: false, token: "" },
    },
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ChakraProvider theme={picAissoTheme}>{children}</ChakraProvider>
        </ThemeProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
