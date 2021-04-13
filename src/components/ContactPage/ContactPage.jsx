import React from "react";

import ContactForm from "../ContactForm/ContactForm";
import LocationsRow from "../LocationsRow/LocationsRow";
import { Container } from "../shared/Container.elements";

export default function ContactPage() {
  return (
    <Container>
      <ContactForm />
      <LocationsRow />
    </Container>
  );
}
