import React from "react";
import heroBg from "../../assets/home/desktop/bg-pattern-hero-home.svg";

import webDesignSm from "../../assets/home/desktop/image-web-design-small.jpg";
import webDesignLg from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesignLg from "../../assets/home/desktop/image-app-design.jpg";
import graphicDesignLg from "../../assets/home/desktop/image-graphic-design.jpg";

import passionateIllustration from "../../assets/home/desktop/illustration-passionate.svg";
import resourcefulIllustration from "../../assets/home/desktop/illustration-resourceful.svg";
import friendlyIllustration from "../../assets/home/desktop/illustration-friendly.svg";

import bgCircle from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import bgLeaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";

import { Container } from "../shared/Container.elements";
import Footer from "../Footer/Footer";

import {
  Hero,
  HeroContainer,
  HeroPhone,
  ProjectCategories,
  ProjectDescription,
  CategoryImage,
  Attributes,
  Attribute,
  AttributeImage,
  AttributeDesc
} from "./HomePage.elements";
import { Button } from "../shared/Button.elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div>
      <HeroContainer>
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
      </HeroContainer>
      <Container>
        <ProjectCategories>
          <div>
            <CategoryImage imageLg={webDesignLg} imageSm={webDesignSm}>
              <ProjectDescription>
                <h2>Web design</h2>
                <a>
                  View projects{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="chevron-right"
                  ></FontAwesomeIcon>
                </a>
              </ProjectDescription>
            </CategoryImage>
          </div>
          <div>
            <CategoryImage imageLg={appDesignLg}>
              <ProjectDescription>
                <h2>App design</h2>
                <a>
                  View projects{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="chevron-right"
                  ></FontAwesomeIcon>
                </a>
              </ProjectDescription>
            </CategoryImage>
            <CategoryImage imageLg={graphicDesignLg}>
              <ProjectDescription>
                <h2>Graphic design</h2>
                <a>
                  View projects{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="chevron-right"
                  ></FontAwesomeIcon>
                </a>
              </ProjectDescription>
            </CategoryImage>
          </div>
        </ProjectCategories>
      </Container>
      <Container>
        <Attributes>
          <img src={bgLeaf} className="bg-leaf" />
          <Attribute>
            <AttributeImage>
              <img src={bgCircle} className="bg-circle"></img>
              <img src={passionateIllustration}></img>
            </AttributeImage>
            <AttributeDesc>
              <h3>Passionate</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </AttributeDesc>
          </Attribute>
          <Attribute>
            <AttributeImage>
              <img src={bgCircle} className="bg-circle" id="bg-circle-2"></img>
              <img src={resourcefulIllustration}></img>
            </AttributeImage>
            <AttributeDesc>
              <h3>Resourceful</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </AttributeDesc>
          </Attribute>
          <Attribute>
            <AttributeImage>
              <img src={bgCircle} className="bg-circle" id="bg-circle-3"></img>
              <img src={friendlyIllustration}></img>
            </AttributeImage>
            <AttributeDesc>
              <h3>Friendly</h3>
              <p>
                {" "}
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </AttributeDesc>
          </Attribute>
        </Attributes>
      </Container>
      <Footer/>
    </div>
  );
}
