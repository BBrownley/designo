import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Branding,
  NavLinks,
  Bars,
  HamburgerMenu,
  FontAwesomeContainer
} from "./Navbar.elements";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(prevState => !prevState);
  };

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
      {!hamburgerOpen && (
        <FontAwesomeContainer>
          <FontAwesomeIcon icon={faBars} onClick={toggleHamburgerMenu} />
        </FontAwesomeContainer>
      )}
      {hamburgerOpen && (
        <FontAwesomeContainer>
          <FontAwesomeIcon icon={faTimes} onClick={toggleHamburgerMenu} />
        </FontAwesomeContainer>
      )}
      {hamburgerOpen && (
        <HamburgerMenu>
          <li>
            <a>Our Company</a>
          </li>
          <li>
            <a>Locations</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </HamburgerMenu>
      )}
    </Container>
  );
}
