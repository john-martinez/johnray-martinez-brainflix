import React from 'react';
import './CommentForm.scss';
import user from '../../assets/images/Mohan-muruge.jpg';

function CommentForm (props){
    const onSubmitHandler = e => {
        const form = e.target;
        form.comment.classList.remove('wrong-input');
        e.preventDefault();
        if (form.comment.value.trim()){
            props.getFormData(form.comment.value);
        } else {
            form.comment.classList.add('shake');
            form.comment.classList.add('wrong-input');
            setTimeout(()=>form.comment.classList.remove('shake'), 200);
        }
        form.reset();
    };
    return (
    <>
        <h2 className="comment-form__header">{props.commentsLength} Comments</h2>
        <form action="" className="comment-form" onSubmit={onSubmitHandler}>
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

export default CommentForm;