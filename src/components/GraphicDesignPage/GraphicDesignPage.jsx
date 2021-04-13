import React from "react";
import { useHistory } from "react-router-dom";

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
import graphicDesignLg from "../../assets/home/desktop/image-graphic-design.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function GraphicDesignPage() {
  const history = useHistory();
  const setLink = url => {
    history.push(url);
  };
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
        <CategoryImage
          imageLg={appDesignLg}
          onClick={() => setLink("/app-design")}
        >
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
        <CategoryImage
          imageLg={webDesignLg}
          imageSm={webDesignSm}
          onClick={() => setLink("/web-design")}
        >
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
      </CategoryRow>
    </Container>
  );
}
