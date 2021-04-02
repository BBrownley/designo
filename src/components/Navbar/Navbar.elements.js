import styled from "styled-components";
import brandingImg from "../../assets/shared/desktop/logo-dark.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => props.theme.spacingUtils.normal};
  z-index: 100;
  @media (max-width: ${props => props.theme.size.mobileXL}) {
    height: 85px;
    padding: 0 1.5rem;
  }
`;

export const Branding = styled.div`
  background-image: url(${brandingImg});
  background-size: cover;
  width: 202px;
  height: 27px;
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
      color: ${props => props.theme.colors.black};
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

export const HamburgerMenu = styled.ul`
  background-color: black;
  color: white;
  position: absolute;
  height: 235px;
  ${props => `bottom: calc(-235px - 2 * ${props.theme.spacingUtils.small});`}
  left: 0;
  right: 0;
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

  @media (min-width: 701px) {
    display: none;
  }

  &::after {
    height: 5000px;
    position: absolute;
    bottom: -5000px;
    background-color: rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    content: "";
  }
`;
