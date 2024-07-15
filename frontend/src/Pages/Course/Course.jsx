import { useContext, useEffect, useState } from "react";
import { courseContext } from "../../Components/ContextShare";
import { useNavigate } from "react-router-dom";
import { useFrappeGetDoc, useFrappeUpdateDoc } from "frappe-react-sdk";
import { toast } from "react-toastify";

function Course({ setShow }) {
  useEffect(() => {
    setShow(true);
  });

  const { updateDoc } = useFrappeUpdateDoc();
  const navigate = useNavigate();
  const [isInterested, setIsInterested] = useState(false);
  const { courseData } = useContext(courseContext);
  let loggedData = JSON.parse(localStorage.getItem("userData"));
  const { data } = useFrappeGetDoc("Student", loggedData.name);

  useEffect(() => {
    if (data) {
      data.interested_courses.map((item) => {
        if (
          item.course == courseData.course &&
          item.university == courseData.university
        )
          setIsInterested(true);
      });
    }
  }, [data]);

  const gotoApplication = (courseData) => {
    if (data) {
      const {
        branch,
        course,
        duration,
        exam_accepted,
        fee,
        level,
        mode,
        university,
      } = courseData;
      updateDoc("Student", data.name, {
        interested_courses: [
          ...data.interested_courses,
          {
            parent: data?.name,
            parenttype: data?.doctype,
            parentfield: "interested_courses",
            branch,
            course,
            duration,
            exam_accepted,
            fee,
            level,
            mode,
            university,
          },
        ],
      }).then(() => {
        setIsInterested(true);
        toast.success("You put this course on interested");
      });
    }
  };

  return (
    <section id="courseContainer">
      <div className="container my-5 py-2">
        <div
          className="courseCard rounded shadow d-flex justify-content-between align-items-center p-5 mb-5"
          style={{ position: "relative" }}
        >
          <div>
            <div className="courseTitle" style={{ color: "#067bc2" }}>
              <h2>{courseData.course}</h2>
            </div>
            <div className="universityTitle">
              <h4 className="text-body-tertiary">{courseData.university}</h4>
            </div>
          </div>
          <div className="text-center">
            <div
              className="universityImage mb-3"
              style={{
                height: "140px",
                width: "140px",
                backgroundColor: "lavender",
              }}
            >
              <img src="" alt="University" />
            </div>
            <div className="courseButton">
              {isInterested ? (
                <button
                  className="btn rounded"
                  style={{
                    backgroundColor: "#39C6B5",
                    color: "white",
                  }}
                >
                  Interested
                </button>
              ) : (
                <button
                  className="btn rounded"
                  style={{
                    backgroundColor: "#067bc2",
                    color: "white",
                  }}
                  onClick={() => gotoApplication(courseData)}
                >
                  Add to Interest
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="courseDetails row m-2 gap-5">
          <div className="description col px-5 py-4 shadow rounded shapeParent">
            <div className="shape"></div>
            <h4>Description</h4>
            <div className="description d-flex justify-content-between mt-3">
              <p>Duration</p>
              <p>{courseData.duration}</p>
            </div>
            <div className="description d-flex justify-content-between">
              <p>Level</p>
              <p>{courseData.level}</p>
            </div>
            <div className="description d-flex justify-content-between">
              <p>Fees</p>
              <p>{courseData.fee}</p>
            </div>
          </div>
          <div className="cutoffs col px-5 py-4 shadow rounded shapeParent">
            <div className="shape"></div>
            <h4>Cutoffs</h4>
            <div className="exams d-flex justify-content-between mt-3">
              <p>Exam name</p>
              <p>Mark</p>
            </div>
            <div className="exams d-flex justify-content-between">
              <p>Exam name</p>
              <p>Mark</p>
            </div>
            <div className="exams d-flex justify-content-between">
              <p>Exam name</p>
              <p>Mark</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
