import React from "react";
import Project from "../Project/Project";

import { Container } from "./ProjectList.elements";

export default function ProjectList({projects}) {
  return (
    <Container>
      {projects.map((project, index) => {
        return <Project project={project} key={index} />;
      })}
    </Container>
  );
}
