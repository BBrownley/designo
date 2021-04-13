import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "../ProjectList/ProjectList";

import projects from "./webdesignProjects";

import { CategoryHeader } from "../shared/CategoryHeader.elements";
import { Container } from "../shared/Container.elements";
import { CategoryRow } from "../shared/CategoryRow.elements";
import {
  CategoryImage,
  CategoryDescription
} from "../shared/CategoryItem.elements";

import appDesignLg from "../../assets/home/desktop/image-app-design.jpg";
import graphicDesignLg from "../../assets/home/desktop/image-graphic-design.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function WebDesignPage() {
  return (
    <Container>
      <CategoryHeader>
        <div>
          <h2>Web Design</h2>
          <p>
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </CategoryHeader>
      <ProjectList projects={projects} />
      <CategoryRow>
        <Link to="/app-design">
          <CategoryImage imageLg={appDesignLg}>
            <CategoryDescription>
              <h2>App design</h2>
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
