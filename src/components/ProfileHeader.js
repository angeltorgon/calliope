import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles/_profileHeader';
import SecondaryButton from "./buttons/SecondaryButton";


export default function ProfileHeader() {
    const classes = useStyles();

    return (
        <div className={classes.headerContainer}>
            <Link to="/settings"><SecondaryButton title={"Edit Button"} /></Link>
            <img className={classes.headerImage} alt="header background" src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
    )
}
