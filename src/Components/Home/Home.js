import React from 'react';
import profilePhoto from './../../Assets/Images/profile_photo.jpg';
import * as icons from 'react-bootstrap-icons';
import './Home.scss'

function Home() {
  return (
    <div className="container about-container">
      <div className="card mt-5">
        <div className="row gx-0">
          <div className="col-11 col-sm-3 col-md-3 col-lg-3 text-center mx-auto">
            <img src={profilePhoto} className="img-fluid rounded img-thumbnail" alt='profile' />
          </div>
          <div className="col-11 col-sm-9 col-md-9 col-lg-9 mx-auto card-customflex">
            <div class="card-header">
              <div className="card-head card-text-custom"><span><icons.PersonSquare /></span><span className="m-2">Jaswanth Kumar Bevara</span></div>
            </div>
            <div className="card-body">
              <div className="card-subhead  mb-2 text-body-secondary card-text-custom"><span><icons.CodeSlash /></span><span className="m-2">UI Developer</span></div>
              <div className="card-subhead  mb-2 text-body-secondary card-text-custom"><span><icons.Briefcase /></span><span className="m-2">Advanced Application Engineering Analyst at Accenture</span></div>
              <div className="card-subhead  mb-2 text-body-secondary card-text-custom"><span><icons.Buildings /></span><span className="m-2">NIT Surathkal, Karnataka</span></div>
              <div className="card-subhead  mb-2 text-body-secondary card-text-custom">
                <span className="line-height-custom">
                  I have over 3+ years of dedicated UI development experience, and I have a focus on cutting-edge technologies like React.js, HTML5, SCSS, CSS, JavaScript, JQuery and Bootstrap.
                  My interest in learning and encouraging a collaborative, inclusive team culture is motivated by my passion for designing outstanding user experiences.
                  I enjoy a challenge, and my goal is to contribute to initiatives that push the limits of front-end development.
                </span>
              </div>
            </div>
            {/* <div class="card-footer">
              <div className="card-head card-text-custom"><span><icons.PersonSquare /></span><span className="m-2">Jaswanth Kumar Bevara</span></div>
            </div> */}
          </div>
        </div>
      </div>
      <div className='about-description'>
        <p>As a passionate and driven UI Developer with above 3 years of experience, I thrive on creating exceptional user experiences through innovative front-end solutions. I have a strong expertise in React.js, HTML5, CSS, and JavaScript, and I continuously seek opportunities to enhance my skills and stay updated with cutting-edge technologies. </p>
        <p>Additionally using React.js, I am skilled with experience in SCSS, Bootstrap, React.js, and Redux. Using Redux for state management and React.js components and its ecosystem, I have successfully created dynamic user interfaces resulting in effective and maintainable codebases. I am familiar with responsive design principles and bootstrap.</p>
      </div>
    </div>
  )
}

export default Home