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
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom-css">
            <h1 className="navbar-brand portfolio-logo blockquote">Jaswanth Kumar Bevara</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={navActive ? "True" : "False"} aria-label="Toggle navigation" onClick={handleNavBtn}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${navActive ? '' : 'collapse'} navbar-collapse justify-content-end nav-pills`} onClick={handleNavBtn} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto nav-ul-custom">
                    <li className="nav-item"><NavLink className="nav-link" to='/'><span>Home</span></NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/experience'><span>Experience</span></NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/projects'><span>Projects</span></NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/contact'><span>Contact</span></NavLink></li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Header