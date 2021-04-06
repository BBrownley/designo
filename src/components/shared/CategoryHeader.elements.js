import styled from "styled-components";

export const CategoryHeader = styled.div`
  background-color: ${props => props.theme.colors.peach};
  height: 252px;
  border-radius: 15px;
  color: white;
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 2.625rem;
  }

  > div {
    text-align: center;
    margin: 0 auto;
    max-width: 40ch;
    line-height: 26px;
  }
`;
