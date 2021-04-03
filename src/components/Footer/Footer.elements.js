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
  max-width: 1111px;
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
    width: 70%;
    max-width: 1100px;
  }
`;

export const FooterBottom = styled.div`
  background-color: ${props => props.theme.colors.black};
  text-align: center;
  padding-top: 250px;
`;

export const Logo = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 25px;
  width: 200px;
  margin: 2.5rem auto;
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
`;

export const LocationContact = styled.div`
  color: ${props => props.theme.colors.grey};
  line-height: 26px;
  text-align: center;
  margin: 2.5rem 0;
  strong {
    font-weight: 600;
  }
`;

export const Socials = styled.div`
  text-align: center;
  padding-bottom: ${props => props.theme.spacingUtils.normal};
`;

export const SocialIcon = styled.img`
  background-image: url(${props => props.image});
  margin: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
