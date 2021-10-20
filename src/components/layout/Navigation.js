import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "../img/Logo.png";

const Navigation = () => {
  return (
    <div>
      <Navbar
        className={classes.navbar}
        collapseOnSelect
        expand="lg"
        /*sticky="top"*/
        variant="dark"
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="justify-content-start "
          style={{ marginLeft: "5%" }}
        />
        <div className="d-flex d-lg-none">
          <Navbar.Brand as={Link} to="/">
            <div className="d-flex">
              <div className="col">
                <img src={logo} alt="ImgLogo" />
              </div>
            </div>
          </Navbar.Brand>
        </div>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Item eventkey={1} className={classes.header}>
              <Nav.Link as="href">
                <a className="text-light text-decoration-none" href="/">
                  <h5>Home</h5>
                </a>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventkey={1} className={classes.header}>
              <Nav.Link as="href">
                <a className="text-light text-decoration-none" href="/">
                  <h5>Products</h5>
                </a>
              </Nav.Link>
            </Nav.Item>
            <div className="d-none d-lg-block">
              <Nav.Item eventkey={1} className={classes.header}>
                <Navbar.Brand as={Link} to="/">
                  <div className="d-flex">
                    <div className="col">
                      <img src={logo} alt="ImgLogo" />
                    </div>
                  </div>
                </Navbar.Brand>
              </Nav.Item>
            </div>

            <Nav.Item eventkey={1} className={classes.header}>
              <Nav.Link as="href">
                <a className="text-light text-decoration-none" href="/">
                  <h5>Blog</h5>
                </a>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventkey={1} className={classes.header}>
              <Nav.Link as="href">
                <a className="text-light text-decoration-none" href="/">
                  <h5>Contact</h5>
                </a>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
