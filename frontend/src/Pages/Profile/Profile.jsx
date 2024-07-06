import { Link } from "react-router-dom";
import edit from "../../assets/Edit.svg";
import save from "../../assets/Save.svg";
import ellipse from "../../assets/profile image/Ellipse.svg";
import frame from "../../assets/profile image/Frame.svg";
import upload from "../../assets/profile image/upload.svg";
import { useFrappeGetDocList, useFrappeUpdateDoc } from "frappe-react-sdk";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Components/ContextShare";
import { toast } from "react-toastify";

function Profile() {
  const { userData, setUserData } = useContext(userContext);

  const [editable, setEditable] = useState(true);

  const [inputData, setInputData] = useState({
    name1: "",
    address: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    passport_no: "",
  });

  const loggedData = JSON.parse(localStorage.getItem("userData"));

  const { data, error, isValidating } = useFrappeGetDocList("Student", {
    fields: [
      "name",
      "name1",
      "address",
      "dob",
      "gender",
      "status",
      "country",
      "email",
      "phone",
      "qualifications",
      "passport_no",
      "notes",
      "photo",
      "files",
    ],
    filters: [["email", "=", loggedData.email]],
  });

  useEffect(() => {
    if (data) setInputData(data[0]);
  }, [data]);

  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  useEffect(() => {
    setUserData(inputData);
  }, [inputData]);

  const { updateDoc } = useFrappeUpdateDoc();

  const handleEdit = () => {
    setEditable(!editable);
    if (editable == false) {
      updateDoc("Student", data[0].name, userData)
        .then(() => toast.success("Edited successfully"))
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <div className="container">
      <div className="p-2">
        <h2
          style={{ color: "#067BC2", fontWeight: "bolder", marginTop: "50px" }}
        >
          Hello {userData?.name1} 👋
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
          <button
            className="ms-auto py-2 px-3 shadow border"
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
              width: "110px",
            }}
            onClick={() => handleEdit()}
          >
            {editable ? (
              <div>
                <span className="p-2" style={{ color: "white" }}>
                  Edit
                </span>
                <img src={edit} alt="" />
              </div>
            ) : (
              <div>
                <span className="p-2" style={{ color: "white" }}>
                  Save
                </span>
                <img src={save} alt="" width={20} />
              </div>
            )}
          </button>
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
              <label style={{ color: "#067BC2", width: "70px" }}>Name</label>
              <input
                className="inputBox shadow "
                type="text"
                name="name1"
                value={inputData.name1}
                disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter Name"
                style={{ fontSize: "15px", border: "none" }}
              />
            </div>
            {/* mail id */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "70px" }}>Mail ID</label>
              <input
                className="inputBox shadow "
                type="email"
                name="email"
                value={inputData.email}
                disabled
                onChange={(e) => getInputData(e)}
                placeholder="Enter Mail ID"
                style={{ fontSize: "15px", border: "none" }}
              />
            </div>
            {/* phone number */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "70px" }}>PhoneNo</label>
              <input
                className="inputBox shadow "
                type="number"
                name="phone"
                value={inputData.phone}
                disabled={editable}
                onChange={(e) => getInputData(e)}
                placeholder="Enter PhoneNo"
                style={{ fontSize: "15px", border: "none", appearance: "none" }}
              />
            </div>
            {/* gender */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "70px" }}>Gender</label>
              <select
                className="inputBox shadow "
                aria-label="Default select example"
                name="gender"
                onChange={(e) => getInputData(e)}
                disabled={editable}
                style={{ fontSize: "15px", border: "none" }}
              >
                <option selected>{inputData.gender}</option>
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
              style={{ color: "#067BC2", width: "70px", height: "43px" }}
            >
              DOB
            </label>
            <input
              className="inputBox shadow "
              type="date"
              name="dob"
              value={inputData.dob}
              disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder="Select DOB"
              style={{ fontSize: "15px", border: "none", color: "gray" }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label className="" style={{ color: "#067BC2", width: "70px" }}>
              Passport No
            </label>
            <input
              className="inputBox shadow "
              type="text"
              name="PassportNo"
              value={inputData.passport_no}
              disabled={editable}
              onChange={(e) => getInputData(e)}
              placeholder="Enter Passport No"
              style={{ fontSize: "15px", border: "none" }}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex"
              style={{ color: "#067BC2", width: "70px", height: "43px" }}
            >
              Address
            </label>
            <textarea
              className="inputBox shadow  "
              name="address"
              value={inputData.address}
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
          <button
            className="ms-auto py-2  px-3 shadow border "
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
              width: "110px",
            }}
            onClick={() => handleEdit()}
          >
            {editable ? (
              <div>
                <span className="p-2" style={{ color: "white" }}>
                  Edit
                </span>
                <img src={edit} alt="" />
              </div>
            ) : (
              <div>
                <span className="p-2" style={{ color: "white" }}>
                  Save
                </span>
                <img src={save} alt="" width={20} />
              </div>
            )}
          </button>
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
              type="text"
              name="grade"
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
          <button
            className="ms-auto py-2  px-3 shadow border"
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
              width: "110px",
            }}
            onClick={() => handleEdit()}
          >
            {editable ? (
              <div>
                <span className="p-2" style={{ color: "white" }}>
                  Edit
                </span>
                <img src={edit} alt="" />
              </div>
            ) : (
              <div>
                <span className="p-2" style={{ color: "white" }}>
                  Save
                </span>
                <img src={save} alt="" width={20} />
              </div>
            )}
          </button>
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
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              SOP*
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              LOR*
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Passport*
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
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
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              12th Grade*
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Bachelors
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Masters
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
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
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Documents 2
            </label>
            <Link
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
          <div className="form-group d-lg-flex align-items-center gap-3 p-2">
            <label
              className=" d-flex align-items-center"
              style={{ color: "#067BC2", width: "110px", height: "43px" }}
            >
              Documents 3
            </label>
            <Link
              className=" py-2  px-3 shadow"
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{ width: "30px" }} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
