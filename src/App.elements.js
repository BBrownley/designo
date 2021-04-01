import styled from "styled-components";

export const App = styled.div`
  min-height: 100vh;
  font-size: 0.875rem;
  .wrapper {
    min-height: 100vh;
    max-width: 1111px;
    margin: 0 auto;
    padding: 4rem 2.625rem 0 2.625rem;
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    .wrapper {
      padding: 0;
    }
  }
`;
