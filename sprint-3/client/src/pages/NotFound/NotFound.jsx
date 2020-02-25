import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.scss';

function NotFound(){
    return (
        <div className="not-found">
            <div className="not-found__blur"></div>
            <div className="not-found__text">
                <h1>Hi there! <br />You seem lost. <br />Let's get you back home okay?</h1>
                <Link to="/" className="not-found__button"> Okay </Link>
            </div>
        </div>
    );
}

export default NotFound;