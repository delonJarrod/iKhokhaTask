import React from "react";
import classes from "./Header.module.css";
import { Carousel, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../img/56256.png";
import img2 from "../img/56217.png";

function Header() {
  return (
    <div id="header">
      <Container fluid className={classes.hero}>
        <Row>
          <Col>
            <h1 className={classes.text} data-aos="fade-down-right">
              Welcome to iKhokha
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-light">Front-End Software Engineer Task</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={classes.headerRow} id="HeaderRow1">
          <Col xs={12} md={6}>
            <p className={classes.Row1Heading} data-aos="fade-down">
              Start new.. Today
            </p>
            <p className={classes.Row2Text} data-aos="fade-up">
              Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
              ipsum
            </p>
          </Col>
          <Col md={6}>
            <img
              src={img1}
              alt="FirstImage"
              width="70%"
              className={classes.firstImageClass}
            />
          </Col>
        </Row>
        <Row id="HeaderRow3">
          <Col className="text-center">
            <p className={classes.Row3Heading} data-aos="fade-down">
              {" "}
              Lorem ipsum something
            </p>
          </Col>
        </Row>
        <Row id="HeaderRow3" className={classes.Row3Margin}>
          <Col md={6} className="d-none d-lg-block">
            <div>
              <img
                src={img2}
                alt="SecondImage"
                width="50%"
                className={classes.secondImageClass}
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="pt-5 mt-5">
              <p className={classes.Row4Heading} data-aos="fade-down">
                New Product, new Story
              </p>
              <p className={classes.Row4Text} data-aos="fade-up">
                Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
                ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus
                facilisis ipsum sit amet molestie. Proin lobortis eros a turpis
                tempor, sed ornare augue aliquam. Donec imperdiet nulla ut
                placerat molestie. In hendrerit blandit ante facilisis ultrices.
                Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc
                rhoncus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* 
      <Container fluid className={classes.hero}>
        <Row>
          <Col>
            <div id="header" className={classes.text}>
              <div className={classes.headerMobile}>
                <Carousel
                  fade
                  interval={5000}
                  nextLabel={""}
                  prevLabel={""}
                  touch={true}
                >
                  <Carousel.Item>
                    <div className={classes.HeadingText}>
                      <h1 data-aos="fade-down" className="mb-5">
                        Malvern South Precinct
                      </h1>
                      <p data-aos="fade-up">
                        We are pleased to announce the formation of the Malvern
                        South Precinct (MSP) which will be operating under the
                        umbrella organisations of the Malvern Neighbourhood
                        Watch (MNW) and the Malvern Community Police Forum
                        (MCPF).
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className={classes.HeadingText}>
                      <h1 data-aos="fade-down" className="mb-5">
                        What Does This Mean For You
                      </h1>
                      <p>A safer community. </p>
                      <p data-aos="fade-up">
                        The statistics show that increased patrolling presence
                        has a marked decrease in crime. While we are under no
                        illusions that MSP will remove crime in its totality, we
                        pledge to you that we will always do our best to prevent
                        as much crime as possible in our precinct.
                      </p>
                      <p>
                        The MSP, along with the MNW and MCPF are also extremely
                        active in community based projects/events.
                      </p>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default Header;
