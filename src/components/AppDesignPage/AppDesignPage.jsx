import React from "react";
import { CategoryHeader } from "../shared/CategoryHeader.elements";
import { Container } from "../shared/Container.elements";

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
    </Container>
  );
}
