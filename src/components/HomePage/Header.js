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
    </div>
  );
}

export default Header;
