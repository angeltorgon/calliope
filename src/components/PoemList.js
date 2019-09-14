import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PoemCard from "./PoemCard";
import { makeStyles } from "@material-ui/core";
import { Value } from "slate";

import Firebase from "../firebase"

const useStyles = makeStyles(theme => ({
    poemListContainer: {
        padding: "60px 20px 20px 20px"
    }
}));

function PoemList(props) {
    const classes = useStyles();
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        Firebase.Poems.get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {

                } else {
                    const poems = []
                    querySnapshot.docs.map(function (doc) {
                        poems.push({ ...doc.data(), docId: doc.id });
                    })
                    setPoems(poems);
                }
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

        return () => {

        };
    }, [])

    return (
        <div className={classes.poemListContainer}>
            {poems.map(poem => (
                <PoemCard key={poem.id} poem={poem} />
            ))}
        </div>
    );
}

const mapStateToProps = state => { };

export default connect()(PoemList);
