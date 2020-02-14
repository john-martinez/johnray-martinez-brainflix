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
                        <textarea name="comment" id="comment" className="comment-form__input text-area" placeholder="Add a new comment"></textarea>
                    </div>
                    <div className="comment-form__field">
                        <button id="submit-btn" className=" btn">COMMENT</button>
                    </div>
                </div> 
            </form>
        </article>
        );
    }
}

export default CommentForm;