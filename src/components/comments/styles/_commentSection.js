import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    commentSectionContainer: {
        maxHeight: "100px",
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
        marginTop: "30px"
    },
    commentInput: {
        width: "100%",
        margin: "5px 0",
        height: "45px",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        border: "1px solid lightgrey",
        fontSize: ".9rem",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
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