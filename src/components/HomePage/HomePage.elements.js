import styled  from "styled-components";
import { Container } from "../shared/Container.elements";
import phone from "../../assets/home/desktop/image-hero-phone.png";

export const HomePageContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const HeroContainer = styled(Container)`
  @media (max-width: ${props => props.theme.size.tablet}) {
    padding: 0;
  }
`;

export const Hero = styled.div`
  background-color: ${props => props.theme.colors.peach};
  color: white;
  height: 640px;
  border-radius: 0.5rem;
  position: relative;
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
  height: 670px;
  margin-top: -30px;
  margin-right: -100px;
  background-image: url(${phone});
  background-position: center top;
  position: relative;
  @media (max-width: ${props => props.theme.size.laptopM}) {
    height: 550px;
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

  position: relative;

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
    padding: 1rem;
    > div:nth-child(1) {
      margin-right: 0;

      flex: 0;
      margin-bottom: 1rem;
      div {
        height: 200px;
        div {
          height: auto;
        }
      }
    }
    > div:nth-child(2) {
      margin-left: 0;
      div:nth-child(1) {
        margin-bottom: 0;
      }
    }
  }
`;

export const Attributes = styled.div`
  margin-top: ${props => props.theme.spacingUtils.extraLarge};
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  .bg-leaf {
    position: absolute;
    left: 250px;
    bottom: -300px;
    z-index: -100;
    transform: rotate(180deg);
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    flex-direction: column;
    padding: 0 2.25rem;
    .bg-leaf {
      display: none;
    }
  }
`;

export const Attribute = styled.div`
  text-align: center;
  line-height: 26px;
  width: 30%;
  @media (max-width: ${props => props.theme.size.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
  }
  @media (max-width: 675px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AttributeImage = styled.div`
  background-image: url(${props => props.image});
  height: 200px;
  width: 200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 4rem;
  img {
    position: absolute;
    left: 0;
    top: 0;
  }
  #bg-circle-2 {
    transform: rotate(-90deg);
  }
  #bg-circle-3 {
    transform: rotate(90deg);
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    margin: 0;
  }
`;

export const AttributeDesc = styled.div`
  h3 {
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${props => props.theme.size.tablet}) {
    flex: 1;
    margin-left: 4rem;
  }
  @media (max-width: 675px) {
    margin-left: 0;
    margin-top: 4rem;
  }
`;
