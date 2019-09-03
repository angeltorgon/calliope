import React, { useState, useEffect } from 'react';
import useStyles from "./styles/_poemStatusBar";
import Firebase from "../firebase"
import firebase from 'firebase'


export default function PoemStatusBar(props) {
    const classes = useStyles();
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        props.fetchPoem();
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        if (props.likes.includes("hellohello")) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [props.likes]);

    const submitLike = () => {
        props.poemDoc.update({
            likes: firebase.firestore.FieldValue.arrayUnion("hellohello")
        })
        handleLike();
    };

    const submitDislike = () => {
        props.poemDoc.update({
            likes: firebase.firestore.FieldValue.arrayRemove("hellohello")
        })
        handleLike();
    };

    return (
        <div className={classes.poemStatusBarContainer}>

            <div>

                {
                    isLiked ?
                        <svg className={classes.icon} onClick={submitDislike} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="48" height="48"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000" }}><g transform="translate(1.462,1.462) scale(0.983,0.983)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g fill="#da6991" stroke="#000000" strokeWidth="5" strokeLinejoin="round"><path d="M121.83333,21.5c23.74675,0 43,19.25325 43,43c0,43.16125 -78.83333,86 -78.83333,86c0,0 -78.83333,-43.20425 -78.83333,-86c0,-23.74675 19.25325,-43 43,-43c14.964,0 28.13275,7.65758 35.83333,19.24967c7.697,-11.59208 20.86933,-19.24967 35.83333,-19.24967"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><g fill="#da6991" stroke="none" strokeWidth="1" strokeLinejoin="miter"><path d="M121.83333,21.5c-14.964,0 -28.13633,7.65758 -35.83333,19.24967c-7.70058,-11.59208 -20.86933,-19.24967 -35.83333,-19.24967c-23.74675,0 -43,19.25325 -43,43c0,42.79575 78.83333,86 78.83333,86c0,0 78.83333,-42.83875 78.83333,-86c0,-23.74675 -19.25325,-43 -43,-43"></path></g><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path></g></g></svg> : null
                }

                {isLiked ? null :
                    <svg onClick={submitLike} className={classes.icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="48" height="48"
                        viewBox="0 0 172 172"
                        style={{ fill: "#000000" }}><g transform="translate(1.462,1.462) scale(0.983,0.983)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g fill="#ffffff" stroke="#000000" strokeWidth="5" strokeLinejoin="round"><path d="M121.83333,21.5c23.74675,0 43,19.25325 43,43c0,43.16125 -78.83333,86 -78.83333,86c0,0 -78.83333,-43.20425 -78.83333,-86c0,-23.74675 19.25325,-43 43,-43c14.964,0 28.13275,7.65758 35.83333,19.24967c7.697,-11.59208 20.86933,-19.24967 35.83333,-19.24967"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinejoin="miter"><path d="M121.83333,21.5c-14.964,0 -28.13633,7.65758 -35.83333,19.24967c-7.70058,-11.59208 -20.86933,-19.24967 -35.83333,-19.24967c-23.74675,0 -43,19.25325 -43,43c0,42.79575 78.83333,86 78.83333,86c0,0 78.83333,-42.83875 78.83333,-86c0,-23.74675 -19.25325,-43 -43,-43"></path></g><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path></g></g></svg>}

                <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="48" height="48"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}><g transform="translate(1.462,1.462) scale(0.983,0.983)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="none" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g fill="#ffffff" stroke="#000000" strokeWidth="5" strokeLinejoin="round"><path d="M143.33333,28.66667c6.33533,0 11.46667,5.13133 11.46667,11.46667v86c0,6.33533 -5.13133,11.46667 -11.46667,11.46667h-61.63333l-19.56276,26.04636c-1.05428,1.63055 -2.86221,2.61669 -4.80391,2.62031c-3.16643,0 -5.73333,-2.5669 -5.73333,-5.73333v-22.93333h-22.93333c-6.33533,0 -11.46667,-5.13133 -11.46667,-11.46667v-86c0,-6.33533 5.13133,-11.46667 11.46667,-11.46667z"></path></g><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path><g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinejoin="miter"><path d="M28.66667,28.66667c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v86c0,6.33533 5.13133,11.46667 11.46667,11.46667h22.93333v22.93333c0,3.16643 2.5669,5.73333 5.73333,5.73333c1.9417,-0.00362 3.74963,-0.98976 4.80391,-2.62031l19.56276,-26.04636h61.63333c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-86c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667z"></path></g><path d="" fill="none" stroke="none" strokeWidth="1" strokeLinejoin="miter"></path></g></g></svg>
            </div>
            <p className={classes.stats} >likes: {props.likes.length}</p>
        </div>
    )
}
