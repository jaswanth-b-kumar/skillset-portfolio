import React from 'react';
import MainHead from '../../Containers/MainHead/MainHead';
import './Experience.scss'

function Experience() {
  return (
    <div className="container-fluid experience-container">
      <MainHead content="Career Insights" classes="mt-3" />
      <p>My professional journey has been defined by my time at Accenture,
        where I've woked as developer and Senior Developer, each role marked by unique challenges and achievements.
        As I navigate my career path, I am proud to showcase my contributions to innovative projects and my mastery of the technologies I worked on.
        Below are the projects <small>(starting with the latest)</small>, roles, experiences, skills, and growth that have shaped my career story.</p>
      <h5>Project #2</h5>
      <table className="table table-dark table-striped-columns project-table">
        <tbody>
          <tr>
            <td>Project</td>
            <td>myConcerto - Design Library</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>Advanced Application Engineering Senior Analyst</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>May 2022 - Present</td>
          </tr>
          <tr>
            <td>Skills Used</td>
            <td>
              <div className="table-chips">React.js</div>
              <div className="table-chips">axios</div>
              <div className="table-chips">css</div>
              <div className="table-chips">scss</div>
              <div className="table-chips">html</div>
              <div className="table-chips">Javascript</div>
              <div className="table-chips">npm</div>
              <div className="table-chips">Bootstrap</div>
              <div className="table-chips">react-redux</div>
              <div className="table-chips">react-router</div>
            </td>
          </tr>
        </tbody>
      </table>
      <h5>Project #1</h5>
      <table className="table table-dark table-striped-columns project-table">
        <tbody>
          <tr>
            <td>Project</td>
            <td>myConcerto Client Portals</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>Advanced Application Engineering Analyst</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>September 2020 - May 2022</td>
          </tr>
          <tr>
            <td>Skills Used</td>
            <td>
              <div className="table-chips">html</div>
              <div className="table-chips">Javascript</div>
              <div className="table-chips">css</div>
              <div className="table-chips">Bootstrap</div>
              <div className="table-chips">JQuery</div>
              <div className="table-chips">JQuery - Tables</div>
              <div className="table-chips">JQuery UI</div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Experience