import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import CommentSection from '../CommentSection/CommentSection';
import NextVideoList from '../NextVideoList/NextVideoList';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        <CommentSection />
        <NextVideoList />
      </main>
    );
  }
}

export default App;
