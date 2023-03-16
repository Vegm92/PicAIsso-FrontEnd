import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 20px;
  color: ${(props) => props.theme.colors.text};
`;

export default HomePageStyled;
