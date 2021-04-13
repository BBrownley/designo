import styled from "styled-components";

export const CategoryRow = styled.div`
  height: 300px;
  display: flex;
  margin: 7.5rem 0;
  > * {
    flex: 1;
    text-align: center;
  }
  > :nth-child(1) {
    margin-right: 1rem;
  }
  > :nth-child(2) {
    margin-left: 1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    height: 450px;

    > * {
      background-size: cover;
    }
    > :nth-child(1) {
      margin: 0;
      margin-bottom: 1rem;
    }
    > :nth-child(2) {
      margin: 0;
      margin-top: 1rem;
    }
  }
`;
