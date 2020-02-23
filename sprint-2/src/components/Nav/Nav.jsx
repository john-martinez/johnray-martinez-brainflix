import React from 'react';
import logo from '../../assets/logo/Logo-brainflix.svg';
import user from '../../assets/images/Mohan-muruge.jpg';
import search from '../../assets/icons/SVG/Icon-search.svg';
import upload from '../../assets/icons/SVG/Icon-upload.svg';
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
              <div>
                <img className="nav__upload-icon" src={upload}  alt="upload icon" /> 
                <span className="nav__upload-text">UPLOAD</span> 
              </div>
            </Link>
            <img src={user} className="nav__user" alt="Mohan Murugi side view"></img>
          </div>
        </div>
    </nav>
  );
}

export default Nav;


