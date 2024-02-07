import React from "react";
import { Link } from "react-router-dom";

function ProjectList() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Projects list</h1>
        <table>
          <thead>
            <tr>
              <th align="center">Day</th>
              <th align="center">Completed Project</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">001</td>
              <td align="center">
                <Link to="/001" className="project-links">
                  Random Meal Generator
                </Link>
              </td>
            </tr>

            <tr>
              <td align="center">002</td>
              <td align="center">
                <Link to="/002" className="project-links">
                  2019 Mood Calendar
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectList;
