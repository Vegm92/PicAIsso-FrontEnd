import styled from "styled-components";

const CreateFormStyled = styled.form`
  color: ${(props) => props.theme.colors.text};
  width: 315px;
  margin: 20px 0px;
  padding: 0 5px;

  .input {
    color: ${(props) => props.theme.colors.text};
  }

  .submit {
    display: flex;
    margin: inherit;
    justify-content: center;
    color: red;
  }
`;

export default CreateFormStyled;
