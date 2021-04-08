import React from "react";
import { CategoryHeader } from "../shared/CategoryHeader.elements";
import { Container } from "../shared/Container.elements";
import ProjectList from "../ProjectList/ProjectList";

import projects from "./webdesignProjects";

export default function WebDesignPage() {
  console.log(projects);
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
    </Container>
  );
}
