import React from 'react';
import useStyles from "./styles/_profileInfo";

export default function ProfileInfo() {
    const classes = useStyles();

    return (
        <div className={classes.profileInfoContainer}>
            <h1>Darla Jones</h1>
            <p>HTX Love Live Laugh; Developer</p>
            <div className={classes.userStatsContainer}>
                <div className={classes.stat}>
                    <p>Posts</p>
                    <p>200</p>
                </div>
                <div className={classes.stat}>
                    <p>Followers</p>
                    <p>92</p>
                </div>
                <div className={classes.stat}>
                    <p>Following</p>
                    <p>429</p>
                </div>
            </div>
        </div>
    )
}
