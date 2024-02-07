import React from "react";

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
                <a
                  href="https://codepen.io/FlorinPop17/full/WNeggor"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Random Meal Generator
                </a>
              </td>
              <td align="center">
                <a href="/blog/2019/09/random-meal-generator">Link</a>
              </td>
            </tr>
            <tr>
              <td align="center">002</td>
              <td align="center">
                <a
                  href="https://codepen.io/FlorinPop17/full/eYOPdER"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  2019 Mood Calendar
                </a>
              </td>
              <td align="center">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectList;
