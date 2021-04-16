import styled, { css } from "styled-components";

import { Container } from "../shared/Container.elements";

export const StyledContainer = styled(Container)`
  .talent,
  .real-deal {
    padding-bottom: 58%;
  }
  @media (max-width: 1030px) {
    .talent,
    .real-deal {
      padding-bottom: 0;
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  padding-bottom: 43.5%;
  position: relative;
  border-radius: 0.9375rem;
  @media (max-width: 1030px) {
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 0;
  }
  margin-bottom: 7.5rem;
  &[class*="talent"] {
    padding-bottom: 60%;
    .image-container div {
      left: 0;
      border-radius: 0;
      border-bottom-left-radius: 0.9375rem;
      border-top-left-radius: 0.9375rem;
    }
    .caption {
      right: 0;
      left: auto;
      border-radius: 0;
      border-bottom-right-radius: 0.9375rem;
      border-top-right-radius: 0.9375rem;
    }
    @media (max-width: 1030px) {
      flex-direction: column;
      .image-container div,
      .caption {
        border-radius: 0;
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

export const Caption = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 57%;
  background-color: ${props => props.theme.colors.peach};
  color: white;
  border-top-left-radius: 0.9375rem;
  border-bottom-left-radius: 0.9375rem;
  line-height: 26px;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 1.875rem;
  }
  @media (max-width: 1030px) {
    position: relative;
    width: 100%;
    border-radius: 0;
    padding: 2.25rem 4.25rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    padding: 2.25rem;
  }

  ${props => {
    switch (props.color) {
      case "light":
        return css`
          background-color: ${props => props.theme.colors.veryLightPeach};
          color: black;
          h2 {
            color: ${props => props.theme.colors.peach};
          }
        `;
    }
  }}
`;

export const Image = styled.div`
  flex-basis: 475px;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 43%;
  background: url(${props => props.imageLg});
  background-size: cover;
  border-top-right-radius: 0.9375rem;
  border-bottom-right-radius: 0.9375rem;
  @media (max-width: 1030px) {
    background: url(${props => props.imageMd});
    position: relative;
    width: 100%;
    border-radius: 0;
    background-size: cover;
    padding-bottom: 45%;
  }
  @media (max-width: 600px) {
    background: url(${props => props.imageSm});
    background-size: cover;
    padding-bottom: 86.8%;
  }
`;
