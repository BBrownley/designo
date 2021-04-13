import styled, { css } from "styled-components";

import { MapContainer } from "react-leaflet";

export const LocationContainer = styled.div`
  height: 326px;
  display: flex;
  margin-bottom: 2rem;
  /* border: 3px dashed; */
  > * {
    /* border: 3px dashed; */
    border-radius: 0.9375rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: auto;
    margin-bottom: ${props => props.theme.spacingUtils.extraLarge};
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    * {
      border-radius: 0;
    }
  }
  @media (max-width: 580px) {
    margin-bottom: 2rem;
  }
  ${props => {
    if (props.index % 2 === 1) {
      return css`
        flex-direction: row-reverse;
        .map-container {
          margin: 0;
          margin-right: 2rem;
          @media (max-width: 1000px) {
            margin-right: 0;
          }
        }
      `;
    }
  }}
`;

export const Info = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.veryLightPeach};
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px dashed blue; */
  padding: 6.25rem;
  width: 80%;
  h3 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.peach};
    width: 100%;
    margin-bottom: 1.875rem;
  }
  p {
    line-height: 26px;
  }
  .wrapper {
    flex: 1;
    > div {
      &:first-of-type {
        margin-right: 5rem;
      }
      display: inline-block;
    }
  }
  @media (max-width: 1090px) {
    padding: 3rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 1.5rem;
    padding: 4.5rem;
  }
  @media (max-width: 580px) {
    margin-top: 0;

    .wrapper {
      display: flex;
      flex-direction: column;
      text-align: center;
      > div {
        &:first-of-type {
          margin-right: 0;
          margin-bottom: 2.625rem;
        }
      }
    }
  }
`;

export const StyledMapContainer = styled(MapContainer)`
  flex-basis: 326px;
  margin-left: 2rem;
  height: 100%;
  position: relative;
  z-index: 10;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;
