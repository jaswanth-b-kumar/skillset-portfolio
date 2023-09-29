import React from 'react';
import profilePhoto from './../../Assets/Images/profile_photo.jpg'

function Home() {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col-9 col-sm-3 col-md-3 col-lg-3 text-center mx-auto mt-5">
          <img src={profilePhoto} className="img-fluid rounded col-6 img-thumbnail" alt='profile' />
        </div>
        <div className="col-9 col-sm-11 col-md-11 col-lg-11 mx-auto mt-5">
          <h2 className='about-head'>Jaswanth Kumar Bevara</h2>
          <h4 className='about-designation'>Advanced Application Engineering Analyst at Accenture</h4>
          <h6 className='about-role'>I am a skilled UI developer with a passion for crafting engaging and user-friendly digital experiences.</h6>
          <div className='about-description'>
            <p>As a passionate and driven UI Developer with above 3 years of experience, I thrive on creating exceptional user experiences through innovative front-end solutions. I have a strong expertise in React.js, HTML5, CSS, and JavaScript, and I continuously seek opportunities to enhance my skills and stay updated with cutting-edge technologies. </p>
            <p>Additionally using React.js, I am skilled with experience in SCSS, Bootstrap, React.js, and Redux. Using Redux for state management and React.js components and its ecosystem, I have successfully created dynamic user interfaces resulting in effective and maintainable codebases. I am familiar with responsive design principles and bootstrap.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home