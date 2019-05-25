import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

export default function UserStamp(props) {
    
    return (
        <div className="container-left">

            <img className="avatar" src={`https://api.adorable.io/avatars/200/${props.poet}`} alt="user picture" />

            <div className="stamp-text">
                <Link to={`/profile/${props.userId}`} className="nav-cta login">{props.poet}</Link>
                <p className="stamp-text-item" >{
                    dateFormat(props.date, 'mediumDate')
                }</p>

            </div>
        </div>
    )
}
