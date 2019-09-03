import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    editorContainer: {
        border: "1px solid lightgrey",
        width: "100%",
        marginTop: "40px",
        paddingTop: "20px",
        fontSize: ".9rem",
        height: "100%",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
    editor: {
        border: "1px solid lightgrey",
        width: "100%",
        padding: "20px",
        marginTop: "20px",
        fontSize: ".9rem",
        height: "100%",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
    titleInput: {
        width: "100%",
        margin: "5px 0",
        height: "45px",
        padding: "20px",
        display: "flex",
        border: "1px solid lightgrey",
        fontSize: ".9rem",
        "&::placeholder": {
            color: "#B9BABC"
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
}));

export default useStyles;