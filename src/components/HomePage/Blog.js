import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import FeatureBox from "../ui/FeatureBox";
import classes from "./Blog.module.css";
import image from "../img/dustin.png";
import Modal from "../ui/Modal";

function Blog() {
  //popUp Modal
  const [modalShow, setModalShow] = useState(false);
  const { height, nwidth } = useWindowDimensions();

  var width = window.screen.availWidth;
  let blog = [];
  if (width < 500) {
    blog = [
      {
        Id: "001",
        image: { image },
        blogTitle: "Blog Title #1",
        blogText: "Blog excerpt - first lines - for approx two lines",
      },
      {
        Id: "002",
        image: { image },
        blogTitle: "Blog Title #2",
        blogText: "Blog excerpt - first lines - for approx two lines",
      },
    ];
  } else {
    blog = [
      {
        Id: "001",
        image: { image },
        blogTitle: "Blog Title #1",
        blogText: "Blog excerpt - first lines - for approx two lines",
      },
      {
        Id: "002",
        image: { image },
        blogTitle: "Blog Title #2",
        blogText: "Blog excerpt - first lines - for approx two lines",
      },
      {
        Id: "003",
        image: { image },
        blogTitle: "Blog Title #3",
        blogText: "Blog excerpt - first lines - for approx two lines",
      },
      {
        Id: "004",
        image: { image },
        blogTitle: "Blog Title #4",
        blogText: "Blog excerpt - first lines - for approx two lines",
      },
    ];
  }

  //button Onclick
  function onClick(e) {
    e.preventDefault();
    setModalShow(true);
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  return (
    <div className={classes.headerDiv}>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <div>
          <Container fluid>
            <Row>
              <Col>
                <h3>Read More</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>This is a pop up message</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal>

      <Container className="border border-gray pb-3">
        <div className="border-bottom border-gray pb-3">
          <h1 className="text-center mt-3">Blog</h1>
        </div>
        <Row>
          {blog.map((item) => (
            <Col key={item.Id} xs={12} md={3} className="pt-3">
              <FeatureBox>
                <Container>
                  <Row className="border-bottom">
                    <Col>
                      <div className="pt-2 pb-2">
                        <img
                          src={image}
                          alt="Blogimage"
                          width="100%"
                          className={classes.roundImage}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="text-start pt-2">
                    <Col>
                      <h1>{item.blogTitle}</h1>
                      <p className={classes.text}>{item.blogText}</p>
                    </Col>
                  </Row>
                </Container>
                <div className="pt-3"></div>
              </FeatureBox>
            </Col>
          ))}
        </Row>
        <Row className="pt-5">
          <Col className="text-center">
            <button className={classes.roundedButton} onClick={onClick}>
              {" "}
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
