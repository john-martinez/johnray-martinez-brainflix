import React, { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';


class CommentSection extends Component {
    constructor(props){
        super(props);

        this.comments = [{
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.", 
            timestamp: 1545109200000
          },
          {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!", 
            timestamp: 1545109200000
                      
          },
          {
            name: "Theodore Duncan ",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!", 
            timestamp: 1542258000000
          }]
    }
    render(){
        return (
            <section className="comment-section" >
                <CommentForm commentsLength={this.comments.length} />
                <CommentList comments={this.comments}/>
            </section>
        )
    }
}

export default CommentSection;