import React from "react";
import { useHistory, Link } from "react-router-dom";

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

import {
  Hero,
  HeroContainer,
  HeroPhone,
  ProjectCategories,
  Attributes,
  Attribute,
  AttributeImage,
  AttributeDesc
} from "./HomePage.elements";

import {
  CategoryImage,
  CategoryDescription
} from "../shared/CategoryItem.elements";
import { Button } from "../shared/Button.elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const history = useHistory();

  const setLink = url => {
    history.push(url);
  };

  return (
    <div>
      <div>
        <HeroContainer>
          <Hero>
            <div>
              <h1>
                Award-winning custom designs and digital branding solutions
              </h1>
              <p>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <Button color={"white"}>
                <Link to="/about">Learn more</Link>
              </Button>
            </div>
            <div>
              <HeroPhone></HeroPhone>
            </div>
            <img src={heroBg} className="hero-bg" alt="" />
          </Hero>
        </HeroContainer>
        <Container>
          <ProjectCategories>
            <div>
              <Link to="/web-design">
                <CategoryImage
                  imageLg={webDesignLg}
                  imageSm={webDesignSm}
                  onClick={() => setLink("/web-design")}
                >
                  <CategoryDescription>
                    <h2>Web design</h2>
                    <div>
                      View projects{" "}
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="chevron-right"
                      ></FontAwesomeIcon>
                    </div>
                  </CategoryDescription>
                </CategoryImage>
              </Link>
            </div>
            <div>
              <div>
                <Link to="/app-design">
                  <CategoryImage
                    imageLg={appDesignLg}
                    onClick={() => setLink("/app-design")}
                  >
                    <CategoryDescription>
                      <h2>App design</h2>
                      <div>
                        View projects{" "}
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="chevron-right"
                        ></FontAwesomeIcon>
                      </div>
                    </CategoryDescription>
                  </CategoryImage>
                </Link>
              </div>
              <div>
                <Link to="/graphic-design">
                  <CategoryImage
                    imageLg={graphicDesignLg}
                    onClick={() => setLink("/graphic-design")}
                  >
                    <CategoryDescription>
                      <h2>Graphic design</h2>
                      <div>
                        View projects{" "}
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="chevron-right"
                        ></FontAwesomeIcon>
                      </div>
                    </CategoryDescription>
                  </CategoryImage>
                </Link>
              </div>
            </div>
          </ProjectCategories>
        </Container>
        <Container>
          <Attributes>
            <img src={bgLeaf} className="bg-leaf" alt="" />
            <Attribute>
              <AttributeImage>
                <img src={bgCircle} className="bg-circle" alt=""></img>
                <img src={passionateIllustration} alt=""></img>
              </AttributeImage>
              <AttributeDesc>
                <h3>Passionate</h3>
                <p>
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </AttributeDesc>
            </Attribute>
            <Attribute>
              <AttributeImage>
                <img
                  src={bgCircle}
                  className="bg-circle"
                  id="bg-circle-2"
                  alt=""
                ></img>
                <img src={resourcefulIllustration} alt="resourceful"></img>
              </AttributeImage>
              <AttributeDesc>
                <h3>Resourceful</h3>
                <p>
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients??? needs.
                </p>
              </AttributeDesc>
            </Attribute>
            <Attribute>
              <AttributeImage>
                <img
                  src={bgCircle}
                  className="bg-circle"
                  id="bg-circle-3"
                  alt=""
                ></img>
                <img src={friendlyIllustration} alt="friendly"></img>
              </AttributeImage>
              <AttributeDesc>
                <h3>Friendly</h3>
                <p>
                  {" "}
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </AttributeDesc>
            </Attribute>
          </Attributes>
        </Container>
      </div>
    </div>
  );
}
