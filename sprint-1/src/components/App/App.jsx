import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <CommentForm />
        <CommentList />
      </>
    );
  }
}

export default App;
