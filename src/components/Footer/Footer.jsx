import React from "react";

import threeCircles from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import twoCircles from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

import { FooterContainer, FooterTop, FooterBottom } from "./Footer.elements";
import { Button } from "../shared/Button.elements";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <div>
          <h2>Let's talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow. Get in touch
          </p>
        </div>
        <div>
          <Button color={"white"}>Get in touch</Button>
        </div>
        <img src={twoCircles} className="circles two-circles" />
        <img src={threeCircles} className="circles three-circles" />
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
}
