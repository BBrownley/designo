import React from "react";
import { CategoryHeader } from "../shared/CategoryHeader.elements";
import { Container } from "../shared/Container.elements";

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
    </Container>
  );
}
