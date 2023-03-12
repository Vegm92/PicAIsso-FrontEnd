import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: auto;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  justify-content: center;
  min-width: 320px;
  padding: 1rem 0;
  margin-top: 30px;

  .card__category {
    border: 2px solid ${(props) => props.theme.colors.button.loginForm};
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
  }

  .card__image {
    width: 320px;
    box-shadow: ${(props) => props.theme.colors.imgShadow};
  }

  .button__add {
    border: none;

    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.button.loginForm};
    }
  }

  .fav__icon {
    color: white;
  }
`;

export default CardStyled;
