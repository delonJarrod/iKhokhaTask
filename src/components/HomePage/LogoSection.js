import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import classes from "./LogoSection.module.css";
import Card from "../ui/Card";

function LogoSection() {
  let logo = [];

  logo = [
    { header: "Logo1-Header", content: "Logo #1", footer: "Logo #1 footer" },
    { header: "Logo2-Header", content: "Logo #2", footer: "Logo #2 footer" },
    { header: "Logo3-Header", content: "Logo #3", footer: "Logo #3 footer" },
    { header: "Logo4-Header", content: "Logo #4", footer: "Logo #4 footer" },
    { header: "Logo5-Header", content: "Logo #5", footer: "Logo #5 footer" },
  ];
  return (
    <div className={classes.text}>
      <Container fluid className="d-none d-lg-block">
        <div className={classes.LogoRow}>
          <Row id="logoRow" className="d-none d-lg-flex">
            {logo.map((item) => (
              <Col key={item.Id} className="pt-3">
                <Card>
                  <Container>
                    <Row className="text-center border-bottom">
                      <Col className="mb-2">{item.header}</Col>
                    </Row>
                    <Row className="mt-3 text-center">
                      <Col>
                        <h1>{item.content}</h1>
                      </Col>
                    </Row>
                    <Row className="mt-3 text-center pt-2 border-top">
                      <Col>{item.footer}</Col>
                    </Row>
                  </Container>
                  <div className="pt-3"></div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <Container>
        <Row id="logoRow" className="d-flex d-lg-none ">
          <div className={classes.LogoRowCarousel}>
            <Row className="text-center pt-3">
              <Col>
                <p>
                  {"<< "}Swipe left or right to change the slider{" >>"}
                </p>
              </Col>
            </Row>
            <Col>
              <Carousel
                className="text-dark"
                fade
                interval={5000}
                nextLabel={""}
                prevLabel={""}
                touch={true}
              >
                {logo.map((item) => (
                  <Carousel.Item>
                    <Container fluid>
                      <Row>
                        <Col key={item.Id} className="pt-3">
                          <Card>
                            <Container>
                              <Row className="text-center border-bottom">
                                <Col className="mb-2">{item.header}</Col>
                              </Row>
                              <Row className="mt-3 text-center">
                                <Col>
                                  <h1>{item.content}</h1>
                                </Col>
                              </Row>
                              <Row className="mt-3 text-center pt-2 border-top">
                                <Col>{item.footer}</Col>
                              </Row>
                            </Container>
                            <div className="pt-3"></div>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LogoSection;
