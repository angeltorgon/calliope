import React from 'react';
import useStyles from './styles/_profileHeader';
import EditButton from "../ buttons/EditButton.js"


export default function ProfileHeader() {
    const classes = useStyles();

    return (
        <div className={classes.headerContainer}>
            <EditButton />
            <img className={classes.headerImage} src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
    )
}
