import React, { Component } from 'react';
import './CommentForm.scss';
import user from '../../assets/Images/Mohan-muruge.jpg';

class CommentForm extends Component {
    render(){
        return (
        <article className="article">
            <h2 className="article__header">{this.props.commentsLength} Comments</h2>
            <div className="article__main comment-section">
                <form action="" className="form">
                    <div className="form__left">
                        <img className="form__picture" alt="Mohan looking left" src={user}></img>
                    </div>
                    <div className="form__right form__section">
                        <div className="form__field">
                            <label className="form__label" htmlFor="comment">Join The Conversation</label>
                            <textarea name="comment" id="comment" className="form__input text-area" placeholder="Add a new comment"></textarea>
                        </div>
                        <div className="form__field">
                            <button id="submit-btn" className=" btn">COMMENT</button>
                        </div>
                    </div> 
                </form>
            </div>
        </article>
        );
    }
}

export default CommentForm;