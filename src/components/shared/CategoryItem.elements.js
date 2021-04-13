import styled, { css } from "styled-components";

export const CategoryImage = styled.div`
  height: 100%;
  position: relative;
  border-radius: 0.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.imageLg});
  &:hover {
    cursor: pointer;
    .chevron-right {
      margin-left: 0.75rem;
      transition: 0.25s;
    }
    &:after {
      opacity: 1;
      transition: 0.25s opacity ease;
    }
  }
  &:after {
    border-radius: 0.5rem;
    background-color: rgba(231, 129, 107, 0.5);
    opacity: 0;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.25s opacity ease;
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    background-position: center;
    background-size: cover;
    ${props =>
      props.imageSm &&
      css`
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${props => props.imageSm});
        background-position: bottom;
        background-size: 100%;
      `}
  }
`;

export const CategoryDescription = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  display: inline-block;
  h2 {
    font-weight: 400;
    padding: 0 1rem;
    margin-bottom: 2.25rem;
  }
  a {
    letter-spacing: 5px;
  }
  .chevron-right {
    color: ${props => props.theme.colors.peach};
    margin-left: 0.25rem;
  }
`;
