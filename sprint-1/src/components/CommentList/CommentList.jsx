import React from 'react';
import Comment from '../Comment/Comment';

function CommentList(props) {
    return(
        <article className="comment-list"> 
            { props.comments.map((item,i)=> <Comment comment={item} key={i} />) }
        </article>
    );
}
 
export default CommentList;