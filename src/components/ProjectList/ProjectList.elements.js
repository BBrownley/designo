import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-top: 7.5rem;
  @media (max-width: ${props => props.theme.size.tabletL}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    padding: 0 ${props => props.theme.spacingUtils.verySmall};
  }
`;
