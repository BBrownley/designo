import React from "react";
import heroBg from "../../assets/home/desktop/bg-pattern-hero-home.svg";

import { Hero, HeroPhone } from "./HomePage.elements";
import { Button } from "../shared/Button.elements";

export default function HomePage() {
  return (
    <div>
      <Hero>
        <div>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button color={"white"}>Learn more</Button>
        </div>
        <div>
          <HeroPhone></HeroPhone>
        </div>
        <img src={heroBg} className="hero-bg" />
      </Hero>
    </div>
  );
}
