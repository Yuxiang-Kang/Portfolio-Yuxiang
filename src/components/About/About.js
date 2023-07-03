import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";

import Techstack from "./Techstack";

import Toolstack from "./Toolstack";

function About() {
    return (



    <Container fluid className="about-section">
          <Particle />

          <Container>


              <Row>
              <Col md={12} className="home-about-social">

                      <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
                          ABOUT<strong className="purple"> ME</strong>
                      </h1>




                      <p className="home-about-body" >

                          Hey there! I'm
                          <b className="purple">&nbsp;Yuxiang Kang</b>
                          , a Robotics and Mechanical Engineer. I've obtained my Bachelor's degree in Mechanical Engineering
                          from
                          <b className="purple"> Tsinghua University </b>

                          and am working on an Mechanical Engineering
                          <b className="purple">&nbsp;Master's degree</b> in
                          <b className="purple">&nbsp;UC San Diego.</b>
                          <br />
                          <br />
                          In college I've designed and manufactured several
                          <b className="purple">&nbsp;robotic systems </b>
                           and wrote control software for
                           <b className="purple">&nbsp;SLAM and motion planning</b>
                          .I've also worked as a mechanical engineer during internships in
                          <b className="purple"> NAURA Technology Group.</b>
                          and
                          <b className="purple"> Beijing Gas Co., Ltd.</b>
                          <br />
                          <br />
                          I'm now looking for a grad position about robotics engineering or mechanical engineering.
                          Feel free to contact me!
                          



                      </p>




              </Col>
              </Row>







              <br />
              <br />
              <br />







        

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />




      </Container>
    </Container>
    );

}

export default About;
