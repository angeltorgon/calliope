import React from 'react'
import useStyles from './styles/_profileHeader'


export default function ProfileHeader() {
    const classes = useStyles();

    return (
        <div className={classes.headerContainer}>
            <h1>this is the profile header</h1>
        </div>
    )
}
