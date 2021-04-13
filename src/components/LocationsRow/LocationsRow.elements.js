import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  margin-bottom: 7.5rem;

  @media (max-width: 940px) {
    flex-direction: column;
    margin-bottom: 5rem;
    > div:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Location = styled.div`
  /* border: 2px dashed; */
  text-align: center;

  h4 {
    font-size: 1.25rem;
    margin: 2.5rem 0;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 5px;
  }

  .bg-circle {
    position: absolute;
  }

  @media (max-width: 940px) {
    margin-bottom: 5rem;
  }
`;
