import React from "react";
import { Link } from "react-router-dom";

import canadaImg from "../../assets/shared/desktop/illustration-canada.svg";
import australiaImg from "../../assets/shared/desktop/illustration-australia.svg";
import ukImg from "../../assets/shared/desktop/illustration-united-kingdom.svg";

import bgCircle from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

import { Container, Location } from "./LocationsRow.elements";
import { Button } from "../shared/Button.elements";

export default function LocationsRow() {
  return (
    <Container>
      <Location>
        <img src={bgCircle} className="bg-circle" />
        <img src={canadaImg} alt="Canada" />
        <h4>Canada</h4>
        <Button>
          <Link to="/locations">See location</Link>
        </Button>
      </Location>
      <Location>
        <img src={bgCircle} className="bg-circle" />
        <img src={australiaImg} alt="Australia" />
        <h4>Australia</h4>
        <Link to="/locations">
          <Button>See location</Button>
        </Link>
      </Location>
      <Location>
        <img src={bgCircle} className="bg-circle" />
        <img src={ukImg} alt="United Kingdom" />
        <h4>United Kingdom</h4>
        <Link to="/locations">
          <Button>See location</Button>
        </Link>
      </Location>
    </Container>
  );
}
