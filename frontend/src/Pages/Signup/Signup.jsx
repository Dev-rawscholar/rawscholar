import React, { useContext, useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import StudyIllustration from "../../assets/StudyIllustration.svg";
import "./Signup.css";
import { useFrappeCreateDoc } from "frappe-react-sdk";

function Signup({ setShow }) {
  useEffect(() => {
    setShow(false);
  });

  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name1: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { createDoc } = useFrappeCreateDoc();

  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const signin = () => {
    const { name1, email, phone, password, confirmPassword } = inputData;

    if (!name1 || !email || !phone || !password || !confirmPassword) {
      alert("Fill the form");
    } else if (password !== confirmPassword) {
      alert("Passwords doesn't match");
    } else {
      createDoc("Student", {
        name1,
        email,
        phone,
        password,
      })
        .then(() => {
          localStorage.setItem("userData", { name1, email, phone });
          alert(`${name1} account created`);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          alert(`${name1} already existsss`);
        });
    }
  };

  return (
    <div className="containerlogin d-flex justify-content-center align-items-center">
      <div style={{ height: "700px" }}>
        <img
          className="p-1  d-none d-sm-block"
          src={StudyIllustration}
          alt="Study"
          style={{ height: "100%" }}
        />
      </div>
      <form className="formContainer shadow d-flex flex-column align-items-center justify-content-between gap-2">
        <img className="mb-2" src={Logo} alt="" width={140} />
        <div className="form-group">
          <p className="m-0">
            Full Name<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="text"
            name="name1"
            onChange={(e) => getInputData(e)}
            placeholder="Enter Full Name"
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group ">
          <p className="m-0">
            Email<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="text"
            name="email"
            onChange={(e) => getInputData(e)}
            placeholder="Enter Email"
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group ">
          <p className="m-0">
            Phone No<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="text"
            name="phone"
            onChange={(e) => getInputData(e)}
            placeholder="Enter Phone Number"
            style={{ fontSize: "15px" }}
          />
        </div>

        <div className="form-group ">
          <p className="m-0">
            Password<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="password"
            name="password"
            onChange={(e) => getInputData(e)}
            placeholder="Enter Password"
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group mb-2">
          <p className="m-0">
            Confirm Password<span style={{ color: "#067BC2" }}>*</span>
          </p>
          <input
            className="inputBox"
            type="password"
            name="confirmPassword"
            onChange={(e) => getInputData(e)}
            placeholder="Enter Password"
            style={{ fontSize: "15px" }}
          />
        </div>
        <Button
          className="mt-2  w-100 "
          style={{ fontSize: "13px" }}
          onClick={() => signin()}
        >
          Signup
        </Button>
        <p className=" mt-5" style={{ fontSize: "13px" }}>
          Already have an account?
          <Link to={"/login"} style={{ color: "blue", fontSize: "13px" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
