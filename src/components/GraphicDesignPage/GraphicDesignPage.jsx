import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "../ProjectList/ProjectList";

import { CategoryHeader } from "../shared/CategoryHeader.elements";
import { Container } from "../shared/Container.elements";
import { CategoryRow } from "../shared/CategoryRow.elements";
import {
  CategoryImage,
  CategoryDescription
} from "../shared/CategoryItem.elements";

import projects from "./graphicDesignProjects";

import webDesignSm from "../../assets/home/desktop/image-web-design-small.jpg";
import webDesignLg from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesignLg from "../../assets/home/desktop/image-app-design.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function GraphicDesignPage() {
  return (
    <Container>
      <CategoryHeader>
        <div>
          <h2>Graphic Design</h2>
          <p>
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </CategoryHeader>
      <ProjectList projects={projects} />
      <CategoryRow>
        <Link to="/app-design">
          <CategoryImage imageLg={appDesignLg}>
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
        <Link to="/web-design">
          <CategoryImage imageLg={webDesignLg} imageSm={webDesignSm}>
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
      </CategoryRow>
    </Container>
  );
}
