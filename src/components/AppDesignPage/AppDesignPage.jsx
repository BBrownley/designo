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

import projects from "./appDesignProjects";

import webDesignSm from "../../assets/home/desktop/image-web-design-small.jpg";
import webDesignLg from "../../assets/home/desktop/image-web-design-large.jpg";
import graphicDesignLg from "../../assets/home/desktop/image-graphic-design.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function AppDesignPage() {
  return (
    <Container>
      <CategoryHeader>
        <div>
          <h2>App Design</h2>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </div>
      </CategoryHeader>
      <ProjectList projects={projects} />
      <CategoryRow>
        <Link to="/web-design">
          <CategoryImage imageLg={webDesignLg} imageSm={webDesignSm}>
            <CategoryDescription>
              <h2>Web design</h2>
              <a>
                View projects{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="chevron-right"
                ></FontAwesomeIcon>
              </a>
            </CategoryDescription>
          </CategoryImage>
        </Link>

        <Link to="/graphic-design">
          <CategoryImage imageLg={graphicDesignLg}>
            <CategoryDescription>
              <h2>Graphic design</h2>
              <a>
                View projects{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="chevron-right"
                ></FontAwesomeIcon>
              </a>
            </CategoryDescription>
          </CategoryImage>
        </Link>
      </CategoryRow>
    </Container>
  );
}
