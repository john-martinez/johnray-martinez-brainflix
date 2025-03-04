import React, { Component } from 'react';
import './CommentForm.scss';
import user from '../../assets/Images/Mohan-muruge.jpg';

class CommentForm extends Component {
    render(){
        return (
        <>
            <h2 className="comment-form__header">{this.props.commentsLength} Comments</h2>
            <form action="" className="comment-form">
                <div className="comment-form__left">
                    <img className="comment-form__picture" alt="Mohan looking left" src={user}></img>
                </div>
                <div className="comment-form__right comment-form__section">
                    <div className="comment-form__field">
                        <label className="comment-form__label" htmlFor="comment">Join The Conversation</label>
                    </div>
                    <div className="comment-form__field--flex">
                        <textarea name="comment" className="comment-form__input" placeholder="Add a new comment"></textarea>
                        <button className="comment-form__button">COMMENT</button>
                    </div>
                </div> 
            </form>
        </>
        );
    }
}

export default CommentForm;