import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Branding,
  NavLinks,
  Bars,
  HamburgerMenu,
  FontAwesomeContainer,
  Toggle
} from "./Navbar.elements";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const history = useHistory();

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(prevState => !prevState);
  };

  const setLink = url => {
    history.push(url);
  };

  return (
    <Container>
      <Branding onClick={() => setLink("/")}></Branding>
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
          <Toggle onClick={() => toggleHamburgerMenu()} />
        </HamburgerMenu>
      )}
    </Container>
  );
}
