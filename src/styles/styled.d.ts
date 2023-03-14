import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      cardBackground: string;
      loader: string;
      text: string;
      textLink1: string;
      textLink2: string;
      shadow: string;
      imgShadow: string;
      button: {
        text: string;
        loginForm: string;
        login: string;
        utilsButton: string;
      };
    };

    fontFamilies: {
      mainFontFamily: string;
    };

    fontSizes: {
      mainFontSize: string;
      biggerFontSize: string;
      biggestFontSize: string;
      bigTitleFontSize: string;
    };

    sizes: {
      mobileWidth: string;
      desktopBreakpoint: string;
      inputHeight: string;
    };
  }
}
