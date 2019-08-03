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

            <CommentSection />
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
