import styled from "styled-components";

const LoadingStyled = styled.div`
  min-width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.cardBackground};

  .pulsar {
    --uib-size: 40px;
    --uib-speed: 1.5s;
    --uib-color: ${(props) => props.theme.colors.textLink2};

    position: relative;
    height: var(--uib-size);
    width: var(--uib-size);
  }

  .pulsar::before,
  .pulsar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: var(--uib-color);
    animation: pulse var(--uib-speed) ease-in-out infinite;
    transform: scale(0);
  }

  .pulsar::after {
    animation-delay: calc(var(--uib-speed) / -2);
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0.25;
    }
  }
`;

export default LoadingStyled;
