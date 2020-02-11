import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
