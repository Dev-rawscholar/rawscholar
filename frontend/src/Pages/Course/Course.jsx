import { useContext, useEffect } from "react";
import { courseContext } from "../../Components/ContextShare";
import { useNavigate } from "react-router-dom";

function Course({ setShow }) {
   useEffect(() => {
      setShow(true);
   });

   const navigate = useNavigate();
   const { courseData } = useContext(courseContext);

   const gotoApplication = (courseData) => {
      navigate("/");
   };

   return (
      <section id="courseContainer">
         <div className="container my-5 py-5">
            <div
               className="courseCard rounded shadow d-flex justify-content-between p-5 mb-5"
               style={{ position: "relative" }}
            >
               <div>
                  <div className="courseTitle" style={{ color: "#067bc2" }}>
                     <h2>{courseData.course}</h2>
                  </div>
                  <div className="universityTitle">
                     <h4 className="text-body-tertiary">
                        {courseData.university}
                     </h4>
                  </div>
               </div>
               <div className="universityImage">
                  <img src="" alt="University" />
               </div>
               <div
                  className="courseButtons d-flex justify-content-end gap-3"
                  style={{ position: "absolute", bottom: "-10%", right: "3%" }}
               >
                  <div
                     className="btn rounded"
                     style={{
                        border: "1px solid #067bc2",
                        color: "#067bc2",
                        backgroundColor: "white",
                        width: "120px",
                     }}
                  >
                     Visit Site
                  </div>
                  <div
                     className="btn rounded"
                     style={{
                        backgroundColor: "#067bc2",
                        color: "white",
                        width: "120px",
                     }}
                     onClick={() => gotoApplication(courseData)}
                  >
                     Apply Now
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
