import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import CommentSection from '../CommentSection/CommentSection';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        <CommentSection />
      </main>
    );
  }
}

export default App;
