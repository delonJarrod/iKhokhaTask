import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.css";
import logoFooter from "../img/LogoFooter.png";
function Footer() {
  return (
    <div>
      <Container fluid className={classes.footerBG}>
        <Row className="border-bottom pb-3">
          <Col>
            <h4>Develper Details & Useful infomation</h4>
          </Col>
        </Row>
        <Row className="pt-3 ">
          <Col sm={6} md={6}>
            <h5>Contact</h5>
            <Row className="pt-3 pb-5">
              <a className="text-decoration-none" href="tel:0711968195">
                <span>
                  <span> {">"} </span>
                  <span className="text-light text-decoration-none">
                    {" "}
                    Phone: 071 196 8195
                  </span>
                </span>
              </a>
            </Row>
          </Col>
          <Col sm={6} md={6}>
            <h5>Socials</h5>
            <Row className="pb-5">
              <div class="social-links mt-3">
                <a
                  href="https://www.facebook.com/jarrod.naidoo.18"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.social}
                >
                  <i class="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/jarrod_thatguy"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.social}
                >
                  <i class="bx bxl-instagram"></i>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="pb-3 border-bottom text-light">
          <Col className="jusity-content-end">
            <a href="#header" className={classes.backToTop}>
              <i className="bx bx-up-arrow-alt"></i>
            </a>
          </Col>
        </Row>
        <Row className={classes.lowerFooter}>
          <Col sm={2} className="pt-3 text-light">
            <img src={logoFooter} alt="LogoFooter" />
          </Col>
          <Col sm={2} className="pt-3 text-light">
            <p>All Rights Reserved © 2021</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
