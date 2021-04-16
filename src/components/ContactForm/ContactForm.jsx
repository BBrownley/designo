import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import usePrevious from "./usePrevious";

import bgPattern from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";

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

  const validateEmpty = () => {
    // Determine the field that changed

    let changedField;

    Object.keys(formData).forEach(field => {
      if (formData[field].value !== prevFormData[field].value) {
        changedField = field;
      }
    });

    console.log(changedField);

    if (changedField === "email") {
      // Validate email
      const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailValid = formData["email"].value.match(mailformat);

      if (!emailValid === true) {
        console.log("Invalid email!");
      } else {
        console.log("Valid email");
      }
    }

    return;

    const updatedStateAsArray = Object.keys(formData)
      .map(key => formData[key])
      .map(formField => {
        return formField;
        console.log(formField);

        if (formField.value.trim().length > 0) {
          return {
            value: formField.value,
            error: null,
            fieldName: formField.fieldName
          };
        } else {
          return {
            value: formField.value,
            error: "Cannot be empty",
            fieldName: formField.fieldName
          };
        }
      });

    console.log(updatedStateAsArray);
  };

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    validateEmpty();
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
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name.value}
              onChange={handleSetValue}
            ></input>
            {formData.name.error}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email.value}
              onChange={handleSetValue}
            ></input>
            {formData.email.error}
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone"
              value={formData.phoneNumber.value}
              onChange={handleSetValue}
            ></input>
            {formData.phoneNumber.error}
          </MainForm>
          <textarea
            name="message"
            form="contactform"
            placeholder="Your Message"
            value={formData.message.value}
            onChange={handleSetValue}
          ></textarea>
          {formData.message.error}
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
