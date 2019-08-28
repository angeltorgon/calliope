import React, { useState } from "react";
import { connect } from "react-redux";
import CommentSection from "./comments/CommentSection";
import { Card } from "@material-ui/core";
import useStyles from "./styles/_poemCard";
import UserStamp from "./UserStamp";
import PoemStatusBar from "./PoemStatusBar";
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
            <h3 className={classes.poemTitle}>{props.poem.title}</h3>
            <div className={classes.poem}>{props.poem.content}</div>
            <PoemStatusBar />
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
