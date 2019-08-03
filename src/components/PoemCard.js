import React, { useState } from "react";
import { connect } from "react-redux";
import CommentSection from "./comments/CommentSection";
import UserStamp from "./UserStamp";
import { postComment } from "../store/actions";

import { like, dislike } from "../store/actions";

function PoemCard(props) {
    const handleLike = () => {};

    const addComment = comment => {};

    return (
        <div className="poem-post-container" key={props.poem.id}>
            <div className="poem">{props.poem.title}</div>
            <div className="poem">{props.poem.content}</div>
            <div className="poem-stats">
                <div className="stats-left">
                    {/* <p className="stats-item likes-count">{likes}</p> */}
                </div>
                <div className="stats-right">
                    {/* <p className="stats-item">Comments: {comments.length}</p> */}
                </div>
            </div>
            <CommentSection
            // addComment={addComment}
            // comments={comments}
            // avatar={props.user.avatar}
            // poemId={props.poem.id}
            />
        </div>
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
