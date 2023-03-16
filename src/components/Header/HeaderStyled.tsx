import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  height: 110px;
  min-width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 1rem;

  .tittle {
    font-size: ${(props) => props.theme.fontSizes.bigTitleFontSize};
    .main-header__link {
      font-size: medium;
      color: black;
      align-self: center;
    }
  }

  span.ai {
    color: ${(props) => props.theme.colors.textLink2};
  }

  [class*="button"] {
    border: none;
    background-color: ${(props) => props.theme.colors.button.loginForm};
    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.button.loginForm};
    }
  }

  .main-header__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;

    [class*="link"] {
      color: white;
    }
  }
`;

export default HeaderStyled;
