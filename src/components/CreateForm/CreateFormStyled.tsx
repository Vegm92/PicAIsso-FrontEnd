import styled from "styled-components";

const CreateFormStyled = styled.form`
  color: ${(props) => props.theme.colors.text};
  width: 315px;
  margin: 20px 0px;
  padding: 0 5px;

  .input__keywords {
    margin: 10px 0;
  }

  .input {
    color: ${(props) => props.theme.colors.text};
  }

  .submit {
    display: flex;
    margin: inherit;
    justify-content: center;
    color: red;
  }

  .category-container {
    margin: 20px auto;
  }

  .button-group {
    display: flex;
    justify-content: space-around;
  }

  .image-container {
    display: flex;
    justify-content: center;
    margin: 10px 0;

    .generated-image {
      border-radius: 20px;
    }
  }
`;

export default CreateFormStyled;
