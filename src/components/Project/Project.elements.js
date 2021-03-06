import styled from "styled-components";

export const Container = styled.div`
  &:hover {
    cursor: pointer;
    .project-desc {
      transition: 0.25s all ease;
      color: white;
      background-color: ${props => props.theme.colors.peach};
      p {
        color: white;
        transition: 0.25s all ease;
      }
      h4 {
        color: white;
        transition: 0.25s all ease;
      }
    }
  }
  @media (max-width: ${props => props.theme.size.tabletL}) {
    display: flex;
    > * {
      flex: 1;
    }
  }
  @media (max-width: 600px) {
    display: inline-block;
  }
`;

export const ImageContainer = styled.div`
  background: white;
  box-sizing: border-box;
  overflow: auto;
  max-width: 100%;
`;

export const ProjectImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  padding-bottom: 90%;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  @media (max-width: ${props => props.theme.size.tabletL}) {
    border-radius: 0;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  @media (max-width: 600px) {
    border-radius: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

export const ProjectDesc = styled.div`
  height: 160px;
  background-color: #fdf3f0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transition: 0.25s all ease;
  padding: 0.5rem;
  h4 {
    color: ${props => props.theme.colors.peach};
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 1rem;
  }
  p {
    color: black;
    line-height: 26px;
  }
  @media (max-width: ${props => props.theme.size.tabletL}) {
    height: auto;
    border-radius: 0;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  @media (max-width: 600px) {
    height: 160px;
    border-radius: 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
