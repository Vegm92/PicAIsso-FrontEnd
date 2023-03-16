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
    padding: 5px;
    display: flex;
    width: 320px;
    justify-content: space-around;
    &-tag {
      border: 2px solid purple;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.shadow};
    }
  }

  .card__image {
    width: 320px;
    box-shadow: ${(props) => props.theme.colors.imgShadow};
  }

  .button__add {
    border: none;

    :hover {
      box-shadow: ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.button.login};
    }
  }

  .fav__icon {
    color: white;
  }

  .info__description {
    padding: 0 25px;
  }
`;

export default CardStyled;
