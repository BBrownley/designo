import React, { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSetName = e => {
    setName(e.target.value);
  };

  const handleSetEmail = e => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  const handleSetMessage = e => {
    setMessage(e.target.value);
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
          <MainForm id="contactform">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleSetName}
            ></input>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleSetEmail}
            ></input>
            <input
              type="phoneNumber"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone"
              value={phoneNumber}
              onChange={handlePhoneNumber}
            ></input>
          </MainForm>
          <textarea
            name="comment"
            form="contactform"
            placeholder="Your Message"
            value={message}
            onChange={handleSetMessage}
          ></textarea>
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
