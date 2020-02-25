import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import { Link } from 'react-router-dom';
import './NextVideoList.scss';

class NextVideoList extends Component {
    render(){
        return (
            <section className="next-video-list">
                <h4 className="next-video-list__header">NEXT VIDEO</h4>
                { this.props.nextVideoList.map(item=>{
                    return item.id !== this.props.mainVideoId 
                    ? <Link to={`/videos/${item.id}`} key={item.id} > <NextVideo image={item} /> </Link>
                    : '' })
                }
            </section>    
        );  
    }
}

export default NextVideoList; 