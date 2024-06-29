import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/Logo.svg";
import Search from "../../assets/icons/Search.svg";
import Profile from "../../assets/Profile.svg";

import style from "./NavbarComponent.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../ContextShare";

function NavbarComponent() {
  const { userData, setUserData } = useContext(userContext);
  setUserData(localStorage.getItem("userData"));

  return (
    <Navbar expand="lg shadow-sm" style={{ position: "fixed", width:"100%", backgroundColor:"white",zIndex:"9999" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="Logo"
              src={Logo}
              height="50"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto gap-lg-5 gap-3 ">
            <div className="input-group">
              <input
                className={style.searchBox}
                type="text"
                placeholder="Search Colleges and Courses"
              />
              <button className={style.search}>
                <img src={Search} alt="Search" />
              </button>
            </div>
            <div className="mx-auto">
              {userData ? (
                <div
                  className="rounded-circle border"
                  style={{ height: "40px" }}
                >
                  <Link to="/profile">
                    <img src={Profile} alt="" style={{ height: "100%" }} />
                  </Link>
                </div>
              ) : (
                <Link to="/signup">
                  <button
                    className="btn rounded-pill"
                    style={{
                      backgroundColor: "#067bc2",
                      color: "white",
                      width: "100px",
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
