import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../Assets/me_2.jpg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET  TO  KNOW  ME
            </h1>
            <p className="home-about-body">
                          <b className="purple">Robotics </b>
              is something I love and am good at.
              <br />
              <br />More specifically, I can do well in
              
                              <b className="purple"> SLAM, Motion planning and Mechanical Design. </b>
              
              <br />
              <br />
              I enjoy building up a robotic system with both
              
              <b className="purple"> Software</b> and <b className="purple">Hardware </b>
                          
                          parts.
                          <br />
                          <br />
                          As a
                          
                              <b className="purple"> Master student </b>

                          
                          &nbsp;in

                          <b className="purple"> UCSD </b>
                          , I'm spending my time on
                          <b className="purple"> Robotics</b>
                          ,
                          <b className="purple"> SLAM </b>
                          ,
                          <b className="purple"> Learning </b>
                          and other techniques that can benefit robotic devices.



            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

                          <li className="social-icons">
                              <a
                                  href="mailto:yuk007@ucsd.edu"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="icon-colour  home-social-icons"
                              >
                                  <AiOutlineMail />
                              </a>
                          </li>


                          


              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yuxiang-kang-1036b7249"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                                  href="https://github.com/Yuxiang-Kang"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>

                          </li>

            </ul>
                      <p>
                          yuk007@ucsd.edu
                      </p>



          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
