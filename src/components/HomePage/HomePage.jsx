import React from "react";
import heroBg from "../../assets/home/desktop/bg-pattern-hero-home.svg";

import { Hero, HeroPhone, ProjectCategories } from "./HomePage.elements";
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
          <div id="web-design" class="category-image">
            <div className="description">
              <h2>Web design</h2>
              <a>
                View projects{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="chevron-right"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div id="app-design" class="category-image">
            <div className="description">
              <h2>App design</h2>
              <a>
                View projects{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="chevron-right"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <div id="graphic-design" class="category-image">
            <div className="description">
              <h2>Graphic design</h2>
              <a>
                View projects{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="chevron-right"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </ProjectCategories>
    </div>
  );
}
