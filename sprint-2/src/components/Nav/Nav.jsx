import React from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';
import search from '../../assets/Icons/SVG/Icon-search.svg';
import upload from '../../assets/Icons/SVG/Icon-upload.svg';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav () {
  return (
    <nav className="nav">
      <div className="nav__left"> 
        <Link to="/" className="nav__logo"> <img className="nav__logo" src={logo} alt="brainflix logo" /> </Link>
      </div>
      <div className="nav__right">
        <div className="nav__search-container"> 
            <input className="nav__search" type="text" name="search" placeholder="Search" />
            <img src={search} className="nav__search-icon" alt="magnifying glass"></img>
          </div>
          <div className="nav__actions">
            <Link to="/upload" className="nav__button">
              <button className="nav__button"> 
                <img className="nav__upload-icon" src={upload}  alt="upload icon" /> 
                <span className="nav__uload-text">UPLOAD</span> 
              </button>
            </Link>
            <img src={user} className="nav__user" alt="Mohan Murugi side view"></img>
          </div>
        </div>
    </nav>
  );
}

export default Nav;


