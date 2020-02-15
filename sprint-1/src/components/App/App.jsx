import React, { Component } from 'react';
import Header from '../Header/Header';
import NextVideoList from '../NextVideoList/NextVideoList';
import Video from '../Video/Video';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Video  />
      </main>
    );
  }
}

export default App;
