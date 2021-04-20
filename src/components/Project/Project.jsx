import React from "react";
import {
  Container,
  ImageContainer,
  ProjectImage,
  ProjectDesc
} from "./Project.elements";

export default function Project({ project }) {
  return (
    <Container>
      <ImageContainer>
        <ProjectImage image={project.image}></ProjectImage>
      </ImageContainer>
      <ProjectDesc className="project-desc">
        <h4>{project.name}</h4>
        <p>{project.desc}</p>
      </ProjectDesc>
    </Container>
  );
}
