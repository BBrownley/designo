import React from "react";
import heroBg from "../../assets/home/desktop/bg-pattern-hero-home.svg";

import webDesignSm from "../../assets/home/desktop/image-web-design-small.jpg";
import webDesignLg from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesignLg from "../../assets/home/desktop/image-app-design.jpg";
import graphicDesignLg from "../../assets/home/desktop/image-graphic-design.jpg";

import {
  Hero,
  HeroPhone,
  ProjectCategories,
  ProjectDescription,
  CategoryImage
} from "./HomePage.elements";
import { Button } from "../shared/Button.elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
    </div>
  );
}
