import React from "react";
import Comment from "./Comment";

function CommentsList(props) {
    const comments = [];

    return (
        <>
            {comments.length < 1 ? null : (
                <div className="comments-container">
                    {comments.map(comment => {
                        return <Comment comment={comment} key={comment.id} />;
                    })}
                </div>
            )}
        </>
    );
}

export default CommentsList;
