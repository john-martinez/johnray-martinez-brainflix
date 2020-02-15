import React, { Component } from 'react';
import Header from '../Header/Header';
import NextVideoList from '../NextVideoList/NextVideoList';
import MainVideo from '../MainVideo/MainVideo';
import './App.scss';
import mainVideo from '../../assets/Imports/mainVideo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {mainVideoId: mainVideo.id}
  }

  render() {
    return (
      <main>
        <Header />
        <MainVideo  />
        <NextVideoList mainVideoId={this.state.mainVideoId}/>
      </main>
    );
  }
}

export default App;
