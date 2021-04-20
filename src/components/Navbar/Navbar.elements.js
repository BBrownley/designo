import styled, { keyframes } from "styled-components";
import brandingImg from "../../assets/shared/desktop/logo-dark.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacingUtils.normal};
  z-index: 100;
  padding-top: 4rem;
  padding-left: 2.625rem;
  padding-right: 2.625rem;
  max-width: 1195px;
  margin: 0 auto;

  .fa-bars:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.size.tablet}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: ${props => props.theme.size.mobileXL}) {
    height: 85px;
    padding: 0 1.5rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
    /* border-bottom: 1px solid gray; */
    -webkit-box-shadow: 0px 1px 0px 1px rgba(0,0,0,0.1); 
box-shadow: 0px 1px 0px 1px rgba(0,0,0,0.1);
  }
`;

export const Branding = styled.div`
  background-image: url(${brandingImg});
  background-size: cover;
  width: 202px;
  height: 27px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavLinks = styled.ul`
  display: flex;

  li {
    letter-spacing: 2px;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-right: 2.625rem;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.darkGrey};
      &:hover {
        border-bottom: 1px solid #cccbcc;
      }
    }
  }
  @media (max-width: ${props => props.theme.size.mobileXL}) {
    display: none;
  }
`;

export const FontAwesomeContainer = styled.div`
  font-size: 2rem;
  @media (min-width: 701px) {
    display: none;
  }
`;

export const openMenu = keyframes`
   0% { opacity: 0; left: -200px}
 100% { opacity: 1; left: 0px}
`;

export const HamburgerMenu = styled.ul`
  background-color: black;
  color: white;
  position: absolute;
  height: 235px;
  ${props => `bottom: calc(-235px - 2 * ${props.theme.spacingUtils.small});`}
  left: 0;
  right: 0;
  bottom: -235px;
  z-index: 10000;
  padding-top: ${props => props.theme.spacingUtils.small};
  padding-bottom: ${props => props.theme.spacingUtils.small};
  padding-left: ${props => props.theme.spacingUtils.extraSmall};
  padding-right: ${props => props.theme.spacingUtils.extraSmall};
  font-size: 1.5625rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: 0.25s ${openMenu};
  user-select: none;

  a {
    color: white;
    text-decoration: none;
  }

  @media (min-width: 701px) {
    display: none;
  }
`;

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

export const Toggle = styled.div`
  height: 200vh;
  position: absolute;
  bottom: -200vh;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  content: "";
  animation: 0.25s ${fadeIn};
  transition: 2s;
`;
