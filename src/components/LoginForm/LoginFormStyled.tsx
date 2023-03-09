import styled from "styled-components";
export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 800px;
  background-color: #2a282f;
  color: #ffffff;
  text-align: center;
  border-radius: 35px;
  box-shadow: 0px 0px 45px #541496;
  justify-content: center;
  gap: 80px;

  .form__tittle {
    font-size: 40px;
  }

  .input {
    &__password,
    &__email {
      min-width: 500px;
      background-color: white;
      height: 80px;
      border-radius: 15px;
    }
  }

  .button__login {
    border-radius: 15px;
    background-color: #541496;
    border: none;
    :hover {
      box-shadow: 0px 0px 30px #541496;
      background-color: #3c0e6b;
    }
  }
`;
