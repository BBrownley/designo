import React, { useState, useRef, useLayoutEffect } from "react";
import usePrevious from "./usePrevious";

import bgPattern from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import errorIcon from "../../assets/contact/desktop/icon-error.svg";

import { Button } from "../shared/Button.elements";
import {
  StyledContainer as Container,
  ContactWrapper,
  ContactMessage,
  MainForm,
  ContactForm as FormContainer
} from "./ContactForm.elements";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: null,
      fieldName: "name"
    },
    email: {
      value: "",
      error: null,
      fieldName: "email"
    },
    phoneNumber: {
      value: "",
      error: null,
      fieldName: "phoneNumber"
    },
    message: {
      value: "",
      error: null,
      fieldName: "message"
    }
  });

  const firstUpdate = useRef(true);
  const prevFormData = usePrevious(formData);

  const validateForm = () => {
    // Determine the field that changed

    let changedField;

    Object.keys(formData).forEach(field => {
      if (formData[field].value !== prevFormData[field].value) {
        changedField = field;
      }
    });

    if (changedField === undefined) return;

    const inputLength = formData[changedField].value.trim().length;

    setFormData(prevState => {
      return {
        ...prevState,
        [changedField]: {
          ...prevState[changedField],
          error: inputLength === 0 ? "Cannot be empty" : null
        }
      };
    });

    if (changedField === "email") {
      // Validate email
      const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailValid = formData["email"].value.match(mailformat);

      setFormData(prevState => {
        return {
          ...prevState,
          email: {
            ...prevState.email,
            error: !emailValid ? "Invalid email address" : null
          }
        };
      });

      return;
    }

    if (changedField === "phoneNumber") {
      // Validate phone number

      const phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      const phoneValid = formData["phoneNumber"].value.match(phoneFormat);

      setFormData(prevState => {
        return {
          ...prevState,
          phoneNumber: {
            ...prevState.phoneNumber,
            error: !phoneValid ? "Invalid phone number" : null
          }
        };
      });

      return;
    }
  };

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    validateForm();
  });

  const handleSetValue = e => {
    const { name, value } = e.target;
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: {
          value,
          error: prevState[name].error,
          fieldName: prevState[name].fieldName
        }
      };
    });
  };

  return (
    <Container>
      <img src={bgPattern} className="bg-pattern" />
      <ContactWrapper>
        <ContactMessage className="contact-message">
          <h3>Contact Us</h3>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </ContactMessage>
        <FormContainer>
          <MainForm>
            <div className="input-container">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name.value}
                onChange={handleSetValue}
              ></input>
              {formData.name.error && (
                <span className="form-error">
                  <img src={errorIcon} draggable={false} />
                  {formData.name.error}
                </span>
              )}
            </div>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email.value}
                onChange={handleSetValue}
              ></input>
              {formData.email.error && (
                <span className="form-error">
                  <img src={errorIcon} draggable={false} />
                  {formData.email.error}
                </span>
              )}
            </div>
            <div className="input-container">
              <input
                type="phoneNumber"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone"
                value={formData.phoneNumber.value}
                onChange={handleSetValue}
              ></input>
              {formData.phoneNumber.error && (
                <span className="form-error">
                  <img src={errorIcon} draggable={false} />
                  {formData.phoneNumber.error}
                </span>
              )}
            </div>
          </MainForm>
          <div className="input-container">
            <textarea
              name="message"
              form="contactform"
              placeholder="Your Message"
              value={formData.message.value}
              onChange={handleSetValue}
            ></textarea>
            {formData.message.error && (
              <span className="form-error">
                <img src={errorIcon} draggable={false} />
                {formData.message.error}
              </span>
            )}
          </div>
          <Button
            type="submit"
            form="contactform"
            value="Submit"
            color="white"
            id="submit-button"
          >
            Submit
          </Button>
        </FormContainer>
      </ContactWrapper>
    </Container>
  );
}
