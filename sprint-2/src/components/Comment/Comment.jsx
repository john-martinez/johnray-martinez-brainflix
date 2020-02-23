import React from 'react';
import dynamicTimeStamp from '../../assets/imports/global';
import './Comment.scss';

function Comment(props) {
    return (
        <div className="comment"> 
            <div className="comment__left"> 
                <div className="comment__image"> </div>
            </div>
            <div className="comment__right"> 
                <div className="comment__header">
                    <span className="comment__author"> {props.comment.name} </span>
                    <span className="comment__time-stamp"> {dynamicTimeStamp(props.comment.timestamp)} </span>
                    <div className="comment__blurb"> 
                        <p> {props.comment.comment} </p>
                    </div>
                    <div className="comment__delete">
                      <span className="comment__delete-button" onClick={()=>props.deleteComment(props.comment.id)}>🗑️</span>
                      <input className="comment__delete-input" type="text" name="deleteInput" placeholder="type DELETE to delete comment" />
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default Comment;