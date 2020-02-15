import React, { Component } from 'react';
import Video from '../Video/Video';
import CommentSection from '../CommentSection/CommentSection';
import mainVideo from '../../assets/Imports/mainVideo';

class MainVideo extends Component {
    constructor(){
        super()
        this.state = {mainVideo}
    }
    render(){
        return(
            <>
                <Video mainVideo={this.state.mainVideo} />
                <CommentSection comments={this.state.mainVideo.comments}/>
            </>
        );
    }
}

export default MainVideo;