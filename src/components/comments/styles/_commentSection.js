import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    commentSectionContainer: {
        minHeight: "300px",
        border: "1px solid whitesmoke",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        padding: "20px"
    },
    comment: {
        display: "flex",
        fontSize: ".8rem",
        alignItems: "center"
    },
    commentFormContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "60px",
        marginTop: "25px"
    },
    commentInput: {
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "1.3rem"
    },
    commentForm: {
        width: "90%",
    },
    avatar: {
        width: "50px",
        height: "50px",
        backgroundColor: "lightblue",
        borderRadius: "50%",
        margin: "0 10px"
    },
}));

export default useStyles;