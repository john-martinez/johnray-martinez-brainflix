import React, { Component } from 'react';
import './CommentForm.scss';
import user from '../../assets/Images/Mohan-muruge.jpg';

class CommentForm extends Component {
    render(){
        return (
        <article className="article">
            <h2 className="article__header">{this.props.commentsLength} Comments</h2>
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
        </article>
        );
    }
}

export default CommentForm;