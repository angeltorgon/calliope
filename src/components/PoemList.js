import React from "react";
import { connect } from "react-redux";
import PoemCard from "./PoemCard";

import { signup } from "../store/actions";

function PoemList(props) {
    return (
        <div>
            {props.poems.map(poem => (
                <PoemCard key={poem.id} poem={poem} />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return { poems: state.authReducer.allPoems };
};

export default connect(
    mapStateToProps
)(PoemList);
