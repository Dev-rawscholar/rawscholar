import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFrappeGetDocList } from "frappe-react-sdk";



import Logo from "../../assets/Logo.svg";
import StudyIllustration from "../../assets/StudyIllustration.svg";

import "./Login.css";
import { toast } from "react-toastify";

function Login({ setShow }) {
  useEffect(() => {
    setShow(false);
  });

  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const { data, error } = useFrappeGetDocList("Student", {
    fields: ["email", "password", "name1"],
    filters: inputData.email ? [["email", "=", inputData.email]] : [],
  });

  if (error) console.log(error);

  const login = () => {
    const { email, password } = inputData;
    if (!email || !password) {
      toast.warning(" Please Fill the form");
    } else if (data[0]?.email === email) {
      if (data[0]?.password === password) {
        const { email, name1 } = data[0];
        toast.success("Logged in Successfully");
        localStorage.setItem("userData", JSON.stringify({ email, name1 }));
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      toast.error("No account found");
    }
  };

  return (
    <div className="containerlogin d-flex justify-content-center align-items-center">
      <img
        className="p-1  d-none d-sm-block"
        src={StudyIllustration}
        alt=""
        height="700"
      />
      <form className="formContainer shadow d-flex flex-column align-items-center gap-3">
        <img className="mb-4" src={Logo} alt="" width={200} />
        <div className="form-group mb-2">
          <p className="m-0">Email</p>
          <input
            className="inputBox"
            type="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => getInputData(e)}
            style={{ fontSize: "15px" }}
          />
        </div>
        <div className="form-group mb-2">
          <p className="m-0">Password</p>
          <input
            className="inputBox"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => getInputData(e)}
            style={{ fontSize: "15px" }}
          />
        </div>
        <Button
          className="mt-2 mb-3 w-100 "
          style={{ fontSize: "13px" }}
          onClick={() => login()}
        >
          Login
        </Button>
        <Link to="/forgotpassword">
          <a style={{ fontSize: "13px" }} href="/">
            Forgotten Password?
          </a>
        </Link>
        <p className=" mt-5" style={{ fontSize: "13px" }}>
          Don’t have account yet?
          <Link to={"/signup"} style={{ color: "blue", fontSize: "13px" }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
