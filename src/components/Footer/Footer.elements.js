import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 17rem;
  position: relative;
  z-index: 100;
  color: white;

  .circles {
    position: absolute;
    top: -100px;
    z-index: 9;
  }
  .two-circles {
    right: -145px;
    top: 45px;
    transform: rotate(90deg);
  }
  .three-circles {
    right: 294px;
    transform: rotate(270deg);
  }
`;

export const FooterTop = styled.div`
  background-color: ${props => props.theme.colors.peach};
  height: 292px;
  max-width: 1025px;
  border-radius: 15px;
  padding: 0 6.125rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -190px;
  z-index: 10;
  /* left: 2rem;
  right: 2rem; */

  overflow: hidden;
  > div {
    display: flex;
    align-items: center;
  }
  > div:nth-child(1) {
    width: 430px;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  p {
    line-height: 26px;
    margin-top: 2rem;
  }
  @media (max-width: 900px) {
    height: 380px;
    left: 2rem;
    right: 2rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      margin-top: 2rem;
    }
    p {
      padding: 0 1.25rem;
    }
  }
  @media (min-width: 901px) {
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
  }
`;

export const FooterBottom = styled.div`
  background-color: ${props => props.theme.colors.black};
  text-align: center;
  padding-top: 250px;
  > div {
    max-width: 1070px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    .navigation {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${props => props.theme.colors.darkGrey};
      padding-bottom: ${props => props.theme.spacingUtils.extraSmall};
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: bottom;
      > div:nth-of-type(1) {
        display: flex;
        > div {
          margin-right: 75px;
        }
      }
      > div:nth-of-type(2) > div {
        display: flex;
        align-items: bottom;
      }
    }
  }
`;

export const Logo = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 25px;
  width: 200px;
  margin: 2.5rem auto;
  @media (min-width: ${props => props.theme.size.tablet}) {
    margin: 0;
  }
`;

export const FooterLinks = styled.ul`
  border-top: 1px solid ${props => props.theme.colors.darkGrey};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.lightGrey};
  margin: 0 1.5rem;
  li {
    margin: 2.5rem 0;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    border: none;
    display: flex;
    margin: 0;
    li {
      margin: 0 0 0 2.5rem;
    }
  }
`;

export const LocationContact = styled.div`
  color: ${props => props.theme.colors.grey};
  line-height: 26px;
  text-align: center;
  margin: 2.5rem 0;
  strong {
    font-weight: 600;
  }
  @media (min-width: ${props => props.theme.size.tablet}) {
    text-align: left;
  }
`;

export const Socials = styled.div`
  text-align: center;
  padding-bottom: ${props => props.theme.spacingUtils.normal};
  @media (min-width: ${props => props.theme.size.tablet}) {
    padding-bottom: 0;
    margin-top: 86px;
  }
`;

export const SocialIcon = styled.img`
  background-image: url(${props => props.image});
  margin: 0 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
