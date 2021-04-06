import React from "react";

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
  return (
    <FooterContainer>
      <FooterTop>
        <div>
          <h2>Let's talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div>
          <Button color={"white"}>Get in touch</Button>
        </div>
        <img src={twoCircles} className="circles two-circles" />
        <img src={threeCircles} className="circles three-circles" />
      </FooterTop>
      <FooterBottom>
        <div>
          <div className="navigation">
            <Logo image={logoLight}></Logo>
            <FooterLinks>
              <li>Our company</li>
              <li>Locations</li>
              <li>Contact</li>
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
