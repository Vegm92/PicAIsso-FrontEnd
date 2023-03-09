import styled from "styled-components";
export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 800px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  border-radius: 35px;
  box-shadow: ${(props) => props.theme.colors.shadow};
  justify-content: center;
  gap: 80px;
  min-width: 550px;

  .form__tittle {
    font-size: 40px;
  }

  .input {
    &__password,
    &__email {
      margin: 20px 0px;
      min-width: 500px;
      background-color: ${(props) => props.theme.colors.text};
      height: 80px;
      border-radius: 15px;
    }
  }

  .button__login {
    border-radius: 15px;
    border: none;
    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.button.loginForm};
    }
  }
`;
