import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Video from '../Video/Video';
import CommentSection from '../CommentSection/CommentSection';
import NextVideoList from '../NextVideoList/NextVideoList';

function App() {
  return (
    <main>
      <Header />
      <Video />
      <CommentSection />
      <NextVideoList />
    </main>
  );
}

export default App;
