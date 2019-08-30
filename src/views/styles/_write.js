import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    quillContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    quill: {
        maxWidth: "600px",
        width: "100%",
        height: "300px",
    }
}));

export default useStyles;