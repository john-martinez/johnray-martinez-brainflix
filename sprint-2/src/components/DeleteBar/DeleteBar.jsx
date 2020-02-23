import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './DeleteBar.scss';

class DeleteBar extends Component {
    state = { showInput: false, toBeDeleted: false }
    timeoutId = 0;
    onChangeHandler = e => {
        if (e.target.value.trim().toLowerCase() === 'delete'){
            this.setState({toBeDeleted: true});
            this.timeoutId = setTimeout(()=>this.props.deleteComment(this.props.commentId),1900)  
        }
        else {
            this.setState({toBeDeleted: false}) 
            clearTimeout(this.timeoutId);  
        }
    };
    render(){
        return (
        <div className="delete">
            <span 
                className="delete-button" 
                aria-label="delete button" 
                onClick={()=>this.setState({showInput: !this.state.showInput})} >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
            <div className="delete-input-container">
                <input 
                    className={`delete-input 
                    ${this.state.showInput 
                    ? "delete-input--visible" // to un-hide the input 
                    : ''}`} 
                    type="text" 
                    name="deleteInput" 
                    placeholder={`Enter "DELETE" to remove` } 
                    onChange={this.onChangeHandler} />   
                <div 
                    className={`delete-input--overlay
                    ${this.state.showInput 
                    ? "delete-input--visible" // to un-hide the input overlay
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
        )
    }
}

export default DeleteBar;