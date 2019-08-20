import React, { useState } from "react";
import { connect } from "react-redux";
import CommentSection from "./comments/CommentSection";
import { makeStyles, Card } from "@material-ui/core";
import UserStamp from "./UserStamp";
import { postComment } from "../store/actions";

import { like, dislike } from "../store/actions";

const useStyles = makeStyles(theme => ({
    poemCard: {
        marginTop: "20px"
    },
    poemHeader: {
        border: "1px solid red",
        height: "60px"
    },
    poem: {
        height: "400px"
    }
}));

function PoemCard(props) {
    const classes = useStyles();
    const handleLike = () => {};

    const addComment = comment => {};

    return (
        <Card className={classes.poemCard} key={props.poem.id}>
            <div className={classes.poemHeader}>
                <div className={classes.poemStamp}>
                    <img
                        className={classes.Avatar}
                        src="https://img.icons8.com/officel/16/000000/user-male.png"
                    />
                    <strong className={classes.username}>Username</strong>
                    <p className={classes.timeStamp}>Aug 14th, 4:45pm</p>
                </div>
            </div>
            <div className={classes.poemTitle}>{props.poem.title}</div>
            <div className={classes.poem}>{props.poem.content}</div>
            <CommentSection />
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        // user: state.authReducer.user
    };
};

export default connect()(PoemCard);
// mapStateToProps,
// { like, dislike, postComment }
