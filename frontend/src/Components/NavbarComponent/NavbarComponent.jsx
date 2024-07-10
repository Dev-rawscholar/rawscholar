import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/Logo.svg";
import Search from "../../assets/icons/Search.svg";
import Profile from "../../assets/Profile.svg";

import style from "./NavbarComponent.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast } from "react-toastify";

import { useFrappeGetDocList } from "frappe-react-sdk";
import { searchContext } from "../ContextShare";

function NavbarComponent() {
  const [islogged, setIslogged] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userData")) setIslogged(true);
  });

  const logout = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Logout",
          onClick: () => {
            localStorage.removeItem("userData");
            setIslogged(false);
            navigate("/");
            toast.success("You have been logged out!");
          },
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  };

  //----------------------------------Search----------------------------------------------

  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputSearch);
    if (inputSearch != "") navigate("/search");
  };

  // --------------------------------------------------------------------------------------

  return (
    <Navbar expand="lg shadow-sm">
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
                onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
              />
              <button className={style.search} onClick={handleSearch}>
                {/* onClick={handleSearch} in button */}
                <img src={Search} alt="Search" />
              </button>
            </div>
            <div className="mx-auto">
              {islogged ? (
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle border"
                    style={{ height: "40px" }}
                  >
                    <Link to="/profile">
                      <img src={Profile} alt="" style={{ height: "100%" }} />
                    </Link>
                  </div>
                  <button
                    className="btn rounded-pill"
                    style={{
                      backgroundColor: "#067bc2",
                      color: "white",
                      width: "100px",
                    }}
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/signup"
                  className="btn rounded-pill"
                  style={{
                    backgroundColor: "#067bc2",
                    color: "white",
                    width: "100px",
                  }}
                >
                  Sign Up
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
