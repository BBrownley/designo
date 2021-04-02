import styled from "styled-components";
import phone from "../../assets/home/desktop/image-hero-phone.png";

import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesign from "../../assets/home/desktop/image-app-design.jpg";
import graphicDesign from "../../assets/home/desktop/image-graphic-design.jpg";

export const Hero = styled.div`
  background-color: ${props => props.theme.colors.orange};
  color: white;
  height: 640px;
  border-radius: 0.5rem;
  position: relative;
  /* z-index: -100; */
  padding: 0 ${props => props.theme.spacingUtils.large};
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 26px;
  .hero-bg {
    position: absolute;
    z-index: -1;
    right: 0;
  }
  div:nth-child(1) {
    padding-top: ${props => props.theme.spacingUtils.extraLarge};

    & > *:not(:last-child) {
      margin-bottom: ${props => props.theme.spacingUtils.verySmall};
    }
    p {
      font-weight: 300;
    }
  }
  @media (max-width: ${props => props.theme.size.laptopM}) {
    flex-direction: column;
    text-align: center;
    height: 843px;
    overflow: hidden;
    div:nth-child(1) {
      padding-top: ${props => props.theme.spacingUtils.normal};
      & > *:not(:last-child) {
        margin-bottom: ${props => props.theme.spacingUtils.extraSmall};
      }
    }
    .hero-bg {
      top: 50%;
      transform: translateY(-50%);
      right: -100px;
    }
  }
  @media (max-width: 770px) {
    h1,
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 700px) {
    border-radius: 0;
  }
  @media (max-width: 620px) {
    padding: 0 ${props => props.theme.spacingUtils.extraSmall};
    div:nth-child(1) {
      padding-top: 3rem;
    }
  }
  @media (max-width: 375px) {
    height: auto;
    padding-bottom: ${props => props.theme.spacingUtils.normal};
    div:nth-child(2) {
      display: none;
    }
  }
`;

export const HeroPhone = styled.div`
  width: 500px;
  height: 550px;
  margin-top: -30px;
  margin-right: -100px;
  background-image: url(${phone});
  background-position: center top;
  position: relative;
  @media (max-width: ${props => props.theme.size.laptopM}) {
    height: 500px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ProjectCategories = styled.div`
  margin-top: ${props => props.theme.spacingUtils.extraLarge};
  display: flex;

  height: 640px;
  text-align: center;

  > div {
    flex: 1;
  }

  > div:nth-child(1) {
    margin-right: 1rem;
  }
  > div:nth-child(2) {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;

    > div {
      flex: 1;
    }

    div:nth-child(1) {
      margin-bottom: 1rem;
    }
    div:nth-child(2) {
      margin-top: 1rem;
    }
  }

  @media (max-width: ${props => props.theme.size.tablet}) {
    flex-direction: column;
  }
`;

export const CategoryImage = styled.div`
  height: 100%;
  position: relative;
  border-radius: 0.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image});
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
`;

export const ProjectDescription = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -35%);
  line-height: 4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  h2 {
    font-weight: 400;
  }
  a {
    letter-spacing: 4px;
  }
  .chevron-right {
    color: ${props => props.theme.colors.orange};
    margin-left: 0.25rem;
  }
`;