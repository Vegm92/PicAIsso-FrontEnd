import styled from "styled-components";

const DeleteButtonStyled = styled.button`
  border: none;
  color: black;
  font-size: medium;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  align-content: center;
  background-color: ${(props) => props.theme.colors.button.delete.background};

  :hover {
    box-shadow: ${(props) => props.theme.colors.shadow};
    background-color: ${(props) =>
      props.theme.colors.button.delete.deleteHover};
  }
`;

export default DeleteButtonStyled;
