import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import SW from "../../Assets/logos/SolidWorks-Logo.png";
import CAD from "../../Assets/logos/Autocad-Logo.png"
import creo from "../../Assets/logos/CREO-Logo.png"
import catia from "../../Assets/logos/CATIA-Logo.png"
import ansys from "../../Assets/logos/ANSYS-Logo.png"
import abaqus from "../../Assets/logos/abaqus-Logo.png"
import comsol from "../../Assets/logos/comsol-Logo.png"
import matlab from "../../Assets/logos/matlab-Logo.png"
import py from "../../Assets/logos/Python-logo.png"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
              <img src={py} className="img-fluid" alt="avatar" />


      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={SW} className="img-fluid" alt="avatar" />

      </Col>
            <Col xs={4} md={2} className="tech-icons">
              <img src={matlab} className="img-fluid" alt="avatar" />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={CAD} className="img-fluid" alt="avatar" />
      </Col>
            <Col xs={4} md={2} className="tech-icons">
              <img src={ansys} className="img-fluid" alt="avatar" />

      </Col>


    </Row>
  );
}

export default Techstack;
