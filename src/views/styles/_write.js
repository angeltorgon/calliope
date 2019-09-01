import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    quill: {
        maxWidth: "600px",
        width: "100%",
        height: "100%",
        padding: "50px 0 100px",
        margin: "5px 0",
        borderRadius: "5px",
        border: "1px solid lightgrey",
        fontSize: ".9rem",
        "&:focus": {
            outline: "none",
            backgroundColor: "#fffafc",
            boxShadow: "0px 0px 3px 1px rgba(112,82,112,1)",
            border: "0px",
        }
    },
    editor: {
        border: "1px solid red"
    }
}));

export default useStyles;