import React from "react";

import LocationsRow from "../LocationsRow/LocationsRow";

import heroLg from "../../assets/about/desktop/image-about-hero.jpg";
import heroMd from "../../assets/about/tablet/image-about-hero.jpg";
import heroSm from "../../assets/about/mobile/image-about-hero.jpg";

import talentSm from "../../assets/about/mobile/image-world-class-talent.jpg";
import talentMd from "../../assets/about/tablet/image-world-class-talent.jpg";
import talentLg from "../../assets/about/desktop/image-world-class-talent.jpg";

import realSm from "../../assets/about/mobile/image-real-deal.jpg";
import realMd from "../../assets/about/tablet/image-real-deal.jpg";
import realLg from "../../assets/about/desktop/image-real-deal.jpg";

import {
  StyledContainer as Container,
  Item,
  Caption,
  Image
} from "./AboutPage.elements";

export default function AboutPage() {
  return (
    <Container>
      <Item className="hero">
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
      <Item className="talent">
        <Caption color="light">
          <div className="wrapper">
            <h2>World-class talent</h2>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <br />
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </Caption>
        <div className="image-container">
          <Image
            imageLg={talentLg}
            imageMd={talentMd}
            imageSm={talentSm}
          ></Image>
        </div>
      </Item>
      <LocationsRow />
      <Item className="real-deal">
        <Caption color="light">
          <div className="wrapper">
            <h2>The real deal</h2>

            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              <br />
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </Caption>
        <div className="image-container">
          <Image imageLg={realLg} imageMd={realMd} imageSm={realSm}></Image>
        </div>
      </Item>
    </Container>
  );
}
