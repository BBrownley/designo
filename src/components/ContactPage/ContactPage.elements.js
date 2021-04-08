import styled from "styled-components";
import { Container } from "../shared/Container.elements";

export const StyledContainer = styled(Container)`
  position: relative;

  overflow: hidden;
  .bg-pattern {
    position: absolute;
    z-index: 10;
    left: 43px;
    bottom: 0;
  }
`;

export const ContactWrapper = styled.div`
  height: 480px;
  background-color: ${props => props.theme.colors.peach};
  color: white;
  display: flex;
  padding: 3.5rem 6rem;
  z-index: 100;
  border-radius: .5rem;

  .contact-message {
    align-self: center;
    z-index: 10;
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
    height: 125px;
  }

  position: relative;

  /* border: 3px dashed; */
  #submit-button {
    float: right;
    width: 150px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
`;
