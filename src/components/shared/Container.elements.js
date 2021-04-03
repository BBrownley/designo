import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2.625rem;
  @media (max-width: ${props => props.theme.size.tablet}) {
    padding: 0;
  }
`;
