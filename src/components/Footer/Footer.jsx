import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import threeCircles from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import twoCircles from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

import logoLight from "../../assets/shared/desktop/logo-light.png";

import iconFb from "../../assets/shared/desktop/icon-facebook.svg";
import iconYoutube from "../../assets/shared/desktop/icon-youtube.svg";
import iconTwitter from "../../assets/shared/desktop/icon-twitter.svg";
import iconPinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import iconInstagram from "../../assets/shared/desktop/icon-instagram.svg";

import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  Logo,
  FooterLinks,
  LocationContact,
  Socials,
  SocialIcon
} from "./Footer.elements";
import { Button } from "../shared/Button.elements";

export default function Footer() {
  const match = useRouteMatch("/contact");

  return (
    <FooterContainer displayUpper={!match}>
      <FooterTop className="footer-top">
        <div>
          <h2>Let's talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div>
          <Button color={"white"}>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
        <img src={twoCircles} className="circles two-circles" alt="" />
        <img src={threeCircles} className="circles three-circles" alt="" />
      </FooterTop>
      <FooterBottom className="footer-bottom">
        <div>
          <div className="navigation">
            <Link to="/">
              <Logo image={logoLight}></Logo>
            </Link>
            <FooterLinks>
              <li>
                <Link to="/about">Our company</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </FooterLinks>
          </div>
          <div className="info">
            <div>
              <LocationContact>
                <p>
                  <strong>Designo Central Office</strong>
                </p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </LocationContact>
              <LocationContact>
                <p>
                  <strong>Contact Us (Central Office)</strong>
                </p>
                <strong>
                  <p>P : +1 253-863-8967</p>
                </strong>
                <strong>
                  <p>M : contact@designo.co</p>
                </strong>
              </LocationContact>
            </div>

            <Socials>
              <SocialIcon src={iconFb} />
              <SocialIcon src={iconYoutube} />
              <SocialIcon src={iconTwitter} />
              <SocialIcon src={iconPinterest} />
              <SocialIcon src={iconInstagram} />
            </Socials>
          </div>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
}
