import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    editorContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 0px 60px 0px",
        height: "100vh",
    },
    submitButton: {
        position: "absolute",
        bottom: "70px",
        right: "20px"
    },
    saveButton: {
        position: "absolute",
        bottom: "70px",
        right: "120px"
    }
}));

export default useStyles;