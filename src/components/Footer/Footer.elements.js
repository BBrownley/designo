import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 7.5rem;
  position: relative;
  z-index: 100;
  color: white;
  overflow: hidden;
  .circles {
    position: absolute;
    top: -100px;
    z-index: 9;
  }
  .two-circles {
    right: -145px;
    top: 45px;
    transform: rotate(90deg);
  }
  .three-circles {
    right: 294px;
    transform: rotate(270deg);
  }
`;

export const FooterTop = styled.div`
  background-color: ${props => props.theme.colors.peach};
  height: 292px;
  border-radius: 15px;
  padding: 0 6.125rem;
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  > div:nth-child(1) {
    width: 430px;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  p {
    line-height: 26px;
    margin-top: 2rem;
  }
`;

export const FooterBottom = styled.div``;
