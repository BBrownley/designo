import React from 'react'
import Project from "../Project/Project";

import {Container} from "./ProjectList.elements";

export default function ProjectList({projects}) {
  return (
    <Container>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Container>
  )
}
