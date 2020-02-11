import React, { Component } from 'react';
import './CommentForm.scss';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
        <article className="article">
            <h2 className="article__header">Join the conversation</h2>
            <div className="article__main comment-section">
                <form action="" className="form">
                    <div className="form__left">
                        <div className="form__picture"></div>
                    </div>
                    <div className="form__right form__section">
                        <div className="form__field">
                            <label className="form__label" htmlFor="name">Name</label>
                            <input name="name" id="name" type="text" placeholder="Enter your name" className="form__input"></input>
                        </div>
                        <div className="form__field">
                            <label className="form__label" htmlFor="comment">Comment</label>
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