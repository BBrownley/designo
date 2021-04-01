import React from "react";

import { Container, Branding, NavLinks } from "./Navbar.elements";

export default function Navbar() {
  return (
    <Container>
      <Branding></Branding>
      <NavLinks>
        <li>
          <a href="#">Our Company</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </NavLinks>
    </Container>
  );
}
