import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Branding,
  NavLinks,
  HamburgerMenu,
  FontAwesomeContainer,
  Toggle
} from "./Navbar.elements";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleRef = useRef(null);

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(prevState => !prevState);
  };

  return (
    <Container>
      <Link to="/">
        <Branding></Branding>
      </Link>
      <NavLinks>
        <li>
          <Link to="/about">Our Company</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavLinks>
      {!hamburgerOpen && (
        <FontAwesomeContainer className="fa-bars">
          <FontAwesomeIcon icon={faBars} onClick={toggleHamburgerMenu} />
        </FontAwesomeContainer>
      )}
      {hamburgerOpen && (
        <FontAwesomeContainer className="fa-bars">
          <FontAwesomeIcon icon={faTimes} onClick={toggleHamburgerMenu} />
        </FontAwesomeContainer>
      )}
      {hamburgerOpen && (
        <HamburgerMenu>
          <li>
            <Link to="/about" onClick={() => setHamburgerOpen(false)}>
              Our Company
            </Link>
          </li>
          <li>
            <Link to="/locations" onClick={() => setHamburgerOpen(false)}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setHamburgerOpen(false)}>
              Contact
            </Link>
          </li>
          <Toggle onClick={() => toggleHamburgerMenu()} ref={toggleRef} />
        </HamburgerMenu>
      )}
    </Container>
  );
}
