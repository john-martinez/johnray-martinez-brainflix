import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import CommentSection from '../../components/CommentSection/CommentSection';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import views from '../../assets/Icons/SVG/Icon-views.svg';
import likes from '../../assets/Icons/SVG/Icon-likes.svg';
import mainVideo from '../../assets/Imports/mainVideo';
import './Video.scss';

class Video extends Component {
    state = { mainVideo }
    year = new Date(this.state.mainVideo.timestamp).getFullYear();
    month = new Date(this.state.mainVideo.timestamp).getMonth();    
    day = new Date(this.state.mainVideo.timestamp).getDate();
    
    render() {
        return (
            <section className="video">
                <VideoPlayer video={this.state.mainVideo} />
                <div className="video__main-container">
                    <div className="video__details">
                        <h2 className="video__title">{this.state.mainVideo.title}</h2>
                        <div className="video__blurb">
                            <div className="video__details--flex">
                                <span className="video__channel"><strong>{this.state.mainVideo.channel}</strong></span>
                                <span className="video__timestamp">{`${this.month}/${this.day}/${this.year}`}</span>
                            </div>  
                            <div className="video__stats-container">
                                <span className="video__stats">
                                    <img className="video__stat-icon" src={views} alt="views icon"/>
                                    <span className="video__stat-value"> {this.state.mainVideo.views} </span>
                                </span>
                                <span className="video__stats">
                                    <img className="video__stat-icon" src={likes} alt="likes icon"/>
                                    <span className="video__stat-value"> {this.state.mainVideo.likes} </span>
                                </span>
                            </div>
                        </div>
                        <hr />
                        <p className="video__description"> {this.state.mainVideo.description} </p>
                        <CommentSection comments={this.state.mainVideo.comments}/>
                    </div>
                    <NextVideoList mainVideoId={this.state.mainVideo.id}/>
                </div>
            </section>
        );
    }
}

export default Video;