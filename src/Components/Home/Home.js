import React from 'react';
import profilePhoto from './../../Assets/Images/profile_photo.jpg';
import * as icons from 'react-bootstrap-icons';
import './Home.scss'

function Home() {
  return (
    <div className="container about-container">
      <div className="card mt-3 p-2">
        <div className="row gx-0">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 text-center mx-auto m-0-custom">
            <img src={profilePhoto} className="img-fluid rounded" alt='profile' />
          </div>
          <div className="col-12 col-sm-9 col-md-9 col-lg-9 mx-auto card-customflex m-0-custom">
            <div className="card-header">
              <div className="card-head card-text-custom"><span><icons.PersonSquare /></span><span className="m-2">Jaswanth Kumar Bevara</span></div>
            </div>
            <div className="card-body">
              <div className="card-subhead mb-2 text-body-secondary card-text-custom"><span><icons.CodeSlash /></span><span className="m-2">UI Developer</span></div>
              <div className="card-subhead mb-2 text-body-secondary card-text-custom"><span><icons.Briefcase /></span><span className="m-2">Advanced Application Engineering Analyst at Accenture</span></div>
              <div className="card-subhead mb-2 text-body-secondary card-text-custom"><span><icons.Buildings /></span><span className="m-2">NIT Surathkal, Karnataka</span></div>
              <div className="card-subhead mb-2 text-body-secondary card-text-custom mt-2">
                <span className="line-height-custom">
                  I have over 3+ years of dedicated UI development experience, and I have a focus on cutting-edge technologies like React.js, HTML5, SCSS, CSS, JavaScript, JQuery and Bootstrap.
                  My interest in learning and encouraging a collaborative, inclusive team culture is motivated by my passion for designing outstanding user experiences.
                  I enjoy a challenge, and my goal is to contribute to initiatives that improves my skills in front-end development.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-description'>
        <h1 className='mt-3'>About Me</h1>
        <p>
          My journey began with the role of Advanced Application Engineering Analyst at Accenture, where I honed with my skills in React.js,
          HTML5, CSS, and JavaScript, consistently delivering high-quality work and exceeding expectations. With a solid background in UI development,
          I've had the privilege of working in projects contributing to my growth as a professional in this field. While these
          experiences have been instrumental in establishing my foundation, I'm now eagerly seeking a new challenge that allows me to dive into advanced JavaScript
          frameworks and client-focused projects.
        </p>
        <p>
          Beyond my technical abilities, I take great pride in fostering a collaborative and inclusive team culture. I've actively supported and mentored new team
          members, believing that knowledge-sharing is essential for our collective growth. My commitment and a shared success mindset is at the core of my work philosophy,
          and I'm excited to continue pushing my boundaries of knowledge of UI development, contributing to the success of the team and the organization I work with.
        </p>
      </div>
    </div>
  )
}

export default Home