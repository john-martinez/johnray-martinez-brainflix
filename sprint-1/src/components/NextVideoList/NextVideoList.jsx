import React, { Component } from 'react';
import NextVideo from '../NextVideo/NextVideo';
import gallery from '../../assets/Imports/Images';

class NextVideoList extends Component {
    render(){
        return (
            <section className="next-video-list">
                <h4>NEXT VIDEO</h4>
                {gallery.images.map((item,i)=> <NextVideo image={item} key={i} /> )}
            </section>    
        );
    }
}

export default NextVideoList;