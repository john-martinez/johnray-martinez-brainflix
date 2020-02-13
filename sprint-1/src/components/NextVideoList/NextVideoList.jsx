import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import videos from '../../assets/Imports/sideVideo';

class NextVideoList extends Component {
    render(){
        return (
            <section className="next-video-list">
                <h4>NEXT VIDEO</h4>
                {this.props.videos
                .filter(item=>item.id !== this.props.mainVideoId)
                .map(item=><NextVideo image={item} key={this.props.videos.id} /> )}
            </section>    
        );
    }
}

export default NextVideoList;