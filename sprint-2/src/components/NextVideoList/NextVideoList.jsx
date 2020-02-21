import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import { Link } from 'react-router-dom';
import './NextVideoList.scss';

class NextVideoList extends Component {
    render(){
        const nextVideoList = [];
        this.props.nextVideoList.forEach(item=>{
            let newPath = this.props.match.url;
            newPath = newPath.split('/');
            newPath.splice(2,1,item.id)
            newPath = newPath.join('/');
            if (item.id !== this.props.mainVideoId){
                nextVideoList.push(<Link to={newPath} key={item.id} > <NextVideo image={item} /> </Link>) 
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