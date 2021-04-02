import styled from "styled-components";
import phone from "../../assets/home/desktop/image-hero-phone.png";

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
    z-index:-1;
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
