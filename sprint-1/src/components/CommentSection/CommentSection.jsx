import React, { Component } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import './CommentSection.scss';


class CommentSection extends Component {
    render(){
        return (
            <section className="comment-section" >
                <CommentForm commentsLength={this.props.comments.length} />
                <CommentList comments={this.props.comments}/>
            </section>
        )
    }
}

export default CommentSection;