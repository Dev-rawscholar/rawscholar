import { Link } from "react-router-dom";
import edit from "../../assets/Edit.svg";
import ellipse from "../../assets/profile image/Ellipse.svg";
import frame from "../../assets/profile image/Frame.svg";
import upload from "../../assets/profile image/upload.svg";

function Profile() {
  return (
    <div className="container">
      <div className="p-2 ">
        <h2 style={{ color: "#067BC2", fontWeight: "bolder" }}>
          Hello Suresh Raina 👋
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim
          voluptatum a quos fuga aperiam id reiciendis deserunt beatae, dolores,
          quis sint cum eum exercitationem harum laboriosam doloremque tempore
          hic.
        </p>
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4">Personal Details</h2>
          <Link
            className="ms-auto py-2  px-3 shadow  "
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
            }}
          >
            <span className="p-2" style={{ color: "white" }}>
              Edit
            </span>
            <img src={edit} alt="" />
          </Link>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-lg-2">
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
                name="name"
                placeholder="Enter Name"
                style={{ fontSize: "15px", border: "none" }}
              />
            </div>
            {/* mail id */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "70px" }}>Mail ID</label>
              <input
                className="inputBox shadow "
                type="text"
                name="mail"
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
                name="phonenumber"
                placeholder="Enter PhoneNo"
                style={{ fontSize: "15px", border: "none" }}
              />
            </div>
            {/* gender */}
            <div className="form-group d-lg-flex align-items-center gap-3 p-2">
              <label style={{ color: "#067BC2", width: "70px" }}>Gender</label>
              <select
                className="inputBox shadow "
                aria-label="Default select example"
                style={{ fontSize: "15px", border: "none" }}
              >
                <option selected>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
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
              placeholder="Enter Address"
              style={{ fontSize: "15px", border: "none" }}
            />
          </div>
        </div>
      </div>
      <div className="p-2 ">
        <div className="titleBar d-flex shapeParent mt-5 ">
          <div className="shape"></div>
          <h2 className="fs-4 ms-4">Education Info</h2>
          <Link
            className="ms-auto py-2  px-3 shadow  "
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
            }}
          >
            <span className="p-2" style={{ color: "white" }}>
              Edit
            </span>
            <img src={edit} alt="" />
          </Link>
        </div>
      </div>

      {/* education info */}
      <div className=" row ">
        <div className="col"></div>
        <div className="col-lg-5 ">
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
          <h2 className="fs-4 ms-4">Upload Documents </h2>
          <Link
            className="ms-auto py-2  px-3 shadow  "
            style={{
              backgroundColor: "#067BC2",
              borderRadius: "20px",
              textDecoration: "none",
            }}
          >
            <span className="p-2 " style={{ color: "white" }}>
              Edit
            </span>
            <img src={edit} alt="" />
          </Link>
        </div>
      </div>
      <div className="row">
      {/* General Documents */}
        <div className="col-4">
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
              <img  style={{width:"30px"}} src={upload} alt="" />
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
              <img  style={{width:"30px"}} src={upload} alt="" />
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
              <img  style={{width:"30px"}} src={upload} alt="" />
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
              <img  style={{width:"30px"}} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
        </div>
        {/* Academic certificate */}
        <div className="col-4">
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
              <img style={{width:"30px"}}  src={upload} alt="" />
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
              <img  style={{width:"30px"}} src={upload} alt="" />
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
              <img style={{width:"30px"}}  src={upload} alt="" />
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
              <img  style={{width:"30px"}} src={upload} alt="" />
              <span className="p-2" style={{ color: "#39C6B5" }}>
                Upload
              </span>
            </Link>
          </div>
        </div>
        {/* Additional Documents */}
        <div className="col-4">
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
              <img style={{width:"30px"}}  src={upload} alt="" />
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
              <img style={{width:"30px"}} src={upload} alt="" />
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
              className=" py-2  px-3 shadow  "
              style={{
                borderRadius: "20px",
                textDecoration: "none",
              }}
            >
              <img style={{width:"30px"}} src={upload} alt="" />
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
