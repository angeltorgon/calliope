import React from 'react';
import useStyles from "./styles/_profileInfo";
import ProfileImage from "./ProfileImage";

export default function ProfileInfo() {
    const classes = useStyles();

    return (
        <div className={classes.profileInfoContainer}>
            <h1>Darla Jones</h1>
            <p>HTX &#8986; Love Live Laugh &#128512; Developer &#128421;</p>
            <div className={classes.userStatsContainer}>
                <div className={classes.stat}>
                    <strong>Posts</strong>
                    <p>200</p>
                </div>
                <div className={classes.stat}>
                    <strong>Followers</strong>
                    <p>92</p>
                </div>
                <div className={classes.stat}>
                    <strong>Following</strong>
                    <p>429</p>
                </div>
            </div>
        </div>
    )
}
