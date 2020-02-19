import React, { Component } from 'react';
import Comment from '../Comment/Comment';

class CommentList extends Component {
    state = { comments: this.props.comments }
    render() {
        return(
            <article className="comment-list"> 
                { this.state.comments.map((item)=> <Comment comment={item} key={item.id} />) }
            </article>
        );
    }
}
 
export default CommentList;