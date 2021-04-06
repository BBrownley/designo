import styled from "styled-components";

export const App = styled.div`
  min-height: 100vh;
  font-size: 1rem;
  overflow: hidden;
  box-sizing: border-box;
  .wrapper {
    max-width: 1111px;
    margin: 0 auto;
    /* padding-top: 4rem; */
    /* padding: 4rem 2.625rem 0 2.625rem; */
  }
  @media (max-width: ${props => props.theme.size.mobileXL}) {
    h1,
    h2 {
      font-size: 2rem;
    }
    /* .wrapper {
      padding: 0;
    } */
  }
`;
