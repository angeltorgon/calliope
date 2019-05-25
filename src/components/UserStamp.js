import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

export default function UserStamp(props) {
    console.log(props)
    
    return (
        <div className="container-left">

            <img className="avatar" src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1310&q=80" alt="user picture" />

            <div className="stamp-text">
                <Link to={`/profile/${props.userId}`} className="nav-cta login">{props.poet}</Link>
                <p className="stamp-text-item" >{
                    dateFormat(props.date, 'mediumDate')
                }</p>

            </div>
        </div>
    )
}
