import React, { Component } from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';
import search from '../../assets/Icons/SVG/Icon-search.svg';
import upload from '../../assets/Icons/SVG/Icon-upload.svg';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="brainflix logo"></img> 
            <div className="nav__search-container"> 
              <input className="nav__search" type="text" name="search" placeholder="Search" />
              <img src={search} className="nav__search-icon" alt="magnifying glass"></img>
            </div>
            <div className="nav__actions">
                <button className="nav__button"> <img className="nav__upload-icon" src={upload} /> UPLOAD </button>
                <img src={user} className="nav__user" alt="Mohan Murugi side view"></img>
            </div>
        </nav>
    );
  }
}

export default Nav;


