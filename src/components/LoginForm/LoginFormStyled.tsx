import styled from "styled-components";
export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 380px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.colors.shadow};
  justify-content: center;
  gap: 80px;
  min-width: 288px;
  max-width: 500px;

  .input {
    &__password,
    &__email {
      height: 35px;
      margin: 10px 0px;
      background-color: ${(props) => props.theme.colors.text};
    }
  }

  .button__login {
    margin-top: 15px;
    border: none;
    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.button.loginForm};
    }
  }
`;
