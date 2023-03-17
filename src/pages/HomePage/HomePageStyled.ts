import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.text};

  .hero-section {
    padding: 20px;
  }
`;

export default HomePageStyled;
