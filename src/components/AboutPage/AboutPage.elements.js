import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  padding-bottom: 43.5%;
  /* border: 2px dashed; */
  position: relative;
  border-radius: 0.9375rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Caption = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 57%;
  background-color: ${props => props.theme.colors.peach};
  color: white;
  border-top-left-radius: 0.9375rem;
  border-bottom-left-radius: 0.9375rem;
  line-height: 26px;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 1.875rem;
  }
  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    border-radius: 0;
    padding: 4.25rem;
    text-align: center;
  }
`;

export const Image = styled.div`
  border: 2px dashed red;
  flex-basis: 475px;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 43%;
  background: url(${props => props.imageLg});
  background-size: cover;
  border-top-right-radius: 0.9375rem;
  border-bottom-right-radius: 0.9375rem;
  @media (max-width: 900px) {
    background: url(${props => props.imageMd});
    position: relative;
    width: 100%;
    border-radius: 0;
    background-size: cover;
    padding-bottom: 45%;
  }
  @media (max-width: 600px) {
    background: url(${props => props.imageSm});
    background-size: cover;
    padding-bottom: 86.8%;
  }
`;

/*
  557
  241
*/
