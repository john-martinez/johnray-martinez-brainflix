import React from 'react';
import Header from '../Header/Header';
import Video from '../Video/Video';
import CommentSection from '../CommentSection/CommentSection';
import NextVideoList from '../NextVideoList/NextVideoList';
import videoData from '../../assets/Imports/videos';
import videos from '../../assets/Imports/sideVideo';
import './App.scss';

function App() {
  return (
    <main>
      <Header />
      <Video mainVideo={videoData} />
      <CommentSection comments={videoData.comments}/>
      <NextVideoList videos={videos} mainVideoId={videoData.id}/>
    </main>
  );
}

export default App;
