import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './Header.scss';

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <header className="header">
          <Nav />
        </header>
    );
  }
}

export default Header;
