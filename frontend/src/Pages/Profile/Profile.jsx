import edit from "../../assets/Edit.svg";
import save from "../../assets/Save.svg";
import ellipse from "../../assets/profile image/Ellipse.svg";
import frame from "../../assets/profile image/Frame.svg";
import upload from "../../assets/profile image/upload.svg";
import { useFrappeGetDoc, useFrappeUpdateDoc } from "frappe-react-sdk";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Components/ContextShare";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Profile({ setShow }) {
  useEffect(() => {
    setShow(true);
    if (!localStorage.getItem("userData")) {
      navigate("/login");
      toast.warning("Please login or sign-up before continuing");
    }
  });

  const navigate = useNavigate();

  const { userData, setUserData } = useContext(userContext);

  const [editable, setEditable] = useState(true);

  const [inputData, setInputData] = useState({});

  const [qualifications, setQualifications] = useState([]);

  let loggedData = JSON.parse(localStorage.getItem("userData"));

  const { data } = useFrappeGetDoc("Student", loggedData?.email);

  useEffect(() => {
    if (data) {
      setInputData(data);
      setTenthData({
        ...tenthData,
        parent: data?.name,
        parenttype: data?.doctype,
        cgpa: data.qualifications[0]?.cgpa,
        percentage: data.qualifications[0]?.percentage,
      });
      setTwelfthData({
        ...twelfthData,
        parent: data?.name,
        parenttype: data?.doctype,
        cgpa: data.qualifications[2]?.cgpa,
        percentage: data.qualifications[2]?.percentage,
      });
      setBachelorsData({
        ...bachelorsData,
        parent: data?.name,
        parenttype: data?.doctype,
        cgpa: data.qualifications[1]?.cgpa,
        percentage: data.qualifications[1]?.percentage,
      });
      setMastersData({
        ...mastersData,
        parent: data?.name,
        parenttype: data?.doctype,
        cgpa: data.qualifications[3]?.cgpa,
        percentage: data.qualifications[3]?.percentage,
      });
    }
  }, [data]);

  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    setUserData(inputData);
  }, [inputData]);

  const { updateDoc } = useFrappeUpdateDoc();

  const [tenthData, setTenthData] = useState({
    parent: "",
    parenttype: "",
    parentfield: "qualifications",
    qualification: "10th",
    percentage: "",
    cgpa: "",
    specifics: "",
    completion_year: "",
  });

  const [twelfthData, setTwelfthData] = useState({
    parent: "",
    parenttype: "",
    parentfield: "qualifications",
    qualification: "12th",
    percentage: "",
    cgpa: "",
    specifics: "",
    completion_year: "",
  });

  const [bachelorsData, setBachelorsData] = useState({
    parent: "",
    parenttype: "",
    parentfield: "qualifications",
    qualification: "Bachelors",
    percentage: "",
    cgpa: "",
    specifics: "",
    completion_year: "",
  });

  const [mastersData, setMastersData] = useState({
    parent: "",
    parenttype: "",
    parentfield: "qualifications",
    qualification: "Masters",
    percentage: "",
    cgpa: "",
    specifics: "",
    completion_year: "",
  });

  const get10thQualification = (e) => {
    const { name, value } = e.target;
    setTenthData({
      ...tenthData,
      [name]: value,
    });
  };

  const get12thQualification = (e) => {
    const { name, value } = e.target;
    setTwelfthData({
      ...twelfthData,
      [name]: value,
    });
  };

  const getBachelorsQualification = (e) => {
    const { name, value } = e.target;
    setBachelorsData({
      ...bachelorsData,
      [name]: value,
    });
  };

  const getMastersQualification = (e) => {
    const { name, value } = e.target;
    setMastersData({
      ...mastersData,
      [name]: value,
    });
  };

  useEffect(() => {
    setQualifications([tenthData, twelfthData, bachelorsData, mastersData]);
  }, [tenthData, twelfthData, bachelorsData, mastersData]);

  useEffect(() => {
    setUserData({ ...userData, qualifications });
  }, [qualifications]);

  const handleEdit = () => {
    setEditable(!editable);
    if (editable == false) {
      console.log(userData);
      updateDoc("Student", data.name, userData)
        .then(() => toast.success("Edited successfully"))
        .catch((error) => {
          toast.warning("No changes made");
          console.log(error.message);
        });
    }
  };

  return (
    <div className="container">
      <div className="p-2">
        <h2
          style={{ color: "#067BC2", fontWeight: "bolder", marginTop: "50px" }}
        >
          Hello {inputData.name1} 👋
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim
          voluptatum a quos fuga aperiam id reiciendis deserunt beatae, dolores,
          quis sint cum eum exercitationem harum laboriosam doloremque tempore
          hic.
        </p>
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4 fw-bold">Personal Details</h2>
          {editable ? (
            <button
              className="ms-auto py-2  px-3 shadow border "
              style={{
                backgroundColor: "#067BC2",
                borderRadius: "20px",
                textDecoration: "none",
                width: "7rem",
              }}
              onClick={() => handleEdit()}
            >
              <span className="p-2" style={{ color: "white" }}>
                Edit
              </span>
              <img src={edit} alt="" />
            </button>
          ) : (
            <button
              className="ms-auto py-2  px-3 shadow border "
              style={{
                backgroundColor: "#067BC2",
                borderRadius: "20px",
                textDecoration: "none",
                width: "7rem",
              }}
              onClick={() => handleEdit()}
            >
              <span className="p-2" style={{ color: "white" }}>
                Save
              </span>
              <img src={save} alt="" height={20} />
            </button>
          )}
        </div>
      </div>
      <div className="row p-3">
        <div className="col-lg-2 d-flex justify-content-center">
          <div
            style={{
              position: "relative",
              width: "140px",
              height: "140px",
            }}
            className="rounded-circle"
          >
            <img
              src={ellipse}
              className="rounded-circle"
              alt="rounded image"
              style={{ width: "100%", height: "100%" }}
            />
            <div style={{ position: "absolute", bottom: "0", right: "0" }}>
              <img src={frame} className="" alt="rounded image" />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          {/* input section */}

          <form action="">
            {/* name */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "100px" }}>Name</label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1 || ""}
                disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Name"
                style={{ fontSize: "15px", border: "none" }}
              />
            </div>
            {/* mail id */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "100px" }}>
                Mail ID
              </label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email || ""}
                disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Mail ID"
                style={{ fontSize: "15px", border: "none" }}
              />
            </div>
            {/* phone number */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "100px" }}>
                Phone No
              </label>
              <input
                className="inputBox shadow "
                type="number"
                name="phone"
                value={inputData.phone || ""}
                disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter PhoneNo"
                style={{ fontSize: "15px", border: "none", appearance: "none" }}
              />
            </div>
            {/* gender */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "100px" }}>Gender</label>
              <select
                className="inputBox shadow "
                aria-label="Default select example"
                name="gender"
                disabled={editable}
                onChange={(e) => getInputData(e)}
                value={inputData.gender || ""}
                style={{ fontSize: "15px", border: "none" }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </form>
        </div>
        {/* next section  */}

        <div className="col-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "100px" }}
            >
              DOB
            </label>
            <input
              className="inputBox shadow "
              type="date"
              name="dob"
              value={inputData.dob || ""}
              disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder="Select DOB"
              style={{ fontSize: "15px", border: "none", color: "gray" }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label className="" style={{ color: "#067BC2", width: "100px" }}>
              Passport No
            </label>
            <input
              className="inputBox shadow "
              type="text"
              name="PassportNo"
              value={inputData.passport_no || ""}
              disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder="Enter Passport No"
              style={{ fontSize: "15px", border: "none" }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex"
              style={{ color: "#067BC2", width: "100px" }}
            >
              Address
            </label>
            <textarea
              className="inputBox shadow  "
              name="address"
              value={inputData.address || ""}
              disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder="Enter Address"
              style={{ fontSize: "15px", border: "none" }}
            />
          </div>
        </div>
      </div>
      <div className="p-2 ">
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4 fw-bold">Education Info</h2>
          {editable ? (
            <button
              className="ms-auto py-2  px-3 shadow border "
              style={{
                backgroundColor: "#067BC2",
                borderRadius: "20px",
                textDecoration: "none",
                width: "7rem",
              }}
              onClick={() => handleEdit()}
            >
              <span className="p-2" style={{ color: "white" }}>
                Edit
              </span>
              <img src={edit} alt="" />
            </button>
          ) : (
            <button
              className="ms-auto py-2  px-3 shadow border "
              style={{
                backgroundColor: "#067BC2",
                borderRadius: "20px",
                textDecoration: "none",
                width: "7rem",
              }}
              onClick={() => handleEdit()}
            >
              <span className="p-2" style={{ color: "white" }}>
                Save
              </span>
              <img src={save} alt="" height={20} />
            </button>
          )}
        </div>
      </div>

      {/* education info */}
      <div className=" row ">
        <div className="col"></div>
        <div className="col-lg-5  ">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              10th Grade
            </label>
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "100px", height: "43px" }}
            >
              Percentage
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="percentage"
              value={tenthData.percentage || ""}
              onChange={(e) => get10thQualification(e)}
              disabled={editable}
              placeholder="%"
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "60px ",
              }}
            />
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "70px", height: "43px" }}
            >
              CGPA
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="cgpa"
              value={tenthData.cgpa || ""}
              onChange={(e) => get10thQualification(e)}
              disabled={editable}
              placeholder=""
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "70px ",
              }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className="d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              12th Grade
            </label>
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "100px", height: "43px" }}
            >
              Percentage
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="percentage"
              value={twelfthData.percentage || ""}
              onChange={(e) => get12thQualification(e)}
              disabled={editable}
              placeholder="%"
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "60px ",
              }}
            />
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "70px", height: "43px" }}
            >
              CGPA
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="cgpa"
              value={twelfthData.cgpa || ""}
              onChange={(e) => get12thQualification(e)}
              disabled={editable}
              placeholder=""
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "70px ",
              }}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Bachelors
            </label>
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "100px", height: "43px" }}
            >
              Percentage
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="percentage"
              value={bachelorsData.percentage || ""}
              onChange={(e) => getBachelorsQualification(e)}
              disabled={editable}
              placeholder="%"
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "60px ",
              }}
            />
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "70px", height: "43px" }}
            >
              CGPA
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="cgpa"
              value={bachelorsData.cgpa || ""}
              onChange={(e) => getBachelorsQualification(e)}
              disabled={editable}
              placeholder=""
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "70px ",
              }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Masters
            </label>
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "100px", height: "43px" }}
            >
              Percentage
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="percentage"
              value={mastersData.percentage || ""}
              onChange={(e) => getMastersQualification(e)}
              disabled={editable}
              placeholder="%"
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "60px ",
              }}
            />
            <label
              className=" d-flex align-items-center"
              style={{ color: "gray", width: "70px", height: "43px" }}
            >
              CGPA
            </label>
            <input
              className="inputBox shadow "
              type="number"
              name="cgpa"
              value={mastersData.cgpa || ""}
              onChange={(e) => getMastersQualification(e)}
              disabled={editable}
              placeholder=""
              style={{
                fontSize: "15px",
                border: "none",
                color: "gray",
                width: "70px ",
              }}
            />
          </div>
        </div>
        <div className="col"></div>
      </div>
      {/* Upload Documents */}
      <div className="p-2 ">
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4 fw-bold">Upload Documents </h2>
          {editable ? (
            <button
              className="ms-auto py-2  px-3 shadow border "
              style={{
                backgroundColor: "#067BC2",
                borderRadius: "20px",
                textDecoration: "none",
                width: "7rem",
              }}
              onClick={() => handleEdit()}
            >
              <span className="p-2" style={{ color: "white" }}>
                Edit
              </span>
              <img src={edit} alt="" />
            </button>
          ) : (
            <button
              className="ms-auto py-2  px-3 shadow border "
              style={{
                backgroundColor: "#067BC2",
                borderRadius: "20px",
                textDecoration: "none",
                width: "7rem",
              }}
              onClick={() => handleEdit()}
            >
              <span className="p-2" style={{ color: "white" }}>
                Save
              </span>
              <img src={save} alt="" height={20} />
            </button>
          )}
        </div>
      </div>
      <div className="row">
        {/* General Documents */}
        <div className="col-sm-4">
          <div className="p-2 ">
            <div className="titleBar d-flex shapeParent mt-5 ">
              <div className="shape" style={{ height: "25px" }}></div>
              <h2 className="fs-5 ms-4">General Documents</h2>
            </div>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              CV/Resume*
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              SOP*
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              LOR*
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Passport*
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
        </div>
        {/* Academic certificate */}
        <div className="col-sm-4">
          <div className="p-2 ">
            <div className="titleBar d-flex shapeParent mt-5 ">
              <div className="shape" style={{ height: "25px" }}></div>
              <h2 className="fs-5 ms-4">Academic certificate</h2>
            </div>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              10th Grade*
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              12th Grade*
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Bachelors
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Masters
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
        </div>
        {/* Additional Documents */}
        <div className="col-sm-4 mb-4">
          <div className="p-2 ">
            <div className="titleBar d-flex shapeParent mt-5 ">
              <div className="shape" style={{ height: "25px" }}></div>
              <h2 className="fs-5 ms-4">Additional Documents</h2>
            </div>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Documents 1
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Documents 2
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Documents 3
            </label>
            <button
              className=" py-2  px-3 shadow border"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
