import styled from "styled-components";
import { Container } from "../shared/Container.elements";

export const StyledContainer = styled(Container)`
  @keyframes example {
    0% {
      margin-right: 0;
    }
    25% {
      margin-right: 10px;
    }
    25% {
      margin-right: 2px;
    }
    25% {
      margin-right: 8px;
    }
    100% {
      margin-right: 0px;
    }
  }

  position: relative;
  padding: 0;
  margin-bottom: 10rem;

  overflow: hidden;
  .bg-pattern {
    position: absolute;
    z-index: 10;
    left: 43px;
    bottom: 0;
  }

  .input-container {
    margin-top: 1rem;
    position: relative;
    input {
      width: 100%;
    }
    .form-error {
      position: absolute;
      display: flex;
      align-items: center;
      right: 0;
      top: 0;
      font-style: italic;
      animation-name: example;
      animation-duration: 0.25s;
      img {
        margin-right: 0.5rem;
      }
    }

    textarea {
      margin-top: 0;
    }
  }

  @media (max-width: 980px) {
    .bg-pattern {
      top: 0;
      bottom: auto;
    }
  }
`;

export const ContactWrapper = styled.div`
  height: 480px;
  background-color: ${props => props.theme.colors.peach};
  color: white;
  display: flex;
  padding: 3.5rem 6rem;
  z-index: 100;
  border-radius: 0.5rem;

  .contact-message {
    align-self: center;
    z-index: 10;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    height: auto;
    padding: 3.5rem;
    .contact-message {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: ${props => props.theme.size.tablet}) {
    border-radius: 0;
  }

  @media (max-width: 620px) {
    text-align: center;
  }
`;

export const ContactMessage = styled.div`
  flex: 1;
  padding-right: 5.5rem;
  h3 {
    font-size: 3rem;
  }
  p {
    line-height: 26px;
    margin-top: 2.375rem;
  }
  @media (max-width: 980px) {
    padding-right: 0;
  }
`;

export const ContactForm = styled.form`
  width: 380px;
  z-index: 10;

  input,
  textarea {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    resize: none;
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    font-family: "Jost", sans-serif;
    font-size: 0.9375rem;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #f1b8ac;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #f1b8ac;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #f1b8ac;
    }

    &:active,
    :focus {
      outline: none;
      border: none;
      box-shadow: 0 4px 1px -1px white;
    }
  }

  input:first-of-type {
    padding-top: 0;
  }

  textarea {
    width: 100%;
    height: 100px;
    margin-top: 0;
    padding-top: 0;
  }

  position: relative;

  /* border: 3px dashed; */
  #submit-button {
    float: right;
    width: 150px;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 980px) {
    width: 100%;
    textarea {
      margin-bottom: 5rem;
    }
  }

  /* @media (max-width: 620px) {
    #submit-button {
      right: 50%;
      transform: translateX(50%);
    }
  } */
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  .form-message {
    font-weight: bold;
    font-size: 1.25rem;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    .form-message {
      margin-bottom: .5rem;
    }
  }
`;
