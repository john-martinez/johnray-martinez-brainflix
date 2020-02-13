import React from 'react';
import Video from '../Video/Video';
import CommentSection from '../CommentSection/CommentSection';
import videoData from '../../assets/Imports/videos';

function MainVideo(props) {
    return(
        <>
        <Video mainVideo={videoData} />
        <CommentSection comments={videoData.comments}/>
        </>
    );
}

export default MainVideo;