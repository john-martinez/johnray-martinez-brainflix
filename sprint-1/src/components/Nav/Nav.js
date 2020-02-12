import React, { Component } from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import user from '../../assets/Images/Mohan-muruge.jpg';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="brainflix logo"></img> 
            <input className="nav__search" type="text" name="search" placeholder="🔎 Search" />
            <div className="nav__actions">
                <button className="nav__button"> + UPLOAD </button>
                <img src={user} className="nav__user" alt="Mohan Murugi side view"></img>
            </div>
        </nav>
    );
  }
}

export default Nav;


