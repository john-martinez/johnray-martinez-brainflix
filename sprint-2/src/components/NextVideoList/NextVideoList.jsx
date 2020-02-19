import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import videos from '../../assets/Imports/sideVideo';
import './NextVideoList.scss';

class NextVideoList extends Component {
    render(){
        const nextVideoList = [];
        videos.forEach(item=>{
            if (item.id !== this.props.mainVideoId)
                nextVideoList.push(<NextVideo image={item} key={item.id} />) 
        })
        return (
            <section className="next-video-list">
                <h4 className="next-video-list__header">NEXT VIDEO</h4>
                {nextVideoList}
            </section>    
        );  
    }
}

export default NextVideoList;