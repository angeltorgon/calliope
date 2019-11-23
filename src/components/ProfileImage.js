import React from 'react';
import useStyles from "./styles/_profileImage"

export default function ProfileImg() {
    const classes = useStyles();

    return (
        <img className={classes.profileImage} alt="user profile" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
    )
}
