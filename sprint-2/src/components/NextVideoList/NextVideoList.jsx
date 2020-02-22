import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import { Link } from 'react-router-dom';
import './NextVideoList.scss';

class NextVideoList extends Component {
    render(){
        const nextVideoList = [];
        this.props.nextVideoList.forEach(item=>{
            if (item.id !== this.props.mainVideoId){
                nextVideoList.push(<Link to={`/videos/${item.id}`} key={item.id} > <NextVideo image={item} /> </Link>) 
            }
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