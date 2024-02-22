import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top" alt=""
                     style={{ height: 150, objectFit: "cover" }}/>
                <div className="card-body text-truncate">
                  <Link className="card-title stretched-link" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="mt-1 mb-0 card-text text-truncate">{course.name}</p>
                  <p className="card-text text-truncate"><small className="text-muted">{course._id}_1 {course.startDate} Full Term</small></p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;