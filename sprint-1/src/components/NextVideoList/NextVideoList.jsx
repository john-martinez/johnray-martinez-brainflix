import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import videos from '../../assets/Imports/sideVideo';
import './NextVideoList.scss';

class NextVideoList extends Component {
    render(){
        return (
            <section className="next-video-list">
                <h4>NEXT VIDEO</h4>
                {videos
                .filter(item=>item.id !== this.props.mainVideoId)
                .map(item=><NextVideo image={item} key={item.id} /> )}
            </section>    
        );
    }
}

export default NextVideoList;