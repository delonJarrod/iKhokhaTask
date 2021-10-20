import React, { useState, useEffect } from "react";
import { Col, Container, Form, FormControl, Row, Table } from "react-bootstrap";
import axios from "axios";
import classes from "./Admin.module.css";
import Modal from "../../../ui/Modal";

function Admin() {
  let user = window.getUser[0];

  const [allUsers, setAllUsers] = useState([]);
  const [updateId, setUpdateId] = useState();
  //popUp Modal
  const [modalShow, setModalShow] = useState(false);
  //Priority
  const [priorityValue, setPriorityValue] = useState("5");
  const [priorityError, setPriorityError] = useState();
  //check if dev
  const [dev, setDev] = useState(true);
  //If Current user Match
  const [showResults, setShowResults] = useState(false);
  //Selected userName
  const [userName, setUserName] = useState();
  const [searchValue, setSearchValue] = useState();
  const [Data, setData] = useState([]);

  //Getting all Data from API
  useEffect(() => {
    const fetchPost = (async) => {
      axios
        .get(
          "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/malvernapp-fmxfv/service/ApiMalvernUsers/incoming_webhook/apiMalvernGetAllUsers"
        )
        .then((response) => {
          setAllUsers(response.data);
          setData(response.data);
        });
    };
    fetchPost();
  }, []);

  //Show If dev or priority 1
  useEffect(() => {
    if (user.priority === "s" || user.priority === "1") {
      setShowResults(true);
    }
  }, []);

  // Function For Edit button
  const edit = (value) => (event) => {
    setUpdateId(value._id.$oid);
    setUserName(value.fullName);
    if (value.priority === "s") {
      setDev(false);
    }
    if (priorityValue !== "" && priorityValue !== "0") {
      setPriorityError("");
    }
    setPriorityValue("5");
    setModalShow(true);
  };

  //GEt Value for priority
  function changePriority(e) {
    e.preventDefault();
    setPriorityValue(e.target.value);
  }
  //function to save priority
  function savePriority() {
    if (priorityValue === "" || priorityValue === "0") {
      return setPriorityError("Priority can not be set to 0 or left blank");
    } else {
      const obj = {
        todo_id: updateId,
        priority: priorityValue,
      };

      axios.post(
        "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/malvernapp-fmxfv/service/ApiMalvernUsers/incoming_webhook/apiEditUser",
        obj
      );
    }
  }

  // Refresh Function
  function Refresh() {
    axios
      .get(
        "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/malvernapp-fmxfv/service/ApiMalvernUsers/incoming_webhook/apiMalvernGetAllUsers"
      )
      .then((response) => setAllUsers(response.data));
  }

  // Search Function
  function searchOnChange(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (searchValue) {
      setAllUsers(Data);
    }
  }
  function search(e) {
    e.preventDefault();
    if (searchValue !== "") {
      let filter = allUsers.filter(
        (x) =>
          x.fullName.includes(searchValue) ||
          x.fullName.includes(searchValue.toLowerCase()) ||
          x.fullName.includes(searchValue.toUpperCase()) ||
          x.fullName.includes(searchValue.ignorecase) ||
          x.email.includes(searchValue)
      );

      setAllUsers(filter);
    } else {
      setAllUsers(Data);
    }
  }
  return (
    <div className="border">
      {showResults && (
        <div className=" pt-2 pb-2">
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            header={userName}
          >
            <div>
              <Container fluid>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group className="mb-3" Id="LogEmail">
                        <Form.Label>Change Priority</Form.Label>
                        <Form.Control
                          id="Priority"
                          name="Priority"
                          type="number"
                          required
                          placeholder="Enter Priority"
                          onChange={changePriority}
                          value={priorityValue}
                        />
                        <Form.Text className="text-muted">
                          Note that changing a users priority will give them
                          access to features of this application
                        </Form.Text>
                        <Container>
                          <Row>
                            <Col>
                              {priorityError && (
                                <lable className="text-danger">
                                  {priorityError}
                                </lable>
                              )}
                            </Col>
                          </Row>
                        </Container>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <button
                      className="btn btn-outline-primary w-50"
                      onClick={savePriority}
                    >
                      Save
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Modal>
          <Container fluid className={classes.PriorityText}>
            <Row className="border-bottom  pt-3">
              <Col>
                <h1 className="pb-3">Change Priority</h1>
              </Col>
              <Col>
                <button onClick={Refresh} className="btn btn-outline-primary">
                  Refresh
                </button>
              </Col>
            </Row>
          </Container>
          <Container className="mt-3">
            <Row>
              <Col sm={8}>
                <Form className="d-flex w-100">
                  <div className={classes.searchWidth}>
                    <FormControl
                      type="search"
                      placeholder="Search Name/Email"
                      className="mr-2"
                      aria-label="Search"
                      onChange={searchOnChange}
                      value={searchValue}
                    />
                  </div>

                  <button onClick={search} className="btn btn-outline-primary">
                    Search
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
          <Container className="mb-5 mt-5">
            <Row>
              <Col>
                <div className={classes.table}>
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Priority</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers.map((item) => (
                        <tr key={item._id}>
                          <td>{item.fullName}</td>
                          <td>{item.email}</td>
                          <td>{item.priority}</td>
                          <td>{item.date}</td>
                          <td>
                            {item.priority !== "s" && (
                              <button
                                onClick={edit(item)}
                                className="btn btn-outline-primary w-100"
                              >
                                Edit
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Admin;
