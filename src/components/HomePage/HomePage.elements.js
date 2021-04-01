import styled from "styled-components";
import phone from "../../assets/home/desktop/image-hero-phone.png";

export const Hero = styled.div`
  background-color: ${props => props.theme.colors.orange};
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
    right: 0;
  }
  div:nth-child(1) {
    padding-top: ${props => props.theme.spacingUtils.extraLarge};
    & > *:not(:last-child) {
      margin-bottom: ${props => props.theme.spacingUtils.verySmall};
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
`;
