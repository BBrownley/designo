import React from "react";
import expressImg from "../../assets/web-design/desktop/image-express.jpg";
import {
  Container,
  ImageContainer,
  ProjectImage,
  ProjectDesc
} from "./Project.elements";

export default function Project() {
  return (
    <Container>
      <ImageContainer>
        <ProjectImage image={expressImg}></ProjectImage>
      </ImageContainer>
      <ProjectDesc className="project-desc">
        <h4>Express</h4>
        <p>A multi-carrier shipping website for ecommerce businesses</p>
      </ProjectDesc>
    </Container>
  );
}
