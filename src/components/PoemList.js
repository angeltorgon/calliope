import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PoemCard from "./PoemCard";
import { makeStyles } from "@material-ui/core";

import Firebase from "../firebase"

const useStyles = makeStyles(theme => ({
    poemListContainer: {
        padding: "60px 20px 20px 20px"
    }
}));

function PoemList(props) {
    const classes = useStyles();
    const [poems, setPoems] = useState([]);

    // const poems = [
    //     {
    //         title: "The Stars Fly",
    //         content:
    //             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    //     },
    //     {
    //         title: "Roses Are Red",
    //         content:
    //             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    //     },
    //     {
    //         title: "Love Is In The Air",
    //         content:
    //             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    //     }
    // ];

    useEffect(() => {
        Firebase.Poems.get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {

                } else {
                    const poems = []
                    querySnapshot.docs.map(function (doc) {
                        console.log(doc.data())
                        poems.push(doc.data());
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
