import React, { useState } from "react";
import { connect } from "react-redux";
import CommentSection from "./comments/CommentSection";
import { makeStyles, Card } from "@material-ui/core";
import useStyles from "./styles/poemCard";
import UserStamp from "./UserStamp";

// const useStyles = makeStyles(theme => ({

// }));

function PoemCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.poemCard} key={props.poem.id}>
            <div className={classes.poemHeader}>
                <UserStamp />
                <img className={classes.menu} src="https://img.icons8.com/windows/96/000000/menu-2.png" />
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
