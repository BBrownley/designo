import React from "react";

import ProjectList from "../ProjectList/ProjectList";

import { CategoryHeader } from "../shared/CategoryHeader.elements";
import { Container } from "../shared/Container.elements";

import projects from "./graphicDesignProjects";

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
    </Container>
  );
}
