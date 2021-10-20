import { Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import classes from "./Modal.module.css";
import { BsEnvelope } from "react-icons/bs";

function Modals(props) {
  const [show, setShow] = useState(false);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-center"
    >
      <Modal.Header>
        <Container fluid>
          <Row>
            <Col>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.header}
              </Modal.Title>
            </Col>
            <Col className="float-end">
              <div className={classes.marginRightClose}>
                <button
                  onClick={props.onHide}
                  className="btn btn-outline-danger"
                >
                  Close
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default Modals;
