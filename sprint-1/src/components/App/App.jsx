import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import CommentSection from '../CommentSection/CommentSection';
import NextVideoList from '../NextVideoList/NextVideoList';

function App() {
  return (
    <main>
      <Header />
      <CommentSection />
      <NextVideoList />
    </main>
  );
}

export default App;
