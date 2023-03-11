import styled from "styled-components";
export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 380px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  border-radius: 35px;
  box-shadow: ${(props) => props.theme.colors.shadow};
  justify-content: center;
  gap: 80px;
  min-width: 320px;

  .input {
    &__password,
    &__email {
      margin: 10px 0px;
      width: 80%;
      background-color: ${(props) => props.theme.colors.text};
      height: 35px;
    }
  }

  .button__login {
    border: none;
    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.button.loginForm};
    }
  }
`;
