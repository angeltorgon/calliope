import React from "react";
import Comment from "./Comment";

function CommentsList(props) {
    const comments = [
        {
            user_id: 45,
            username: "hellohello",
            updated_at: "Aug 12 3:00pm",
            comment: "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.",
            likes: 35
        },
        {
            user_id: 44,
            username: "hellohello",
            updated_at: "Aug 11 4:54pm",
            comment: "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.",
            likes: 35
        },
        {
            user_id: 43,
            username: "hellohello",
            updated_at: "Aug 11 2:34pm",
            comment: "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.",
            likes: 35
        },
        {
            user_id: 42,
            username: "hellohello",
            updated_at: "Aug 10 3:40pm",
            comment: "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.",
            likes: 35
        },
    ];
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
