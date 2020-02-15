import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import videos from '../../assets/Imports/sideVideo';
import './NextVideoList.scss';

class NextVideoList extends Component {
    render(){
        const container = [];
        videos.forEach(item=>{
            if (item.id !== this.props.mainVideoId)
                container.push(<NextVideo image={item} key={item.id} />) 
        })
        return (
            <section className="next-video-list">
                <h4>NEXT VIDEO</h4>
                {container}
            </section>    
        );  
    }
}

export default NextVideoList;