import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import './CommentSection.scss';


function CommentSection(props) {
    return (
        <section className="comment-section" >
            <CommentForm commentsLength={props.comments.length} getFormData={props.getFormData} />
            <CommentList comments={props.comments} deleteComment={props.deleteComment} />
        </section>
    )
}

export default CommentSection;