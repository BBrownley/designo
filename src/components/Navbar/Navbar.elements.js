import styled from "styled-components";
import brandingImg from "../../assets/shared/desktop/logo-dark.png";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${props => props.theme.spacingUtils.paddingNormal};
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
        border-bottom: 1px solid #CCCBCC;
      }
    }
`;
