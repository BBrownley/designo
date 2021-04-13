import styled, { css } from "styled-components";

const handleColorType = color => {
  switch (color) {
    case "white":
      return css`
        background-color: white;
        color: ${props => props.theme.colors.black};
        a:visited {
          color: ${props => props.theme.colors.black};
        }
        &:hover {
          color: white;
          background-color: ${props => props.theme.colors.lightPeach};
          a {
            color: white;
          }
        }
      `;
    default:
      return css`
        background-color: ${props => props.theme.colors.peach};
        color: white;
        a:visited {
          color: white;
        }
        &:hover {
          background-color: ${props => props.theme.colors.lightPeach};
        }
      `;
  }
};

export const Button = styled.button`
  border-radius: 0.5rem;
  padding: 1.25rem;
  border: none;
  outline: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: "Jost", sans-serif;
  position: relative;
  z-index: 10;
  transition: 0.25s;

  a {
    text-decoration: none;
  }
  &:hover {
    background-color: ${props => props.theme.colors.peachLight};
    cursor: pointer;
  }
  ${({ color }) => handleColorType(color)};
`;
