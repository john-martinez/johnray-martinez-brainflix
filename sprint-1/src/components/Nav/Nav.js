import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <nav className="nav">
            <img className="nav__logo" src={require('../../assets/Logo/Logo-brainflix.svg')} alt="brainflix logo"></img> 
            <input className="nav__search" type="text" name="search" placeholder="🔎 Search" />
            <div className="nav__actions">
                <button className="nav__button"> + UPLOAD </button>
                <div className="nav__user"></div>
            </div>
        </nav>
    );
  }
}

export default Nav;


