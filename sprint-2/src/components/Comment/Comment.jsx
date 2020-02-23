import React from 'react';
import dynamicTimeStamp from '../../assets/imports/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Comment.scss';

class Comment extends React.Component {
    state = { showInput: false, toBeDeleted: false }
    timeoutId = 0;
    onChangeHandler = e => {
        if (e.target.value.trim().toLowerCase() === 'delete'){
            this.setState({toBeDeleted: true});
            this.timeoutId = setTimeout(()=>this.props.deleteComment(this.props.comment.id),1900)  
        }
        else {
            this.setState({toBeDeleted: false}) 
            clearTimeout(this.timeoutId);  
        }
    };
    render() {
        return (
            <div className="comment"> 
                <div className="comment__left"> 
                    <div className="comment__image"> </div>
                </div>
                <div className="comment__right"> 
                    <div className="comment__header">
                        <span className="comment__author"> {this.props.comment.name} </span>
                        <span className="comment__time-stamp"> {dynamicTimeStamp(this.props.comment.timestamp)} </span>
                        <div className="comment__blurb"> 
                            <p> {this.props.comment.comment} </p>
                        </div>
                        <div className="comment__delete">
                            <span 
                                className="comment__delete-button" 
                                aria-label="delete button" 
                                onClick={()=>this.setState({showInput: !this.state.showInput})} >
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </span>
                            <div className="comment__delete-input-container">
                                <input 
                                    className={`comment__delete-input 
                                    ${this.state.showInput 
                                    ? "comment__delete-input--visible" // to un-hide the input 
                                    : ''}`} 
                                    type="text" 
                                    name="deleteInput" 
                                    placeholder={`Enter "DELETE" to remove` } 
                                    onChange={this.onChangeHandler} />   
                                <div 
                                    className={`comment__delete-input--overlay
                                    ${this.state.showInput 
                                    ? "comment__delete-input--visible" // to un-hide the input overlay
                                    : ''}
                                    ${this.state.toBeDeleted
                                    ? 'color-fill'
                                    : ''}
                                    `} 
                                    type="text" 
                                    name="deleteInput" 
                                    placeholder={`Enter "DELETE" to remove` } >
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

export default Comment;