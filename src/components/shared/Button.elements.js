import styled from "styled-components";

const handleColorType = color => {
  switch (color) {
    case "white":
      return `
        background-color: white;
        color: ${props => props.theme.colors.orange};
        &:hover {
          color: white;
        }
      `;
    default:
      return `
        background-color: ${props => props.theme.colors.orange};
        color: white;
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
  transition: 0.25s;
  font-family: "Jost", sans-serif;
  &:hover {
    background-color: ${props => props.theme.colors.orangeLight};
    cursor: pointer;
  }
  ${({ color }) => handleColorType(color)};
`;
