import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Header.scss'

function Header() {
    let [navActive,setNavActive] = useState(false);

    const handleNavBtn = () => {
        setNavActive(!navActive)
    }
    return (
        <nav className="container-fluid header-container navbar navbar-expand-lg navbar-dark navbar-custom-css justify-content-start">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={navActive ? "True" : "False"} aria-label="Toggle navigation" onClick={handleNavBtn}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand portfolio-logo blockquote h1 mt-2"><i>Jaswanth Portfolio Showcase</i></h1>
            <div className={`${navActive ? '' : 'collapse '}navbar-collapse justify-content-end nav-pills mt-2`} onClick={handleNavBtn} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto nav-ul-custom">
                    <li className="nav-item"><NavLink className="nav-link" to='/'><span>About</span></NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/experience'><span>Experience</span></NavLink></li>
                    {/* <li className="nav-item"><NavLink className="nav-link" to='/projects'><span>Projects</span></NavLink></li> */}
                    {/* <li className="nav-item"><NavLink className="nav-link" to='/contact'><span>Contact</span></NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header