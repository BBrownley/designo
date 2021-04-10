import React from "react";

import heroLg from "../../assets/about/desktop/image-about-hero.jpg";
import heroMd from "../../assets/about/tablet/image-about-hero.jpg";
import heroSm from "../../assets/about/mobile/image-about-hero.jpg";

import { Container } from "../shared/Container.elements";
import { Item, Caption, Image } from "./AboutPage.elements";

export default function AboutPage() {
  return (
    <Container>
      <Item>
        <Caption>
          <div className="wrapper">
            <h2>About Us</h2>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </Caption>
        <div className="image-container">
          <Image imageLg={heroLg} imageMd={heroMd} imageSm={heroSm}></Image>
        </div>
      </Item>
    </Container>
  );
}
